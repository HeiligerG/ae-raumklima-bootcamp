# Projekt Tag 2 – Statuslogik & Verlauf

> Folgt [`projekt-anleitung-template.md`](../projekt/projekt-anleitung-template.md).

## Tagesziel

Am Ende des Tages zeigt dein Dashboard:

- Eine Karte mit **Temperatur aus `data.json`** (nicht mehr aus
  der Konsole).
- Einen **Status** (gut / kritisch / schlecht), automatisch
  berechnet.
- Einen **Verlauf** mit allen Einträgen aus `data.json`.

Du arbeitest im **Hauptprojekt** `app/` weiter (nicht in
`uebungen/`).

## Voraussetzungen

- Stand von Projekt Tag 1 ist fertig (zwei Karten, Layout,
  Verlaufsliste).
- Du hast eine `data.json` mit Push-Bundles im Hauptprojekt
  `app/` (oder im selben Ordner wie `index.html`).
- Browser-Konsole ist offen (F12).

## Schritte

1. [`data.json` verstehen und in App-Ordner kopieren](#schritt-1-datajson-vorbereiten)
2. [`getBundles(serial)` ohne API (nur Fallback)](#schritt-2-getbundles-mit-fallback)
3. [`tempStatus(t)` Funktion](#schritt-3-tempstatus-funktion)
4. [Daten beim Laden anzeigen](#schritt-4-daten-anzeigen)
5. [Verlauf rendern](#schritt-5-verlauf-rendern)
6. [Status im DOM setzen](#schritt-6-status-im-dom-setzen)

---

## Schritt 1 – `data.json` vorbereiten

**Lernziel**: Du weisst, wo die `data.json` liegen muss und
welchen Aufbau sie hat.

**Was passiert**: Im Browser-Tab ist klar, woher die Daten
kommen.

### Datei

Falls du noch keine `data.json` hast, lege eine im Ordner
`app/` an:

```json
{
  "items": [
    {
      "timestamp": "2024-01-01T08:30:00Z",
      "temperature": 23.4,
      "humidity": 42.0
    },
    {
      "timestamp": "2024-01-01T08:25:00Z",
      "temperature": 22.9,
      "humidity": 43.1
    },
    {
      "timestamp": "2024-01-01T08:20:00Z",
      "temperature": 17.5,
      "humidity": 48.0
    }
  ]
}
```

> Hinweis: Das letzte Bundle hat absichtlich **17.5 °C**, damit
> du später einen **schlechten** Status angezeigt bekommst.

### Probier es aus

Browser auf `http://localhost:5500/data.json` (Live-Server
URL). Du siehst das JSON. **Nicht** im Editor die Datei öffnen –
im Browser, damit du den Pfad verstehst.

### Was schiefgehen kann

- **404 auf `data.json`**. Datei liegt im falschen Ordner.
  Sie muss **neben** `index.html` liegen, nicht in `uebungen/`.

---

## Schritt 2 – `getBundles` mit Fallback

**Lernziel**: Du kannst eine `async`-Funktion mit `try/catch`
schreiben.

**Was passiert**: Eine Funktion ist da, die in der Konsole
Items liefert.

### Datei

In `script.js`, **oben** (über den anderen Funktionen):

```javascript
async function getBundles(serial) {
  try {
    const url = `../api/sensors/${serial}/readings?page=1&page_size=10`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API ${response.status}`);
    const data = await response.json();
    return data.items;
  } catch (apiError) {
    console.warn('API nicht erreichbar, fallback auf data.json:', apiError);
    const response = await fetch('data.json');
    const data = await response.json();
    return data.items;
  }
}
```

> Pfad-Hinweis: der API-Pfad (`../api/...`) wird in Tag 3
> gebraucht. Für Tag 2 schlägt er **immer** fehl, und der
> Fallback greift.

### Probier es aus

Konsole:

```javascript
getBundles('DEMO-001').then(items => console.log(items));
```

Du siehst die drei Items aus `data.json` und eine Warnung in
der Konsole.

### Was schiefgehen kann

- **`fetch failed` mehrfach**. Pfad zur `data.json` ist falsch.
- **`response.json() is not a function`**. Der Fetch-Aufruf
  liefert kein gültiges JSON.

---

## Schritt 3 – `tempStatus`-Funktion

**Lernziel**: Du kannst eine Funktion schreiben, die aus einem
Wert einen Status ableitet.

**Was passiert**: `tempStatus(23.4)` gibt `"gut"` zurück,
`tempStatus(17.5)` gibt `"schlecht"`.

### Datei

In `script.js`:

```javascript
function tempStatus(temperature) {
  if (temperature < 18 || temperature > 28) return 'schlecht';
  if (temperature < 20 || temperature > 26) return 'kritisch';
  return 'gut';
}
```

### Probier es aus

Konsole:

```javascript
tempStatus(23.4);
tempStatus(17.5);
tempStatus(27);
```

Du siehst `"gut"`, `"schlecht"`, `"kritisch"`.

---

## Schritt 4 – Daten anzeigen

**Lernziel**: Du kannst die neuesten Werte aus `data.json` in
die Karten schreiben.

**Was passiert**: Beim Laden der App werden die Karten
automatisch befüllt (nicht mehr via Konsole).

### Datei

In `script.js`, füge hinzu:

```javascript
async function showCurrent(items) {
  const latest = items[0];
  updateTemp(latest.temperature);
  updateHum(latest.humidity);
}
```

In `script.js`, am Ende (über den alten Aufrufen):

```javascript
getBundles('DEMO-001').then(showCurrent);
```

### Probier es aus

Browser neu laden. Karten zeigen jetzt die **erste**
Temperatur aus `data.json` (23.4 °C) und Luftfeuchtigkeit
(42 %). Die Konsole zeigt eine Warnung über den Fallback.

### Was schiefgehen kann

- **Karten bleiben leer**. `showCurrent` wird nicht
  aufgerufen oder `latest.temperature` ist `undefined`.

---

## Schritt 5 – Verlauf rendern

**Lernziel**: Du kannst die alten Konsole-Aufrufe
(`addHistory(23.0, '08:00')`) durch echte Daten ersetzen.

**Was passiert**: Die Verlaufsliste zeigt alle Items aus
`data.json`.

### Datei

In `script.js`:

```javascript
function renderHistory(items) {
  const list = document.getElementById('history-list');
  list.replaceChildren();

  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.timestamp + '  ' + item.temperature + ' °C';
    list.appendChild(li);
  });
}
```

Im Haupt-Aufruf (ersetze den bestehenden):

```javascript
getBundles('DEMO-001').then(items => {
  showCurrent(items);
  renderHistory(items);
});
```

> **Lösche** die alten `addHistory(...)`-Aufrufe, die du in
> Tag 1 noch hattest.

### Probier es aus

Speichern, Browser neu laden. Die Verlaufsliste zeigt drei
Einträge (auch das `17.5 °C`-Bundle).

---

## Schritt 6 – Status im DOM setzen

**Lernziel**: Du kannst den Status berechnen und im DOM
anwenden.

**Was passiert**: Auf der Status-Karte erscheint das Wort
"gut", "kritisch" oder "schlecht" mit passender Farbe.

### Datei

In `index.html`, ergänze in der Temperatur-Karte:

```html
<p id="temp-status" class="status gut">–</p>
```

In `script.js`, füge hinzu:

```javascript
function showStatus(items) {
  const status = tempStatus(items[0].temperature);
  const el = document.getElementById('temp-status');

  el.textContent = status;
  el.classList.remove('gut', 'kritisch', 'schlecht');
  el.classList.add(status);
}
```

Im Haupt-Aufruf (Ausbau):

```javascript
getBundles('DEMO-001').then(items => {
  showCurrent(items);
  renderHistory(items);
  showStatus(items);
});
```

In `style.css`:

```css
.status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  font-weight: bold;
}

