# Optionale Features

## :material-target: Ziel

Wenn der Pflichtumfang fertig und getestet ist, kannst du deine App mit Bonus-Funktionen erweitern.

## Feature-Ideen

### :material-theme-light-dark: Dark Mode

Ein Toggle-Button zum Umschalten zwischen hellem und dunklem Design.

```html
<button id="theme-toggle" onclick="toggleTheme()">Dark Mode</button>
```

```javascript
function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Beim Laden wiederherstellen
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

Ein einfaches Balkendiagramm mit reinem CSS/HTML:

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
// Nach loadDashboard() aufrufen
setInterval(() => {
  loadDashboard();
}, 30000); // 30000 ms = 30 Sekunden
```

### :material-content-save: LocalStorage

Gewählten Raum oder Grenzwerte speichern:

```javascript
function saveSettings() {
  localStorage.setItem('currentRoom', currentRoom);
  localStorage.setItem('thresholds', JSON.stringify(thresholds));
}

function loadSettings() {
  currentRoom = localStorage.getItem('currentRoom') || 'B101';
  const saved = localStorage.getItem('thresholds');
  if (saved) thresholds = JSON.parse(saved);
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

## :material-check-all: Checkliste Optionale Features

- [ ] Dark Mode
- [ ] Diagramm
- [ ] Auto-Refresh
- [ ] LocalStorage
- [ ] Benachrichtigungs-Banner
- [ ] Präsentationsmodus
- [ ] Weitere eigene Ideen: …

!!! tip "Nicht übertreiben"
    Lieber ein gut gemachtes Feature als drei halbfertige.  
    Qualität vor Quantität – vor allem vor der Demo!