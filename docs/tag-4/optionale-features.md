# Optionale Features

## :material-target: Ziel

Wenn der Pflichtumfang fertig und getestet ist, kannst du deine App mit Bonus-Funktionen erweitern.

## Feature-Ideen

### :material-theme-light-dark: Dark Mode

Ein Toggle-Button zum Umschalten zwischen hellem und dunklen Design.

```html
<button id="theme-toggle" onclick="toggleTheme()">Dark Mode</button>
```

```javascript
function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}
```

```css
body.dark {
  background: #1a1a2e;
  color: #e0e0e0;
}

body.dark .card,
body.dark .history,
body.dark .admin-panel {
  background: #16213e;
  color: #e0e0e0;
}
```

### :material-chart-line: Diagramm

Ein einfaches Balkendiagramm mit reinem CSS/HTML (aus den `temp_c`-Werten):

```html
<div class="chart">
    <div class="bar" style="height: 70%"><span>23.4°</span></div>
    <div class="bar" style="height: 65%"><span>23.1°</span></div>
    <div class="bar" style="height: 60%"><span>22.9°</span></div>
</div>
```

```css
.chart {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 150px;
  padding: 8px;
}

.bar {
  flex: 1;
  background: #00695c;
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 4px;
  color: white;
  font-size: 11px;
  min-width: 40px;
}
```

### :material-refresh: Auto-Refresh

Daten automatisch alle 30 Sekunden neu laden:

```javascript
setInterval(() => {
  loadDashboard();
}, 30000); // 30000 ms = 30 Sekunden
```

### :material-content-save: Snapshot-Persistenz

Beim ersten API-Erfolg wird der Snapshot automatisch gespeichert (das
passiert bereits in `getBundles()` aus dem Tag-3-Leitfaden). Wer mehr
will, kann zusätzlich einen "Manuell speichern"-Button anbieten:

```javascript
function saveSnapshot() {
  const data = JSON.stringify(currentBundles);
  localStorage.setItem(`snapshot:${currentSerial}`, data);
  alert('Snapshot gespeichert');
}

function loadSnapshotOnly() {
  const cached = localStorage.getItem(`snapshot:${currentSerial}`);
  if (cached) {
    const bundles = JSON.parse(cached);
    renderHistory(bundles);
  }
}
```

### :material-bell: Benachrichtigungs-Banner

Ein Banner am oberen Rand, wenn der Status kritisch oder schlecht ist:

```html
<div id="alert-banner" class="alert-banner hidden">
    Achtung: Raumklima kritisch!
</div>
```

```css
.alert-banner {
  background: #e65100;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}

.alert-banner.hidden {
  display: none;
}

.alert-banner.schlecht {
  background: #c62828;
}
```

```javascript
function showBanner(status) {
  const banner = document.getElementById('alert-banner');
  if (status === 'gut') {
    banner.classList.add('hidden');
  } else {
    banner.classList.remove('hidden');
    banner.className = 'alert-banner ' + status;
    banner.textContent = status === 'kritisch'
      ? 'Achtung: Raumklima kritisch!'
      : 'Warnung: Raumklima schlecht!';
  }
}
```

### :material-monitor-screenshot: Präsentationsmodus

Ein Modus mit grösserer Schrift für die Präsentation:

```javascript
function togglePresentationMode() {
  document.body.classList.toggle('presentation');
}
```

```css
body.presentation {
  font-size: 1.5em;
}

body.presentation .number {
  font-size: 48px;
}
```

### :material-access-point: Online-Indikator (SuvaSense-spezifisch)

SuvaSense liefert im Sensor-Objekt einen `status: online | offline`.
Zeige im Dashboard einen kleinen Indikator:

```javascript
async function showOnlineStatus(serial) {
  try {
    const r = await fetch(`${API_BASE}/sensors/${serial}`);
    if (!r.ok) return;
    const sensor = await r.json();
    const dot = document.getElementById('online-dot');
    dot.className = sensor.status === 'online' ? 'dot dot-online' : 'dot dot-offline';
    dot.title = `${serial} ist ${sensor.status}`;
  } catch (e) { /* still ok */ }
}
```

```css
.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot-online  { background: #2e7d32; }
.dot-offline { background: #c62828; }
```

### :material-eye: Weitere Sensortypen anzeigen

Wenn das Backend `veml7700`, `system` oder `mpu6050` mitliefert:

```javascript
const extraBox = document.getElementById('extras');

if (latest.readings.veml7700) {
  const lux = latest.readings.veml7700.lux;
  extraBox.innerHTML += `<p>💡 Licht: ${lux.toFixed(0)} Lux</p>`;
}
if (latest.readings.system && latest.readings.system.cpu_temp_c != null) {
  const cpu = latest.readings.system.cpu_temp_c;
  extraBox.innerHTML += `<p>🖥️ CPU-Temperatur: ${cpu.toFixed(1)} °C</p>`;
}
if (latest.readings.system && latest.readings.system.rssi_dbm != null) {
  const rssi = latest.readings.system.rssi_dbm;
  extraBox.innerHTML += `<p>📶 WLAN: ${rssi} dBm</p>`;
}
```

!!! info "Optionale Felder prüfen"
    Diese Werte sind nur vorhanden, wenn das PE-Team die Sensoren
    angeschlossen und im MQTT-Payload mitgesendet hat. Im Code immer
    auf `!= null` prüfen.

## :material-check-all: Checkliste Optionale Features

- [ ] Dark Mode
- [ ] Diagramm
- [ ] Auto-Refresh
- [ ] Snapshot-Persistenz
- [ ] Benachrichtigungs-Banner
- [ ] Präsentationsmodus
- [ ] Online-Indikator (SuvaSense-spezifisch)
- [ ] Weitere Sensortypen (veml7700, system, mpu6050)
- [ ] Weitere eigene Ideen: …

!!! tip "Nicht übertreiben"
    Lieber ein gut gemachtes Feature als drei halbfertige.  
    Qualität vor Quantität – vor allem vor der Demo!