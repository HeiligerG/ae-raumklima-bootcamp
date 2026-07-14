# Tagesplanung für Trainer

## Übersicht

| Tag | Datum | Schwerpunkt | Deine Rolle |
|-----|-------|-------------|-------------|
| 1 | 06.08. | Einstieg & Basics | Führen, erklären, Setup helfen |
| 2 | 07.08. | Daten & Logik | Coachen, bei fetch() helfen |
| 3 | 10.08. | Integration & Demo | Retro moderieren, Fallback erklären |
| 4 | 11.08. | Finish & Demo | Testen anleiten, Demo coachen |
| 5 | 12.08. | Präsentation | Zuschauen, feiern |

## Tag 1 – Einstieg

### Vor dem Start
- [ ] Raum vorbereiten, Beamer testen
- [ ] WLAN-Zugang prüfen
- [ ] VS Code + Extensions bereit
- [ ] **Beide Repositories** bereit (Leitfaden-Repo + Codebase-Repo) – Lernende klonen beim Setup

### Während des Tages
- Theorie (09:00): Klar und langsam erklären, viele Beispiele
- Übung (10:15): Herumgehen, bei Setup-Problemen helfen
- Projekt (13:00): Teams beobachten, nur bei Blockaden eingreifen

### Worauf achten?
- Hat jeder VS Code, Live Server, Git?
- **Hat jeder beide Repositories geklont?**
- **Hat jeder den `app/`-Ordner im Codebase-Repo gefunden?**
- Versteht jeder HTML vs. CSS vs. JavaScript?
- Erster Commit gemacht?

## Tag 2 – Daten & Logik

### Vor dem Start
- [ ] Mock-Daten geprüft
- [ ] (Optional) Mock-API für die Schnellen vorbereitet – läuft auf `localhost:3000`
- [ ] **Raum für die Joint-Session mit PE um 13:00 vorbereiten** (Beamer, Sitzordnung, beide Teams an einem Ort)

### Während des Tages
- Theorie (08:15): JSON erklären, `fetch()` live demonstrieren
- Übung (09:00): Bei fetch()-Fehlern helfen
- Projekt (10:15): Statuslogik erklären, nicht vorkauen
- **Joint-Session 13:00–15:00 moderieren**: AE-Vertreter + PE-Vertreter klären den Schnittstellen-Vertrag. Trainer coacht, schreibt die finalen Werte mit (URL, Felder, Auth).

### Worauf achten?
- Versteht jeder den Unterschied synchron/asynchron?
- `catch` für Fehlerfall eingebaut?
- **Ist die Schnittstelle spätestens um 15:00 final schriftlich festgehalten?** (Foto vom Flipchart oder Update von `ingest-vertrag.md`)
- Verlaufsliste wird bewusst NICHT an Tag 2 gebaut (Verschiebung auf Tag 3 morgens)

## Tag 3 – Integration

### Vor dem Start
- [ ] Retro-Partner-Teams festlegen
- [ ] **Node.js ist bei allen installiert** (vorher an Tag-2-Abend ankündigen)
- [ ] Mock-API läuft auf deinem Laptop vorzeigebereit (z. B. am Beamer)
- [ ] (Optional) Docker-Variante mit MySQL + PHPMyAdmin vorbereitet für die Demo-Show
- [ ] **Schnittstellen-Vertrag vom Vortag nochmal kurz wiederholen** (was wurde Tag 2 festgelegt?)

### Während des Tages
- Daily (08:00): Stand-up
- Retro (08:15): Teams zuweisen, Zeit tracken, Feedback-Regeln erklären
- **Projekt Verlaufsliste (09:00–10:00)**: kurze Coach-Session, Code aus Tag-2-Anleitung übernehmen
- **Joint-Session 13:00–15:00 moderieren**: AE testet App gegen API (oder Mock-Fallback), PE pusht ESP → Backend. Live-Verifikation des Vertrags. Trainer geht zwischen den Setups hin und her.

### Worauf achten?
- Retro läuft konstruktiv?
- Verlaufsliste wird bei allen gebaut (das war's, was an Tag 2 fehlte)
- **Läuft die Integration am Ende des Slots bei mindestens 1 Team live?** Wenn nicht: Fallback-Strategie (USE_API=false) als Plan B
- Läuft die API bei allen in einem zweiten Terminal? (Platz für zwei Terminals einplanen)

## Tag 4 – Finish & Demo

### Vor dem Start
- [ ] Demo-Zeitplan erstellt (welches Team wann, PE- und AE-Slots gemischt)
- [ ] Beamer für abends prüfen
- [ ] **Mit PE-Trainer koordinieren**: gemeinsame Demo-Show um 16:30, wer moderiert?

### Während des Tages
- Pflichtumfang (08:15): DoD-Checkliste durchgehen lassen
- **Wenn um 12:00 noch Bugs offen: Bugfix-Phase hat Vorrang vor Optional-Block** (lieber eine App ohne Features, die sauber läuft)
- Testen (10:15): Testfälle vorgeben, Konsole prüfen lassen
- Optional (13:00): Nur wenn Pflicht fertig
- Demo (14:30): Probe-Demo coachieren, Zeit nehmen (max. 30 min für alle)

### Abend-Demo (16:30, gemeinsam mit PE)
- Teams vorstellen lassen (Reihenfolge vorher mit PE-Trainer festlegen)
- Positives Feedback geben
- Fragen stellen («Wie habt ihr das gelöst?»)
- **Optional: Sensor-Demo zeigen**, wenn die PE-Integration live ist (fasziniert das Publikum)

## Tag 5 – Abschluss

### Vor dem Start
- [ ] Grill organisiert?
- [ ] Kamera für Abschluss-Video bereit

### Während des Tages
- PV-Vorstellung (09:00): Einleiten, vorstellen
- Präsentation (10:30): Zeit tracken, Teams ankündigen
- Ab 12:00: Geniessen und feiern!
