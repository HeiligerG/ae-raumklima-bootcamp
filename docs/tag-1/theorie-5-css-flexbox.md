# Theorie-Happen 5 – CSS-Layout (Flexbox)

> **Happen 5** von 6 an Tag 1. Dauer: ~10 min.

## Lernziel

Du kannst mit **Flexbox** mehrere Karten nebeneinander oder
untereinander anordnen.

## Was ist Flexbox?

**Flexbox** ist ein CSS-Layout, das Elemente in einer Reihe
(oder Spalte) anordnet. Du sagst: "diese Box ist der
**Container**, ihre Kinder sind **flex-items**."

```css
.container {
  display: flex;
  gap: 16px;
}
```

Das reicht schon, um mehrere Karten nebeneinander zu legen.

## Die wichtigsten Flexbox-Eigenschaften

Auf dem **Container** (`display: flex`):

| Eigenschaft | Was sie macht |
|---|---|
| `flex-direction` | `row` (Standard, nebeneinander) oder `column` (untereinander). |
| `gap` | Abstand zwischen den Items. |
| `justify-content` | Verteilung entlang der Hauptachse (`flex-start`, `center`, `space-between`). |
| `flex-wrap` | `wrap` = Items brechen in neue Zeile um. |
| `align-items` | Ausrichtung quer zur Hauptachse (`stretch`, `center`, `flex-start`). |

Auf den **Items**:

| Eigenschaft | Was sie macht |
|---|---|
| `flex: 1` | Item wächst, bis es den Platz füllt. |
| `flex: 0 0 300px` | Item bleibt genau 300 px breit. |

## Beispiel: Dashboard mit zwei Karten

```html
<main class="container">
  <section class="card" id="temp-card">
    <h1>Temperatur</h1>
    <p>23.4 °C</p>
  </section>

  <section class="card" id="hum-card">
    <h1>Luftfeuchtigkeit</h1>
    <p>42 %</p>
  </section>
</main>
```

```css
.container {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.card {
  flex: 0 0 280px;
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

Auf einem breiten Bildschirm: zwei Karten nebeneinander.
Auf einem schmalen Bildschirm: Karten umbrechen in eine Spalte
(dank `flex-wrap: wrap`).

## Probier es aus

Im Projekt Tag 1 baust du das Layout für das Dashboard. Zwei
oder drei Karten, mit Flexbox nebeneinander. Auf kleinen
Bildschirmen sollen sie umbrechen.
