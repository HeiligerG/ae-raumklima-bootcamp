# Übungs-Schritt-Template

Dieses Template definiert, **wie ein Übungs-Schritt aussieht**.
Alle Übungen in T50–T52 folgen diesem Schema. Lernende erkennen
das Schema wieder und arbeiten Schritt für Schritt zum Ergebnis.

> **Wichtigster Unterschied zum Projekt-Template**: Übungen haben
> **Lücken zum Selber-Ausfüllen** und starten in einem **leeren
> Repo-Ordner**. Das ist der WOW-Effekt.

## Wofür das Template da ist

| Ohne Template | Mit Template |
|---|---|
| Lückenlose Übung = Copy-Paste ohne Denken | Lücken erzwingen Mitdenken |
| Files liegen schon da = kein WOW | Ordner ist leer = WOW-Moment |
| Code ohne Kontext | Jeder Schritt hat klares Lernziel + Test |
| Lösung ist mühsam zu finden | Lösung aufklappbar direkt unter der Aufgabe |
| Sprachstil schwankt | Folgt `sprachstil-v2.md` |

## Anders als beim Projekt-Template (T13)

| Aspekt | Projekt-Schritt (T13) | Übungs-Schritt (T14) |
|---|---|---|
| Code | Vollständig zum Abtippen | Mit **Lücken** zum Selber-Ausfüllen |
| Ausgangszustand | Bestehende App wächst | Ordner `uebungen/tag-N/` ist **leer** |
| Files | Werden vom Vortag weiterbearbeitet | Werden **selber angelegt** |
| Tempo | Schritt baut auf Schritt auf | Schritte sind **autark** (eigene Mini-Aufgabe) |
| Lösung | Nicht nötig | **Aufklappbar** in der Doku |
| Pfad im Repo | `app/` im ae-codebase | `uebungen/tag-N/` im ae-codebase |

## Vorbedingung sichtbar machen

Bevor ein Lernender die Übung öffnet, muss klar sein:

> **Der Ordner `uebungen/tag-N/` im ae-codebase-Repo ist leer.**
> Wir legen jetzt **alles** selbst an – HTML, CSS, JavaScript.
> Das ist Absicht. Lass dich nicht verunsichern: am Ende des
> Tages hast du eine funktionierende Mini-Web-App.

## 8 Pflicht-Bestandteile pro Übungs-Schritt

Jeder Übungs-Schritt hat **genau diese Bestandteile** in dieser
Reihenfolge. Nichts weglassen. Nichts umstellen.

### 1. Schritt-Titel (1 Zeile)

Eine kurze aktive Zeile. Sie sagt, **was passiert**.

**Gut**: "Eine HTML-Datei anlegen"
**Schlecht**: "Jetzt legen wir die HTML-Datei an" (zu gesprochen)

### 2. Lernziel (1 Satz)

Ein einziger Satz. Er sagt, **was du am Ende kannst**.

**Gut**: "Du kannst eine HTML-Datei mit VS Code erstellen und im
Browser öffnen."

### 3. Was passiert (1–2 Sätze)

Eine grobe Erklärung **was im Browser oder im Editor passiert**.
Kein Code.

**Gut**: "VS Code erstellt eine neue, leere Datei. Der Browser
zeigt eine leere weisse Seite an."

### 4. Vorbereitung (welche Datei, mit Anlege-Schritten)

**Nur bei Übungen**: Lernende legen Files **selber an**. Sag
**explizit**, wie. Beispiel:

> **Vorbereitung**: Eine neue Datei anlegen
>
> 1. Öffne VS Code im Übungs-Ordner.
> 2. Klicke im Explorer (links) mit der rechten Maustaste auf
>    den Ordner `uebungen/tag-1/`.
> 3. Wähle **"New File"**.
> 4. Tippe den Namen **`index.html`**.
> 5. Drücke **Enter**.

### 5. Code-Block (mit klar markierten Lücken)

- **Immer** mit Datei-Name als Überschrift (`index.html`).
- **Immer** Code mit Lücken – aber klar markiert.
- Lücken als Kommentar im Code, im **gleichen** Stil wie der
  umliegende Code.
- **Mini-Erklärung** der neuen Stellen direkt über dem Block.

Lücken-Format (verbindlich):

```html
<!-- TODO: Hier kommt die Karte rein -->
```

oder

```javascript
// TODO: Setze den Text der Karte
```

Code-Beispiel mit Lücke:

> ```html
> <!DOCTYPE html>
> <html lang="de">
> <head>
>   <meta charset="UTF-8">
>   <title>Meine erste Karte</title>
> </head>
> <body>
>   <!-- TODO: Füge hier eine <section class="card"> mit <h1> und <p> ein -->
> </body>
> </html>
> ```

### 6. Probier es aus (klarer Test-Punkt)

**Genau eine** Sache, die Lernende tun, um zu prüfen, ob es
klappt. Konkret und kurz.

**Gut**: "Rechtsklick auf `index.html` → **Open with Live Server**.
Du siehst eine **leere** Seite. Das ist richtig so – die Karte
kommt im nächsten Schritt."

### 7. Was schiefgehen kann (1–3 typische Fehler)

Eine kurze Liste der **typischen** Fehler. Nicht allgemeine
HTML-Fehler.

**Gut**:

- **Live-Server zeigt "Cannot GET /".** Du hast `index.html` im
  falschen Ordner geöffnet. Schliesse das Terminal-Fenster von
  Live-Server. Öffne VS Code **im Ordner `uebungen/tag-1/`**.
  Starte Live-Server neu.

### 8. Lücken-Hinweis (separat, **nicht** im Code)

Nach dem Schritt ein **kurzer Hinweis**, was Lernende noch
selber machen müssen:

