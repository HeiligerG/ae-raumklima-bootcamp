# SuvaSense-Backend (Übersicht)

Diese Seite ist eine **kurze Übersicht** für Lernende. Die ausführliche
Doku der Endpoints und Datenformate steht im
[API-Vertrag](api-vertrag.md); die MQTT-Seite der Sensoren im
[Ingest-Vertrag](ingest-vertrag.md).

## Was ist SuvaSense?

SuvaSense ist die zentrale Daten- und Broker-Plattform des Bootcamps.
Sie besteht aus drei Docker-Services plus Postgres:

| Service    | Port (Host) | Zweck |
|------------|-------------|-------|
| backend    | 8080        | REST-API für die Lernenden-App (Go) |
| mosquitto  | 1883 / 9001 | MQTT-Broker für ESP32-Publishes |
| postgres   | 5432        | Persistenz (Tabellen `sensors`, `readings`) |
| pgadmin    | 5050        | Web-UI für die Postgres-DB |

Der Stack läuft beim **Trainer** (Laptop oder Schulungs-Server), nicht
auf deinem Laptop. Du brauchst nur die URL und eine Seriennummer.

## Wie der Stack gestartet wird (nur Trainer)

```bash
cd SuvaSense
cp Backend/.env.example Backend/.env
docker compose up -d --build
```

Prüfen:

```bash
curl http://localhost:8080/health           # → {"status":"ok"}
docker compose ps                          # 4 Services healthy
```

## Datenmodell in einem Satz

Pro MQTT-Message des Sensors legt das Backend **einen Push-Bundle** in
der DB ab: ein Eintrag pro Sensortyp (`bme680`, `veml7700`, `mpu6050`,
`system`), gruppiert unter dem gemeinsamen `recorded_at`-Zeitstempel.

## Wie eine Demo-Message reinkommt

Falls kein echtes ESP32 verfügbar ist, kann jeder mit `mosquitto_pub`
eine Message simulieren:

```bash
docker compose exec mosquitto mosquitto_pub \
  -t suva/SN12345/data \
  -m '{"bme680":{"temp":23.4,"hum":51,"press":1013.2,"gas":145.6}}'
```

Anschliessend im Backend-Log sichtbar:

```
ingest ok serial=SN12345 topic=suva/SN12345/data
```

In der API sichtbar:

```bash
curl http://localhost:8080/api/v1/sensors
# {"page":1,"page_size":50,"items":[{"serial_number":"SN12345","status":"online",...}]}
```

## Wie Lernende die Daten sehen

```javascript
const API_BASE = 'http://<vom-trainer-bekanntgegeben>:8080/api/v1';

// Liste aller Sensoren
await fetch(`${API_BASE}/sensors`);

// Push-Bundles eines Sensors
await fetch(`${API_BASE}/sensors/SN12345/readings?page=1&page_size=10`);
// → { items: [{ recorded_at, readings: { bme680: { temp_c, hum_pct, … } } }, …] }
```

## Was ist mit `mock-api` im Codebase-Repo?

Die `mock-api/` im Codebase-Repo bleibt für pädagogische Zwecke im
Repo (zum Beispiel als Node/Express-Beispiel), ist aber **nicht** die
Bootcamp-Wahrheit. Das SuvaSense-Backend ist die einzige Quelle, mit
der die Lernenden-App spricht.

## Verweise

- [API-Vertrag](api-vertrag.md) – vollständige Endpoint-Liste und JSON-Schemas
- [Ingest-Vertrag](ingest-vertrag.md) – MQTT-Topic-Format und Payload
- [Architektur](architektur.md) – Schichten und Rollen
- Trainer-only: [Demo-Sensor-Setup](../trainer/demo-sensor.md)