# Ingest-Vertrag (für Plattformentwickler / ESP-Firmware)

Dieses Dokument beschreibt die Schnittstelle, über die das ESP/Arduino Messwerte an das Backend sendet. Es gehört in den Verantwortungsbereich der **Plattformentwickler** (Firmware-Team).

## Endpunkt

```
POST /api/v1/ingest
```

| Eigenschaft      | Wert                              |
|------------------|-----------------------------------|
| Methode          | `POST`                            |
| Content-Type     | `application/json`                |
| Authentifizierung| Header `X-API-Key: <key>`         |
| Erwartete Antwort| `201 Created` bei Erfolg          |

## Request-Body

```json
{
  "room": "B101",
  "temperature": 22.5,
  "humidity": 52,
  "timestamp": "2026-07-14T12:00:00Z"
}
```

| Feld          | Typ    | Pflicht | Bereich        | Beschreibung                          |
|---------------|--------|---------|----------------|---------------------------------------|
| `room`        | string | ja      | `B101`/`B102`/`B103` | Raum-ID (muss bekannt sein)     |
| `temperature` | number | ja      | –50 bis +80 °C | Temperatur in Grad Celsius           |
| `humidity`    | number | ja      | 0–100          | Relative Luftfeuchtigkeit in Prozent  |
| `timestamp`   | string | nein    | ISO-8601       | Zeitstempel der Messung. Wenn weggelassen, wird Server-Zeit verwendet |

## Erfolgsantwort

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "status": "accepted",
  "room": "B101",
  "timestamp": "2026-07-14T12:00:00Z"
}
```

## Fehlerantworten

| Status | Bedeutung                              | Beispiel-Body                                       |
|--------|----------------------------------------|------------------------------------------------------|
| 400    | Pflichtfeld fehlt oder ungültig         | `{"error": "Feld \"humidity\" muss eine Zahl 0–100 sein", "code": 400}` |
| 401    | API-Key fehlt oder ist falsch          | `{"error": "Ungültiger oder fehlender API-Key", "code": 401}` |
| 404    | Raum-ID unbekannt                      | `{"error": "Unbekannter Raum: XXX", "code": 404}`   |

## Beispiel: ESP32 (Arduino IDE)

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

const char* WIFI_SSID     = "...";
const char* WIFI_PASSWORD = "...";
const char* API_HOST      = "http://<server-ip>:3000";
const char* API_KEY       = "change-me-please";  // vom Trainer-Team
const char* ROOM_ID       = "B101";

#define DHTPIN 4
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  dht.begin();
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWLAN verbunden");
}

void loop() {
  float temp = dht.readTemperature();
  float hum  = dht.readHumidity();

  if (isnan(temp) || isnan(hum)) {
    Serial.println("Sensor-Fehler, überspringe Messung");
    delay(60 * 1000);
    return;
  }

  HTTPClient http;
  http.begin(String(API_HOST) + "/api/v1/ingest");
  http.addHeader("Content-Type", "application/json");
  http.addHeader("X-API-Key", API_KEY);

  String body = String("{") +
    "\"room\":\"" + ROOM_ID + "\"," +
    "\"temperature\":" + String(temp, 1) + "," +
    "\"humidity\":"    + String(hum,  0) +
  "}";

  int code = http.POST(body);
  Serial.printf("POST /ingest → %d\n", code);
  http.end();

  delay(15 * 60 * 1000);  // alle 15 Minuten messen
}
```

!!! warning "Sicherheit"
    Der API-Key steht im Klartext im Flash des ESP. Für den Bootcamp-Use-Case akzeptabel, aber **nicht** für Produktivbetrieb. Spätere Versionen sollten HTTPS und Key-Rotation verwenden.

## Zielserver: wie findet das ESP den Server?

| Setup                          | API_HOST                                            |
|--------------------------------|-----------------------------------------------------|
| Lokal im Schulungsraum         | `http://<laptop-ip>:3000` (z. B. `http://192.168.1.42:3000`) |
| Docker auf demselben Laptop    | gleich wie lokal – `localhost:3000` aus Sicht des Containers |
| Zentral deployt (später)       | `https://api.raumklima-bootcamp.dev`                |

Die aktuelle Ziel-URL wird den Plattformentwicklern vom Trainerteam mitgeteilt. Bei WLAN-Problemen siehe [Risiken & Fallbacks](../trainer/risiken-und-fallbacks.md).
