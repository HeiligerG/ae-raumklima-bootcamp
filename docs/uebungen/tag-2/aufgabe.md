# Übung Tag 2 – Daten aus JSON laden und anzeigen

> **Übung mit WOW-Effekt.** Vor dem Start ist im Repo
> **nichts** im Ordner `uebungen/tag-2/`. Du legst alles selbst
> an.

## Vorbedingung

Der Ordner `uebungen/tag-2/` im ae-codebase-Repo ist **leer**.
Du fängst bei null an. Du brauchst aber:

- Eine lauffähige `data.json`-Datei im **Hauptprojekt** `app/`.
  Falls du noch keine hast: siehe Schritt 0.

## Was du am Ende hast

Eine kleine HTML-Seite, die beim Öffnen Daten aus einer
lokalen `data.json` lädt und die wichtigsten Felder anzeigt.

## Wie lange

~2 Stunden.

---

## Schritt 0 – Eine `data.json` vorbereiten

**Lernziel**: Du weisst, wie eine `data.json` aussehen muss.

### Vorbereitung (nur falls du keine hast)

Im Ordner `app/` (Hauptprojekt, **nicht** `uebungen/`) erstelle
oder nimm eine vorhandene `data.json`. Inhalt:

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
      "temperature": 22.5,
      "humidity": 44.0
    }
  ]
}
```

Diese Datei brauchst du, damit `fetch('data.json')` etwas zu
laden hat.

---

## Schritt 1 – Eine HTML-Datei anlegen

**Lernziel**: Du kannst eine HTML-Datei mit Platzhaltern für
Daten anlegen.

**Was passiert**: VS Code erstellt eine neue Datei. Der Browser
zeigt eine Seite mit Überschrift "Daten aus data.json".

### Vorbereitung: Eine neue Datei anlegen

1. Öffne VS Code im Ordner `uebungen/tag-2/`.
2. Rechte Maustaste auf den Ordner → **"New File"**.
3. Name: **`index.html`**.
4. Enter.

### Tippe das in `index.html`

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Daten aus data.json</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>Daten aus data.json</h1>
    <p>Erste Temperatur: <span id="erste-temperatur">–</span></p>
    <p>Erster Zeitstempel: <span id="erster-zeit">–</span></p>
  </main>

  <!-- TODO: <script src="script.js"></script> am Ende von body einbinden -->
</body>
</html>
```

### Probier es aus

Live-Server starten (Rechtsklick auf `index.html` →
"Open with Live Server"). Die Seite zeigt Überschrift und
zwei Striche (–) als Platzhalter.

### Was schiefgehen kann

- **Datei heisst `index.htm`**. Browser zeigt Download.
  Anlegen in Gross-/Kleinschreibung prüfen.

**Was du noch machen musst**: Setze das `<script>`-Tag am Ende
von `<body>` ein (siehe TODO).

---

## Schritt 2 – Eine CSS-Datei anlegen

**Lernziel**: Du kannst die Seite optisch aufhübschen.

### Vorbereitung: Eine CSS-Datei anlegen

1. Rechte Maustaste auf `uebungen/tag-2/` → **"New File"**.
2. Name: **`style.css`**.
3. Enter.

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

h1 {
  font-size: 1.5rem;
  margin-bottom: 16px;
}

p {
  font-size: 1rem;
  margin: 8px 0;
}

#erste-temperatur {
  font-weight: bold;
  color: #26a69a;
}
```

### Probier es aus

Speichern, Browser aktualisieren. Die Seite ist jetzt zentriert
und leicht getönt.

---

## Schritt 3 – Eine JavaScript-Datei anlegen

**Lernziel**: Du kannst eine `script.js` anlegen und mit HTML
verbinden.

### Vorbereitung: Eine JavaScript-Datei anlegen

1. Rechte Maustaste auf `uebungen/tag-2/` → **"New File"**.
2. Name: **`script.js`**.
3. Enter.

### Verknüpfe die JS in `index.html`

Im `<body>`, **am Ende** (nach `</main>`):

```html
<script src="script.js"></script>
```

### Tippe das in `script.js`

```javascript
async function loadData() {
  // TODO: fetch + JSON.parse hier
}

