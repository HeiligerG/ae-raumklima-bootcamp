# Schnittstellen klären

## :material-target: Ziel

Entscheide, wie deine App Daten bezieht: Echte API oder Mock-Daten?  
Implementiere eine stabile Fallback-Strategie.

## Option A: Echte API (Mock während des Bootcamps)

Während des Bootcamps läuft die **Mock-API** auf `http://localhost:3000`. Sie implementiert exakt diesen Vertrag und liefert deterministische Daten für die drei Räume B101, B102, B103.

```javascript
const API_BASE = 'http://localhost:3000/api/v1';

async function loadMeasurement(roomId) {
  try {
    const response = await fetch(`${API_BASE}/rooms/${roomId}/measurements/latest`);
    if (!response.ok) throw new Error(`API-Fehler: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn('API nicht erreichbar, nutze Fallback');
    return null;
  }
}
```

Wenn die echte Sensor-API der Plattformentwickler bereitsteht, wird sie unter derselben URL und mit demselben Schema antworten. Ihr müsst am Frontend nichts anpassen – nur `API_BASE` einmal austauschen.

**Starten der Mock-API** (einmal pro Bootcamp-Session, im separaten Terminal):

```bash
cd ae-raumklima-bootcamp-codebase/mock-api
npm install   # nur beim ersten Mal
npm start
```

## Option B: Mock-Daten (Fallback)

Wenn die API nicht verfügbar ist – oder immer als Alternative:

```javascript
async function loadFromMock() {
  const response = await fetch('data.json');
  const data = await response.json();
  return data[0]; // Neuester Eintrag
}
```

## Kombinierte Lösung (empfohlen)

```javascript
async function getLatestMeasurement(roomId) {
  // Zuerst API versuchen
  const apiData = await loadMeasurement(roomId);
  if (apiData) return apiData;

  // Fallback auf Mock-Daten
  console.warn('Nutze Mock-Daten als Fallback');
  return await loadFromMock();
}
```

## Admin-Seite: Raum-Auswahl

Eine einfache Admin-Seite, um zwischen Räumen zu wechseln:

```html
<section class="admin">
    <h3>Raum auswählen</h3>
    <select id="room-select" onchange="changeRoom(this.value)">
        <option value="B101">Raum B101</option>
        <option value="B102">Raum B102</option>
        <option value="B103">Raum B103</option>
    </select>
</section>
```

```javascript
function changeRoom(roomId) {
  loadDashboardForRoom(roomId);
}

async function loadDashboardForRoom(roomId) {
  const data = await getLatestMeasurement(roomId);
  if (data) {
    updateDashboard(data);
  } else {
    showError();
  }
}
```

## Admin-Seite: Grenzwerte

Eine Admin-Seite, um die Status-Grenzwerte anzupassen:

```html
<section class="admin">
    <h3>Grenzwerte anpassen</h3>
    <label>
        Temperatur OK: <input type="number" id="temp-min" value="20"> – <input type="number" id="temp-max" value="24">
    </label>
    <label>
        Luftfeuchtigkeit OK: <input type="number" id="hum-min" value="40"> – <input type="number" id="hum-max" value="60">
    </label>
    <button onclick="updateThresholds()">Übernehmen</button>
</section>
```

```javascript
let thresholds = { tempMin: 20, tempMax: 24, humMin: 40, humMax: 60 };

function updateThresholds() {
  thresholds.tempMin = parseFloat(document.getElementById('temp-min').value);
  thresholds.tempMax = parseFloat(document.getElementById('temp-max').value);
  thresholds.humMin = parseFloat(document.getElementById('hum-min').value);
  thresholds.humMax = parseFloat(document.getElementById('hum-max').value);
  loadDashboard(); // Dashboard mit neuen Werten neu laden
}

function getStatus(temp, humidity) {
  const tempOk = temp >= thresholds.tempMin && temp <= thresholds.tempMax;
  const humOk = humidity >= thresholds.humMin && humidity <= thresholds.humMax;
  const tempWarn = temp >= thresholds.tempMin - 2 && temp <= thresholds.tempMax + 2;
  const humWarn = humidity >= thresholds.humMin - 10 && humidity <= thresholds.humMax + 10;

  if (tempOk && humOk) return 'gut';
  if (tempWarn || humWarn) return 'kritisch';
  return 'schlecht';
}
```

## :material-check-all: Aufgaben

- [ ] Entscheiden: API oder Mock?
- [ ] Fallback-Strategie implementiert
- [ ] Admin-Seite (mindestens Raumauswahl) existiert
- [ ] App funktioniert mit und ohne API

## Nächster Schritt

[Projekt: Integration](integration.md)