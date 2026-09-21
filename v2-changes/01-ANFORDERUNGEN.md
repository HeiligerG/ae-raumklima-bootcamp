# Anforderungen (Roh-Liste aus deinen Nachrichten)

Dieses Dokument sammelt alle Anforderungen, die du für die V2-Überarbeitung
genannt hast. Sie sind hier 1:1 festgehalten und nicht bewertet.

## Bestätigte Entscheidungen (Stand 2026-08-10, alle 10 Fragen geklärt)

| Frage | Entscheidung |
|---|---|
| Q1 – Tag 4/5 Struktur | **Tag 4:** keine Pflicht-Theorie/Übung/Projekt. Lernende arbeiten eigenständig an Polish + optionalen Features. Trainer bietet freiwillige Auswahl-Kurzpräsentationen (10–15 min) an. Pflichtumfang sollte bis Tag 3 fertig sein. **Tag 5:** nur Demo (Probe + Live + Q&A), sonst nichts. |
| Q2 – Theorie-Seiten-Detail | Mehrere kurze Seiten pro Tag, hand in hand mit Live-Coding-Sessions (5–15 min) und Präsentation. |
| Q3 – Übungs-Format | **WOW-Effekt:** vor der Übung ist im Repo nichts. Schritt-für-Schritt-Anleitung in der Doku, Code-Blöcke zum Kopieren mit Lücken. Lernende legen Files selber an. Übungen landen in separatem `uebungen/`-Ordner im ae-codebase-Repo (NICHT in `app/`). |
| Q4 – Fallback-Strategie | **2-stufig ohne `localStorage`** (API → `data.json`). |
| Q5 – Trainer-Material-Repo | **`ae-trainer-briefing`** (existiert, leer). Trainer-Material wandert komplett raus. |
| Q6 – Projekt-Anleitung Detail | Sehr detailliert, Schritt-für-Schritt, echter Sinn. |
| Q7 – Wann V2? | **2027.** Kein Zeitdruck. Merge auf Freigabe. |
| Q8 – Datumsangaben | **Keine** in V2. Nur "Tag 1, Tag 2, …". |
| Q9 – Theorie-Verteilung | Wie vorgeschlagen. Tag 4 nur Auswahl-Kurzpräsentationen (10–15 min, mehrere Themen zu optionalen Features). |
| Q10 – Scope-Definition V2 | **Exakt wie unter H unten beschrieben.** |

## A. Probleme mit der aktuellen V1

- **A1.** Lernende haben **gar keine Vorkenntnisse** – V1 ist deshalb viel zu schwierig.
- **A2.** Besonders der **JavaScript-Part** ist zu hart.
- **A3.** Die **drei Fallbacks** (API → `localStorage` → `data.json`) sind zu
  heftig – vorallem der Teil mit `localStorage`.
- **A4.** Die **Projekt-Anforderungen** sind "scheisse": es wird einfach nur
  vorgegeben, welche Tags, welche IDs – das ist keine echte Hilfe.
- **A5.** Aktueller Ansatz setzt Vorkenntnisse voraus, die nicht da sind.

## B. Theorie-Seiten / Lernleitfaden

- **B1.** Theoriesseiten bleiben bestehen.
- **B2.** Sie werden zu **Referenz** zu den Trainer-Präsentationen (nicht
  mehr primäres Selbst-Lernmaterial).
- **B3.** Inhalt muss also zu den neuen Präsentationen / Live-Codings passen.
- **B4.** Tag-4-Theorie: **kein Pflicht-Stoff mehr** im Lernleitfaden.
  Auswahl-Themen zu optionalen Features leben im Trainer-Repo
  (`ae-trainer-briefing/docs/praesentationen/tag-4-kurz/`).

## C. Tagesstruktur

### C1. Tag 1, Tag 2, Tag 3 – Standard-Struktur

1. **Theorie + Live-Coding vom Trainer**: 1:30 – 2:00 h pro Tag
   - Aufgeteilt in **kleine Theorie-Happen**
   - Dazwischen: **5–15 min Coding-Sessions** vom Trainer
   - Präsentationen **interaktiv** gestaltet
2. **Übung** (hands-on, 2 h, komplett selber lösbar, viel vorgegeben)
3. **Projekt-Teil** (eigenständig) – siehe E
4. **Trainer Live-Coding** am Ende (1 h) für die Projekt-Lösung

### C2. Tag 4 – "Austoben" (KEINE Pflichtstruktur)

- **Keine Pflicht-Theorie**, keine Pflicht-Übung, kein Pflicht-Projekt.
- Lernende arbeiten **eigenständig** an:
  - Polish des Pflichtumfangs (sollte bis Tag 3 fertig sein)
  - Optionalen Features (Dark Mode, Charts, Auto-Refresh, …)
  - Aufräumen, Testen, Bugs fixen
