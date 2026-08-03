# Projekt: Statuslogik

!!! info "Hinweis: Verlaufsliste wurde auf Tag 3 verschoben"
    Diese Anleitung enthält ursprünglich auch den Bau der Verlaufsliste. Da Tag 2 Nachmittag jetzt für die **Datenvertrag-Klärung mit dem PE-Team** reserviert ist, bauen wir die Verlaufsliste am **Tag 3 morgens (09:00–10:00)**. Der Verlaufslisten-Code bleibt weiter unten in dieser Datei als Vorlage – ihr könnt ihn an Tag 3 direkt übernehmen.

## :material-target: Aufgabe

Erweitere dein Dashboard um:

1. Dynamische Daten aus einer JSON-Datei (oder später dem SuvaSense-Backend)
2. Korrekte Statusberechnung (gut / mittel / kritisch)
3. Fehlerbehandlung

Die Verlaufsliste ist Teil von Tag 3.

## Schritt 1: JSON-Datei mit Seed-Daten

Erstelle `data.json` im `app/`-Ordner des Codebase-Repositories
(gleiches Schema wie ein Push-Bundle-Array aus dem API-Vertrag):

```json
[
  { "recorded_at": "2026-08-06T10:30:00Z",
    "readings": { "bme680": { "temp_c": 23.4, "hum_pct": 51 } } },
  { "recorded_at": "2026-08-06T10:15:00Z",
    "readings": { "bme680": { "temp_c": 23.6, "hum_pct": 50 } } },
  { "recorded_at": "2026-08-06T10:00:00Z",
    "readings": { "bme680": { "temp_c": 23.2, "hum_pct": 52 } } },
  { "recorded_at": "2026-08-06T09:45:00Z",
    "readings": { "bme680": { "temp_c": 23.8, "hum_pct": 49 } } },
  { "recorded_at": "2026-08-06T09:30:00Z",
    "readings": { "bme680": { "temp_c": 24.1, "hum_pct": 47 } } },
  { "recorded_at": "2026-08-06T09:15:00Z",
    "readings": { "bme680": { "temp_c": 25.2, "hum_pct": 43 } } },
  { "recorded_at": "2026-08-06T09:00:00Z",
    "readings": { "bme680": { "temp_c": 26.0, "hum_pct": 40 } } },
  { "recorded_at": "2026-08-06T08:45:00Z",
    "readings": { "bme680": { "temp_c": 19.5, "hum_pct": 63 } } },
  { "recorded_at": "2026-08-06T08:30:00Z",
    "readings": { "bme680": { "temp_c": 18.2, "hum_pct": 68 } } },
  { "recorded_at": "2026-08-06T08:15:00Z",
    "readings": { "bme680": { "temp_c": 30.0, "hum_pct": 25 } } }
]
```

## Schritt 2: Statuslogik in `script.js`

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

    const bundles = await response.json();
    const latest = bundles[0];                       // neuester Push-Bundle
    const bme = latest.readings.bme680;               // BME680-Block

    document.getElementById('serial-number').textContent = 'SN12345';
    document.getElementById('temp-c').textContent        = bme.temp_c + ' °C';
    document.getElementById('hum-pct').textContent       = bme.hum_pct + ' %';

    const status = getStatus(bme.temp_c, bme.hum_pct);
    const statusEl = document.getElementById('status');
    statusEl.textContent = getStatusText(status);
    statusEl.className   = 'status ' + status;

    renderHistory(bundles);
  } catch (error) {
    showError();
    console.error(error);
  }
}

function showError() {
  document.getElementById('serial-number').textContent = 'Keine Daten';
  document.getElementById('temp-c').textContent        = '-- °C';
  document.getElementById('hum-pct').textContent       = '-- %';

  const statusEl = document.getElementById('status');
  statusEl.textContent = 'Keine Daten verfügbar';
  statusEl.className   = 'status schlecht';

  document.getElementById('history-list').innerHTML =
    '<p class="placeholder">Daten konnten nicht geladen werden.</p>';
}
```

## Schritt 4: Verlaufsliste (Vorlage für Tag 3)

```javascript
function renderHistory(bundles) {
  const list = document.getElementById('history-list');
  list.innerHTML = '';

  const entries = bundles.slice(0, 10);

  entries.forEach(bundle => {
    const bme = bundle.readings.bme680;
    if (!bme) return;                                  // BME680 nicht in diesem Bundle

    const item = document.createElement('div');
    item.className = 'history-item';

    const status = getStatus(bme.temp_c, bme.hum_pct);
    const time = new Date(bundle.recorded_at).toLocaleTimeString('de-CH', {
      hour: '2-digit', minute: '2-digit'
    });

    item.innerHTML = `
      <span class="history-time">${time}</span>
      <span class="history-temp">${bme.temp_c}°C</span>
      <span class="history-hum">${bme.hum_pct}%</span>
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

.history-time { color: #999; font-size: 13px; min-width: 50px; }
.history-temp { font-weight: bold; min-width: 50px; }
.history-hum  { color: #666; min-width: 40px; }

.history-status {
  margin-left: auto;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.history-status.gut       { background: #e8f5e9; color: #2e7d32; }
.history-status.kritisch  { background: #fff3e0; color: #e65100; }
.history-status.schlecht  { background: #ffebee; color: #c62828; }
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

- [ ] `data.json` mit Seed-Push-Bundles existiert
- [ ] `getStatus()` berechnet den richtigen Status aus `temp_c` / `hum_pct`
- [ ] `loadDashboard()` lädt Daten per `fetch()`
- [ ] Dashboard zeigt echte Daten (nicht mehr statisch)
- [ ] Statusfarbe ändert sich je nach Wert
- [ ] Bei fehlender Datei erscheint Fehlermeldung
- [ ] Code ist committed und gepusht

!!! tip "Vorbereitung für Tag 3"
    Wenn du am Ende von Tag 2 noch Zeit hast: lies bereits die Schritte 4–6 dieser Anleitung durch, um ein Gefühl für die Verlaufsliste zu bekommen. Sie wird am Tag 3 morgens gebaut.

## Nächster Schritt

**Tag 2 Nachmittag:** [Datenvertrag klären (mit PE-Team)](schnittstellen.md)  
**Tag 3:** [Projekt: Integration](../tag-3/integration.md) – dort wird auch die Verlaufsliste gebaut.