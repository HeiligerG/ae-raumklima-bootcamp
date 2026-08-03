# Projekt: Verlaufsliste

## :material-target: Aufgabe

Erweitere dein Dashboard um eine **Verlaufsliste** der letzten Messungen. Die Push-Bundles aus der API oder dem Seed liefern bereits alles Nötige; du musst sie nur im HTML rendern.

Diese Aufgabe war ursprünglich Teil von Tag 2, ist aber auf **Tag 3 morgens** verschoben, damit der Tag-2-Nachmittag für die Datenvertrag-Klärung mit dem PE-Team frei bleibt.

## Voraussetzungen

- Tag 2 abgeschlossen: deine App lädt bereits einen einzelnen Push-Bundle per `fetch()`
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

Erweitere deine `loadDashboard()`-Funktion so, dass sie zusätzlich zum aktuellen Push-Bundle auch den Verlauf lädt:

```javascript
async function loadDashboard() {
  try {
    // Aktuellster Push-Bundle
    const latest = await getLatestBundle(currentSerial);
    const bme = latest.readings.bme680;

    document.getElementById('serial-number').textContent = currentSerial;
    document.getElementById('temp-c').textContent        = bme.temp_c + ' °C';
    document.getElementById('hum-pct').textContent       = bme.hum_pct + ' %';

    const status = getStatus(bme.temp_c, bme.hum_pct);
    const statusEl = document.getElementById('status');
    statusEl.textContent = getStatusText(status);
    statusEl.className   = 'status ' + status;

    // Verlauf (max. 10 neueste Push-Bundles)
    const bundles = await getBundles(currentSerial, 10);
    renderHistory(bundles);

  } catch (error) {
    showError();
    console.error(error);
  }
}
```

## Schritt 3: Verlaufsliste rendern

```javascript
function renderHistory(bundles) {
  const list = document.getElementById('history-list');
  list.innerHTML = '';

  bundles.forEach(bundle => {
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

.history-status.gut       { background: #e8f5e9; color: #2e7d32; }
.history-status.kritisch  { background: #fff3e0; color: #e65100; }
.history-status.schlecht  { background: #ffebee; color: #c62828; }
```

## Schritt 5: Testen

1. Live Server läuft, Snapshot-Fallback funktioniert (Browser-DevTools zeigen `localStorage`)
2. Seite öffnen – die Verlaufsliste zeigt 10 Einträge
3. Im `mosquitto_pub` einen neuen Wert publishen → nach App-Refresh sichtbar
4. `data.json` umbenennen + API-Snapshot löschen → App fällt auf nichts zurück, Fehlermeldung
5. Snapshot zurückspielen (`localStorage.setItem('snapshot:SN12345', JSON.stringify([…]))`) → App zeigt wieder Werte

## :material-check-all: Projekt-Checkliste Tag 3 (Vormittag)

- [ ] HTML-Container `#history-list` existiert
- [ ] `renderHistory()` wird aufgerufen
- [ ] Liste zeigt mindestens 5 Einträge
- [ ] Statusfarbe pro Eintrag korrekt
- [ ] Bei API-Fehler wird die Liste leer angezeigt (kein Crash)
- [ ] Code ist committed und gepusht

## Optional: weitere Sensortypen anzeigen

Wenn das Backend `veml7700` oder `system` mitliefert, kannst du sie in der Verlaufsliste oder im Dashboard anzeigen:

```javascript
if (latest.readings.veml7700) {
  // z. B. "Lux: 245", "White: 199"
}
if (latest.readings.system) {
  // z. B. "CPU: 42°C", "RSSI: -55 dBm"
}
```

Welche Sensortypen vorhanden sind, hängt davon ab, was das PE-Team am ESP angeschlossen hat. Die Anzeige ist optional.

## Nächster Schritt

[Projekt: Integration (mit PE-Team)](integration.md) – ab 13:00 Uhr.