- Trainer bietet **freiwillige Auswahl-Kurzpräsentationen** an:
  - 10–15 min pro Thema
  - Mehrere Themen zur Auswahl (Dark Mode, Chart.js, Animationen, …)
  - Lernende kommen nur, wenn sie das Thema vertiefen wollen
- Trainer ist **im Raum verfügbar** für 1:1-Hilfe

### C3. Tag 5 – nur Demo

- **Keine Theorie**, **keine Übung**, **kein Projekt**.
- Probe-Demo (15:15, alleine, Backup-Video aufnehmen)
- Live-Demo (16:30–17:30, vor allen, je 5 min)
- Q&A, Reflexion, Abschluss

## D. Übungen (Hands-on, 2 h, nur Tag 1–3)

- **D1.** Komplett selber lösbar (Hands-on).
- **D2.** Schritt-für-Schritt-Anleitung mit **Code-Blöcken zum Kopieren**
  + **Lücken zum Selber-Ausfüllen**.
- **D3.** **WOW-Effekt:** vor der Übung ist im Repo nichts. Während der
  Übung entsteht Schritt für Schritt etwas Funktionierendes.
- **D4.** Übungen sind **abgekapselt vom Projekt**: eigene Files in
  `uebungen/tag-N/` im ae-codebase-Repo (NICHT in `app/`).
- **D5.** **Gezielter** als bisher.
- **D6.** **Leicht, schnell verstanden**.
- **D7.** **Lösung direkt aufklappbar** unter der Aufgabe.
- **D8.** Immer best practices: **`textContent`** statt `innerHTML`, etc.

## E. Projekt-Teil (eigenständig)

- **E1.** Clean weiterführend von Tag zu Tag (kumulativ).
- **E2.** **Leichter** als aktuell.
- **E3.** **Ganz am Schluss vom Tag 1–4: 1 h Live-Coding vom Trainer** =
  das was die Projekt-Aufgabe war.
- **E4.** Trainer co-det genau das, was die Projekt-Aufgabe war.
- **E5.** Alle landen auf gleichem Stand (niemand hintendrin).
- **E6.** Wer schon fertig ist, muss nicht zuhören, kann weitermachen.
- **E7.** **Anforderungen umformulieren**: nicht "welche Tags / IDs",
  sondern **detaillierte Schritt-für-Schritt-Anleitung** mit echtem Sinn.
- **E8.** Anleitung nicht ganz selbst-erklärend (Lerngewinn), aber
  **alles machbar ohne Vorkenntnisse in JS / CSS / HTML**.

## F. Trainer-Anweisungen (eigenes Repo: `ae-trainer-briefing`)

- **F1.** Pro Projekt: **exakte Live-Coding-Anleitung** für den Trainer.
- **F2.** Welche `const` zuerst, welche Funktion als nächstes, in welcher
  Reihenfolge.
- **F3.** Mit Erklärungen und wichtigen Andeutungen.
- **F4.** So geschrieben, dass **jeder** Trainer das live forcoden kann –
  auch ein weniger starker.
- **F5.** Alles Trainer-Material wandert aus `ae-raumklima-bootcamp/docs/trainer/`
  in das neue Repo `ae-trainer-briefing`.
- **F6.** Tag-4-Material = Sammlung von Auswahl-Kurzpräsentationen
  (10–15 min pro Thema), nicht eine durchgehende Tag-Präsentation.
- **F7.** Tag-5-Material = Demo-Moderations-Skript.

## G. Code-Qualität (Querschnitt)

- **G1.** **Niemals `innerHTML`** – das darf in keinem Fall vorkommen.
- **G2.** Immer `textContent` oder andere best practices.
- **G3.** Fallback-Strategie vereinfachen (siehe Q4-Entscheidung).

## H. Was nicht angefasst wird (Q10 bestätigt)

- **H1.** `SuvaSense` Repo: nicht angefasst (das Backend bleibt, wie es ist).
- **H2.** `pe-raumklima-bootcamp` Repo: nicht angefasst.
- **H3.** Master-Branch der drei relevanten Repos: nicht gemerged während
  des aktuellen Bootcamps (V1 läuft 2026).

## I. Branch-Strategie

- **I1.** Neue Branch `bootcamp-v2` in `ae-raumklima-bootcamp`.
- **I2.** Neue Branch `bootcamp-v2` in `ae-raumklima-bootcamp-codebase`.
- **I3.** Neue Branch `bootcamp-v2` in `ae-trainer-briefing`.
- **I4.** Merge nach `master` erst nach deiner Genehmigung / PR-Annahme.
  Kein Zeitdruck (V2 läuft 2027).