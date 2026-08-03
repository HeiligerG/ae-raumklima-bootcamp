# Ingest-Vertrag (MQTT, für Plattformentwickler / ESP-Firmware)

Dieses Dokument beschreibt die Schnittstelle, über die das ESP/Arduino
seine Messwerte an das **SuvaSense-Backend** sendet. Es gehört in den
Verantwortungsbereich der **Plattformentwickler** (Firmware-Team).

Das Backend akzeptiert ausschliesslich **MQTT** als Ingest-Transport.
Es gibt **keinen HTTP-Endpoint** zum Einliefern von Messwerten – alle
Sensor-Daten laufen über den MQTT-Broker.

## Architektur in einem Bild

```
┌──────────┐     suva/SN12345/data     ┌──────────┐     subscribe     ┌──────────┐
│ ESP32    │ ─────────────────────────▶│ Mosquitto│ ──────────────────▶│ Backend  │
│ (Firmware)│      JSON, QoS 1         │ (Broker) │    suva/+/data    │ (Go)     │
└──────────┘                          └──────────┘                   └────┬─────┘
                                                                          │ INSERT
                                                                          ▼
                                                                  ┌──────────────┐
                                                                  │ Postgres     │
                                                                  │ sensors +    │
                                                                  │ readings     │
                                                                  └──────────────┘
```

## MQTT-Broker

| Eigenschaft | Wert |
|---|---|
| Broker | Eclipse Mosquitto 2 (Docker-Container im `SuvaSense`-Stack) |
| Standard-URL (TCP) | `tcp://<laptop-ip>:1883` |
| Optional (WebSocket) | `ws://<laptop-ip>:9001` |
| Authentifizierung | Im Bootcamp anonym (`allow_anonymous true`) |
| Persistenz | Eingeschaltet (Broker speichert letzte Werte) |

Die URL wird den Plattformentwicklern vom Trainerteam mitgeteilt.

## Topic-Struktur

```
suva/<serial_number>/data
```

Beispiele:

```
suva/SN12345/data
suva/SN67890/data
suva/DEMO-001/data
```

**Konvention:**

- Topic-Level mit `/` getrennt
- Mittleres Segment = Seriennummer des Geräts (vom Trainer vergeben)
- Letztes Segment muss exakt `data` sein – sonst verwirft das Backend die Message

## QoS

Das Backend abonniert mit **QoS 1**. Euer ESP sollte ebenfalls mit
QoS 1 publishen, damit bei Netzwerkaussetzern nichts verloren geht.

## Payload

Eine MQTT-Message enthält ein einzelnes JSON-Objekt mit **beliebigen**
Top-Level-Feldern pro Sensortyp. Was fehlt, wird vom Backend ignoriert.

### Minimal (Pflicht im Bootcamp)

```json
{
  "bme680": {
    "temp":  23.5,
    "hum":   54.2,
    "press": 1013.2,
    "gas":   145.6
  }
}
```

Das reicht, damit die Lernenden-App etwas anzeigen kann.

### Vollständig (alle Sensoren)

```json
{
  "bme680": {
    "temp": 23.5, "hum": 54.2, "press": 1013.2, "gas": 145.6
  },
  "veml7700": {
    "lux": 245.3, "white": 198.7
  },
  "mpu6050": {
    "acc":  { "x": 0.12, "y": -0.03, "z": 9.81 },
    "gyro": { "x": 0.10, "y": 0.20,  "z": -0.10 },
    "ang":  { "x": 1.5,  "y": -0.8,  "z": 0.3 }
  },
  "system": {
    "uptime": 120, "cpu_temp": 42.1, "free_heap": 215000, "rssi": -55
  }
}
```

### Feld-Referenz

| Top-Level | Pflicht im Bootcamp? | Wird gespeichert als `sensor_type` |
|---|---|---|
| `bme680`   | **ja** | `bme680`   |
| `veml7700` | nein   | `veml7700` |
| `mpu6050`  | nein   | `mpu6050`  |
| `system`   | optional (hilfreich für Online-Indikator) | `system` |

