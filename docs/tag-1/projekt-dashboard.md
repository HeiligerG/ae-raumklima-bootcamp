# Projekt Tag 1 – Dashboard-Grundlayout

> Folgt [`projekt-anleitung-template.md`](../projekt/projekt-anleitung-template.md).

## Tagesziel

Am Ende des Tages hast du ein Dashboard mit zwei Karten
(Temperatur, Luftfeuchtigkeit), einer einfachen Verlaufsliste
und einem CSS-Layout, das auf Desktop und Mobile gut aussieht.

Du arbeitest im **Hauptprojekt** `app/` (nicht in `uebungen/`).
Du baust **alleine**.

## Voraussetzungen

- VS Code ist offen im Ordner `app/` deines ae-codebase-Forks.
- Live-Server-Extension installiert.
- Browser ist offen.

## Schritte

1. [Temperatur im DOM anzeigen](#schritt-1-temperatur-im-dom-anzeigen)
2. [Luftfeuchtigkeit daneben anzeigen](#schritt-2-luftfeuchtigkeit-daneben-anzeigen)
3. [Karten stylen](#schritt-3-karten-stylen)
4. [Verlaufsliste anlegen](#schritt-4-verlaufsliste-anlegen)
5. [Mobile-Anpassung](#schritt-5-mobile-anpassung)

---

## Schritt 1 – Temperatur im DOM anzeigen

**Lernziel**: Du kannst mit JavaScript den Text in einem
DOM-Element setzen.

**Was passiert**: JavaScript sucht das Element im Browser und
schreibt den Text rein.

### Datei

Lege `index.html` und `script.js` im Ordner `app/` an.

### Was passiert zuerst

In `index.html`:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Raumklima Monitor</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <section class="card" id="temp-card">
      <h1>Temperatur</h1>
      <p id="temp-value">–</p>
    </section>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

In `script.js`:

```javascript
function updateTemp(value) {
  document.getElementById('temp-value').textContent = value + ' °C';
}
```

### Probier es aus

Konsole (F12), tippe `updateTemp(23.4)`. Die Karte zeigt
jetzt `23.4 °C`.

### Was schiefgehen kann

- **Karte bleibt leer**. Die ID im JavaScript muss
  **genau gleich** sein wie im HTML.
- **Konsole zeigt `ReferenceError`**. `script.js` wurde nicht
  gespeichert oder die Einbindung im HTML stimmt nicht.

---

## Schritt 2 – Luftfeuchtigkeit daneben anzeigen

**Lernziel**: Du kannst eine zweite Karte mit eigenem Element
anlegen und mit JS befüllen.

**Was passiert**: Unter der Temperatur erscheint eine zweite
Karte. Sie zeigt Platzhalter, bis JS sie füllt.

### Datei

Ersetze den Inhalt von `index.html` durch:

```html
<main>
  <section class="card" id="temp-card">
    <h1>Temperatur</h1>
    <p id="temp-value">–</p>
  </section>

  <section class="card" id="hum-card">
    <h1>Luftfeuchtigkeit</h1>
    <p id="hum-value">–</p>
  </section>
</main>
```

In `script.js`, füge unter `updateTemp` ein:

```javascript
function updateHum(value) {
  document.getElementById('hum-value').textContent = value + ' %';
}
```

### Probier es aus

Konsole:

```javascript
updateTemp(23.4);
updateHum(42);
```

Beide Karten zeigen jetzt Werte.

---

## Schritt 3 – Karten stylen

**Lernziel**: Du kannst mit CSS Karten gestalten und mit
Flexbox nebeneinander anordnen.

**Was passiert**: Die Karten bekommen weissen Hintergrund,
runde Ecken, Schatten – und liegen nebeneinander.

### Datei

Lege `style.css` im Ordner `app/` an.

```css
main {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 16px;
}

.card {
  flex: 1 1 280px;
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card h1 {
  font-size: 1rem;
  color: #555;
  margin: 0 0 8px;
}

.card p {
  font-size: 2rem;
  color: #222;
  margin: 0;
}
```

### Probier es aus

Speichern, Browser aktualisieren. Karten liegen nebeneinander.

### Was schiefgehen kann

- **Karten untereinander statt nebeneinander**. `display:
  flex` fehlt oder Tippfehler.
- **Stil greift nicht**. Pfad im `<link>` prüfen.

---

## Schritt 4 – Verlaufsliste anlegen

**Lernziel**: Du kannst eine leere Liste anlegen und via JS
einen Eintrag hinzufügen.

**Was passiert**: Unter den Karten erscheint eine dritte
Sektion "Verlauf" mit einem hartcodierten Eintrag.

### Datei

In `index.html`, nach `</main>` aber **vor** `<script>`:

```html
<section class="card" id="history-card">
  <h1>Verlauf</h1>
  <ul id="history-list"></ul>
</section>
```

In `script.js`, füge hinzu:

```javascript
function addHistory(temp, time) {
  const li = document.createElement('li');
  li.textContent = time + '  ' + temp + ' °C';
  document.getElementById('history-list').appendChild(li);
}

addHistory(23.0, '08:00');
addHistory(22.7, '08:05');
```

### Probier es aus

Speichern, Browser aktualisieren. Unter den Karten ist die
Verlaufsliste mit zwei Einträgen.

---

## Schritt 5 – Mobile-Anpassung

**Lernziel**: Du kannst mit `@media` das Layout für mobile
Bildschirme anpassen.

**Was passiert**: Auf schmalen Bildschirmen stapeln sich die
Karten automatisch.

### Datei

In `style.css`, am Ende:

```css
@media (max-width: 600px) {
  main {
    flex-direction: column;
  }

  .card p {
    font-size: 1.5rem;
  }
}
```

### Probier es aus

Browserfenster schmaler machen (unter 600 px). Karten
stapeln sich.

---

## Definition of Done

- [ ] Zwei Karten sichtbar: Temperatur und Luftfeuchtigkeit.
- [ ] Beide Werte werden per JS gesetzt (über Konsole geprüft).
- [ ] Karten nebeneinander auf Desktop, untereinander auf Mobile.
- [ ] Verlaufsliste zeigt mindestens 2 Einträge.
- [ ] CSS verwendet `textContent`, kein `innerHTML`.
- [ ] Code committed und auf den eigenen Branch gepusht.

## Wie weiter?

Im **Projekt Tag 2** baust du Daten aus `data.json` ein und
füllst die Werte **automatisch** statt über die Konsole.

## Wo gibt's Hilfe?

- Trainer: 1:1-Fragen direkt im Raum.
- Lernleitfaden:
  [Theorie-Happen Tag 1](../tag-1/index.md).
- [Projekt-Schritt-Template](../projekt/projekt-schritt-template.md).
