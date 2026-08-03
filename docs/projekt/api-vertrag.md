# API-Vertrag

## Was ist ein API-Vertrag?

Ein API-Vertrag definiert, wie die App mit dem Server kommuniziert.  
Er legt fest:

- Welche Daten werden gesendet und empfangen?
- Welches Format haben die Daten?
- Welche Endpunkte gibt es?

Im Bootcamp nutzen wir das **SuvaSense-Backend**. Es ist die einzige
Datenquelle und wird vom Trainerteam zentral bereitgestellt
(siehe [Architektur](architektur.md)). Diese Schnittstelle ist gleichzeitig
die Wahrheit für die Lernenden-App **und** das System, mit dem die
Plattformentwickler ihre Sensoren einspeisen.

## Base-URL

```
http://<vom-trainer-bekanntgegeben>:8080/api/v1
```

Im Schulungsraum typischerweise:

```
http://192.168.1.42:8080/api/v1
```

Die konkrete URL wird am Tag 3 vom Trainer bekanntgegeben.

## Identität: Seriennummer

Anders als im ersten Konzept (Raum-IDs wie `B101`) identifiziert
SuvaSense jeden Sensor über seine **Seriennummer**. Eine Seriennummer
ist eine eindeutige Zeichenkette, z. B. `SN12345`. Sie wird beim
Produzieren des ESP32 vergeben und auf dem Gerät gespeichert.

Im Bootcamp liegen die Sensoren auf den Tischen. Welche Seriennummer zu
welchem Raum gehört, sagt euch der Trainer.

## Sensor-Typen

Ein SuvaSense-Board kann vier verschiedene Sensortypen liefern:

| Typ | Chip | Was es misst |
|---|---|---|
| `bme680` | Bosch BME680 | Temperatur, Feuchte, Druck, Gas-Widerstand |
| `veml7700` | Vishay VEML7700 | Umgebungslicht (Lux, Weiss-Kanal) |
| `mpu6050` | InvenSense MPU6050 | Beschleunigung, Drehrate, Winkel (3-Achsen) |
| `system` | ESP32 intern | Uptime, CPU-Temp, freier Heap, WLAN-RSSI |

**Pflicht im Bootcamp:** Jeder Sensor liefert mindestens `bme680`
(Temperatur + Feuchte). Die anderen Typen sind optional.

## Datenmodell

### Reading (eine Messung eines Sensor-Typs)

```jsonc
{
  "id": 12345,
  "sensor_id": "a1b2c3d4-…",
  "serial_number": "SN12345",
  "sensor_type": "bme680",
  "recorded_at": "2026-08-06T10:30:00Z",
  "device_uptime_s": 120,
  "source_topic": "suva/SN12345/data",
  "raw": { "temp": 23.4, "hum": 51, "press": 1013.2, "gas": 145.6 },

  // Je nach sensor_type befüllte Felder:
  "temp_c": 23.4,        // bme680
  "hum_pct": 51,         // bme680
  "press_hpa": 1013.2,   // bme680
  "gas_kohm": 145.6,     // bme680

  "lux": 245.3,          // veml7700
  "white_raw": 198.7,    // veml7700

  "acc_x": 0.12,         // mpu6050
  // … acc_y, acc_z, gyro_x/y/z, ang_x/y/z

  "cpu_temp_c": 42.1,    // system
  "free_heap_bytes": 215000,
  "rssi_dbm": -55
}
```

Die Lernenden-App braucht im Pflichtumfang nur diese Felder:

| Feld | Quelle | Bedeutung |
|---|---|---|
| `recorded_at` | jeder Reading | Zeitpunkt der Messung (ISO-8601) |
| `readings.bme680.temp_c` | BME680 | Temperatur in °C |
| `readings.bme680.hum_pct` | BME680 | Relative Feuchte in % |

### Push-Bundle (eine MQTT-Message des Sensors)

Das ist die wichtigste Datenstruktur im Bootcamp: **ein Bundle = eine
MQTT-Publish-Message des Sensors**. Sie enthält alle Sensortypen, die
in dieser Message mitgeschickt wurden, gruppiert unter `readings`.

```json
{
  "serial_number": "SN12345",
  "recorded_at": "2026-08-06T10:30:00Z",
  "source_topic": "suva/SN12345/data",
  "readings": {
    "bme680":   { "sensor_type": "bme680",   "temp_c": 23.4, "hum_pct": 51, "press_hpa": 1013.2, "gas_kohm": 145.6 },
    "veml7700": { "sensor_type": "veml7700", "lux": 245.3,   "white_raw": 198.7 },
    "system":   { "sensor_type": "system",   "device_uptime_s": 120, "cpu_temp_c": 42.1, "free_heap_bytes": 215000, "rssi_dbm": -55 }
  }
}
```

### Sensor (Metadaten)

```jsonc
{
  "id": "a1b2c3d4-…",
  "serial_number": "SN12345",
  "first_seen_at": "2026-08-06T08:00:00Z",
  "last_seen_at":  "2026-08-06T10:30:00Z",
  "last_topic":    "suva/SN12345/data",
  "publish_interval_ms": 10000,
  "metadata": {},
  "created_at": "2026-08-06T08:00:00Z",
  "updated_at": "2026-08-06T10:30:00Z",
  "status": "online",   // online | offline (Schwelle 30 s)
  "readings_by_type": { "bme680": 412, "veml7700": 380, "system": 412 }
}
```