.status.gut      { background: #e8f5e9; color: #2e7d32; }
.status.kritisch { background: #fff3e0; color: #e65100; }
.status.schlecht { background: #ffebee; color: #c62828; }
```

### Probier es aus

Speichern, Browser neu laden. Beim ersten Bundle (23.4 °C) ist
der Status grün ("gut"). Das ist mit dem hartcodierten
`17.5 °C` im Bundle 3 noch nicht sichtbar – wir probieren den
Status in Tag 3 mit echten Variationen.

---

## Definition of Done

- [ ] Werte in den Karten kommen aus `data.json`, nicht aus
      der Konsole.
- [ ] `tempStatus(t)` ist im Code, Schwellenwerte sind aus V2.
- [ ] Status-Element hat Text + Klasse + Farbe.
- [ ] Verlaufsliste zeigt alle Items aus `data.json`.
- [ ] Konsolen-Warnung über Fallback erscheint beim Start.
- [ ] Code committed und gepusht.
- [ ] **Kein `localStorage`** im Code.

## Wie weiter?

Im **Projekt Tag 3** baust du den Sensor-Dropdown und testest
den Fallback **aktiv** (Server "killen", Offline-Modus).

## Wo gibt's Hilfe?

- Trainer (1:1).
- [Theorie-Happen Tag 2](../tag-2/index.md).
- [Projekt-Schritt-Template](../projekt/projekt-schritt-template.md).
- [Übungs-Schritt-Template](../uebungen/uebung-schritt-template.md).
