# Tasks – konkrete Task-Liste für V2

**Stand 2026-08-10**: Alle 10 Fragen geklärt. **Verbindliche Liste.**
Jeder Task wird vor Ausführung von dir abgenickt.

## Status-Legende

- ⬜ Offen
- 🟡 In Arbeit
- ✅ Erledigt
- ⛔ Blockiert (auf Entscheidung wartend)
- ❌ Storniert

---

## Phase 0 – Voraussetzungen & Setup

| ID | Task | Status | Notes |
|---|---|---|---|
| T00 | Planungs-Ordner `v2-changes/` in ae-bootcamp mit 6 Files | ✅ Erledigt | siehe `00-INDEX.md` |
| T01 | Branches `bootcamp-v2` in 3 Repos (ae-bootcamp, ae-codebase, ae-trainer-briefing) erstellt | ✅ Erledigt | siehe `06-STATUS.md` |
| T02 | Planungs-Files final | ✅ Erledigt | alle 10 Fragen geklärt |

---

## Phase 1 – Pädagogische Neuausrichtung (Konzept, im ae-bootcamp-Repo)

Vorbedingung: T00–T02 erledigt.

| ID | Task | Status | Notes |
|---|---|---|---|
| T10 | Curriculum-Design-Doku schreiben (`docs/curriculum-v2.md` im ae-bootcamp-Repo): Tagesstruktur Tag 1–5, Lernziele pro Tag, was wegfällt, was neu kommt | ✅ | baut auf `03-KONZEPT.md` auf |
| T11 | Sprachniveau-Check der Theorie-Texte: bestimmen wo Vereinfachungen nötig sind | ✅ | pro Theorie-Seite einzeln |
| T12 | Fallback-Strategie (2-stufig ohne `localStorage`) in `docs/projekt/fallback-strategie.md` dokumentieren | ✅ | baut auf `03-KONZEPT.md` §5 |
| T13 | Projekt-Schritt-Anleitungs-Template erstellen: das Schema, nach dem alle Projekt-Schritte gebaut werden (siehe `03-KONZEPT.md` §4) | ✅ | |
| T14 | Übungs-Schritt-Anleitungs-Template erstellen: Schema für WOW-Effekt-Übungen (siehe `03-KONZEPT.md` §3) | ✅ | |

---

## Phase 2 – Theorie-Stoff neu strukturieren (ae-bootcamp)

Vorbedingung: T10, T13 erledigt.

| ID | Task | Status | Notes |
|---|---|---|---|
| T20 | Tag 1: 5–6 Theorie-Happen erstellen (HTML/CSS, ohne JS); bestehende `theorie-webapp-basics.md` restrukturieren oder ersetzen | ✅ | ohne Datums-Zusatz |
| T21 | Tag 2: 5–6 Theorie-Happen + `theorie-json-api-fetch.md` restrukturieren | ✅ | ohne Datums-Zusatz |
| T22 | Tag 3: 5–6 Theorie-Happen + Theorie für Integration (2-stufig-Fallback ohne localStorage) | ✅ | ohne Datums-Zusatz |
| T23 | Tag 4: KEINE Pflicht-Theorie. Nur Stub-Seite mit Hinweis auf Auswahl-Kurzpräsentationen im Trainer-Repo | ✅ | |
| T24 | Tag 5: KEINE Theorie. Nur Stub-Seite mit Hinweis auf Demo-Material | ✅ | |
| T25 | Alle Theorie-Seiten auf `textContent`/best practices prüfen (`innerHTML` rigoros eliminieren) | ✅ | Quer-Check |
| T26 | `index.md` (Startseite) und Wochenübersicht **ohne konkrete Daten** umschreiben | ✅ | "Tag 1, Tag 2, …" statt "06.08., 07.08., …" |
| T27 | `mkdocs.yml` Nav anpassen: `Tag 1 – Datum` → `Tag 1` (alle 5 Tage) | ✅ | |

---

## Phase 3 – Repo `ae-trainer-briefing` aufsetzen

Vorbedingung: T00–T02 erledigt.

