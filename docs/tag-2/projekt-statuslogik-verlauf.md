# Projekt: Statuslogik & Verlauf

## :material-target: Aufgabe

Erweitere dein Dashboard um:

1. Dynamische Daten aus einer JSON-Datei
2. Korrekte Statusberechnung (gut/kritisch/schlecht)
3. Eine Verlaufsliste der letzten Messungen
4. Fehlerbehandlung

## Schritt 1: JSON-Datei mit Mock-Daten

Erstelle `data.json` im Projektordner:

```json
[
  { "room": "B101", "temperature": 23.4, "humidity": 51, "timestamp": "2026-08-06T10:30:00" },
  { "room": "B101", "temperature": 23.6, "humidity": 50, "timestamp": "2026-08-06T10:15:00" },
  { "room": "B101", "temperature": 23.2, "humidity": 52, "timestamp": "2026-08-06T10:00:00" },
  { "room": "B101", "temperature": 23.8, "humidity": 49, "timestamp": "2026-08-06T09:45:00" },
  { "room": "B101", "temperature": 24.1, "humidity": 47, "timestamp": "2026-08-06T09:30:00" },
  { "room": "B101", "temperature": 25.2, "humidity": 43, "timestamp": "2026-08-06T09:15:00" },
  { "room": "B101", "temperature": 26.0, "humidity": 40, "timestamp": "2026-08-06T09:00:00" },
  { "room": "B101", "temperature": 19.5, "humidity": 63, "timestamp": "2026-08-06T08:45:00" },
  { "room": "B101", "temperature": 18.2, "humidity": 68, "timestamp": "2026-08-06T08:30:00" },
  { "room": "B101", "temperature": 30.0, "humidity": 25, "timestamp": "2026-08-06T08:15:00" }
]
```

## Schritt 2: Statuslogik in `script.js`

```javascript
function getStatus(temp, humidity) {
  const tempOk = temp >= 20 && temp <= 24;
  const humOk = humidity >= 40 && humidity <= 60;
  const tempWarn = temp >= 18 && temp <= 26;
  const humWarn = humidity >= 30 && humidity <= 70;

  if (tempOk && humOk) return 'gut';
  if (tempWarn || humWarn) return 'kritisch';
  return 'schlecht';
}

function getStatusText(status) {
  switch (status) {
    case 'gut': return 'Gut';
    case 'kritisch': return 'Kritisch';
    case 'schlecht': return 'Schlecht';
    default: return 'Unbekannt';
  }
}
```

## Schritt 3: Daten laden und Dashboard aktualisieren

```javascript
async function loadDashboard() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Daten nicht verfügbar');

    const data = await response.json();
    const latest = data[0]; // Neuester Eintrag ist zuerst

    // Raumname
    document.getElementById('room-name').textContent = 'Raum ' + latest.room;

    // Werte
    document.getElementById('temperature').textContent = latest.temperature + ' °C';
    document.getElementById('humidity').textContent = latest.humidity + ' %';

    // Status
    const status = getStatus(latest.temperature, latest.humidity);
    const statusEl = document.getElementById('status');
    statusEl.textContent = getStatusText(status);
    statusEl.className = 'status ' + status;

    // Verlauf
    renderHistory(data);

  } catch (error) {
    showError();
    console.error(error);
  }
}

function showError() {
  document.getElementById('room-name').textContent = 'Keine Daten';
  document.getElementById('temperature').textContent = '-- °C';
  document.getElementById('humidity').textContent = '-- %';

  const statusEl = document.getElementById('status');
  statusEl.textContent = 'Keine Daten verfügbar';
  statusEl.className = 'status schlecht';

  document.getElementById('history-list').innerHTML =
    '<p class="placeholder">Daten konnten nicht geladen werden.</p>';
}
```

## Schritt 4: Verlaufsliste

```javascript
function renderHistory(data) {
  const list = document.getElementById('history-list');
  list.innerHTML = '';

  // Maximal 10 Einträge anzeigen
  const entries = data.slice(0, 10);

  entries.forEach(entry => {
    const item = document.createElement('div');
    item.className = 'history-item';

    const status = getStatus(entry.temperature, entry.humidity);
    const time = new Date(entry.timestamp).toLocaleTimeString('de-CH', {
      hour: '2-digit',
      minute: '2-digit'
    });

    item.innerHTML = `
      <span class="history-time">${time}</span>
      <span class="history-temp">${entry.temperature}°C</span>
      <span class="history-hum">${entry.humidity}%</span>
      <span class="history-status ${status}">${getStatusText(status)}</span>
    `;

    list.appendChild(item);
  });
}
```

## Schritt 5: Verlaufs-CSS ergänzen

```css
.history-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.history-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 12px;
  background: #fafafa;
  border-radius: 6px;
  font-size: 14px;
}

.history-time {
  color: #999;
  font-size: 13px;
  min-width: 50px;
}

.history-temp {
  font-weight: bold;
  min-width: 50px;
}

.history-hum {
  color: #666;
  min-width: 40px;
}

.history-status {
  margin-left: auto;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.history-status.gut {
  background: #e8f5e9;
  color: #2e7d32;
}

.history-status.kritisch {
  background: #fff3e0;
  color: #e65100;
}

.history-status.schlecht {
  background: #ffebee;
  color: #c62828;
}
```

## Schritt 6: HTML für Verlauf anpassen

Ersetze den Platzhalter in `index.html`:

```html
<section class="history">
    <h3>Verlauf der letzten Messungen</h3>
    <div class="history-list" id="history-list">
        <p class="placeholder">Lade Daten...</p>
    </div>
</section>
```

## Schritt 7: `loadDashboard()` beim Seitenstart aufrufen

```javascript
// Am Ende von script.js
loadDashboard();
```

## Schritt 8: Testen

- Live Server starten
- Seite öffnen
- Temperatur und Luftfeuchtigkeit werden geladen
- Statusfarbe passt zum Wert
- Verlauf zeigt mehrere Einträge
- `data.json` umbenennen → Fehlermeldung erscheint
- Datei zurückbenennen → Seite neu laden → alles wieder da

## :material-check-all: Projekt-Checkliste Tag 2

- [ ] `data.json` mit Mock-Daten existiert
- [ ] `getStatus()` berechnet den richtigen Status
- [ ] `loadDashboard()` lädt Daten per `fetch()`
- [ ] Dashboard zeigt echte Daten (nicht mehr statisch)
- [ ] Statusfarbe ändert sich je nach Wert
- [ ] Verlaufsliste zeigt mehrere Einträge
- [ ] Bei fehlender Datei erscheint Fehlermeldung
- [ ] Code ist committed und gepusht

## Nächster Schritt

[Checkpoint Tag 2](checkpoint.md)