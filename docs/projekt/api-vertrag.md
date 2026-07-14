# API-Vertrag

## Was ist ein API-Vertrag?

Ein API-Vertrag definiert, wie die App mit dem Server kommuniziert.  
Er legt fest:

- Welche Daten werden gesendet und empfangen?
- Welches Format haben die Daten?
- Welche Endpunkte gibt es?

## Endpunkt: Aktuelle Messung

```
GET /api/v1/rooms/{roomId}/measurements/latest
```

### Beispiel-Antwort

```json
{
  "room": "B101",
  "temperature": 23.4,
  "humidity": 51,
  "timestamp": "2026-08-06T10:30:00Z"
}
```

## Endpunkt: Verlaufsdaten

```
GET /api/v1/rooms/{roomId}/measurements?limit=10
```

### Beispiel-Antwort

```json
[
  {
    "room": "B101",
    "temperature": 23.4,
    "humidity": 51,
    "timestamp": "2026-08-06T10:30:00Z"
  },
  {
    "room": "B101",
    "temperature": 23.2,
    "humidity": 52,
    "timestamp": "2026-08-06T10:15:00Z"
  }
]
```

## Endpunkt: Sensor-Daten senden (Plattform-Team / ESP)

```
POST /api/v1/ingest
```

Wird vom **Plattform-Team** (ESP-Firmware) aufgerufen, **nicht** von der Lernenden-App. Authentifizierung per Header `X-API-Key`. Vollständige Doku: [Ingest-Vertrag](ingest-vertrag.md).

### Request

```json
{
  "room": "B101",
  "temperature": 22.5,
  "humidity": 52,
  "timestamp": "2026-07-14T12:00:00Z"
}
```

### Response

```
201 Created
```

```json
{ "status": "accepted", "room": "B101", "timestamp": "2026-07-14T12:00:00Z" }
```

## Endpunkt: Räume

```
GET /api/v1/rooms
```

### Beispiel-Antwort

```json
[
  { "id": "B101", "name": "Schulungsraum 101", "floor": 1 },
  { "id": "B102", "name": "Schulungsraum 102", "floor": 1 },
  { "id": "B103", "name": "Schulungsraum 103", "floor": 1 }
]
```

## Fehlerfall

Wenn ein Fehler auftritt, antwortet der Server mit einem HTTP-Fehlercode:

```json
{
  "error": "Room not found",
  "code": 404
}
```

## Fetch mit API

```javascript
const API_BASE = 'http://localhost:3000/api/v1'; // lokale Mock-API

async function loadLatestMeasurement(roomId) {
  try {
    const response = await fetch(`${API_BASE}/rooms/${roomId}/measurements/latest`);
    if (!response.ok) {
      throw new Error(`Fehler: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API-Fehler:', error);
    return null;
  }
}
```

!!! info "Mock-API im Schwester-Repo"
    Die hier dokumentierte API wird während des Bootcamps durch eine kleine **Mock-API** simuliert, damit ihr ohne echte Sensor-Hardware entwickeln könnt. Sie liegt im Repository `ae-raumklima-bootcamp-codebase` unter `mock-api/` und liefert deterministische Daten für die Räume B101, B102 und B103.

    Starten (einmal pro Bootcamp-Session, im **zweiten Terminal**):

    ```bash
    cd ae-raumklima-bootcamp-codebase/mock-api
    npm install
    npm start
    ```

    Die API läuft dann auf <http://localhost:3000>. Falls dein Laptop kein Node.js hat oder die API zentral vom Trainer deployt wird, bekommst du eine andere `API_BASE` – der Rest deines Codes bleibt gleich.

## Fallback-Strategie

!!! important "Wichtig"
    Die echte API ist optional. Eure App muss immer mit Mock-Daten funktionieren.

```javascript
async function getData() {
  // Zuerst API versuchen
  try {
    const data = await loadLatestMeasurement('B101');
    if (data) return data;
  } catch (e) {
    console.warn('API nicht erreichbar, nutze Mock-Daten');
  }

  // Fallback auf Mock-Daten
  const response = await fetch('data.json');
  return await response.json();
}
```

## Unterschied Mock vs. API

| Eigenschaft | Mock-Daten | Echte API |
|-------------|-----------|-----------|
| Immer verfügbar | :material-check: Ja | :material-close: Nicht garantiert |
| Echte Daten | :material-close: Nein | :material-check: Ja |
| Einfach zu testen | :material-check: Ja | :material-close: Aufwändiger |
| Netzwerk nötig | :material-close: Nein | :material-check: Ja |
