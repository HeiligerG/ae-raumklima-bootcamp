# Ground Rules – harte Constraints

Diese Regeln sind nicht verhandelbar. Sie stehen über allen anderen
Design-Entscheidungen.

## 1. Was NICHT angefasst werden darf

| Bereich | Regel | Begründung |
|---|---|---|
| `SuvaSense/` Repo | **Komplett unangetastet.** Keine Commits, keine Branches, kein Lesen-mit-Absicht-zu-Ändern. | Das Backend läuft produktiv im Bootcamp, Vertrag ist abgeschlossen. |
| `pe-raumklima-bootcamp/` Repo | **Komplett unangetastet.** | Ist Aufgabe des PE-Teams, nicht unseres. |
| API-Vertrag | **Identisch zu V1.** `readings.bme680.temp_c`, `readings.bme680.hum_pct`, Push-Bundle-Format, Endpoints. | Das Backend ist Wahrheit; die App muss kompatibel bleiben. |
| Schwellenwerte von EDB | **Identisch zu V1.** `gut` 20–24 °C / 40–60 %, `kritisch` 18–26 °C / 30–70 %, `schlecht` ausserhalb. | Von EDB vorgegeben, nicht verhandelbar. |
| Datenmodell | **Identisch zu V1.** Seriennummer, `recorded_at`, Push-Bundles. | Schon im Backend persistiert. |
| Seriennummer-Identität | **Identisch zu V1.** Sensoren werden über Seriennummer identifiziert, nicht über Raum-ID. | Backend-Konvention. |

## 2. Branch-Regeln

| Regel | Detail |
|---|---|
| Branch-Name | `bootcamp-v2` (in allen drei Repos: `ae-raumklima-bootcamp`, `ae-raumklima-bootcamp-codebase`, `ae-trainer-briefing`) |
| Basis | `master` zum Zeitpunkt der Branch-Erstellung |
| **Merge nach `master`** | **Verboten** bis du grünes Licht gibst / PR annimmst. V2 läuft erst 2027. |
| Commits auf `bootcamp-v2` | Erlaubt und erwünscht. |
| Push nach `origin` | Erlaubt – Backup-Zweck. |
| Force-Push | Verboten (auch nicht auf `bootcamp-v2`). |
| Branch löschen | Verboten bis nach Merge. |

**Keine Datums-Blocks** – wir gehen nicht auf Zeit. Du sagst "merge",
dann wird gemerged.

## 3. Code-Qualität (Querschnitt)

| Regel | Detail |
|---|---|
| **`innerHTML`** | **Komplett verboten.** Weder in Lernenden-Code-Beispielen, noch in Übungen, noch in Theorie-Seiten. Suchen und ersetzen. |
| **`textContent`** | **Default** für Text-Inhalte in DOM setzen. |
| DOM-Best-Practices | `textContent`, `classList.add/remove/toggle`, `addEventListener`, `document.createElement`. Keine String-Concat für HTML. |
| Sicherheit | Keine Geheimnisse in der Doku committen (analog CODE_OF_CONDUCT §3.2). |
| Conventions | Klassennamen `.gut` / `.kritisch` / `.schlecht` weiterleben. JSON-Feldnamen aus API-Vertrag (`readings.bme680.temp_c`). |
| Längen | Theorie-Texte prüfen: nicht zu lang, viele kurze Happen statt wenige lange Seiten. |

## 4. Pädagogische Regeln

| Regel | Detail |
|---|---|
| KI-Verbot | Bleibt (CODE_OF_CONDUCT, `projekt/quellen.md`). Wird in V2 weitergeführt. |
| Einzelarbeit | Bleibt (kein Pair-Programming, kein Code-Abschreiben untereinander). |
| 3 Git-Befehle | Bleibt (`git add .` / `git commit -m "…"` / `git push`). Keine PRs, keine Branches bei Lernenden. |
| Quellen-Hierarchie | W3Schools → MDN → DevTools → Trainer. Bleibt. |
| Vorkenntnisse | **V2 startet bei NULL.** Keine Annahme, dass Lernende HTML/CSS/JS kennen. |

## 5. Datums-Regeln (NEU – wegen Q8-Entscheidung)

| Regel | Detail |
|---|---|
| **Keine konkreten Daten** im V2-Material. | Wir verwenden nur "Tag 1, Tag 2, …" – nirgends ein Datum wie 06.08.2026. |
| Navigation, Überschriften, Dateinamen | "Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5" – ohne Datumszusatz. |
| Index / Übersichtsseiten | Wochenübersicht wird zu "Wochenübersicht" (5 Zeilen, ohne Datum). |
| V1 hat das Datum | In V2 beim **Neuschreiben** weg. V1-Material (auf master) wird nicht editiert, nur durch V2-Material ersetzt. |

## 6. Trainer-Material-Repos (NEU – wegen Q5-Entscheidung)

| Regel | Detail |
|---|---|
| **Alles Trainer-Material wandert** in `ae-trainer-briefing`. | Präsentationen, Live-Coding-Skripte, Trainer-Live-Coding-Anweisungen, Risiken, Hinweise. |
| `ae-raumklima-bootcamp/docs/trainer/*` | Wird **geleert** (Dateien entfernt) oder durch einen Link/Stub ersetzt, der auf das neue Repo verweist. Entscheidung im Phase-7-Task T74. |
| `ae-trainer-briefing` | Wird komplett aufgesetzt: MkDocs, GitHub Actions Workflow, CODE_OF_CONDUCT, README, requirements.txt, .gitignore. |

## 7. Operational Rules (für uns beide)

| Regel | Detail |
|---|---|
| Vorgehen | Spec zuerst (dieser Ordner), dann Code. Kein "lost in code". |
| Task-Liste | Jeder Task wird vor Ausführung nochmal von dir abgenickt. |
| Commit-Strategie auf `bootcamp-v2` | Pro Task ein oder mehrere thematisch klare Commits. |
| Tracking | `06-STATUS.md` wird nach jedem Task aktualisiert. |
| Planänderungen | Wenn etwas nicht funktioniert oder du umdenkst: zuerst hier dokumentieren, dann umsetzen. |

## 8. Was passiert, wenn eine Regel gebrochen würde

- Anfasst an `SuvaSense` oder `pe-raumklima-bootcamp` → sofort revert, Begründung in `06-STATUS.md`.
- `bootcamp-v2` wird gemerged ohne deine Freigabe → revert + Vorfall in `06-STATUS.md`.
- `innerHTML` taucht im Lernenden-Material auf → PR/Commit wird abgelehnt, ersetzt.
- Schwellenwerte / API-Vertrag geändert → revert, sofort.
- Konkretes Datum im V2-Material → ersetzen durch "Tag N".

---

**Wenn du mit diesen Regeln einverstanden bist, gilt das als Vertrag
für die V2-Arbeit.** Andernfalls zuerst hier anpassen.