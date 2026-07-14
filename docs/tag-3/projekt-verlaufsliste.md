# Projekt: Verlaufsliste

## :material-target: Aufgabe

Erweitere dein Dashboard um eine **Verlaufsliste** der letzten Messungen. Die JSON-Datei (oder die API) liefert bereits ein Array; du musst es nur noch im HTML rendern.

Diese Aufgabe war ursprünglich Teil von Tag 2, ist aber auf **Tag 3 morgens** verschoben, damit der Tag-2-Nachmittag für die Schnittstellen-Klärung mit dem PE-Team frei bleibt.

## Voraussetzungen

- Tag 2 abgeschlossen: deine App lädt bereits einen einzelnen Messwert per `fetch()`
- Du hast Zugriff auf den Code aus [Tag 2 Projekt: Statuslogik](../tag-2/projekt-statuslogik-verlauf.md) (Schritte 4–6 enthalten den Verlaufslisten-Code als Vorlage)

## Schritt 1: HTML-Container vorbereiten

Stelle sicher, dass du in `index.html` einen Container für die Verlaufsliste hast. Falls noch nicht vorhanden, füge ihn im `<main>`-Bereich ein:

```html
<section class="history">
    <h3>Verlauf der letzten Messungen</h3>
    <div class="history-list" id="history-list">
        <p class="placeholder">Lade Daten...</p>
    </div>
</section>
```

## Schritt 2: Verlaufsdaten laden

Erweitere deine `loadDashboard()`-Funktion so, dass sie zusätzlich zum aktuellen Messwert auch den Verlauf lädt:

```javascript
async function loadDashboard() {
  try {
    // Aktueller Messwert
    const latest = await getLatestMeasurement(currentRoom);
    document.getElementById('room-name').textContent = 'Raum ' + latest.room;
    document.getElementById('temperature').textContent = latest.temperature + ' °C';
    document.getElementById('humidity').textContent = latest.humidity + ' %';

    const status = getStatus(latest.temperature, latest.humidity);
    const statusEl = document.getElementById('status');
    statusEl.textContent = getStatusText(status);
    statusEl.className = 'status ' + status;

    // Verlauf
    const history = await getHistory(currentRoom, 10);
    renderHistory(history);

  } catch (error) {
    showError();
    console.error(error);
  }
}
```

## Schritt 3: Verlaufsliste rendern

```javascript
function renderHistory(data) {
  const list = document.getElementById('history-list');
  list.innerHTML = '';

  data.forEach(entry => {
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

## Schritt 4: CSS für die Verlaufsliste

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

.history-time  { color: #999;  font-size: 13px; min-width: 50px; }
.history-temp  { font-weight: bold; min-width: 50px; }
.history-hum   { color: #666; min-width: 40px; }
.history-status {
  margin-left: auto;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.history-status.gut    { background: #e8f5e9; color: #2e7d32; }
.history-status.mittel { background: #fff3e0; color: #e65100; }
.history-status.kritisch { background: #ffebee; color: #c62828; }
```

## Schritt 5: Testen

1. Live Server läuft, Mock-API läuft im zweiten Terminal
2. Seite öffnen – die Verlaufsliste zeigt 10 Einträge
3. Im Mock-Backend (oder per `curl`) einen neuen Messwert posten → in der App nach Reload sichtbar
4. `data.json` umbenennen → Fehlermeldung erscheint, Verlaufsliste ist leer
5. Datei zurückbenennen → alles wieder da

## :material-check-all: Projekt-Checkliste Tag 3 (Vormittag)

- [ ] HTML-Container `#history-list` existiert
- [ ] `renderHistory()` wird aufgerufen
- [ ] Liste zeigt mindestens 5 Einträge
- [ ] Statusfarbe pro Eintrag korrekt
- [ ] Bei API-Fehler wird die Liste leer angezeigt (kein Crash)
- [ ] Code ist committed und gepusht

## Optional: weitere Sensoren anzeigen

Falls die Mock-API `extras` liefert (z. B. CO2, Licht), kannst du diese in der Verlaufsliste oder im Dashboard anzeigen:

```javascript
if (latest.extras) {
  for (const [key, value] of Object.entries(latest.extras)) {
    // z. B. "CO2: 580 ppm", "Licht: 320 lux"
  }
}
```

Welche Sensoren verfügbar sind, hängt davon ab, was die Plattformentwickler (PE-Team) am ESP angeschlossen haben. Die Anzeige ist optional.

## Nächster Schritt

[Projekt: Integration (mit PE-Team)](integration.md) – ab 13:00 Uhr.