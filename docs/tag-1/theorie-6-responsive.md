# Theorie-Happen 6 – Responsive Design

> **Happen 6** von 6 an Tag 1. Dauer: ~10 min.

## Lernziel

Du kannst mit einer **`@media`-Query** das Layout für mobile
Bildschirme anpassen.

## Was ist Responsive Design?

**Responsive Design** heisst: die Seite sieht auf **jedem**
Bildschirm gut aus – auf einem 27-Zoll-Monitor **und** auf
einem 5-Zoll-Handy.

Der Trick: dieselbe Seite, **anderes** CSS je nach Bildschirmgrösse.

## So sieht eine @media-Query aus

```css
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
```

Das bedeutet:

> "Wenn der Bildschirm **maximal** 600 Pixel breit ist, dann
> stapele die Karten **untereinander** (`flex-direction: column`)."

Ohne `@media` bleiben sie nebeneinander.

## Wichtige Schwellen

| Name | min/max | Bedeutung |
|---|---|---|
| Mobile | bis 600 px | Handy im Portrait-Modus. |
| Tablet | 600 – 900 px | Handy quer oder kleines Tablet. |
| Desktop | ab 900 px | Laptop oder grösser. |

## Beispiel: vollständiges Layout

```css
.container {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.card {
  flex: 0 0 280px;
}

@media (max-width: 600px) {
  .card {
    flex: 0 0 100%;
  }
}
```

**Erklärung**:

- **Immer**: Flexbox nebeneinander, Karten 280 px breit.
- **Unter 600 px**: `flex: 0 0 100%` = jede Karte füllt die ganze
  Breite. Die Karten stapeln sich automatisch untereinander.

## Probier es aus

Im Projekt Tag 1 baust du eine `@media`-Query ein. Verkleinere
das Browser-Fenster auf unter 600 px. Die Karten sollen sich
untereinander stapeln.
