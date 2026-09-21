# Projekt Tag 4 – Polish und optionale Features

> Folgt [`projekt-anleitung-template.md`](../projekt/projekt-anleitung-template.md).

## Tagesziel

Heute **kein** Pflicht-Stoff. Du arbeitest an deinem Projekt.
Wähle selbst, was du anpackst:

- Pflichtumfang polieren.
- Bugs fixen.
- Optionale Features einbauen (siehe unten).
- Demo vorbereiten (Tag 5 ist Demo-Tag).

Du arbeitest im **Hauptprojekt** `app/`. Alles ist freiwillig.

## Voraussetzungen

- Stand von Projekt Tag 3 läuft (Cards, Dropdown, Verlauf,
  Fallback).
- Du hast das **`backup-video`-Skript** verstanden
  (siehe [Trainer-Briefing: Demo](https://github.com/HeiligerG/ae-trainer-briefing)).
- Du weisst, **welche** Demo-Slots du an Tag 4 besuchen willst.

## Was sind die optionalen Features?

| Feature | Slot (Tag 4) | Aufwand |
|---|---|---|
| Dark Mode | Slot 1 | ~30 min |
| Chart.js (Verlaufsgrafik) | Slot 2 | ~1 h |
| Animationen (Hover, Pulse) | Slot 3 | ~30 min |
| Auto-Refresh alle 30 s | Slot 4 | ~30 min |

Die Slots sind **freiwillig** – geh nur hin, wenn dich das
Thema interessiert. Die Slots zeigen den **Stand**,
anschliessend baust du selbst ein.

---

## Schritte (alle freiwillig, in beliebiger Reihenfolge)

1. [Bug-Fix-Routine](#schritt-1-bug-fix-routine)
2. [Polish: Layout aufräumen](#schritt-2-polish-layout-aufräumen)
3. [Optional: Dark Mode](#schritt-3-optional-dark-mode)
4. [Optional: Auto-Refresh](#schritt-4-optional-auto-refresh)
5. [Optional: Chart.js](#schritt-5-optional-chartjs)
6. [Optional: Animationen](#schritt-6-optional-animationen)
7. [Demo-Vorbereitung](#schritt-7-demo-vorbereitung)

---

## Schritt 1 – Bug-Fix-Routine

**Lernziel**: Du kannst typische Bugs **systematisch** finden.

**Was passiert**: Du gehst gezielt durch deine App und findest
kleine Probleme.

### Vorgehen

- Browser-Konsole (F12) prüfen: sind Fehler rot?
- DevTools → Tab **Network**: gibt es 4xx/5xx-Responses?
- Edge-Cases probieren: Sensor wechseln, Browser refresh,
  Offline-Modus togglen.
- Verschiedene Sensor-Werte ansehen: was passiert bei 17 °C
  und bei 30 °C?

### Probier es aus

Konsole zeigt keine roten Fehler mehr. App reagiert auf
alle Edge-Cases sauber.

---

## Schritt 2 – Polish: Layout aufräumen

**Lernziel**: Du kannst kleine Schönheitsfehler beseitigen.

**Was passiert**: Dein Dashboard sieht **fertig** aus.

### Vorgehen

- Abstände zwischen Karten prüfen.
- Schriftgrössen einheitlich.
- Header-Farbe mit Theme-Buttons ergänzen.
- Fusszeile mit deinem Namen.
- Loading-Spinner oder Hinweis "Daten werden geladen",
  wenn der Fetch läuft.

### Datei

In `style.css`, füge eine Fusszeile hinzu:

```css
footer {
  background: #00695c;
  color: white;
  text-align: center;
  padding: 12px;
  font-size: 0.85rem;
}
```

In `index.html`, am Ende:

```html
<footer>Raumklima Monitor – [Dein Name]</footer>
```

### Probier es aus

Speichern, Browser neu laden. Unten erscheint eine Fusszeile.

---

## Schritt 3 – Optional: Dark Mode

> **Voraussetzung**: Du warst im Tag-4-Slot 1 (Dark Mode).

**Lernziel**: Du kannst CSS-Variablen und
`prefers-color-scheme` einsetzen.

**Was passiert**: Deine App hat einen Dark Mode, der sich am
Betriebssystem orientiert.

### Datei

In `style.css`, **oben**:

```css
:root {
  --background: #f5f5f5;
  --text: #222;
  --card-bg: white;
  --shadow: rgba(0, 0, 0, 0.1);
  --header-bg: #00695c;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #1e1e1e;
    --text: #f0f0f0;
    --card-bg: #2a2a2a;
    --shadow: rgba(0, 0, 0, 0.5);
    --header-bg: #004d40;
  }
}

body {
  background: var(--background);
  color: var(--text);
}

header {
  background: var(--header-bg);
}

.card {
  background: var(--card-bg);
  box-shadow: 0 2px 8px var(--shadow);
}
```

### Probier es aus

In System-Einstellungen auf Dark Mode umschalten (oder in
Chrome DevTools → Rendering → "Emulate CSS prefers-color-
scheme: dark"). Die App wird dunkel.

---

## Schritt 4 – Optional: Auto-Refresh

> **Voraussetzung**: Du warst im Tag-4-Slot 4 (Auto-Refresh).

**Lernziel**: Du kannst einen Timer starten und stoppen.

**Was passiert**: Die App holt alle 30 Sekunden frische Daten.

### Datei

In `script.js`:

```javascript
let refreshTimer = null;

function startAutoRefresh(serial, intervalMs = 30000) {
  return setInterval(() => {
    getBundles(serial).then(items => {
      showCurrent(items);
      renderHistory(items);
      showStatus(items);
    });
  }, intervalMs);
}

select.addEventListener('change', () => {
  const serial = select.value;
  if (!serial) return;
  if (refreshTimer) clearInterval(refreshTimer);
  getBundles(serial).then(items => {
    showCurrent(items);
    renderHistory(items);
    showStatus(items);
    refreshTimer = startAutoRefresh(serial);
  });
});
```

### Probier es aus

Browser-Tab offen lassen, Konsole beobachten. Alle
30 Sekunden erscheint ein neuer Fetch-Call.

---

## Schritt 5 – Optional: Chart.js

> **Voraussetzung**: Du warst im Tag-4-Slot 2 (Chart.js).

**Lernziel**: Du kannst eine externe Bibliothek per CDN
einbinden und einen Verlaufsgraphen rendern.

**Was passiert**: Du ersetzt die Verlaufsliste durch einen
hübschen Liniendiagramm.

### Datei

In `index.html` im `<head>`:

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

In `index.html`, ersetze die `id="history-card"` durch:

```html
<section class="card" id="history-card">
  <h1>Verlauf</h1>
  <canvas id="history-chart"></canvas>
  <ul id="history-list" hidden></ul>
</section>
```

In `script.js`:

```javascript
function renderHistoryChart(items) {
  const labels = items.map(item => item.timestamp);
  const data = items.map(item => item.temperature);

  new Chart(document.getElementById('history-chart'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Temperatur (°C)',
        data: data,
        borderColor: '#26a69a',
        tension: 0.3,
      }],
    },
  });
}
```

### Probier es aus

Speichern, Browser neu laden. Anstelle der Liste ist jetzt
eine hübsche Linie zu sehen.

---

## Schritt 6 – Optional: Animationen

> **Voraussetzung**: Du warst im Tag-4-Slot 3 (Animationen).

**Lernziel**: Du kannst mit `@keyframes` und `transition`
subtile Animationen einbauen.

**Was passiert**: Karten schweben leicht bei Hover, Status
pulsiert bei kritisch/schlecht.

### Datei

In `style.css`:

```css
.card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.6; }
}

.status.kritisch,
.status.schlecht {
  animation: pulse 1.5s ease-in-out infinite;
}
```

### Probier es aus

Speichern, Browser neu laden. Mit Maus über Karte fahren →
schwebt hoch. Bei kritischem Status: Pulsiert.

---

## Schritt 7 – Demo-Vorbereitung

**Lernziel**: Du bist für Tag 5 bereit.

**Was passiert**: Du hast ein Backup-Video und eine klare
Demo-Routine.

### Vorgehen

1. Probe-Demo alleine (5 min).
2. Backup-Video aufnehmen (z. B. mit OBS oder QuickTime).
3. Demo-Skript notieren:

    - Begrüssung (1 min).
    - Live-Vorführung (3 min).
    - Eine Frage, die du beantworten kannst.
4. Sicherstellen, dass die App **auch im Offline-Modus**
   funktioniert (WLAN trennen → App bleibt mit Daten aus
   `data.json`).

### Was du im Trainer-Briefing findest

Für die Demo-Moderation:

- [Demo-Moderations-Skript Tag 5](https://github.com/HeiligerG/ae-trainer-briefing/blob/bootcamp-v2/docs/praesentationen/tag-5-demo.md)
- [Trainer-Live-Moderation Tag 5](https://github.com/HeiligerG/ae-trainer-briefing/blob/bootcamp-v2/docs/trainer-live-coding/tag-5-demo.md)

---

## Definition of Done

- [ ] Keine roten Fehler in der Konsole.
- [ ] Mindestens **ein** Polish-Schritt umgesetzt.
- [ ] Backup-Video existiert (für Tag 5).
- [ ] App läuft auch im Offline-Modus.
- [ ] Code committed und gepusht.

## Wie weiter?

Morgen ist **Demo-Tag** (Tag 5). Du zeigst deine App live
vor allen.

## Wo gibt's Hilfe?

- Trainer (1:1).
- [Trainer-Briefing, Tag-4-Slots](https://github.com/HeiligerG/ae-trainer-briefing/blob/bootcamp-v2/docs/praesentationen/tag-4-kurz/).
- [Trainer-Briefing, Tag-5-Demo-Moderation](https://github.com/HeiligerG/ae-trainer-briefing/blob/bootcamp-v2/docs/praesentationen/tag-5-demo.md).