| ID | Task | Status | Notes |
|---|---|---|---|
| T30 | `ae-trainer-briefing/` auf `bootcamp-v2` komplett aufsetzen: MkDocs (`mkdocs.yml`), GitHub Actions Workflow (`.github/workflows/deploy.yml`), `requirements.txt`, `.gitignore`, `CODE_OF_CONDUCT.md` (Trainer-Verhaltenskodex), `README.md`, `docs/index.md` | ✅ | Repo existiert leer, Branch erstellt |
| T31 | Template für Präsentations-Folien-Skript erstellen | ✅ | |
| T32 | Template für Live-Coding-Skript pro Happen (5–15 min) erstellen | ✅ | |
| T33 | Präsentations-Skript Tag 1 schreiben | ✅ | |
| T34 | Live-Coding-Skript(e) Tag 1 schreiben (1 pro Happen = ~6 Stück) | ✅ | |
| T35 | Präsentations-Skript Tag 2 schreiben | ✅ | |
| T36 | Live-Coding-Skript(e) Tag 2 schreiben | ✅ | |
| T37 | Präsentations-Skript Tag 3 schreiben | ✅ | |
| T38 | Live-Coding-Skript(e) Tag 3 schreiben | ✅ | |
| T39 | Auswahl-Kurzpräsentationen Tag 4 schreiben (mehrere Slots à 10–15 min): Dark Mode, Chart.js, Animationen, Auto-Refresh | ✅ | im Trainer-Repo unter `docs/praesentationen/tag-4-kurz/` |
| T40 | Demo-Moderations-Skript Tag 5 schreiben | ✅ | |

---

## Phase 4 – Trainer-Material aus ae-bootcamp auslagern

Vorbedingung: T30 erledigt.

| ID | Task | Status | Notes |
|---|---|---|---|
| T45 | Inhalt aus `ae-raumklima-bootcamp/docs/trainer/hinweise.md` nach `ae-trainer-briefing/docs/hinweise.md` übernehmen / neu schreiben | ⬜ | |
| T46 | Inhalt aus `ae-raumklima-bootcamp/docs/trainer/tagesplanung.md` aufteilen und in `ae-trainer-briefing/docs/praesentationen/tag-1.md`, `tag-2.md`, `tag-3.md` integrieren | ⬜ | |
| T47 | Inhalt aus `ae-raumklima-bootcamp/docs/trainer/risiken-und-fallbacks.md` nach `ae-trainer-briefing/docs/risiken-und-fallbacks.md` übernehmen | ⬜ | |
| T48 | Inhalt aus `ae-raumklima-bootcamp/docs/trainer/demo-sensor.md` nach `ae-trainer-briefing/docs/demo-sensor.md` übernehmen | ⬜ | |
| T49 | Inhalt aus `ae-raumklima-bootcamp/docs/trainer/index.md` in `ae-trainer-briefing/docs/index.md` integrieren | ⬜ | |

---

## Phase 5 – Übungen (Hands-on, 2h, nur Tag 1–3)

Vorbedingung: T14 erledigt.

| ID | Task | Status | Notes |
|---|---|---|---|
| T50 | Übung Tag 1: WOW-Effekt-Übung in `ae-bootcamp/docs/uebungen/tag-1/aufgabe.md` schreiben (HTML/CSS, kleines Projekt, Schritt-für-Schritt) | ⬜ | baut auf `03-KONZEPT.md` §3 |
| T51 | Übung Tag 2: WOW-Effekt-Übung (JS-Grundlagen + fetch auf data.json) | ⬜ | |
| T52 | Übung Tag 3: WOW-Effekt-Übung (Datenkonsum + Statuslogik ohne localStorage) | ⬜ | |
| T53 | Übung Tag 4: NICHT im Lernleitfaden – gehört zu Phase 3 (Auswahl-Kurzpräsentationen im Trainer-Repo) | n/a | siehe T39 |
| T54 | Übung Tag 5: NICHT vorhanden | n/a | Demo-Tag |

**Hinweis**: Die Übungs-Skeleton-Files liegen gemäss Q3 **nicht im
Repo vorbereitet** – Lernende legen sie gemäss Anleitung selber an.
Die Files entstehen also erst während der Übung im `uebungen/tag-N/`-
Ordner im ae-codebase-Repo.

