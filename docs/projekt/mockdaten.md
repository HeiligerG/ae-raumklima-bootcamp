# Lokale Fallback-Daten und Snapshot-Strategie

## Wozu ein Fallback?

Das **SuvaSense-Backend** liefert die Live-Daten der Sensoren. Wenn das
Backend nicht erreichbar ist (WLAN-Ausfall, Backend-Crash, Broker down),
soll eure App trotzdem etwas Anständiges anzeigen.

Dafür gibt es zwei Stufen:

1. **Snapshot aus `localStorage`** – der letzte erfolgreiche API-Aufruf
   wird im Browser gespeichert. Das ist der Standard-Fallback.
2. **Initiale Seed-Daten** – falls die App *noch nie* erfolgreich Daten
   laden konnte, wird ein kleiner Demo-Snapshot gezeigt.

!!! tip "Reihenfolge ist wichtig"
    Im Tag-3-Leitfaden lernt ihr die exakte Implementierung. Hier nur
    das Datenformat.

## Datenformat

Das Snapshot-Array ist **identisch** zur API-Antwort aus
`GET /api/v1/sensors/{serial}/readings` – nämlich eine Liste von
**Push-Bundles**.

### Einzelner Snapshot (ein Push-Bundle)

```json
{
  "recorded_at": "2026-08-06T10:30:00Z",
  "readings": {
    "bme680": {
      "temp_c": 23.4,
      "hum_pct": 51
    }
  }
}
```

### Snapshot-Liste (typischer Stand nach ein paar Minuten Laufzeit)

```json
[
  { "recorded_at": "2026-08-06T10:30:00Z",
    "readings": { "bme680": { "temp_c": 23.4, "hum_pct": 51 } } },
  { "recorded_at": "2026-08-06T10:29:50Z",
    "readings": { "bme680": { "temp_c": 23.3, "hum_pct": 51 } } },
  { "recorded_at": "2026-08-06T10:29:40Z",
    "readings": { "bme680": { "temp_c": 23.2, "hum_pct": 52 } } }
]
```

Neueste zuerst.

## Was die App daraus liest

| Feld | Wofür in der App |
|---|---|
| `recorded_at` | Zeitstempel für die Verlaufsliste und «letzte Aktualisierung» |
| `readings.bme680.temp_c` | Temperatur in °C (Dashboard) |
| `readings.bme680.hum_pct` | Relative Feuchte in % (Dashboard) |

Weitere Sensortypen (`veml7700`, `mpu6050`, `system`) sind optional –
die App zeigt sie nur an, wenn sie vorhanden sind.

## Initial-Seed (für ganz ohne API)

Datei: `app/data.json` (im Codebase-Repo, legt ihr am Tag 2 selbst an).

```json
[
  { "recorded_at": "2026-08-06T10:00:00Z",
    "readings": { "bme680": { "temp_c": 22.5, "hum_pct": 50 } } },
  { "recorded_at": "2026-08-06T09:45:00Z",
    "readings": { "bme680": { "temp_c": 22.1, "hum_pct": 51 } } },
  { "recorded_at": "2026-08-06T09:30:00Z",
    "readings": { "bme680": { "temp_c": 21.8, "hum_pct": 53 } } }
]
```

Diese Datei dient nur als **Initial-Wert**, damit die App auch dann
etwas anzeigt, wenn das Backend von Anfang an nicht läuft. Sobald die
App einmal erfolgreich Daten vom Backend holen konnte, ersetzt der
Snapshot aus `localStorage` diesen Seed.

## Test-Werte für die Statuslogik

Diese Werte helfen beim manuellen Testen der Status-Anzeige. Echte
Sensordaten sind Schwankungen unterworfen – diese Zahlen sind reproduzierbar.

| `temp_c` | `hum_pct` | Erwarteter Status |
|---|---|---|
| 22.0 | 50 | :material-check-circle: Gut |
| 25.5 | 45 | :material-alert: Kritisch |
| 18.5 | 55 | :material-alert: Kritisch |
| 30.0 | 20 | :material-close-circle: Schlecht |
| 15.0 | 80 | :material-close-circle: Schlecht |

## Daten laden (im Code)

```javascript
// 1. Versuch: Snapshot aus localStorage
const cached = localStorage.getItem('snapshot');
if (cached) {
  const items = JSON.parse(cached);
  // → items[0] ist der neueste Push-Bundle
}

// 2. Versuch: Initial-Seed (fetch auf data.json)
const response = await fetch('data.json');
const seed = await response.json();
```

Die vollständige Strategie mit API-Call zuerst, dann Snapshot, dann
Seed, baut ihr am Tag 3 in [Integration](../tag-3/integration.md).