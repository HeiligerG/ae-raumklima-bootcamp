# Projekt: Integration (Joint-Session mit PE-Team)

## :material-target: Aufgabe

Integriere deine App mit dem **SuvaSense-Backend** und teste sie **live** mit dem PE-Team. Diese Session läuft gemeinsam mit den Plattformentwicklern, die parallel ihre Sensoren testen.

!!! info "Diese Session ist der entscheidende Integrationstest"
    Was du am Tag 2 im Datenvertrag festgelegt hast, wird jetzt live validiert. Wenn etwas nicht passt, ist das der richtige Moment, es zu finden – nicht erst bei der Demo.

## Schritt 1: Snapshot-Fallback implementieren

Die App versucht in dieser Reihenfolge Daten zu holen:

1. **Live:** `GET /api/v1/sensors/{serial}/readings?page=1&page_size=10`
2. **Snapshot:** `localStorage.getItem('snapshot:' + serial)` (vom letzten Live-Erfolg)
3. **Seed:** `fetch('data.json')` (Initial-Wert)

```javascript
// script.js – am Anfang der Datei
const API_BASE = 'http://<vom-trainer-bekanntgegeben>:8080/api/v1';
let currentSerial = 'SN12345'; // Demo-Seriennummer vom Trainer

function snapshotKey(serial) { return `snapshot:${serial}`; }

async function getBundles(serial, limit = 10) {
  // 1. Versuch: Live-API
  try {
    const response = await fetch(`${API_BASE}/sensors/${serial}/readings?page=1&page_size=${limit}`);
    if (!response.ok) throw new Error(`API-Fehler: ${response.status}`);
    const data = await response.json();
    const items = data.items || [];

    // Erfolg: Snapshot in localStorage aktualisieren
    try {
      localStorage.setItem(snapshotKey(serial), JSON.stringify(items));
    } catch (e) {
      console.warn('Snapshot konnte nicht gespeichert werden:', e);
    }
    return items;
  } catch (error) {
    console.warn('API nicht erreichbar, nutze Snapshot:', error);
  }

  // 2. Versuch: Snapshot aus localStorage
  const cached = localStorage.getItem(snapshotKey(serial));
  if (cached) {
    try { return JSON.parse(cached); }
    catch (e) { console.warn('Snapshot kaputt:', e); }
  }

  // 3. Versuch: Initial-Seed
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Seed nicht ladbar');
    return await response.json();
  } catch (error) {
    console.error('Auch Seed nicht ladbar:', error);
    return [];
  }
}

async function getLatestBundle(serial) {
  const bundles = await getBundles(serial, 10);
  if (bundles.length === 0) throw new Error('Keine Daten verfügbar');
  return bundles[0];   // neuester zuerst
}
```

!!! info "Was ist die Snapshot-Strategie?"
    Beim **ersten** erfolgreichen API-Aufruf speichert die App das
    Ergebnis im Browser (`localStorage`). Wenn die App später
    geöffnet wird und die API nicht erreichbar ist, zeigt sie
    stattdessen diesen Snapshot. Das ist robust gegen:

    - WLAN-Ausfall im Schulungsraum
    - Backend-Crash während Demo
    - Server-Restart

    Der Snapshot ist pro Seriennummer separat (`snapshot:SN12345`,
    `snapshot:SN67890`). So bleiben mehrere Sensoren unabhängig.

!!! tip "API-URL und Seriennummer"
    Die Werte für `API_BASE` und `currentSerial` bekommt ihr zu Tag 3
    vom Trainer. Bis dahin funktioniert der Code mit den Platzhaltern.

## Schritt 2: Admin-Seite einbauen

Füge in `index.html` unterhalb des Dashboards ein:

```html
<section class="admin-panel">
    <details>
        <summary>Einstellungen</summary>
        <div class="admin-content">
            <label>
                Sensor:
                <select id="sensor-select" onchange="onSensorChange()">
                    <option value="SN12345">SN12345</option>
                    <option value="SN67890">SN67890</option>
                    <option value="DEMO-001">DEMO-001</option>
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

**Optional (für Fortgeschrittene):** Statt fixem Dropdown die Liste
dynamisch aus `GET /api/v1/sensors` laden:

```javascript
async function populateSensorDropdown() {
  try {
    const r = await fetch(`${API_BASE}/sensors?page=1&page_size=50&status=online`);
    if (!r.ok) throw new Error('Sensorliste nicht ladbar');
    const data = await r.json();
    const select = document.getElementById('sensor-select');
    select.innerHTML = '';
    data.items.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.serial_number;
      opt.textContent = `${s.serial_number} (${s.status})`;
      select.appendChild(opt);
    });
  } catch (e) { console.warn('Dropdown-Init fehlgeschlagen:', e); }
}
```

## Schritt 3: `loadDashboard()` für mehrere Sensoren anpassen

```javascript
function onSensorChange() {
  currentSerial = document.getElementById('sensor-select').value;
  loadDashboard();
}

async function loadDashboard() {
  try {
    const latest = await getLatestBundle(currentSerial);
    const bme = latest.readings.bme680;

    document.getElementById('serial-number').textContent = currentSerial;
    document.getElementById('temp-c').textContent        = bme.temp_c + ' °C';
    document.getElementById('hum-pct').textContent       = bme.hum_pct + ' %';

    const status = getStatus(bme.temp_c, bme.hum_pct);
    const statusEl = document.getElementById('status');
    statusEl.textContent = getStatusText(status);
    statusEl.className   = 'status ' + status;

    const bundles = await getBundles(currentSerial, 10);
    renderHistory(bundles);
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
    - Snapshot-Fallback einmal vorzeigen (WLAN kurz trennen)

3. **Technik prüfen**
    - App läuft im Vollbild
    - Schrift ist gross genug
    - Snapshot in `localStorage` ist vorhanden (DevTools → Application)

## :material-check-all: Projekt-Checkliste Tag 3

- [ ] Snapshot-Fallback implementiert (API → localStorage → Seed)
- [ ] Admin-Seite mit Sensor-Auswahl
- [ ] Dashboard funktioniert für verschiedene Sensoren
- [ ] Layout und Styling finalisiert
- [ ] Demo-Skript geschrieben
- [ ] Test-Demo durchgelaufen (inkl. Snapshot-Demo)
- [ ] Code ist committed und gepusht

## Nächster Schritt

[Checkpoint Tag 3](checkpoint.md)