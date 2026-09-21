# Projekt-Anleitung-Template

> **Wie eine komplette Projekt-Anleitung für einen Tag
> aussieht.** Eine Projekt-Anleitung = die Sammlung aller
> Projekt-Schritte (siehe
> [`projekt-schritt-template.md`](projekt-schritt-template.md))
> für **einen** Tag.

## Wofür dieses Template da ist

Jede Tages-Projekt-Anleitung (Tag 1–5) folgt diesem Aufbau.
Lernende sehen eine **klare Tagesstruktur**, Trainer einen
**roten Faden** für die End-of-Day-Session.

| Ohne Template | Mit Template |
|---|---|
| Lernende fragen "was soll ich heute machen?" | Tagesziel + Schritt-Liste sofort sichtbar |
| Reihenfolge unklar | Schritte stehen in der Tipp-Reihenfolge |
| Test fehlt | Jeder Schritt hat Probier-es-aus |
| Endstand unklar | Definition of Done klar |

## Pflicht-Aufbau

Eine Projekt-Anleitung hat **genau diese Sektionen** in dieser
Reihenfolge:

### 1. Titel (1 Zeile)

Aktive Form. Beispiel: "Projekt Tag 1 – Dashboard-Grundlayout".

### 2. Tagesziel (2–3 Sätze)

In einfacher Sprache: was am Ende **läuft**.

Beispiel:

> "Am Ende dieses Projekts hast du ein Dashboard mit einer Karte
> für die Temperatur, einer für die Luftfeuchtigkeit, einer
> Verlaufsliste, und CSS-Styling. Es läuft im Browser."

### 3. Voraussetzungen

Was muss **bereits vorhanden** sein, bevor du anfängst?

- Lauffähige `index.html` mit Grundgerüst.
- Live-Server ist installiert.
- Browser ist offen.

### 4. Schritt-Liste (mit Ankern)

Aufzählung der Schritte als **verlinkte Anker**. Jeder Schritt
führt **nach unten** zum eigentlichen Schritt-Inhalt.

Beispiel:

> 1. [Temperatur im DOM anzeigen](#schritt-1-temperatur-im-dom-anzeigen)
> 2. [Luftfeuchtigkeit daneben anzeigen](#schritt-2-luftfeuchtigkeit-daneben-anzeigen)
> 3. [Karten stylen](#schritt-3-karten-stylen)
> 4. [Verlaufsliste anlegen](#schritt-4-verlaufsliste-anlegen)

### 5. Schritt-Inhalte (einer pro Anker)

Jeder Schritt folgt dem
[Projekt-Schritt-Template](projekt-schritt-template.md)
genau. Reihenfolge:

1. Schritt-Titel
2. Lernziel
3. Was passiert
4. Tippe das
5. Probier es aus
6. Was schiefgehen kann

### 6. Definition of Done (Checkbox-Liste)

Konkrete, prüfbare Kriterien. Keine vagen Punkte.

Beispiel:

- [ ] Zwei Karten mit Werten sichtbar
- [ ] Karten nebeneinander auf Desktop
- [ ] Karten untereinander auf Mobile
- [ ] Verlaufsliste zeigt mindestens 3 Einträge
- [ ] Code committed und gepusht

### 7. Wie weiter?

Was kommt **nach** diesem Tag?

> "Im Projekt Tag 2 baust du Statuslogik und Verlauf.
> Heute ist Schluss nach Schritt 4."

### 8. Wo gibt's Hilfe?

Verweise auf:

- Trainer (1:1)
- Lernleitfaden (passende Theorie-Happen)
- W3Schools / MDN

## Worauf zu achten ist

- **Sprache**: kurz, aktiv, einfach (siehe
  [`sprachstil-v2.md`](../sprachstil-v2.md)).
- **Reihenfolge im Code**: `const` zuerst, `function` mittig,
  Aufrufe zuletzt (F4).
- **Jeder Schritt hat eine Probier-es-aus-Anweisung**.
- **`textContent` statt `innerHTML`**.
- **Kein `localStorage`** (V2 bewusst weggelassen).
- **Keine Datumsangaben** im Fliesstext.

## Negativ-Beispiel

> # Projekt Tag 1
>
> Heute bauen wir eine App.
>
> Erstelle HTML. Dann CSS. Dann JS.
>
> *(Kein Tagesziel. Keine Schritt-Liste. Keine Test-Punkte.)*

**Warum schlecht**:

- Lernende wissen nicht, was sie am Ende haben.
- Reihenfolge unklar.
- Kein Test-Punkt, kein DoD.
- Code fehlt komplett.

## Positiv-Beispiel (gekürzt)

> # Projekt Tag 1 – Dashboard-Grundlayout
>
> **Tagesziel**: Zwei Karten (Temperatur, Luftfeuchtigkeit)
> nebeneinander, Verlaufsliste darunter, CSS-Styling, läuft
> im Browser.
>
> **Voraussetzungen**: VS Code, Live-Server,
> Browser geöffnet, eigenes Fork des Codebase-Repos.
>
> **Schritte**:
>
> 1. [Temperatur im DOM anzeigen](#schritt-1)
> 2. [Luftfeuchtigkeit daneben](#schritt-2)
> 3. [Karten stylen](#schritt-3)
> 4. [Verlaufsliste](#schritt-4)
>
> ---
>
> ## Schritt 1 – Temperatur im DOM anzeigen
>
> **Lernziel**: Du kannst mit JavaScript den Text in einem
> DOM-Element setzen.
>
> **Was passiert**: JavaScript sucht das Element im Browser
> und schreibt den Text rein.
>
> **Tippe das** in `script.js`:
>
> ```javascript
> function updateTemp(value) {
>   document.getElementById('temp-card').textContent = value + ' °C';
> }
> ```
>
> **Probier es aus**: Konsole (F12), tippe
> `updateTemp(23.4)`. Die Karte zeigt `23.4 °C`.
>
> …
>
> ---
>
> ## Definition of Done
>
> - [ ] Zwei Karten sichtbar (Temperatur, Luftfeuchtigkeit)
> - [ ] Werte werden per JS gesetzt
> - [ ] Karten nebeneinander auf Desktop
> - [ ] Karten untereinander auf Mobile
> - [ ] Code committed und gepusht

## Selbst-Check vor dem Einchecken

- [ ] Tagesziel in 2–3 Sätzen, einfache Sprache.
- [ ] Voraussetzungen klar aufgelistet.
- [ ] Schritt-Liste verlinkt zu Ankern.
- [ ] Jeder Schritt folgt
      [Projekt-Schritt-Template](projekt-schritt-template.md).
- [ ] Definition of Done mit prüfbaren Checkboxen.
- [ ] "Wie weiter?" sagt klar, was morgen kommt.
- [ ] "Wo gibt's Hilfe?" verweist auf Trainer + Lernleitfaden.
- [ ] Kein Datum, kein `localStorage`, kein `innerHTML`.
- [ ] Reihenfolge F4-konform.

## Querverweise

- **Projekt-Schritt-Template** (einzelner Schritt):
  [`projekt-schritt-template.md`](projekt-schritt-template.md)
- **Sprachstil V2**:
  [`../sprachstil-v2.md`](../sprachstil-v2.md)
- **Übungs-Schritt-Template** (Schwestern-Template für Übungen):
  [`../uebungen/uebung-schritt-template.md`](../uebungen/uebung-schritt-template.md)
- **Curriculum-Übersicht** (was an welchem Tag passiert):
  [`../curriculum-v2.md`](../curriculum-v2.md)
