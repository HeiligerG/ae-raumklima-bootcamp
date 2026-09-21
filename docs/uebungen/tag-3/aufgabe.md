# Übung Tag 3 – Statuslogik und Verlauf ohne localStorage

> **Übung mit WOW-Effekt.** Vor dem Start ist im Repo
> **nichts** im Ordner `uebungen/tag-3/`. Du legst alles selbst
> an.

## Vorbedingung

Der Ordner `uebungen/tag-3/` im ae-codebase-Repo ist **leer**.
Du brauchst die `data.json` aus Tag 2 im Hauptprojekt `app/`.

## Was du am Ende hast

Eine Seite, die drei Push-Bundles anzeigt und für jeden
**eine Statuslogik** berechnet (gut / kritisch / schlecht).
**Kein `localStorage`** – bewusst weggelassen.

## Wie lange

~2 Stunden.

---

## Schritt 1 – Dateien anlegen

**Lernziel**: Du kannst drei Files (HTML, CSS, JS) parallel
anlegen.

**Was passiert**: Drei leere Dateien entstehen im Übungs-Ordner.

### Vorbereitung: Drei Dateien anlegen

Im Ordner `uebungen/tag-3/`:

1. Rechte Maustaste → **New File** → Name: **`index.html`** → Enter.
2. Rechte Maustaste → **New File** → Name: **`style.css`** → Enter.
3. Rechte Maustaste → **New File** → Name: **`script.js`** → Enter.

---

## Schritt 2 – HTML anlegen

**Lernziel**: Du kannst eine Seite mit zwei Bereichen anlegen:
Liste oben, Status-Auswertung unten.

### Tippe das in `index.html`

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Statuslogik</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>Statuslogik aus data.json</h1>

    <section>
      <h2>Push-Bundles</h2>
      <ul id="bundles"></ul>
    </section>

    <section>
      <h2>Status-Auswertung</h2>
      <p id="auswertung">–</p>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

### Probier es aus

Live-Server starten. Die Seite zeigt zwei Überschriften und
leere Bereiche.

---

## Schritt 3 – CSS anlegen

**Lernziel**: Du kannst Status-Farben sauber stylen.

### Tippe das in `style.css`

```css
body {
  font-family: system-ui, sans-serif;
  background: #f5f5f5;
  color: #222;
  margin: 24px;
}

main {
  max-width: 560px;
  margin: 0 auto;
}

h1 { font-size: 1.5rem; margin-bottom: 16px; }
h2 { font-size: 1.2rem; margin-top: 16px; }

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 8px;
  margin: 4px 0;
  background: white;
  border-radius: 4px;
}

#auswertung {
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  background: white;
}

.status-gut      { color: #2e7d32; }
.status-kritisch { color: #f9a825; }
.status-schlecht { color: #c62828; }
```

### Probier es aus

Speichern, Browser aktualisieren. Die Seite sieht jetzt sauber
aus: weisse Karten, etwas Liniendichte.

---

## Schritt 4 – Status-Funktion

**Lernziel**: Du kannst eine Funktion schreiben, die aus einem
Temperaturwert einen Status ableitet.

**Was passiert**: Die Funktion `tempStatus(t)` ist da. Du kannst
sie in der Konsole testen.

### Tippe das in `script.js`

```javascript
const MIN_GUT = 20;
const MAX_GUT = 26;
const MIN_KRITISCH = 18;
const MAX_KRITISCH = 28;

function tempStatus(temperature) {
  // TODO: gib 'gut', 'kritisch' oder 'schlecht' zurück
}
```

### Probier es aus

In der Konsole (F12): `tempStatus(23.4)`. Die Funktion gibt
noch `undefined` zurück.

**Was du noch machen musst**: Schreibe die Logik in die
Funktion ein. Sie soll:

- `schlecht` zurückgeben, wenn der Wert ausserhalb 18–28 liegt.
- `kritisch` zurückgeben, wenn der Wert ausserhalb 20–26 liegt.
- Sonst `gut`.

Tipp: Die Konstante `MIN_GUT` ist `20`, `MAX_GUT` ist `26`,
etc.

---

## Schritt 5 – Push-Bundles laden und anzeigen

**Lernziel**: Du kannst die `data.json` laden und jeden Eintrag
in einer Liste anzeigen.

### Tippe das in `script.js` (unter der Status-Funktion)

```javascript
async function loadBundles() {
  const response = await fetch('../app/data.json');
  const data = await response.json();
  return data.items;
}

async function showBundles() {
  const items = await loadBundles();
  const list = document.getElementById('bundles');
  list.replaceChildren();

  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.timestamp + '  ' + item.temperature + ' °C';
    list.appendChild(li);
  });

  return items;
}

showBundles();
```

### Probier es aus

Speichern, Browser aktualisieren. Die **Liste** unter
"Push-Bundles" zeigt die drei Einträge aus `data.json`.

