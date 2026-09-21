# Konzept – Strukturvorschlag für V2

Mein Vorschlag, wie die V2-Anforderungen praktisch umgesetzt werden.
Bewusst trennbar von den Roh-Anforderungen, weil hier schon **Design-
Entscheidungen** drinstecken.

## Bestätigte Entscheidungen (Stand 2026-08-10, alle 10 Fragen geklärt)

| Punkt | Entscheidung |
|---|---|
| Tag 4/5 Struktur | Tag 4 = keine Pflichtstruktur (Lernende arbeiten frei, Trainer bietet Auswahl-Kurzpräsentationen). Tag 5 = nur Demo. |
| Theorie-Seiten | Mehrere kurze Seiten pro Tag, hand in hand mit Live-Coding-Sessions (5–15 min). |
| Übungs-Format | WOW-Effekt: Repo zu Übungsbeginn leer, Schritt-für-Schritt-Anleitung mit Code-Blöcken + Lücken. Übungen in separatem `uebungen/`-Ordner im ae-codebase-Repo. |
| Fallback-Strategie | **2-stufig ohne `localStorage`** (API → `data.json`). |
| Trainer-Material-Repo | `ae-trainer-briefing`. Komplett aufgesetzt, alles wandert aus ae-bootcamp raus. |
| Projekt-Anleitung Detail | Sehr detailliert, Schritt-für-Schritt, echter Sinn. |
| V2-Start | **2027**, kein Zeitdruck. |
| Datumsangaben | **Keine** in V2. Nur "Tag 1, Tag 2, …". |
| Theorie-Verteilung | Wie vorgeschlagen. Tag 4 nur Auswahl-Kurzpräsentationen. |
| Scope V2 | Wie in `01-ANFORDERUNGEN.md` H. |

## 1. Tagesstruktur – differenziert

### Tag 1, 2, 3 – Standard-Struktur

```
┌──────────────────────────────────────────────────────────────┐
│  THEORIE + LIVE-CODING (Trainer)              1:30 – 2:00 h  │
│  ─────────────────────────────────────────────────────────── │
│  Happen 1  (Theorie)         ~10 min                         │
│  Live-Coding-Snippet 1       ~10 min                         │
│  Happen 2  (Theorie)         ~10 min                         │
│  Live-Coding-Snippet 2       ~10 min                         │
│  …                                                          │
│  Total: 5–6 Theorie-Happen + 5–6 Live-Coding-Snippets       │
├──────────────────────────────────────────────────────────────┤
│  PAUSE                                                     │
├──────────────────────────────────────────────────────────────┤
│  ÜBUNG (Lernende hands-on, mit Lücken)        2:00 h        │
│  ─────────────────────────────────────────────────────────── │
│  WOW-Effekt: Repo zu Beginn leer                             │
│  Lernende folgen Schritt-für-Schritt-Anleitung              │
│  Legen Files selber an, kopieren Code, füllen Lücken         │
│  Lösung aufklappbar direkt unter der Aufgabe in der Doku    │
├──────────────────────────────────────────────────────────────┤
│  PROJEKT (eigenständig)                      ~2–3 h         │
│  ─────────────────────────────────────────────────────────── │
│  Detaillierte Schritt-für-Schritt-Anleitung                  │
├──────────────────────────────────────────────────────────────┤
│  TRAINER LIVE-CODING (Projekt-Lösung)        1:00 h         │
│  ─────────────────────────────────────────────────────────── │
│  Trainer co-det exakt das, was die Aufgabe verlangt hat     │
│  Alle landen auf gleichem Stand                              │
│  Fertige dürfen weitermachen, müssen aber nicht zuhören     │
└──────────────────────────────────────────────────────────────┘
```

### Tag 4 – "Austoben"

```
┌──────────────────────────────────────────────────────────────┐
│  EIGENSTÄNDIGE ARBEIT                        den ganzen Tag  │
│  ─────────────────────────────────────────────────────────── │
│  Polish Pflichtumfang (sollte seit Tag 3 fertig sein)       │
│  Optionale Features (Dark Mode, Chart.js, Auto-Refresh, …)  │
│  Aufräumen, Testen, Bugs fixen                              │
├──────────────────────────────────────────────────────────────┤
│  FREIWILLIGE AUSWAHL-KURZPRÄSENTATIONEN    mehrere Slots    │
│  ─────────────────────────────────────────────────────────── │
│  Slot 1 (10–15 min): z. B. Dark Mode                        │
│  Slot 2 (10–15 min): z. B. Chart.js                         │
│  Slot 3 (10–15 min): z. B. Animationen                      │
│  Slot 4 (10–15 min): z. B. Auto-Refresh                     │
│  …                                                          │
│  Lernende wählen, zu welchem Slot sie kommen                 │
├──────────────────────────────────────────────────────────────┤
│  TRAINER LIVE-CODING (Projekt-Lösung Tag 4) 1:00 h          │
│  ─────────────────────────────────────────────────────────── │
│  Optional Features / Polish – falls gewünscht                │
└──────────────────────────────────────────────────────────────┘
```