Werte müssen vom Datentyp her stimmen (`temp` ist `number`, `rssi` ist
`number` oder null). Das Backend speichert den ganzen Sub-Tree unter
`raw` (JSONB) – wenn ein Wert fehlt, bleibt das DB-Feld `NULL`.

## Empfohlene Publish-Frequenz

Alle **10 Sekunden** (im Flash konfigurierbar via
`{"action":"set","target":"publish_interval","value":"10000"}` bei der
SuvaSense-Firmware). Schneller ist möglich, erzeugt aber Last in
Postgres. Langsamer als 30 s riskiert den `offline`-Status in der API.

## Beispiel: ESP32 mit Arduino + PubSubClient

```cpp
#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

const char* WIFI_SSID     = "bootcamp-wlan";
const char* WIFI_PASSWORD = "geheim";
const char* BROKER        = "192.168.1.42";   // Trainer-Laptop
const int   BROKER_PORT   = 1883;
const char* SERIAL        = "SN12345";         // vom Trainer vergeben

WiFiClient   wifi;
PubSubClient mqtt(wifi);

StaticJsonDocument<256> doc;

void publishMeasurement(float temp, float hum) {
  doc.clear();
  JsonObject bme = doc.createNestedObject("bme680");
  bme["temp"]  = temp;
  bme["hum"]   = hum;
  bme["press"] = 1013.2;
  bme["gas"]   = 145.6;

  char buf[256];
  size_t n = serializeJson(doc, buf, sizeof(buf));

  char topic[64];
  snprintf(topic, sizeof(topic), "suva/%s/data", SERIAL);
  mqtt.publish(topic, buf, n, false);   // retained = false
}

void setup() {
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) { delay(500); }

  mqtt.setServer(BROKER, BROKER_PORT);
  mqtt.connect(SERIAL);                  // Client-ID = Seriennummer
}

void loop() {
  mqtt.loop();

  static unsigned long last = 0;
  if (millis() - last > 10000) {
    last = millis();
    float t = 22.0 + (random(-30, 30) / 10.0);
    float h = 50  + (random(-50, 50));
    publishMeasurement(t, h);
  }
}
```

## Sicherheit

Im Bootcamp läuft der Broker mit `allow_anonymous true`. Für den
Schulungsraum akzeptabel, **nicht** für Produktion. Für später:

- Broker-User/Passwort setzen (`MQTT_USERNAME`, `MQTT_PASSWORD`)
- TLS aktivieren (`mosquitto.conf`: `listener 8883`, `cafile …`)
- Topic-ACLs: `pattern write suva/%c/data`

## Fehlersuche

Wenn das ESP Daten sendet, aber nichts im Backend ankommt:

1. **Broker erreichbar?** Vom Laptop: `mosquitto_sub -h <broker-ip> -t 'suva/+/data' -v` – erscheinen die Messages?
2. **Backend subscribt?** `docker compose logs backend | grep -i mqtt`
3. **Wurde ein Sensor angelegt?** `curl http://localhost:8080/api/v1/sensors`
4. **Sind Readings in Postgres?** pgAdmin auf `http://localhost:5050`, Tabelle `readings`.
5. **Topic-Format korrekt?** Letztes Segment muss `data` sein, mittleres Segment darf nicht leer sein.

Wenn nichts hilft: Die App läuft auch ohne Live-Daten – sie zeigt den
zuletzt gesehenen Snapshot aus `localStorage`.

## Zielbroker: wie findet das ESP den Broker?

| Setup | Broker-URL aus ESP-Sicht |
|---|---|
| Trainer-Laptop im Schulungsraum | `tcp://<laptop-ip>:1883` |
| Docker auf demselben Laptop | `tcp://localhost:1883` (ESP sieht aber den Docker-Host, also `<laptop-ip>:1883`) |
| Zentraler Schulungs-Server | `tcp://<server-ip>:1883` |

Bei WLAN-Problemen siehe [Risiken & Fallbacks](../trainer/risiken-und-fallbacks.md).