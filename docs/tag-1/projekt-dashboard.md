# Projekt: Dashboard Grundlayout

!!! warning "Eigenarbeit – Spec + Skelett, kein Copy-Paste"
    Diese Aufgabe gibt dir **Anforderungen und ein Skelett**, aber nicht den fertigen Code. Du baust das CSS selbst, wählst Farben und entscheidest über das Layout. Der Lerngewinn liegt im Ausprobieren, nicht im Abschreiben.

    Wenn du nach 20 Minuten nicht weiterkommst, schau in
    [`loesungen/tag-1/`](https://ae-raumklima-bootcamp.readthedocs.io/loesungen/tag-1/) –
    aber bitte erst **nach** dem Versuch.

## :material-target: Aufgabe

Erstelle das Grundlayout für dein Raumklima-Dashboard. Es hat eine
Kopfzeile, eine Sensorkarte (Name, Temperatur, Feuchte, Status) und
einen leeren Bereich für den Verlauf (kommt Tag 2). Die Karte soll
auf Desktop und Handy gut aussehen.

## :material-book-open-outline: Anforderungen

- [ ] Es gibt eine sichtbare Kopfzeile mit dem Titel "Raumklima Monitor"
- [ ] Eine Karte zeigt vier Werte:
    - Sensor-Name (z. B. "Sensor SN12345")
    - Temperatur in Grad Celsius
    - Luftfeuchtigkeit in Prozent
    - Status (gut / kritisch / schlecht)
- [ ] Es gibt einen leeren Bereich für den Verlauf mit dem
      Platzhalter-Text "Lade Daten..."
- [ ] Der Status hat eine **sichtbare Farbe** (gut = grünlich,
      kritisch = orange, schlecht = rot – genaue Töne wählst du)
- [ ] Eine Fusszeile mit Copyright-Hinweis
- [ ] Das Layout funktioniert auf 600 px Bildschirmbreite (Werte
      passen sich an, nichts wird abgeschnitten)
- [ ] Code ist committed und auf einen eigenen Feature-Branch gepusht
      (siehe `CODE_OF_CONDUCT.md`)

## :material-hammer-wrench: Skelett (das musst du anlegen)

Drei Dateien in `app/`: `index.html`, `style.css`, `script.js` (leer).

### `index.html`

Die HTML muss diese **fünf IDs** enthalten – Tag 2 wird sie per
JavaScript befüllen, also müssen sie exakt so heissen:

| ID | Wofür |
|---|---|
| `#serial-number` | Sensor-Name in der Karte |
| `#temp-c` | Temperatur in °C |
| `#hum-pct` | Luftfeuchtigkeit in % |
| `#status` | Status-Badge (gut / kritisch / schlecht) |
| `#history-list` | Container für die Verlaufsliste (Tag 2) |

Die HTML-Struktur braucht ausserdem diese **drei CSS-Klassen** am
Status-Element, damit die Farben sichtbar werden:

- `class="status"` (Basis-Styling)
- `class="status gut"` (guter Status, grün)
- `class="status kritisch"` (kritisch, orange)
- `class="status schlecht"` (schlecht, rot)

### `style.css`

Du brauchst **kein vollständiges CSS-Framework** – nur diese
Selektoren (Werte wählst du selbst):

- `body` (Hintergrund, Schriftart, Layout)
- `header` (Hintergrundfarbe, Innenabstand, Schriftfarbe)
- `.card` (weisser Hintergrund, runde Ecken, leichter Schatten)
- `.values` (zwei Werte nebeneinander; auf Mobile untereinander)
- `.value-item` (einzelner Wert)
- `.label` (Beschriftung über dem Wert, klein und grau)
- `.number` (grosser Wert)
- `.status` (Basis-Styling für die Status-Pille)
- `.status.gut`, `.status.kritisch`, `.status.schlecht` (Farben)
- `.history` (Container für die Verlaufsliste)
- `footer` (Hintergrund wie header, kleinerer Text)
- `@media (max-width: 600px)` (Mobile-Anpassung)

### `script.js`

Leer anlegen – wird ab Tag 2 befüllt. Die Datei muss existieren und
in der HTML eingebunden sein (`<script src="script.js"></script>`
**vor** `</body>`).

## :material-lightbulb-on: Hinweise (verbal, kein Code)

### Layout

- Eine "Karte" ist im Webdesign ein weisser Block mit etwas
  Innenabstand (`padding`), abgerundeten Ecken (`border-radius`) und
  oft einem dezenten Schatten (`box-shadow`).
- Für die Kopf-zu-Fuss-Struktur eignet sich `display: flex` mit
  `flex-direction: column` und `min-height: 100vh`. Der `<main>`
  bekommt `flex: 1`, damit er den verbleibenden Platz füllt.
- Zwei Werte nebeneinander → `display: grid` mit
  `grid-template-columns: 1fr 1fr`.
- **Mobile:** innerhalb von `@media (max-width: 600px)` das
  Grid auf eine Spalte reduzieren.

### Farben

- Teal (`#00695c`) eignet sich als Hauptfarbe, weil es ruhig und
  seriös wirkt. Alternativ: ein dunkleres Blau oder Anthrazit.
- Status-Farben müssen nicht perfekt sein – Hauptsache **semantisch
  unterscheidbar**: grünlich, orange, rot. Beispiele:
  - `gut`: Hintergrund `#e8f5e9`, Schrift `#2e7d32`
  - `kritisch`: Hintergrund `#fff3e0`, Schrift `#e65100`
  - `schlecht`: Hintergrund `#ffebee`, Schrift `#c62828`
- Die Status-Pille bekommt `border-radius` und etwas
  Innenabstand, damit sie wie ein Badge aussieht.

### Responsives Design

- Teste im Browser, indem du das Fenster auf 600 px Breite
  ziehst.
- Falls Elemente abgeschnitten werden: `padding` reduzieren oder
  `box-sizing: border-box` global setzen (`* { box-sizing:
  border-box; }`).
- Schriftgrössen nicht in `px`, sondern besser in `rem`, dann
  passen sie sich an die Browser-Einstellung an. Für den Anfang
  reicht aber `px`.

## :material-check-all: Definition of Done (Selbst-Check)

- [ ] Alle 7 Anforderungen erfüllt
- [ ] IDs und Klassen wie oben spezifiziert vorhanden
- [ ] Konsole (F12) zeigt keine roten Fehler
- [ ] Git-Commit und Push auf eigenen Feature-Branch
- [ ] Commit-Message beschreibt, was du gebaut hast

## :material-help: Wenn du nicht weiterkommst

Nach 20 Min ohne nennenswerten Fortschritt:

1. Schau in [`loesungen/tag-1/`](https://ae-raumklima-bootcamp.readthedocs.io/loesungen/tag-1/) für die Referenz-Implementierung
2. **Verstehe zuerst**, was die Referenz anders macht als dein Ansatz
3. **Schliesse das Browser-Tab der Referenz** und baue deine Version fertig

Die `loesungen/`-Seiten sind **nicht** Teil des Lernflusses und werden
in der Navigation nicht prominent verlinkt.

## Nächster Schritt

[Checkpoint Tag 1](checkpoint.md)