### Tag 5 – nur Demo

```
┌──────────────────────────────────────────────────────────────┐
│  PROBE-DEMO (allein)                          ~30 min        │
│  ─────────────────────────────────────────────────────────── │
│  Backup-Video aufnehmen                                     │
├──────────────────────────────────────────────────────────────┤
│  LIVE-DEMO (vor allen)                       ~5 min/Person   │
│  ─────────────────────────────────────────────────────────── │
│  App vorstellen, Fragen beantworten                         │
├──────────────────────────────────────────────────────────────┤
│  REFLEXION & ABSCHLUSS                       Rest des Tages  │
│  ─────────────────────────────────────────────────────────── │
│  Was habe ich gelernt? Was war schwierig?                   │
└──────────────────────────────────────────────────────────────┘
```

## 2. Theorie-Happen pro Tag (Vorschlag)

| Tag | Happen | Themen (gerundet) |
|---|---|---|
| **1** | 1 | Was ist eine Web-App? Browser, Server, URL. |
| | 2 | HTML-Grundgerüst: `doctype`, `html`, `head`, `body`. |
| | 3 | HTML-Elemente: `h1`, `p`, `div`, `span`, Klassen & IDs. |
| | 4 | CSS: Selektoren, Farben, Schrift, Box-Modell. |
| | 5 | CSS-Layout: Flexbox/Grid für Karten. |
| | 6 | Responsive: `@media` für Mobile. |
| **2** | 1 | JavaScript: Variablen, Funktionen, Aufruf. |
| | 2 | DOM: `getElementById`, `textContent`. |
| | 3 | JSON: Aufbau lesen und verstehen. |
| | 4 | `fetch()`: HTTP-Request, async/await. |
| | 5 | Statuslogik (gut / kritisch / schlecht). |
| | 6 | Verlaufsliste: dynamisch erzeugen mit `createElement`. |
| **3** | 1 | API-Endpunkt verstehen (URL, Parameter, Response). |
| | 2 | Fallback-Strategie – vereinfacht (siehe unten). |
| | 3 | Admin-Panel: Sensor-Dropdown. |
| | 4 | Fehlerbehandlung: `try/catch`. |
| | 5 | Layout finalisieren. |
| | 6 | Live-Integration mit SuvaSense (oder Stretch). |
| **4** | – | **Keine Pflicht-Theorie.** Auswahl-Kurzpräsentationen zu optionalen Features. |
| **5** | – | **Keine Theorie.** Nur Demo. |

## 3. Übungen (Format mit WOW-Effekt)

Jede Übung (Tag 1–3) folgt diesem Muster:

### 3.1 Vor der Übung

```
ae-raumklima-bootcamp-codebase/
├── app/                    ← Hauptprojekt (bleibt unangetastet)
└── uebungen/               ← hier wird gearbeitet
    └── (leer)
```

Im `uebungen/`-Ordner ist **nichts**. Lernende öffnen die Doku und
starten die Übung. WOW: "es war noch nichts da".

### 3.2 Während der Übung

Lernende folgen einer **Schritt-für-Schritt-Anleitung** in der Doku:

> **Schritt 1: Eine HTML-Datei anlegen**
>
> Wir bauen jetzt eine kleine Webseite, die eine Karte mit einer
> Überschrift zeigt.
>
> 1. Öffne VS Code im Übungs-Ordner
> 2. Erstelle eine Datei namens `index.html`
> 3. Füge diesen Code ein:
>
> ```html
> <!DOCTYPE html>
> <html lang="de">
> <head>
>   <meta charset="UTF-8">
>   <title>Meine erste Karte</title>
> </head>
> <body>
>   <!-- TODO: Hier kommt die Karte rein -->
> </body>
> </html>
> ```
>
> 4. **Probier es aus**: Rechtsklick auf die Datei → "Open with Live
>    Server". Du siehst eine leere Seite. WOW-Moment: deine erste
>    Webseite läuft!

> **Schritt 2: Eine Karte hinzufügen**
>
> Wir fügen jetzt eine Karte in den Body ein, an der Stelle mit dem
> TODO-Kommentar.
>
> 1. Ersetze den TODO-Kommentar durch:
>
> ```html
> <main>
>   <section class="card">
>     <h1>Hallo!</h1>
>     <p>Das ist meine erste Karte.</p>
>   </section>
> </main>
> ```
>
> 2. **Probier es aus**: Speichern, Browser aktualisieren. Die Karte
>    erscheint – aber noch ohne Styling.

