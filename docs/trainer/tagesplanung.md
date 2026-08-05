# Tagesplanung für Trainer

## Übersicht

| Tag | Datum | Schwerpunkt | Deine Rolle |
|-----|-------|-------------|-------------|
| 1 | 06.08. | Einstieg & Basics | Führen, erklären, Setup helfen |
| 2 | 07.08. | Daten & Logik | Coachen, bei fetch() helfen, Joint-Session moderieren |
| 3 | 10.08. | Integration & Demo | Retro moderieren, Snapshot-Fallback erklären, Joint-Session moderieren |
| 4 | 11.08. | Finish & Demo | Testen anleiten, Demo coachieren |
| 5 | 12.08. | Präsentation | Zuschauen, feiern |

## Tag 1 – Einstieg

### Vor dem Start
- [ ] Raum vorbereiten, Beamer testen
- [ ] WLAN-Zugang prüfen
- [ ] VS Code + Extensions bereit
- [ ] **Jede/r Lernende hat einen eigenen Fork** des Codebase-Repos
- [ ] **KI-Verbot kurz ansagen** (1 Min, mit Verweis auf W3Schools)

### Während des Tages
- Theorie (09:00): Klar und langsam erklären, viele Beispiele
- Übung (10:15): Herumgehen, bei Setup-Problemen helfen
- Projekt (13:00): Jede/n einzeln betreuen, nur bei Blockaden eingreifen

### Worauf achten?
- Hat jede/r VS Code, Live Server, Git?
- **Hat jede/r den Fork erfolgreich geklont?**
- **Hat jede/r den `app/`-Ordner im Codebase-Repo gefunden?**
- Versteht jede/r HTML vs. CSS vs. JavaScript?
- Erster Commit auf main im Fork gemacht?

## Tag 2 – Daten & Logik

### Vor dem Start
- [ ] Mock-Daten geprüft (Schema = Push-Bundle-Format)
- [ ] **SuvaSense-Stack startklar machen** (kann auch erst Tag 3 hochgefahren werden, aber Stack-Status kennen)
- [ ] **Raum für die Joint-Session mit PE um 13:00 vorbereiten** (Beamer, Sitzordnung, beide Teams an einem Ort)

### Während des Tages
- Theorie (08:15): JSON erklären, `fetch()` live demonstrieren
- Übung (09:00): Bei fetch()-Fehlern helfen
- Projekt (10:15): Statuslogik erklären, nicht vorkauen
- **Joint-Session 13:00–15:00 moderieren**: PE zeigt ESP-Firmware, Trainer zeigt `docker compose logs backend`, Lernende sehen wie der MQTT-Payload dem Push-Bundle entspricht. Trainer coacht, schreibt die finalen Werte mit (API-URL, Seriennummer, Topic-Format).

### Worauf achten?
- Versteht jeder den Unterschied synchron/asynchron?
- `catch` für Fehlerfall eingebaut?
- **Sind API-URL und Seriennummer spätestens um 15:00 an die Lernenden verteilt?**
- Verlaufsliste wird bewusst NICHT an Tag 2 gebaut (Verschiebung auf Tag 3 morgens)

## Tag 3 – Integration

### Vor dem Start
- [ ] Retro-Partner-Teams festlegen
- [ ] **SuvaSense-Stack läuft und ist erreichbar** (`curl http://<host>:8080/health` und `docker compose ps`)
- [ ] **Demo-Sensor publiziert** (entweder echtes ESP32 oder manueller `mosquitto_pub` – siehe [Demo-Sensor-Setup](demo-sensor.md))
- [ ] API-URL und Demo-Seriennummer sind an die Lernenden verteilt (am besten schon Tag 2 Nachmittag, spätestens jetzt)
- [ ] pgAdmin ist offen am Beamer vorbereitet (für die Live-Demo)

### Während des Tages
- Daily (08:00): Stand-up
- Retro (08:15): Teams zuweisen, Zeit tracken, Feedback-Regeln erklären
- **Projekt Verlaufsliste (09:00–10:00)**: kurze Coach-Session, Code aus Tag-2-Anleitung übernehmen
- **Joint-Session 13:00–15:00 moderieren**: AE testet App gegen API (oder Snapshot-Fallback), PE publiziert via MQTT. Trainer überwacht `mosquitto_sub -t 'suva/+/data' -v` und zeigt den Datenstrom am Beamer.

### Worauf achten?
- Retro läuft konstruktiv?
- Verlaufsliste wird bei allen gebaut (das war's, was an Tag 2 fehlte)
- **Snapshot-Fallback funktioniert bei jedem Team?** (WLAN kurz trennen als Test)
- **Läuft die Integration am Ende des Slots bei mindestens 1 Team live?** Wenn nicht: Snapshot-Fallback ist Plan B, und der ist genauso gültig

## Tag 4 – Finish & Demo

### Vor dem Start
- [ ] Demo-Zeitplan erstellt (welches Team wann, PE- und AE-Slots gemischt)
- [ ] Beamer für abends prüfen
- [ ] SuvaSense-Stack läuft stabil
- [ ] Backup-Demo-Sensor bereit (z. B. zweites ESP32 oder `mosquitto_pub`-Skript)

### Während des Tages
- Pflichtumfang (08:15): DoD-Checkliste durchgehen lassen
- **Wenn um 12:00 noch Bugs offen: Bugfix-Phase hat Vorrang vor Optional-Block** (lieber eine App ohne Features, die sauber läuft)
- Testen (10:15): Testfälle vorgeben, Konsole prüfen lassen
- Optional (13:00): Nur wenn Pflicht fertig
- Demo (14:30): Probe-Demo coachieren, Zeit nehmen (max. 30 min für alle)

### Abend-Demo (16:30, gemeinsam mit PE)
- Teams vorstellen lassen (Reihenfolge vorher mit PE-Trainer festlegen)
- Positives Feedback geben
- Fragen stellen («Wie habt ihr den Snapshot-Fallback gelöst?»)
- **Optional: Live-Sensor-Demo zeigen**, wenn die MQTT-Integration live ist
- **Snapshot-Demo zeigen**: kurz WLAN trennen → App bleibt funktional → das ist die eigentliche Demo-Heldentat

## Tag 5 – Abschluss

### Vor dem Start
- [ ] Grill organisiert?
- [ ] Kamera für Abschluss-Video bereit
- [ ] SuvaSense-Stack herunterfahren (`docker compose down`) – nicht zwingend, aber nice

### Während des Tages
- PV-Vorstellung (09:00): Einleiten, vorstellen
- Präsentation (10:30): Zeit tracken, Teams ankündigen
- Ab 12:00: Geniessen und feiern!