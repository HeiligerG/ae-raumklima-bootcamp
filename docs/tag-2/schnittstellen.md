# Datenvertrag klären

## :material-target: Ziel

Sicherstellen, dass alle Beteiligten das gleiche Verständnis vom
Datenfluss haben: Sensor → MQTT → Backend → App. In dieser Session
wird das Vertragspapier **empirisch** validiert (eine reale Message
fliegt durch den Stack).

## Ablauf (90–120 Minuten, gemeinsam mit PE-Team)

### 1. PE-Team zeigt ESP-Firmware (20 Min)

- Welche Sensoren sind angeschlossen?
- Welche Seriennummer hat das Gerät?
- Wie wird das Topic gebildet? (Erinnerung: `suva/<serial>/data`)
- Wie sieht das JSON aus? Vergleich mit der `ingest-vertrag.md`.

### 2. Trainer zeigt Backend-Logs (20 Min)

```bash
docker compose -f SuvaSense/docker-compose.yml logs -f backend
```

Was passiert, wenn der ESP publiziert? Antwort:

```
ingest ok serial=SN12345 topic=suva/SN12345/data
```

### 3. Trainer zeigt pgAdmin oder `curl` (20 Min)

```bash
curl http://localhost:8080/api/v1/sensors
```

- Liste der Sensoren
- Welche Sensortypen haben Readings?
- Wie viele Readings total?

### 4. Lernende sehen Live-Daten in ihrer App (20 Min)

- Wenn die App bereits lädt: Live-Werte müssen sich alle 10 s aktualisieren
- Wenn nicht: Trainer publiziert manuell via `mosquitto_pub` und zeigt, dass
  die App das nächste Refresh übernimmt

### 5. Q&A und Vertrag fixieren (10 Min)

Häufige Fragen:

- **Sensor liefert keine Werte?** → im `docker compose logs mosquitto` prüfen
- **Falsche Seriennummer?** → mit `mosquitto_sub -t 'suva/+/data' -v` schauen, was wirklich kommt
- **Topic-Format falsch?** → muss exakt `suva/<serial>/data` sein, sonst verwirft das Backend

## Optionale API-Endpoints (für Fortgeschrittene)

SuvaSense bietet mehr als die zwei Pflicht-Endpoints. Wer seine App
früh ausbauen will, kann schon hier einen Blick riskieren:

| Zweck | Endpoint |
|---|---|
| Alle Sensoren | `GET /api/v1/sensors` |
| Ein Sensor | `GET /api/v1/sensors/SN12345` |
| Aktuellster Stand pro Sensortyp | `GET /api/v1/sensors/SN12345/latest` |
| Verlauf nur BME680 | `GET /api/v1/sensors/SN12345/readings/bme680` |
| Filter Temperatur | `GET /api/v1/sensors/SN12345/readings/bme680?temp_c_min=20&temp_c_max=25` |

Details siehe [API-Vertrag](../projekt/api-vertrag.md).

## :material-check-all: Aufgaben nach der Session

- [ ] Demo-Sensor läuft stabil (Trainer prüft Logs)
- [ ] Alle Lernenden wissen ihre API-URL und Demo-Seriennummer
- [ ] App-Refresh zeigt neue Werte (mindestens 1 Team hat das geschafft)

## Nächster Schritt

[Projekt: Integration](integration.md)