> **Schritt 3: Styling hinzufügen**
>
> Wir erstellen jetzt eine CSS-Datei und verknüpfen sie.
>
> 1. Erstelle eine Datei `style.css`
> 2. Füge ein:
>
> ```css
> /* TODO: Wähle Farben, die dir gefallen */
> .card {
>   background: white;
>   border-radius: 8px;
>   padding: 16px;
>   box-shadow: 0 2px 8px rgba(0,0,0,0.1);
> }
> ```
>
> 3. Verknüpfe die CSS in `index.html` innerhalb von `<head>`:
>
> ```html
> <link rel="stylesheet" href="style.css">
> ```
>
> 4. **Probier es aus**: Die Karte hat jetzt einen weissen Hintergrund,
>    runde Ecken und einen leichten Schatten.

### 3.3 Lösung aufklappbar

Direkt unter der Aufgabe (oder am Ende der Seite) in der Doku:

```markdown
??? success "Lösung anzeigen"
    Hier ist die vollständige Lösung:

    `index.html`:
    ```html
    [komplette HTML]
    ```

    `style.css`:
    ```css
    [komplette CSS]
    ```
```

### 3.4 Nach der Übung

```
ae-raumklima-bootcamp-codebase/
├── app/                    ← Hauptprojekt (unverändert)
└── uebungen/
    └── tag-1/
        ├── index.html      ← Ergebnis der Übung
        └── style.css
```

**Nächste Übung startet mit leerem `uebungen/tag-2/`-Ordner.**
Übungen bauen nicht aufeinander auf – sie sind isolierte Mini-Projekte.

## 4. Projekt-Anleitung (Strategie ohne Vorkenntnisse)

Analog zu den Übungen, aber:
- **Kumulativ**: baut von Tag zu Tag aufeinander auf
- **Im Hauptprojekt** (`app/`), nicht im `uebungen/`-Ordner
- **Detailliert**: pro Schritt 1 Mikro-Lernziel, ~2 Sätze Erklärung,
  1 Code-Block zum Abtippen, "Probier es aus"-Hinweis
- **Anfangszustand** zu Tag 1: leeres `app/`-Verzeichnis mit
  `README.md` und `.gitignore`. WOW: "wir bauen alles von null"

Beispiel-Schritt (analog zu §3):

> **Schritt 3: Temperatur im DOM anzeigen**
>
> Wir haben ein leeres `<div id="temp-card">` in der HTML. Jetzt
> füllen wir es mit JavaScript.
>
> **Was passiert**: JavaScript sucht das Element im Browser, und
> schreibt den Text rein.
>
> **Tippe das** in `script.js`:
> ```javascript
> function updateTemp(value) {
>   document.getElementById('temp-card').textContent = value + ' °C';
> }
> ```
>
> **Probier es aus**: Öffne die DevTools-Konsole (F12) und tippe
> `updateTemp(23.4)`. Die Karte zeigt jetzt `23.4 °C`.

## 5. Vereinfachte Fallback-Strategie (Q4 bestätigt)

**Pflichtumfang – 2-stufig ohne `localStorage`:**