> **Was du noch machen musst**: Setze an der markierten Stelle
> eine Section mit Klasse `card`. Sie enthält eine `<h1>` mit
> deinem Namen und einen `<p>` mit deinem Lieblingssatz.
> **Nicht** einfach das Beispiel aus der Lösung kopieren.

## Lösungs-Box (aufklappbar)

Am **Ende der Übungs-Seite** (oder am Ende jedes Schritts, wenn
die Lösung kurz ist) kommt eine **aufklappbare Lösungs-Box**:

```markdown
??? success "Lösung anzeigen"
    Hier ist die vollständige Lösung:

    `index.html`:
    ```html
    [kompletter HTML-Code]
    ```

    `style.css`:
    ```css
    [kompletter CSS-Code]
    ```
```

- Die Box ist **zugeklappt** beim ersten Anschauen.
- Sie enthält **alle Files** der Übung in voller Länge.
- Sie ist **gleich** wie die Lücken-Version, nur ohne `TODO`.

## WOW-Moment – Definition

Eine Übung hat den WOW-Moment genau dann, wenn **alle drei Punkte**
zutreffen:

| WOW-Bedingung | Wie das Template sie absichert |
|---|---|
| Ordner `uebungen/tag-N/` ist **leer** | Vorbedingung im ersten Block erwähnt |
| Lernende **anlegen** Files selbst | Schritt 4 erzwingt Anlege-Schritte |
| Übung wird **autark** fertig | Lösung am Ende aufklappbar, nicht im Voraus |

**Wenn eine der drei Bedingungen fehlt**: Es ist keine WOW-Übung.
Bitte Template überarbeiten.

## Negativ-Beispiel

> **Schritt: Alles auf einmal**
>
> Hier ist der Code. Kopiere ihn.
>
> ```html
> [kompletter 50-Zeilen-Block ohne Lücken]
> ```
>
> *(Keine Lücken. Keine Erklärung. Kein Anlege-Schritt. Kein Test.)*

**Warum schlecht**:

- Keine Lücken = reines Copy-Paste = kein Lerngewinn.
- Keine Erklärung = Lernende verstehen nicht, was sie tippen.
- Kein Anlege-Schritt = Lernende mit leerem Ordner wissen nicht,
  wohin mit dem Code.
- Kein Test = niemand weiss, ob es geklappt hat.

## Positiv-Beispiel

> **Schritt 1: Eine HTML-Datei anlegen**
>
> **Lernziel**: Du kannst eine HTML-Datei erstellen und im
> Browser öffnen.
>
> **Was passiert**: VS Code erstellt eine neue, leere Datei. Der
> Browser zeigt eine leere weisse Seite an. Das ist richtig so.
>
> **Vorbereitung**: Eine neue Datei anlegen
>
> 1. Öffne VS Code im Übungs-Ordner (`uebungen/tag-1/`).
> 2. Klicke im Explorer mit der rechten Maustaste auf den Ordner.
> 3. Wähle **"New File"**.
> 4. Tippe den Namen **`index.html`**.
> 5. Drücke **Enter**.
>
> **Tippe das** in `index.html`:
> ```html
> <!DOCTYPE html>
> <html lang="de">
> <head>
>   <meta charset="UTF-8">
>   <title>Meine erste Karte</title>
> </head>
> <body>
>   <!-- TODO: Füge hier gleich eine <section class="card"> ein -->
> </body>
> </html>
> ```
>
> **Probier es aus**: Rechtsklick auf `index.html` im Explorer →
> **"Open with Live Server"**. Du siehst eine **leere weisse
> Seite** – das ist korrekt, die Karte folgt im nächsten Schritt.
>
> **Was schiefgehen kann**:
>
> - **Live-Server zeigt "Cannot GET /".** Datei liegt im falschen
>   Ordner. Schliesse Live-Server. Öffne VS Code **im Ordner
>   `uebungen/tag-1/`**. Starte Live-Server neu.
>
> **Was du noch machen musst**: Die Datei muss den HTML-
> Grundgerüst-Inhalt tragen, den du oben kopiert hast. Den
> Rest (die Karte selbst) machen wir im nächsten Schritt.

## Selbst-Check vor dem Einchecken

- [ ] Vorbedingung "Ordner ist leer" steht am Anfang der Übung.
- [ ] 8 Pflicht-Bestandteile in der richtigen Reihenfolge.
- [ ] Code-Block enthält mindestens eine **klar markierte Lücke**.
- [ ] Vorbereitung erzwingt eigene Anlege-Schritte.
- [ ] Lücken-Hinweis steht **separat** (nicht im Code).
- [ ] Probier es aus = genau eine konkrete Test-Anweisung.
- [ ] Was schiefgehen kann = 1–3 typische Fehler.
- [ ] Lösungs-Box ist aufklappbar mit `??? success`.
- [ ] WOW-Moment-Bedingungen sind erfüllt (Ordner leer, Files
      selber angelegt, autarke Lösung).
- [ ] Keine Passiv-Konstrukte, keine Konjunktiv-Aufgaben.
- [ ] `textContent` statt `innerHTML` (für JavaScript-Schritte).

## Querverweise

- **Projekt-Schritte** (T13) folgen einem ähnlichen Schema, sind
  aber **lückenlos** und bauen aufeinander auf.
- **Übungen** werden in T50–T52 nach diesem Template geschrieben
  (Tag 1, 2, 3).
- **Sprache**: `docs/sprachstil-v2.md` ist verbindlich.
- **Curriculum**: `docs/curriculum-v2.md` zeigt, an welchem Tag
  welche Übung stattfindet.
- **Übungen sind autark**: jede Übung kann unabhängig von den
  anderen gemacht werden. Nichts von Tag 1 wird in Tag 2
  vorausgesetzt.
