# Projekt: Integration

## :material-target: Aufgabe

Integriere deine App mit der gewählten Datenquelle und bereite die Demo vor.

## Schritt 1: Fallback-Strategie implementieren

```javascript
// script.js – am Anfang der Datei
const USE_API = true; // Echte API ist verfügbar (Mock läuft im Hintergrund)
const API_BASE = 'http://localhost:3000/api/v1'; // lokal während des Bootcamps
// const API_BASE = 'https://mock.raumklima-bootcamp.dev/api/v1'; // deployed

async function getLatestMeasurement(roomId) {
  if (USE_API) {
    try {
      const response = await fetch(`${API_BASE}/rooms/${roomId}/measurements/latest`);
      if (!response.ok) throw new Error(`API-Fehler: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.warn('API nicht erreichbar, nutze Mock-Daten');
    }
  }

  const response = await fetch('data.json');
  const data = await response.json();
  return data[0];
}

async function getHistory(roomId, limit = 10) {
  if (USE_API) {
    try {
      const response = await fetch(`${API_BASE}/rooms/${roomId}/measurements?limit=${limit}`);
      if (!response.ok) throw new Error(`API-Fehler: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.warn('API nicht erreichbar, nutze Mock-Daten');
    }
  }

  const response = await fetch('data.json');
  return await response.json();
}
```

!!! info "Mock-API starten"
    Die Mock-API liegt im Schwester-Repo `ae-raumklima-bootcamp-codebase/mock-api/`.
    Bevor ihr eure App testet, startet sie einmal in einem zweiten Terminal:

    ```bash
    cd ../ae-raumklima-bootcamp-codebase/mock-api
    npm install   # nur beim ersten Mal
    npm start
    ```

    Die API läuft dann auf <http://localhost:3000>.

## Schritt 2: Admin-Seite einbauen

Füge in `index.html` unterhalb des Dashboards ein:

```html
<section class="admin-panel">
    <details>
        <summary>Einstellungen</summary>
        <div class="admin-content">
            <label>
                Raum:
                <select id="room-select" onchange="onRoomChange()">
                    <option value="B101">B101</option>
                    <option value="B102">B102</option>
                    <option value="B103">B103</option>
                </select>
            </label>
            <button onclick="loadDashboard()">Aktualisieren</button>
        </div>
    </details>
</section>
```

CSS für Admin-Panel:

```css
.admin-panel {
    background: white;
    border-radius: 12px;
    padding: 16px 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    margin-bottom: 24px;
}

.admin-panel summary {
    font-weight: bold;
    color: #00695c;
    cursor: pointer;
    padding: 4px 0;
}

.admin-content {
    margin-top: 12px;
    display: flex;
    gap: 12px;
    align-items: center;
}

.admin-content select {
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.admin-content button {
    padding: 6px 16px;
    background: #00695c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.admin-content button:hover {
    background: #004d40;
}
```

## Schritt 3: `loadDashboard()` für mehrere Räume anpassen

```javascript
let currentRoom = 'B101';

function onRoomChange() {
  currentRoom = document.getElementById('room-select').value;
  loadDashboard();
}

async function loadDashboard() {
  try {
    const latest = await getLatestMeasurement(currentRoom);
    const history = await getHistory(currentRoom);

    document.getElementById('room-name').textContent = 'Raum ' + latest.room;
    document.getElementById('temperature').textContent = latest.temperature + ' °C';
    document.getElementById('humidity').textContent = latest.humidity + ' %';

    const status = getStatus(latest.temperature, latest.humidity);
    const statusEl = document.getElementById('status');
    statusEl.textContent = getStatusText(status);
    statusEl.className = 'status ' + status;

    renderHistory(history);
  } catch (error) {
    showError();
    console.error(error);
  }
}
```

## Schritt 4: Layout-Feinschliff

Prüf und verbessere:

- [ ] Einheitliche Abstände (Padding, Margin)
- [ ] Lesbare Schriftgrössen
- [ ] Statusfarben klar erkennbar
- [ ] Footer sitzt am unteren Rand
- [ ] Responsive: Auf Handy und Desktop gut
- [ ] Header und Footer gleiche Farbe

## Schritt 5: Demo vorbereiten

Lies die [Demo-Checkliste](../projekt/demo-checkliste.md) und bereite vor:

1. **Demo-Skript schreiben**
    - Wer zeigt was?
    - Welche Reihenfolge?
    - Was sagen wir?

2. **Test-Demo durchlaufen**
    - Einmal komplett von Anfang bis Ende
    - Zeit stoppen (Ziel: 5–7 Minuten)

3. **Technik prüfen**
    - App läuft im Vollbild
    - Schrift ist gross genug
    - Mock-Daten sind geladen

## :material-check-all: Projekt-Checkliste Tag 3

- [ ] Fallback-Strategie implementiert
- [ ] Admin-Seite mit Raumauswahl
- [ ] Dashboard funktioniert für verschiedene Räume
- [ ] Layout und Styling finalisiert
- [ ] Demo-Skript geschrieben
- [ ] Test-Demo durchgelaufen
- [ ] Code ist committed und gepusht

## Nächster Schritt

[Checkpoint Tag 3](checkpoint.md)