loadData();
```

### Probier es aus

Öffne die Konsole (F12). Du siehst keine Fehler – aber auch
nichts passiert. Der TODO ist leer.

**Was du noch machen musst**: Schreibe den `fetch`-Aufruf in
die Funktion ein (siehe nächster Schritt).

---

## Schritt 4 – Daten laden (fetch)

**Lernziel**: Du kannst mit `fetch` eine lokale JSON-Datei laden.

### Tippe das in `script.js` (ersetze den TODO)

```javascript
async function loadData() {
  const response = await fetch('../app/data.json');
  const data = await response.json();
  return data;
}

async function showFirst() {
  const data = await loadData();
  const first = data.items[0];
  document.getElementById('erste-temperatur').textContent =
    first.temperature + ' °C';
  document.getElementById('erster-zeit').textContent =
    first.timestamp;
}

showFirst();
```

> Hinweis zum Pfad: `../app/data.json` geht **eine Ebene hoch**
> und dann in `app/`. Falls deine `data.json` woanders liegt:
> passe den Pfad an.

### Probier es aus

Speichern, Browser aktualisieren. Die Platzhalter (–) sind
jetzt durch echte Werte ersetzt: `23.4 °C` und der Zeitstempel.

### Was schiefgehen kann

- **`Failed to fetch`**. Pfad ist falsch. Prüfe:
  `data.json` liegt wirklich in `app/`?
- **`Cannot read property 'items' of undefined`**. JSON ist
  anders aufgebaut (z. B. ein direktes Array statt Objekt
  mit `items`-Feld).

**Was du noch machen musst**: Keine. Hol dir höchstens noch
ein Glas Wasser.

---

## Schritt 5 – Eine Liste aller Temperaturen

**Lernziel**: Du kannst mit `forEach` durch eine Liste gehen
und mehrere Elemente ins DOM schreiben.

**Was passiert**: Unter den zwei Daten erscheint eine Liste
aller Temperaturen.

### Tippe das in `index.html` (zwischen `</p>` und `</main>`)

```html
<ul id="alle-temperaturen"></ul>
```

### Tippe das in `script.js` (unter `showFirst()`)

```javascript
async function showAll() {
  const data = await loadData();
  const list = document.getElementById('alle-temperaturen');
  list.replaceChildren();

  data.items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.timestamp + '  ' + item.temperature + ' °C';
    list.appendChild(li);
  });
}

showAll();
```

### Probier es aus

Speichern, Browser aktualisieren. Unter den beiden Daten ist
eine **Liste** mit allen drei Einträgen zu sehen.

### Was schiefgehen kann

- **Liste bleibt leer**. `replaceChildren()` ist die moderne
  Methode, um eine Liste zu leeren. **Kein** `innerHTML = ''`.

---

## Geschafft!

Du hast jetzt eine Seite, die JSON-Daten lädt und anzeigt.
Auch das klappt **ganz ohne** `localStorage`.

??? success "Lösung anzeigen"
    Hier ist die vollständige Lösung für Tag 2:

    `uebungen/tag-2/index.html`:

    ```html
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <title>Daten aus data.json</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <main>
        <h1>Daten aus data.json</h1>
        <p>Erste Temperatur: <span id="erste-temperatur">–</span></p>
        <p>Erster Zeitstempel: <span id="erster-zeit">–</span></p>
        <ul id="alle-temperaturen"></ul>
      </main>
      <script src="script.js"></script>
    </body>
    </html>
    ```

    `uebungen/tag-2/style.css`:

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
    p   { font-size: 1rem;   margin: 8px 0; }
    #erste-temperatur {
      font-weight: bold;
      color: #26a69a;
    }
    ```

    `uebungen/tag-2/script.js`:

    ```javascript
    async function loadData() {
      const response = await fetch('../app/data.json');
      const data = await response.json();
      return data;
    }

    async function showFirst() {
      const data = await loadData();
      const first = data.items[0];
      document.getElementById('erste-temperatur').textContent =
        first.temperature + ' °C';
      document.getElementById('erster-zeit').textContent =
        first.timestamp;
    }

    async function showAll() {
      const data = await loadData();
      const list = document.getElementById('alle-temperaturen');
      list.replaceChildren();

      data.items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.timestamp + '  ' + item.temperature + ' °C';
        list.appendChild(li);
      });
    }

    showFirst();
    showAll();
    ```

## Was als Nächstes?

Im **Projekt Tag 2** baust du Statuslogik und einen Verlauf.
Diese Übung ist nur das Aufwärmen.

## Querverweise

- [Theorie-Happen Tag 2](../tag-2/index.md)
- [Übungs-Schritt-Template](../uebung-schritt-template.md)
