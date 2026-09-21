# Status – was bereits gemacht wurde

## Erledigt

### 2026-08-10

- ✅ **Branches erstellt** (alle drei Repos):
  - `ae-raumklima-bootcamp` → Branch `bootcamp-v2` (auf master-Basis)
  - `ae-raumklima-bootcamp-codebase` → Branch `bootcamp-v2` (auf master-Basis)
  - `ae-trainer-briefing` → Branch `bootcamp-v2` (auf master-Basis)
- ✅ **Planungs-Ordner** `v2-changes/` im `ae-raumklima-bootcamp`-Repo
  angelegt mit 7 Files:
  - `00-INDEX.md` – Übersicht
  - `01-ANFORDERUNGEN.md` – Roh-Anforderungen + alle 10 Entscheidungen
  - `02-GROUND-RULES.md` – harte Constraints
  - `03-KONZEPT.md` – Strukturvorschlag (aktualisiert mit Q1, Q3, Q9)
  - `04-OFFENE-FRAGEN.md` – **alle 10 Fragen geklärt**
  - `05-TASKS.md` – Task-Liste mit 55 Tasks in 9 Phasen
  - `06-STATUS.md` – dieses File
- ✅ **Konzept-Analyse** erstellt basierend auf den 4 Repos
- ✅ **V2-Planung mit allen 10 Entscheidungen** integriert:
  - **Q1**: Tag 4 = freiwillige Auswahl-Kurzpräsentationen + Lernende arbeiten frei. Tag 5 = nur Demo.
  - **Q2**: Theorie-Seiten hand in hand mit Live-Coding-Sessions (5–15 min)
  - **Q3**: Übungen mit WOW-Effekt – Repo zu Übungsbeginn leer, Schritt-für-Schritt in der Doku, Lücken zum Selber-Ausfüllen
  - **Q4**: Fallback-Strategie = 2-stufig ohne `localStorage`
  - **Q5**: `ae-trainer-briefing` als Trainer-Material-Repo
  - **Q6**: Projekt-Anleitung = detaillierte Schritt-für-Schritt mit echtem Sinn
  - **Q7**: V2 = 2027, kein Zeitdruck, Merge auf Freigabe
  - **Q8**: Keine konkreten Daten in V2
  - **Q9**: Tag-4-Theorie = Auswahl-Kurzpräsentationen im Trainer-Repo
  - **Q10**: Scope V2 bestätigt

### 2026-09-21

- ✅ **T10**: `docs/curriculum-v2.md` geschrieben (Curriculum-Design-Doku:
  Tagesstruktur Tag 1–5, Lernziele pro Tag, was wegfällt, was neu kommt).
- ✅ **T11**: `docs/sprachstil-v2.md` geschrieben (Sprachstil-Guideline:
  kurze Sätze, aktive Verben, Fachbegriffe sofort erklären, Checkliste,
  Vergleich V1/V2).
- ✅ **T12**: `docs/projekt/fallback-strategie.md` geschrieben (V2-Fallback
  2-stufig ohne localStorage, code-Block aus Konzept §5, Zeile-für-Zeile-
  Erklärung, wann greift Fallback, Test-Anleitung, warum ohne
  localStorage, Verweis auf T52/T63/T81).

## Aktuell offen / wartend

- 🟡 **Auf dein "go" zum Commit** der Planungs-Files + der T10/T11-Dokus auf `bootcamp-v2`
- ⛔ **Phase 9** (Deployment): wartet auf deine Freigabe
- ⬜ **Phase 1 verbleibend**: T13 (Projekt-Template), T14 (Übungs-Template)
- ⬜ **Alle anderen Phasen** (2–8): bereit zum Starten

## Was bewusst NICHT gemacht wurde

- ❌ Kein Commit auf `master` (auch nicht versehentlich).
- ❌ Keine Änderung an `SuvaSense/` oder `pe-raumklima-bootcamp/`.
- ❌ Kein Code in den Repos geschrieben (Planung zuerst).
- ❌ Keine Tasks aus Phase 1+ gestartet ohne dein "go".
- ❌ Planungs-Files sind noch **untracked** in `ae-raumklima-bootcamp/`.

## Git-Status

```
Repo: ae-raumklima-bootcamp
Branch: bootcamp-v2
Untracked: v2-changes/ (noch nicht committed – warte auf dein Go)

Repo: ae-raumklima-bootcamp-codebase
Branch: bootcamp-v2
Status: clean (nichts geändert)

Repo: ae-trainer-briefing
Branch: bootcamp-v2
Status: clean (nur Branch erstellt, kein Inhalt)
```

## Vorschlag für nächsten Schritt

1. **Commit** der 7 Planungs-Files + der zwei Dokus (`docs/curriculum-v2.md`,
   `docs/sprachstil-v2.md`) auf `bootcamp-v2` im ae-bootcamp-Repo
   (sage einfach "commit" und ich mach's).
2. Wir setzen **Phase 1** fort mit T12 (Fallback-Strategie-Doku).
3. Danach **Phase 3** (T30) – `ae-trainer-briefing` komplett aufsetzen.

## Drei Branches – Verwendungszweck

- `ae-raumklima-bootcamp/bootcamp-v2` – Lernleitfaden für Lernende
  (Theorie, Übungen, Projekt-Anleitungen)
- `ae-raumklima-bootcamp-codebase/bootcamp-v2` – Lernenden-Code
  (`app/` für Hauptprojekt, `uebungen/` für Übungs-Mini-Projekte)
- `ae-trainer-briefing/bootcamp-v2` – Trainer-Material
  (Präsentationen, Live-Coding-Skripte, Anweisungen)

**Merge-Reihenfolge** (wenn du freigibst):
1. `ae-trainer-briefing` – zuerst (Heimat für Trainer-Material)
2. `ae-raumklima-bootcamp` – dann (Lernleitfaden, verweist aufs Trainer-Repo)
3. `ae-raumklima-bootcamp-codebase` – zuletzt (Code-Änderungen)