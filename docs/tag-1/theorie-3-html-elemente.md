# Theorie-Happen 3 – HTML-Elemente

> **Happen 3** von 6 an Tag 1. Dauer: ~10 min.

## Lernziel

Du kannst die wichtigsten HTML-Elemente (`h1`, `p`, `div`, `span`,
`main`, `section`) einsetzen und mit **Klassen** und **IDs**
versehen.

## Die wichtigsten Tags

| Tag | Wofür |
|---|---|
| `<h1>`, `<h2>`, `<h3>` | Überschriften (1 = grösste, 3 = kleine). |
| `<p>` | Ein Text-Absatz. |
| `<div>` | Ein **Container** ohne eigene Bedeutung. |
| `<span>` | Ein **inline**-Container (für einzelne Wörter im Text). |
| `<main>` | Der Hauptbereich der Seite. |
| `<section>` | Ein thematischer Abschnitt. |

### Beispiel

```html
<main>
  <section>
    <h1>Raumklima Büro 3.04</h1>
    <p>Aktuelle Temperatur: <span>23.4 °C</span></p>
  </section>
</main>
```

## Klassen und IDs

Manche Tags brauchen einen **Namen**, damit CSS oder JavaScript sie
finden kann.

- **`class="…"`** – Für **mehrere** Elemente des gleichen Stils.
  Beispiel: alle Karten heissen `class="card"`.
- **`id="…"`** – Für **ein einzelnes** Element. Beispiel: eine
  bestimmte Karte heisst `id="temp-card"`.

### Beispiel

```html
<section class="card" id="temp-card">
  <h1>Temperatur</h1>
  <p>23.4 °C</p>
</section>

<section class="card" id="hum-card">
  <h1>Luftfeuchtigkeit</h1>
  <p>42 %</p>
</section>
```

- Beide Karten haben `class="card"` (gleicher Stil).
- Jede Karte hat eine eigene `id` (eigener Zugriff per JS).

## Regeln für Klassen und IDs

- Nur **Buchstaben, Ziffern, Bindestrich, Unterstrich**.
- Beginnen mit einem **Buchstaben**.
- **Keine** Leerzeichen.
- IDs sind **eindeutig pro Seite**.

## Probier es aus

In der Übung Tag 1 baust du eine `section class="card"` mit einer
`<h1>` und einem `<p>` ein.
