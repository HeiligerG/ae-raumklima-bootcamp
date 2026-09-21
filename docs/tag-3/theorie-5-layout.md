# Theorie-Happen 5 – Layout finalisieren

> **Happen 5** von 6 an Tag 3. Dauer: ~10 min.

## Lernziel

Du kannst das **Layout** der App so aufbauen, dass alle
Bestandteile (Temperatur, Luftfeuchtigkeit, Status, Verlauf)
sinnvoll angeordnet sind.

## Das Layout des Raumklima-Dashboards

```
┌─────────────────────────────────────────┐
│ [Sensor-Dropdown ▼]   [Refresh-Button]  │
├──────────────────┬──────────────────────┤
│  Temperatur      │  Luftfeuchtigkeit    │
│  23.4 °C         │  42 %                │
│  gut             │  gut                │
├──────────────────┴──────────────────────┤
│  Verlauf                                │
│  08:30  23.4 °C                         │
│  08:25  23.2 °C                         │
│  08:20  22.9 °C                         │
└─────────────────────────────────────────┘
```

Drei grosse **Bereiche**:

1. **Header** mit Dropdown und Refresh-Button
2. **Zwei Karten** nebeneinander: Temperatur + Luftfeuchtigkeit
3. **Verlaufsliste** darunter

## HTML-Struktur

```html
<main>
  <header>
    <select id="sensor-select">…</select>
    <button id="refresh-btn">Aktualisieren</button>
  </header>

  <section class="karten">
    <section class="card" id="temp-card">
      <h1>Temperatur</h1>
      <p id="temp-value">–</p>
      <p id="temp-status" class="status gut">–</p>
    </section>

    <section class="card" id="hum-card">
      <h1>Luftfeuchtigkeit</h1>
      <p id="hum-value">–</p>
      <p id="hum-status" class="status gut">–</p>
    </section>
  </section>

  <section class="card" id="history-card">
    <h1>Verlauf</h1>
    <ul id="history-list"></ul>
  </section>
</main>
```

## CSS für die Anordnung

```css
.karten {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.karten .card {
  flex: 1 1 280px;
}

.status.gut      { color: #2e7d32; }
.status.kritisch { color: #f9a825; }
.status.schlecht { color: #c62828; }
```

## Responsive Verhalten

Auf dem Handy sollen die Karten **untereinander** stehen:

```css
@media (max-width: 600px) {
  .karten {
    flex-direction: column;
  }
}
```

## Probier es aus

Öffne deine App im Browser. Verändere die Browser-Fenster-Breite.
Die Karten sollen:

- **ab 600 px Breite**: nebeneinander (mit Lücke dazwischen).
- **unter 600 px**: untereinander.
