# V2-Changes – Übersicht

Dieser Ordner enthält **alle Planungsunterlagen** für die Überarbeitung
des AE-Bootcamps (V2). Die eigentlichen Code- und Doku-Änderungen
landen dann im normalen Repo (siehe Phase 5/6 der Tasks).

## Bestätigte Entscheidungen (Stand 2026-08-10)

| Frage | Entscheidung |
|---|---|
| Q1 – Tagesstruktur Tag 4/5 | **Tag 4:** keine Pflicht-Theorie, kein Pflicht-Projekt. Lernende arbeiten eigenständig an Polish/optionalen Features. Trainer bietet kleine Auswahl-Kurzpräsentationen (10–15 min) an, **freiwillig**. **Tag 5:** nur Demo (Probe + Live + Q&A), keine Theorie, keine Übung, kein Projekt. |
| Q2 – Theorie-Seiten-Detail | **Mehrere kurze Seiten pro Tag** (eine pro Happen). Hand in Hand mit den kurzen Live-Coding-Sessions (5–15 min) und der Präsentation. |
| Q3 – Übungs-Format | **WOW-Effekt:** Vor der Übung ist im Repo nichts. Schritt-für-Schritt-Anleitung in der Doku führt durch Code-Blöcke zum Kopieren mit Lücken. Lernende legen Files selber an, füllen Lücken, am Ende funktioniert es. Übungen sind **abgekapselt vom Projekt** – sie landen in einem separaten `uebungen/`-Ordner im ae-codebase-Repo (NICHT in `app/`). |
| Q4 – Fallback-Strategie | **2-stufig ohne `localStorage`** (API → `data.json`). |
| Q5 – Trainer-Material-Repo | **Neues Repo `ae-trainer-briefing`** (existiert, leer). Trainer-Material wandert komplett aus `ae-raumklima-bootcamp` raus. |
| Q6 – Projekt-Anleitung Detail | **Sehr detailliert**, Schritt-für-Schritt mit echtem Sinn, nicht lose Anforderungen. |
| Q7 – Wann V2? | **2027.** Kein Zeitdruck. Merge nach deiner Genehmigung / PR-Annahme. |
| Q8 – Datumsangaben | **Keine konkreten Daten.** Wir verwenden nur "Tag 1, Tag 2, …". |
| Q9 – Theorie-Verteilung | Wie vorgeschlagen. **Tag 4 nur Auswahl-Kurzpräsentationen** (10–15 min, mehrere Themen zu optionalen Features). Pflicht-Theorie endet an Tag 3. |
| Q10 – Scope-Definition V2 | **Exakt wie in `01-ANFORDERUNGEN.md` H** beschrieben. |

## Dateien

| Datei | Zweck |
|---|---|
| [`01-ANFORDERUNGEN.md`](01-ANFORDERUNGEN.md) | Deine Roh-Anforderungen + alle 10 bestätigten Entscheidungen. |
| [`02-GROUND-RULES.md`](02-GROUND-RULES.md) | Harte Regeln, die nicht verhandelbar sind. |
| [`03-KONZEPT.md`](03-KONZEPT.md) | Strukturvorschlag: Tagesstruktur, Übungs-Format, Projekt-Anleitung, Trainer-Repo, vereinfachte Fallback-Strategie. |
| [`04-OFFENE-FRAGEN.md`](04-OFFENE-FRAGEN.md) | Q1–Q10 – **alle geklärt**. |
| [`05-TASKS.md`](05-TASKS.md) | Die konkrete Task-Liste mit Phasen, Reihenfolge und Status. |
| [`06-STATUS.md`](06-STATUS.md) | Was bereits erledigt ist und aktueller Stand. |

## Wie weiter

1. **`02-GROUND-RULES.md`** zuerst lesen – nicht verhandelbare Constraints.
2. **`01-ANFORDERUNGEN.md`** – was du erreichen willst.
3. **`03-KONZEPT.md`** – wie ich es konkret umsetzen würde.
4. **`05-TASKS.md`** – du gibst pro Task grünes Licht, ich arbeite ihn ab.
5. **`06-STATUS.md`** – laufend aktualisiert.

## Was dieser Ordner NICHT ist

- Kein Doku-Output für Lernende – das gehört in `docs/`.
- Kein Code-Output für Lernende – das gehört in `ae-raumklima-bootcamp-codebase/app/`.
- Kein Trainer-Briefing – das ist das **eigene Repo `ae-trainer-briefing`**.

Dieser Ordner ist ausschliesslich **Planung & Tracking** der V2-Überarbeitung.