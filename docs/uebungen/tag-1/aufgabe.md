# Übung Tag 1 – Deine erste Webseite (mit Karte)

> **Übung mit WOW-Effekt.** Vor dem Start ist im Repo
> **nichts** im Ordner `uebungen/tag-1/`. Du legst jetzt alles
> selbst an.

## Vorbedingung

Der Ordner `uebungen/tag-1/` im ae-codebase-Repo ist **leer**.
Das ist Absicht. Lass dich nicht verunsichern: am Ende hast du
eine funktionierende Mini-Web-Seite.

## Was du am Ende hast

Eine kleine Webseite mit einer **Karte**, gerendert mit HTML
und CSS. Sie läuft im Browser.

## Wie lange

~2 Stunden. Du kannst in deinem Tempo arbeiten.

---

## Schritt 1 – Eine HTML-Datei anlegen

**Lernziel**: Du kannst eine HTML-Datei mit VS Code erstellen
und im Browser öffnen.

**Was passiert**: VS Code erstellt eine neue, leere Datei. Der
Browser zeigt eine leere weisse Seite an. Das ist richtig so.

### Vorbereitung: Eine neue Datei anlegen

1. Öffne VS Code im Übungs-Ordner (`uebungen/tag-1/`).
2. Im Explorer (links) rechte Maustaste auf den Ordner.
3. Wähle **"New File"**.
4. Tippe den Namen **`index.html`**.
5. Drücke Enter.

### Tippe das in `index.html`

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Meine erste Karte</title>
</head>
<body>
  <!-- TODO: Füge hier eine <section class="card"> mit <h1> und <p> ein -->
</body>
</html>
```

### Probier es aus

Rechtsklick auf `index.html` im Explorer →
**"Open with Live Server"**. Du siehst eine **leere weisse
Seite** – das ist korrekt, die Karte folgt im nächsten Schritt.

### Was schiefgehen kann

- **Live-Server zeigt "Cannot GET /"**. Datei liegt im
  falschen Ordner. Schliesse Live-Server. Öffne VS Code
  **im Ordner `uebungen/tag-1/`**. Starte Live-Server neu.

**Was du noch machen musst**: Setze an der markierten Stelle
eine `<section class="card">` mit `<h1>` und einem `<p>` ein.
Sie enthält deinen Namen im Titel und einen Lieblingssatz
im Text.

---

## Schritt 2 – Eine Karte hinzufügen

**Lernziel**: Du kannst HTML-Elemente mit Klassen und IDs
versehen und im Browser sehen.

**Was passiert**: Der Browser zeigt jetzt eine Karte mit
Überschrift und Text – aber noch **ohne** Styling.

### Tippe das in `index.html` (ersetze den TODO-Kommentar)

```html
<main>
  <section class="card" id="meine-karte">
    <h1>Dein Name</h1>
    <p>Dein Lieblingssatz.</p>
  </section>
</main>
```

### Probier es aus

Speichern, Browser aktualisieren. Die Karte erscheint – noch
ohne Styling.

**Was du noch machen musst**: Passe `<h1>` und `<p>` an: dein
Name in der Überschrift, dein Lieblingssatz im Text.

---

## Schritt 3 – Styling hinzufügen

**Lernziel**: Du kannst eine CSS-Datei erstellen, einbinden
und eine Karte stylen.

**Was passiert**: Die Karte bekommt weissen Hintergrund,
runde Ecken und einen leichten Schatten.

### Vorbereitung: Eine CSS-Datei anlegen

1. Rechte Maustaste auf den Ordner `uebungen/tag-1/`.
2. **"New File"**.
3. Name: **`style.css`**.
4. Enter.

### Tippe das in `style.css`

```css
/* TODO: Wähle Farben, die dir gefallen */
.card {
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 320px;
  margin: 24px auto;
}

.card h1 {
  font-size: 1.5rem;
  margin: 0 0 8px;
  color: #222;
}

.card p {
  font-size: 1rem;
  color: #555;
  margin: 0;
}
```

### Verknüpfe die CSS in `index.html`

Im `<head>`, **zwischen** `<title>` und `</head>`, füge ein:

```html
<link rel="stylesheet" href="style.css">
```

### Probier es aus

Speichern, Browser aktualisieren. Die Karte hat jetzt einen
weissen Hintergrund, runde Ecken und einen Schatten.

**Was du noch machen musst**: Fülle das TODO oben mit deinen
Lieblings-Farben. Zum Beispiel: `background: #f0f8ff` für ein
sehr helles Blau. Probiere mit `border-radius` verschiedene
Ecken-Rundungen aus (z. B. `0`, `4px`, `16px`).

---

## Schritt 4 – Responsive machen

**Lernziel**: Du kannst eine `@media`-Query einbauen, damit die
Karte auf dem Handy gut aussieht.

**Was passiert**: Auf schmalen Bildschirmen wird die Karte
etwas breiter und grösser.

### Tippe das in `style.css` (ganz am Ende)

```css
@media (max-width: 600px) {
  .card {
    max-width: 90%;
    font-size: 1.1rem;
  }
}
```

### Probier es aus

Verkleinere das Browser-Fenster auf unter 600 Pixel. Die Karte
passt sich an.

**Was du noch machen musst**: Keine. Schritt ist fertig.

---

## Geschafft!

Du hast jetzt eine Webseite mit einer Karte. Sie läuft im
Browser, ist responsive und hat dein Styling.

Im Projekt baust du morgen mehrere Karten, einen Verlauf, und
Daten aus einer `data.json`.

??? success "Lösung anzeigen"
    Hier ist die vollständige Lösung für Tag 1:

    `uebungen/tag-1/index.html`:

    ```html
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <title>Meine erste Karte</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <main>
        <section class="card" id="meine-karte">
          <h1>Gianluca</h1>
          <p>Ich liebe Pizza.</p>
        </section>
      </main>
    </body>
    </html>
    ```

    `uebungen/tag-1/style.css`:

    ```css
    .card {
      background: white;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      max-width: 320px;
      margin: 24px auto;
    }

    .card h1 {
      font-size: 1.5rem;
      margin: 0 0 8px;
      color: #222;
    }

    .card p {
      font-size: 1rem;
      color: #555;
      margin: 0;
    }

    @media (max-width: 600px) {
      .card {
        max-width: 90%;
        font-size: 1.1rem;
      }
    }
    ```

## Was als Nächstes?

Im **Projekt Tag 1** baust du das alles **nochmal** – aber für
das Raumklima-Dashboard mit zwei Karten und einem Verlauf.
Diese Übung ist nur das Aufwärmen.

## Querverweise

- [Theorie-Happen Tag 1](../tag-1/index.md)
- [Übungs-Schritt-Template](../uebung-schritt-template.md)
- [Projekt Tag 1](../tag-1/projekt-dashboard.md)
