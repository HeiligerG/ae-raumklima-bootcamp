# Mockdaten

## Wozu Mock-Daten?

Mock-Daten sind «erfundene» Testdaten. Sie erlauben dir, die App zu entwickeln und zu testen, ohne von einer echten API abhängig zu sein.

## Einzelner Messwert

Datei: `data.json`

```json
{
  "room": "B101",
  "temperature": 23.4,
  "humidity": 51,
  "timestamp": "2026-08-06T10:30:00"
}
```

| Feld | Typ | Beschreibung | Beispiel |
|------|-----|-------------|---------|
| `room` | String | Raumbezeichnung | `"B101"` |
| `temperature` | Number | Temperatur in °C | `23.4` |
| `humidity` | Number | Relative Luftfeuchtigkeit in % | `51` |
| `timestamp` | String | ISO-8601 Zeitstempel | `"2026-08-06T10:30:00"` |

## Verlaufsdaten

Für die Verlaufsliste brauchst du mehrere Messwerte:

```json
[
  { "room": "B101", "temperature": 23.4, "humidity": 51, "timestamp": "2026-08-06T10:30:00" },
  { "room": "B101", "temperature": 23.6, "humidity": 50, "timestamp": "2026-08-06T10:15:00" },
  { "room": "B101", "temperature": 23.2, "humidity": 52, "timestamp": "2026-08-06T10:00:00" },
  { "room": "B101", "temperature": 23.8, "humidity": 49, "timestamp": "2026-08-06T09:45:00" },
  { "room": "B101", "temperature": 24.1, "humidity": 47, "timestamp": "2026-08-06T09:30:00" }
]
```

## Mehrere Räume (optional)

```json
[
  { "room": "B101", "temperature": 23.4, "humidity": 51, "timestamp": "2026-08-06T10:30:00" },
  { "room": "B102", "temperature": 25.1, "humidity": 43, "timestamp": "2026-08-06T10:30:00" },
  { "room": "B103", "temperature": 19.8, "humidity": 62, "timestamp": "2026-08-06T10:30:00" }
]
```

## Test-Werte für Statuslogik

Nutze diese Werte zum Testen der Statusanzeige:

| Temperatur | Luftfeuchtigkeit | Erwarteter Status |
|-----------|-----------------|-------------------|
| 22.0 | 50 | :material-check-circle: Gut |
| 25.5 | 45 | :material-alert: Kritisch |
| 18.5 | 55 | :material-alert: Kritisch |
| 30.0 | 20 | :material-close-circle: Schlecht |
| 15.0 | 80 | :material-close-circle: Schlecht |

## Daten laden

```javascript
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Hier die Daten im HTML anzeigen
  })
  .catch(error => {
    console.error('Fehler beim Laden:', error);
    // Fehlerfall anzeigen
  });
```

!!! tip "Tipp"
    Lege die JSON-Datei im gleichen Ordner wie deine `index.html` ab.  
    Live Server muss laufen, sonst funktioniert `fetch` nicht.

!!! info "Ab Tag 3: API statt Mock"
    Sobald die [Mock-API](api-vertrag.md) verfügbar ist, ersetzt sie eure `data.json`. Die Fallback-Strategie aus dem Tag-3-Leitfaden kümmert sich darum, dass die App auch ohne API weiterläuft.