```javascript
async function getBundles(serial) {
  try {
    const url = `${API_BASE}/sensors/${serial}/readings?page=1&page_size=10`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API ${response.status}`);
    const data = await response.json();
    return data.items;
  } catch (apiError) {
    console.warn('API nicht erreichbar, fallback auf data.json:', apiError);
    const response = await fetch('data.json');
    const items = await response.json();
    return items;
  }
}
```

**Optional / Stretch (Tag 4+)**: `localStorage`-Snapshot als optionales
Feature (z. B. in einem Dark-Mode-Stretch).

## 6. Trainer-Live-Coding am Ende des Tages

Am Ende jedes Projekt-Tages (Tag 1–4) macht der Trainer 1 h Live-Coding
der **exakten** Projekt-Aufgabe des Tages. Tag 5: Demo-Moderation.

Anweisungen im Repo `ae-trainer-briefing/docs/trainer-live-coding/tag-N.md`
mit Format: nummerierte Schritte, jede Schritt-Anweisung hat
- **Datei** (welche Datei bearbeiten wir gerade?)
- **Konstante/Variable zuerst** (was kommt zuerst in die Datei?)
- **Funktion/Methode als nächstes** (Reihenfolge exakt)
- **Code-Block** (genau das, was der Trainer tippt)
- **Erklärung** (was der Trainer dabei sagt)
- **Andeutung / Hinweis** (z. B. "Hier kann es stecken bleiben, weil…")

## 7. Repo `ae-trainer-briefing` – Struktur

```
ae-trainer-briefing/
├── .github/workflows/deploy.yml    # MkDocs Build → GitHub Pages
├── docs/
│   ├── index.md                    # Trainer-Intro
│   ├── hinweise.md                 # Generelle Trainer-Hinweise
│   ├── risiken-und-fallbacks.md    # Risiken (WLAN, Backend down, …)
│   ├── praesentationen/
│   │   ├── index.md
│   │   ├── tag-1.md                # Standard-Präsentation Tag 1
│   │   ├── tag-2.md
│   │   ├── tag-3.md
│   │   └── tag-4-kurz/             # NEU: Auswahl-Kurzpräsentationen
│   │       ├── index.md            # Übersicht aller Slots
│   │       ├── dark-mode.md        # Slot 1 (10–15 min)
│   │       ├── chart-js.md         # Slot 2
│   │       ├── animationen.md      # Slot 3
│   │       ├── auto-refresh.md     # Slot 4
│   │       └── …
│   ├── live-coding/
│   │   ├── index.md
│   │   ├── tag-1/                  # Live-Coding-Skripte der Happen
│   │   ├── tag-2/
│   │   └── tag-3/
│   └── trainer-live-coding/        # End-of-Day-Live-Codings (Projekt-Lösungen)
│       ├── index.md
│       ├── tag-1.md
│       ├── tag-2.md
│       ├── tag-3.md
│       ├── tag-4.md                # Optional Features / Polish
│       └── tag-5-demo.md           # Demo-Moderation
├── mkdocs.yml
├── requirements.txt
├── CODE_OF_CONDUCT.md              # Verhaltenskodex für Trainer
├── .gitignore
└── README.md
```

**Was aus ae-raumklima-bootcamp rauswandert** (in `docs/trainer/` aktuell):

- `hinweise.md` → `ae-trainer-briefing/docs/hinweise.md`
- `tagesplanung.md` → aufteilen in `praesentationen/tag-X.md` (Tag 1–3)
- `risiken-und-fallbacks.md` → `ae-trainer-briefing/docs/risiken-und-fallbacks.md`
- `demo-sensor.md` → `ae-trainer-briefing/docs/` (Trainer-only)
- `index.md` → wird ersetzt durch kurzen Stub mit Link

In `ae-raumklima-bootcamp/docs/trainer/` bleibt dann nur ein Stub
(`index.md`) mit Link aufs neue Repo.

## 8. Was sich strukturell ändert (Überblick)

| Bereich | V1 | V2 |
|---|---|---|
| Theorie-Stoff | Lange Seite pro Tag, mit konkreten Daten | 5–6 kurze Happen pro Tag (Tag 1–3), ohne Daten. Tag 4 = Auswahl-Kurzpräsentationen. Tag 5 = keine Theorie. |
| Stoff-Vermittlung | Selber-Lesen | Trainer-Vortrag + Live-Coding (5–15 min) |
| Übungen | Grosse Aufgabe, fast ohne Skelett | WOW-Effekt: Repo leer, Schritt-für-Schritt-Anleitung in der Doku, Lücken zum Selber-Ausfüllen |
| Übungs-Pfad im Repo | `app/`-nah (Vermischung mit Projekt) | **Separat**: `uebungen/tag-N/` im ae-codebase-Repo |
| Projekt-Anforderungen | "Schreibe HTML mit IDs X, Y, Z" | Detaillierte Schritt-für-Schritt-Anleitung mit echtem Sinn |
| Fallback | 3-stufig inkl. localStorage | **2-stufig ohne localStorage** |
| Tag-Abschluss | Eigenständig weiter | Trainer Live-Coding (1h) – Tag 1–4 |
| Trainer-Material | `ae-raumklima-bootcamp/docs/trainer/` | **Eigenes Repo `ae-trainer-briefing`** |
| Tag-4-Inhalt | Gemischt (Polish + Theorie) | Nur optionale Features, freiwillige Auswahl-Kurzpräsentationen |
| Tag-5-Inhalt | Demo + Abschluss | **Nur** Demo + Abschluss |
| Trainer-Anweisungen | Nicht vorhanden | Strukturiertes Skript im Trainer-Repo |
| Datumsangaben | 06.08., 07.08., 10.08., 11.08., 12.08. | **Nur "Tag 1" bis "Tag 5"** |

## 9. Was gleich bleibt

- 5-Tage-Struktur (5 Tage, egal welche Wochentage)
- Datenmodell (Push-Bundle, BME680-Felder)
- API-Vertrag
- EDB-Schwellenwerte
- EDB als Schwellen-Quelle
- KI-Verbot
- Einzelarbeit
- 3-Git-Befehle
- W3Schools / MDN als Quellen
- ae-codebase `app/` als Lernenden-Hauptprojekt-Workspace
- Codebase ohne Build-Tool, ohne Framework

---

**Status**: Konzept mit allen 10 bestätigten Entscheidungen. Konkrete
Umsetzung folgt in Phase 1 der Tasks (siehe `05-TASKS.md`, T10–T13).
Die endgültige Form entsteht in Zusammenarbeit mit dir.