## Phase 6 – Projekt-Anleitungen (ae-codebase, kumulativ Tag 1–4)

Vorbedingung: T13 erledigt.

| ID | Task | Status | Notes |
|---|---|---|---|
| T60 | Projekt-Schritt-Template finalisieren und in `ae-bootcamp/docs/projekt/projekt-anleitung-template.md` ablegen als Referenz | ⬜ | |
| T61 | Projekt Tag 1 als Schritt-Anleitung: Dashboard-Grundlayout (HTML + CSS, kein JS) | ⬜ | |
| T62 | Projekt Tag 2: Daten aus `data.json` laden, Statuslogik, Verlauf | ⬜ | |
| T63 | Projekt Tag 3: API-Anbindung (2-stufig-Fallback ohne localStorage) | ⬜ | |
| T64 | Projekt Tag 4: Polish, Testen, optional Features – Schritt-Anleitung für "freies Austoben" | ⬜ | |
| T65 | Projekt Tag 5: Demo-Vorbereitung (Anleitung für Demo-Skript) | ⬜ | |

---

## Phase 7 – Trainer-Live-Coding-Anweisungen (ae-trainer-briefing)

Vorbedingung: T13, T30.

| ID | Task | Status | Notes |
|---|---|---|---|
| T70 | Template für Trainer-Live-Coding-Anweisung erstellen | ⬜ | Datei → Konfig → Funktion1 → Funktion2 → … → Erklärungen → Andeutungen |
| T71 | Trainer-Anweisung Tag 1 (Projekt-Lösung) | ⬜ | |
| T72 | Trainer-Anweisung Tag 2 | ⬜ | |
| T73 | Trainer-Anweisung Tag 3 | ⬜ | |
| T74 | Trainer-Anweisung Tag 4 (Optional Features / Polish) | ⬜ | |
| T75 | Trainer-Anweisung Tag 5 (Demo-Moderation) | ⬜ | |

---

## Phase 8 – Integration & Polish

Vorbedingung: Phasen 2–7.

| ID | Task | Status | Notes |
|---|---|---|---|
| T80 | Cross-Repo-Verlinkungen prüfen (ae-bootcamp ↔ ae-codebase ↔ ae-trainer-briefing) | ⬜ | |
| T81 | Alle Code-Beispiele in Theorie-Seiten auf `textContent`/best practices durchforsten (`innerHTML` rigoros eliminieren) | ⬜ | |
| T82 | `ae-raumklima-bootcamp/docs/trainer/` leeren / durch Stub mit Link auf `ae-trainer-briefing` ersetzen | ⬜ | siehe `03-KONZEPT.md` §7 |
| T83 | README-Updates in allen drei Repos (Verweis auf V2-Material, klare Markierung "im Aufbau") | ⬜ | |
| T84 | Finale Review-Runde (Rechtschreibung, Links, Konsistenz, kein Datum mehr drin) | ⬜ | |
| T85 | Doku-Build testen: `mkdocs build` und `mkdocs serve` müssen in beiden MkDocs-Repos laufen | ⬜ | ae-bootcamp + ae-trainer-briefing |

---

## Phase 9 – Deployment (auf deine Freigabe)

**Wichtig**: Diese Phase wird **erst nach deiner expliziten
Freigabe / PR-Annahme** ausgeführt. Reihenfolge: Trainer-Repo zuerst
(damit es eine Heimat gibt), dann ae-bootcamp, dann ae-codebase.

| ID | Task | Status | Notes |
|---|---|---|---|
| T90 | `bootcamp-v2` → `master` mergen in `ae-trainer-briefing` | ⛔ Auf deine Freigabe | zuerst |
| T91 | `bootcamp-v2` → `master` mergen in `ae-raumklima-bootcamp` | ⛔ Auf deine Freigabe | dann |
| T92 | `bootcamp-v2` → `master` mergen in `ae-raumklima-bootcamp-codebase` | ⛔ Auf deine Freigabe | zuletzt |
| T93 | ae-trainer-briefing Collaborators einrichten (alle Trainer) | ⬜ | |
| T94 | GitHub Pages neu deployen (passiert via Actions automatisch nach Merge) | ⛔ Auf deine Freigabe | |

