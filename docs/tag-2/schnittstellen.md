# Datenvertrag klären

## :material-target: Ziel

Sicherstellen, dass alle Beteiligten das gleiche Verständnis vom
Datenfluss haben: Sensor → MQTT → Backend → App. In dieser Session
wird das Vertragspapier **empirisch** validiert (eine reale Message
fliegt durch den Stack).

## Ablauf der Joint-Session

```mermaid
sequenceDiagram
    participant PE as PE-Team<br/>(Plattformentwickler)
    participant TR as Trainer<br/>(Moderator)
    participant AE as AE-Teams<br/>(Lernende)

    Note over PE,TR,AE: "Phase 1: PE-Team präsentiert (20 Min)"

    PE->>TR: Zeigt ESP-Firmware, Seriennummer
    PE->>TR: Zeigt Live-Serial-Monitor
    PE->>AE: Erklärt MQTT-Topic-Format
    PE->>AE: Zeigt JSON-Payload-Format

    Note over PE,TR,AE: "Phase 2: AE-Teams zeigen Anforderungen (20 Min)"

    AE->>TR: Was brauchen wir?
    AE->>TR: "Liste der Sensoren, aktueller Wert, Verlauf"
    AE->>PE: "Wir wollen 10 letzte Messungen anzeigen"

    Note over PE,TR,AE: "Phase 3: Verhandlung offener Fragen (30 Min)"

    PE->>AE: Welche Sensor-Typen sind Pflicht?
    AE->>PE: Wie heissen die Felder im JSON?
    PE->>AE: Was passiert bei Sensorausfall?
    TR->>TR,PE,AE: Authentifizierung nötig?

    Note over PE,TR,AE: "Phase 4: Vertrag festhalten (20 Min)"

    AE->>TR: Schreibt Vertrag mit
    PE->>TR: - Topic-Format
    AE->>TR: - Payload-Felder
    TR->>AE: - REST-Endpoints
    TR->>PE: - Demo-Seriennummer

    Note over PE,TR,AE: "Phase 5: Empirische Validierung (10 Min)"

    PE->>PE: Publish mit mosquitto_pub
    AE->>PE: GET /api/v1/sensors/SN12345/readings
    AE->>AE: Daten sind da – Vertrag gilt
```

**Was jede Phase macht:**

| Phase | Dauer | Wer leitet | Ergebnis |
|-------|-------|-----------|----------|
| 1. PE-Team zeigt Plattform | 20 Min | PE-Vertreter | AE-Teams verstehen Topic + Payload |
| 2. AE-Teams zeigen Anforderungen | 20 Min | AE-Vertreter | PE-Team versteht UX-Anforderungen |
| 3. Verhandlung | 30 Min | Trainer | Offene Fragen geklärt |
| 4. Vertrag festhalten | 20 Min | Alle zusammen | Markdown-Datei mit finalen Werten |
| 5. Empirischer Test | 10 Min | Trainer | Live-Test, Vertrag gilt |

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

[Projekt: Integration](../tag-3/integration.md)