### Was schiefgehen kann

- **Liste bleibt leer**. Pfad zu `data.json` falsch.
- **`replaceChildren is not a function`**. Dein Browser ist
  zu alt (sollte nicht passieren).

---

## Schritt 6 – Status auswerten

**Lernziel**: Du kannst die Statuslogik auf mehrere Einträge
anwenden und das Ergebnis zusammenfassen.

### Tippe das in `script.js` (unter `showBundles()`)

```javascript
async function analyse() {
  const items = await loadBundles();

  const counts = { gut: 0, kritisch: 0, schlecht: 0 };

  items.forEach(item => {
    const status = tempStatus(item.temperature);
    counts[status] += 1;
  });

  const auswertung =
    `${counts.gut} gut, ${counts.kritisch} kritisch, ${counts.schlecht} schlecht`;

  const el = document.getElementById('auswertung');
  el.textContent = auswertung;

  if (counts.schlecht > 0) el.classList.add('status-schlecht');
  else if (counts.kritisch > 0) el.classList.add('status-kritisch');
  else el.classList.add('status-gut');
}

analyse();
```

### Probier es aus

Speichern, Browser aktualisieren. Unter "Status-Auswertung"
steht jetzt sowas wie: `3 gut, 0 kritisch, 0 schlecht`.
Die Farbe passt sich an.

**Was du noch machen musst**: Keine. Hol dir einen Kaffee.

---

## Geschafft!

Du hast jetzt eine Seite, die Daten aus `data.json` holt, eine
Statuslogik anwendet und das Ergebnis zusammenfasst – alles
**ohne** `localStorage`.

??? success "Lösung anzeigen"
    Hier ist die vollständige Lösung für Tag 3:

    `uebungen/tag-3/index.html`:

    ```html
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <title>Statuslogik</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <main>
        <h1>Statuslogik aus data.json</h1>
        <section>
          <h2>Push-Bundles</h2>
          <ul id="bundles"></ul>
        </section>
        <section>
          <h2>Status-Auswertung</h2>
          <p id="auswertung">–</p>
        </section>
      </main>
      <script src="script.js"></script>
    </body>
    </html>
    ```

    `uebungen/tag-3/style.css`:

    ```css
    body {
      font-family: system-ui, sans-serif;
      background: #f5f5f5;
      color: #222;
      margin: 24px;
    }
    main { max-width: 560px; margin: 0 auto; }
    h1 { font-size: 1.5rem; margin-bottom: 16px; }
    h2 { font-size: 1.2rem; margin-top: 16px; }
    ul { list-style: none; padding: 0; }
    li {
      padding: 8px;
      margin: 4px 0;
      background: white;
      border-radius: 4px;
    }
    #auswertung {
      font-weight: bold;
      padding: 8px;
      border-radius: 4px;
      background: white;
    }
    .status-gut      { color: #2e7d32; }
    .status-kritisch { color: #f9a825; }
    .status-schlecht { color: #c62828; }
    ```

    `uebungen/tag-3/script.js`:

    ```javascript
    const MIN_GUT = 20;
    const MAX_GUT = 26;
    const MIN_KRITISCH = 18;
    const MAX_KRITISCH = 28;

    function tempStatus(temperature) {
      if (temperature < MIN_KRITISCH || temperature > MAX_KRITISCH)
        return 'schlecht';
      if (temperature < MIN_GUT || temperature > MAX_GUT)
        return 'kritisch';
      return 'gut';
    }

    async function loadBundles() {
      const response = await fetch('../app/data.json');
      const data = await response.json();
      return data.items;
    }

    async function showBundles() {
      const items = await loadBundles();
      const list = document.getElementById('bundles');
      list.replaceChildren();

      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.timestamp + '  ' + item.temperature + ' °C';
        list.appendChild(li);
      });

      return items;
    }

    async function analyse() {
      const items = await loadBundles();

      const counts = { gut: 0, kritisch: 0, schlecht: 0 };

      items.forEach(item => {
        const status = tempStatus(item.temperature);
        counts[status] += 1;
      });

      const auswertung =
        `${counts.gut} gut, ${counts.kritisch} kritisch, ${counts.schlecht} schlecht`;

      const el = document.getElementById('auswertung');
      el.textContent = auswertung;

      if (counts.schlecht > 0) el.classList.add('status-schlecht');
      else if (counts.kritisch > 0) el.classList.add('status-kritisch');
      else el.classList.add('status-gut');
    }

    showBundles();
    analyse();
    ```

## Was als Nächstes?

Im **Projekt Tag 3** baust du den V2-2-stufig-Fallback ein
(API → `data.json`). Diese Übung ist nur das Aufwärmen.

## Querverweise

- [Theorie-Happen Tag 3](../tag-3/index.md)
- [Übungs-Schritt-Template](../uebung-schritt-template.md)
- [Fallback-Strategie](../projekt/fallback-strategie.md)