## Endpunkte

### Pflicht im Bootcamp (2 Endpunkte)

#### 1. Liste aller Sensoren

```
GET /api/v1/sensors?page=1&page_size=50&status=online
```

Antwort:

```json
{
  "page": 1,
  "page_size": 50,
  "items": [
    { "id": "…", "serial_number": "SN12345", "status": "online", … },
    { "id": "…", "serial_number": "SN67890", "status": "online", … }
  ]
}
```

Optional Query-Parameter `status=online|offline` filtert nach Erreichbarkeit.

#### 2. Verlauf eines Sensors (Push-Bundle-Modus)

```
GET /api/v1/sensors/SN12345/readings?page=1&page_size=10
```

Antwort:

```json
{
  "serial_number": "SN12345",
  "page": 1,
  "page_size": 10,
  "mode": "push-bundles",
  "items": [
    {
      "serial_number": "SN12345",
      "recorded_at": "2026-08-06T10:30:00Z",
      "source_topic": "suva/SN12345/data",
      "readings": { "bme680": { "temp_c": 23.4, "hum_pct": 51 } }
    },
    {
      "serial_number": "SN12345",
      "recorded_at": "2026-08-06T10:29:50Z",
      "source_topic": "suva/SN12345/data",
      "readings": { "bme680": { "temp_c": 23.3, "hum_pct": 51 } }
    }
  ]
}
```

`mode: "push-bundles"` heisst: **eine Liste pro MQTT-Publish-Event**, mit
allen Sensortypen, die das Board in dieser Message mitgesendet hat. Items
sind nach `recorded_at` absteigend sortiert (neueste zuerst).

### Optional (für Fortgeschrittene)

| Zweck | Endpoint |
|---|---|
| Ein Sensor nach Seriennummer | `GET /api/v1/sensors/SN12345` |
| Aktuellster Stand pro Sensortyp | `GET /api/v1/sensors/SN12345/latest` |
| Verlauf nur eines Sensortyps | `GET /api/v1/sensors/SN12345/readings/bme680?page=1&page_size=20` |
| Aktuellster Wert eines Sensortyps | `GET /api/v1/sensors/SN12345/readings/bme680/latest` |
| Health-Check | `GET /health` → `{"status":"ok"}` |

### Filter

| Zweck | Beispiel |
|---|---|
| Zeitfenster | `?from=2026-08-06T00:00:00Z&to=2026-08-06T23:59:59Z` |
| Temperatur zwischen 20 und 25 °C | `?temp_c_min=20&temp_c_max=25` |
| Nur BME680 im Bundle | `/readings?sensor_type=bme680` |
| Schlechte WLAN-Verbindung (system) | `/readings/system?rssi_dbm_min=-80` |

Erlaubte numerische Felder für `_min`/`_max`-Filter:
`device_uptime_s, temp_c, hum_pct, press_hpa, gas_kohm, lux, white_raw,
acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z, ang_x, ang_y, ang_z,
cpu_temp_c, free_heap_bytes, rssi_dbm`

## Fehlerfall

Wenn etwas schiefläuft, antwortet der Server mit einem HTTP-Fehlercode:

```json
{ "error": "sensor not found" }
```

Häufige Codes:

| Status | Bedeutung |
|---|---|
| 400 | Ungültiger Sensor-Typ oder Filterwert |
| 404 | Sensor mit dieser Seriennummer existiert nicht |
| 500 | Serverfehler (Logs prüfen) |

## Authentifizierung

Die API ist im Bootcamp **ohne Authentifizierung offen**. Ihr müsst
keinen API-Key oder Token mitschicken.

## Fetch mit der API

```javascript
const API_BASE = 'http://<vom-trainer-bekanntgegeben>:8080/api/v1';

async function loadBundles(serial) {
  try {
    const response = await fetch(`${API_BASE}/sensors/${serial}/readings?page=1&page_size=10`);
    if (!response.ok) {
      throw new Error(`API-Fehler: ${response.status}`);
    }
    const data = await response.json();
    return data.items;       // Array von Push-Bundles
  } catch (error) {
    console.error('API-Fehler:', error);
    return null;
  }
}

// Aktuellste Temperatur/Feuchte lesen:
const bundles = await loadBundles('SN12345');
if (bundles && bundles.length > 0) {
  const latest = bundles[0];
  const bme = latest.readings.bme680;
  console.log(latest.recorded_at, bme.temp_c, bme.hum_pct);
}
```

!!! tip "Snapshot-Strategie"
    Falls die API nicht erreichbar ist, nutzt eure App den letzten
    erfolgreichen Snapshot aus `localStorage`. Mehr dazu in
    [Integration am Tag 3](../tag-3/integration.md).

## Vergleich Mock vs. echte API

| Eigenschaft | Snapshot (Fallback) | Echte API |
|---|---|---|
| Immer verfügbar | :material-check: Ja (zuletzt gesehene Werte) | :material-close: Nicht garantiert |
| Echte Daten | :material-close: Nur so aktuell wie letzter Snapshot | :material-check: Ja |
| Einfach zu testen | :material-check: Ja | :material-close: Aufwändiger |
| Netzwerk nötig | :material-close: Nein | :material-check: Ja |