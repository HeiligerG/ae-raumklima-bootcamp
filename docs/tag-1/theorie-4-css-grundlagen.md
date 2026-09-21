# Theorie-Happen 4 – CSS Grundlagen

> **Happen 4** von 6 an Tag 1. Dauer: ~10 min.

## Lernziel

Du kannst CSS-Selektoren, Farben, Schrift und das Box-Modell
gezielt einsetzen.

## Was ist CSS?

**CSS** steht für *Cascading Style Sheets*. CSS sagt dem Browser,
**wie** die HTML-Elemente aussehen (Farbe, Grösse, Schrift,
Position).

CSS besteht aus **Regeln**:

```css
selector {
  eigenschaft: wert;
}
```

## Selektoren

| Selektor | Was er wählt |
|---|---|
| `h1` | Alle `<h1>`-Tags. |
| `.card` | Alle Elemente mit `class="card"`. |
| `#temp-card` | Genau das Element mit `id="temp-card"`. |
| `.card h1` | Alle `<h1>` **innerhalb** von Elementen mit `class="card"`. |

## Beispiel: Karte stylen

```css
.card {
  background: white;
  color: #222;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card h1 {
  font-size: 1.5rem;
  margin: 0 0 8px;
}

.card p {
  font-size: 1rem;
  color: #555;
}
```

## Das Box-Modell

Jedes Element hat vier "Boxen":

```
┌── margin ──────────────────────┐
│ ┌── border ──────────────────┐ │
│ │ ┌── padding ─────────────┐ │ │
│ │ │ ┌── content ─────────┐ │ │ │
│ │ │ │                    │ │ │ │
│ │ │ └────────────────────┘ │ │ │
│ │ └─────────────────────────┘ │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

- **content**: Der eigentliche Inhalt (Text, Bild).
- **padding**: Abstand **innerhalb** der Box.
- **border**: Die Umrandung.
- **margin**: Abstand **ausserhalb** der Box (zu Nachbarn).

## Probier es aus

In der Übung Tag 1 legst du eine `style.css` an und bindest sie
in `index.html` ein. Du siehst die Karte mit weissem Hintergrund,
runden Ecken und Schatten.