---

## Zusammenfassung pro Phase

| Phase | Tasks offen | davon blockiert |
|---|---|---|
| Phase 0 | 0 | 0 |
| Phase 1 | 5 | 0 |
| Phase 2 | 8 | 0 |
| Phase 3 | 11 | 0 |
| Phase 4 | 5 | 0 |
| Phase 5 | 3 | 0 (T53/T54 n/a) |
| Phase 6 | 6 | 0 |
| Phase 7 | 6 | 0 |
| Phase 8 | 6 | 0 |
| Phase 9 | 5 | 3 (alle auf deine Freigabe) |
| **Total** | **55** | **3** |

---

## Wie wir weiterarbeiten

Pro Task:

1. Du liest die Task-Beschreibung.
2. Du sagst "go" (oder änderst die Beschreibung).
3. Ich arbeite den Task ab (einer oder mehrere thematisch klare Commits).
4. Du reviewst (oder ich zeige dir das Resultat).
5. Ich setze den Status auf ✅ und aktualisiere `06-STATUS.md`.
6. Nächster Task.

Bei Fragen / Unklarheiten mitten im Task: ich komme zurück zu dir,
bevor ich falsche Annahmen treffe.

---

## Geänderte Tasks durch deine Entscheidungen (Diff-Zusammenfassung, finale Version)

**Q1 (Tag 4/5):**
- T23: Tag-4-Theorie wird zu **Stub-Seite mit Hinweis auf Auswahl-Kurzpräsentationen**
- T24: Tag-5-Theorie wird zu **Stub-Seite mit Hinweis auf Demo-Material**
- T39 (neu): Auswahl-Kurzpräsentationen Tag 4 (mehrere Slots)
- T64: Projekt Tag 4 = "freies Austoben", Polish/optional Features
- T65: Projekt Tag 5 = Demo-Vorbereitung
- T74: Trainer-Live-Coding Tag 4 = Optional Features / Polish
- T75: Trainer-Live-Coding Tag 5 = Demo-Moderation (nicht Pflicht-Coding)

**Q2 (Theorie-Seiten-Detail):**
- T20, T21, T22: jeweils **5–6 Theorie-Happen** statt einer langen Seite
- T34, T36, T38: Live-Coding-Skripte als **5–15 min Snippets**

**Q3 (Übungs-Format, WOW-Effekt):**
- T50–T52: WOW-Effekt-Übungen in der Doku, **nicht als vorbereitete Skeleton-Files im Repo**
- T51, T52: Schritt-für-Schritt-Anleitung in der Doku
- Lernende legen Files **selber an** im `uebungen/tag-N/`-Ordner
- T53/T54 (Übung Tag 4/5): **entfernt**, weil Tag 4 = freiwillige Auswahl, Tag 5 = Demo

**Q4 (Fallback ohne localStorage):**
- T12 (Konzept), T52 (Übung Tag 3), T63 (Projekt Tag 3): bereits entblockt

**Q5 (Trainer-Material-Repo):**
- T30 (Setup), T31–T40 (Trainer-Material), T45–T49 (Auslagerung), T82 (Stub): bereits entblockt/erstellt

**Q6 (Projekt-Anleitung Detail):**
- T13 (Template), T60 (final), T61–T64: jeweils **detaillierte Schritt-für-Schritt-Anleitung**

**Q7 (V2 = 2027, kein Zeitdruck):**
- T90–T94: **keine Datums-Blocks**, alle auf "auf deine Freigabe"

**Q8 (keine Daten):**
- T20–T24: alle ohne Datums-Zusatz
- T26, T27: explizite "ohne Daten"-Tasks
- T84: Review-Runde prüft auf Daten

**Q9 (Tag 4 = Auswahl-Kurzpräsentationen):**
- T39: mehrere Slots à 10–15 min im Trainer-Repo
- T23: Tag-4-Theorie als Stub mit Verweis auf T39