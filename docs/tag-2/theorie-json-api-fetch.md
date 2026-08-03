# Theorie: JSON / API / Fetch

## Was ist JSON?

JSON (JavaScript Object Notation) ist ein Format zum Speichern und Austauschen von Daten.  
Es ist für Menschen lesbar und für Maschinen einfach zu verarbeiten.

Im Bootcamp arbeiten wir mit dem **Push-Bundle-Format** des SuvaSense-Backends:

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

| Feld | Bedeutung |
|---|---|
| `recorded_at` | Zeitpunkt der Messung (ISO-8601) |
| `readings.bme680.temp_c` | Temperatur in °C |
| `readings.bme680.hum_pct` | Relative Feuchte in % |

Weitere Sensortypen können vorkommen (`veml7700`, `mpu6050`, `system`), sind aber optional.

### JSON-Regeln

| Regel | Beispiel |
|-------|----------|
| Geschweifte Klammern `{}` für Objekte | `{ "name": "SN12345" }` |
| Eckige Klammern `[]` für Listen | `[{...}, {...}]` |
| Schlüssel immer in doppelten Anführungszeichen | `"name"` |
| Werte: String, Number, Boolean, null, Objekt, Array | `"text"`, `42`, `true` |
| Kein Komma nach dem letzten Element | `{ "a": 1, "b": 2 }` :material-check: |

### JSON vs. JavaScript-Objekt

```javascript
// JSON (String)
const jsonString = '{"recorded_at":"2026-08-06T10:30:00Z","readings":{"bme680":{"temp_c":23.4,"hum_pct":51}}}';

// In JavaScript-Objekt umwandeln
const data = JSON.parse(jsonString);
console.log(data.readings.bme680.temp_c); // 23.4

// Zurück in JSON
const jsonAgain = JSON.stringify(data);
```

## Was ist eine API?

Eine API (Application Programming Interface) ist eine Schnittstelle zwischen Programmen.

```mermaid
graph LR
    A[Deine App] -->|fetch| B[SuvaSense-API]
    B -->|JSON| A
```

Eine REST-API nutzt HTTP-Methoden:

| Methode | Bedeutung |
|---------|-----------|
| `GET` | Daten abrufen |
| `POST` | Neue Daten senden |
| `PUT` | Daten aktualisieren |
| `DELETE` | Daten löschen |

Wir nutzen nur `GET` – Daten abrufen.

## Fetch: Daten laden

`fetch()` ist die eingebaute JavaScript-Funktion, um Daten von einem Server zu laden.

### Grundform (mit Promises)

```javascript
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Daten anzeigen
  })
  .catch(error => {
    console.error('Fehler:', error);
  });
```

### Moderne Form (mit async/await)

```javascript
async function loadData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data);
    // Daten anzeigen
  } catch (error) {
    console.error('Fehler:', error);
  }
}

loadData();
```

??? info "Was ist async/await?"
    `async` markiert eine Funktion als asynchron.  
    `await` wartet, bis ein Promise fertig ist – der Code darunter läuft erst danach.  
    `try/catch` fängt Fehler ab, z. B. wenn die Datei nicht existiert.

## Daten im HTML anzeigen

```javascript
async function loadData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    // Push-Bundle ist ein Array; das neueste ist [0]
    const latest = data[0];
    const bme = latest.readings.bme680;

    document.getElementById('recorded-at').textContent = latest.recorded_at;
    document.getElementById('temp-c').textContent       = bme.temp_c + ' °C';
    document.getElementById('hum-pct').textContent      = bme.hum_pct + ' %';
  } catch (error) {
    document.getElementById('status').textContent = 'Keine Daten verfügbar';
  }
}
```

## Statuslogik

Die Logik bleibt dieselbe wie immer – sie bekommt nur neue Eingabewerte:

```javascript
function getStatus(tempC, humPct) {
  const tempOk = tempC >= 20 && tempC <= 24;
  const humOk  = humPct >= 40 && humPct <= 60;
  const tempWarn = tempC >= 18 && tempC <= 26;
  const humWarn  = humPct >= 30 && humPct <= 70;

  if (tempOk && humOk) return 'gut';
  if (tempWarn || humWarn) return 'kritisch';
  return 'schlecht';
}
```

Die App ruft die Funktion mit den **BME680-Werten** auf:

```javascript
const status = getStatus(bme.temp_c, bme.hum_pct);
```

## Fehlerbehandlung

```javascript
async function loadData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) {
      throw new Error('Server nicht erreichbar');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    showError('Daten konnten nicht geladen werden');
    return null;
  }
}

function showError(message) {
  const el = document.getElementById('status');
  el.textContent = message;
  el.className = 'status error';
}
```

## Zusammenfassung

- JSON ist ein Datenformat
- `fetch()` lädt Daten von einem Server oder einer Datei
- `async/await` macht asynchronen Code lesbar
- `getStatus()` berechnet den Status aus `temp_c` und `hum_pct`
- Immer einen Fehlerfall einbauen

## Weiter

Jetzt kennst du die Grundlagen. In der Übung probierst du es aus!