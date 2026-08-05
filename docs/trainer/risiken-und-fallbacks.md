# Risiken & Fallbacks

## Risiko-Matrix

| Risiko | Wahrscheinlichkeit | Auswirkung | Massnahme |
|--------|-------------------|-----------|-----------|
| WLAN fällt aus | Mittel | Mittel | Snapshot-Fallback in App; Demo offline weiterlaufen lassen |
| SuvaSense-Backend nicht erreichbar | Mittel | Mittel | `docker compose restart backend`; Snapshot-Fallback greift |
| MQTT-Broker nicht erreichbar | Mittel | Hoch | Trainer publiziert manuell via `mosquitto_pub` |
| Postgres nicht erreichbar | Niedrig | Hoch | `docker compose restart postgres`; Backend wartet auf Healthcheck |
| Lernende überfordert | Mittel | Hoch | Aufgaben vereinfachen, Pair-Programming |
| Lernende unterfordert | Mittel | Niedrig | Optionale Features, Peer-Teaching |
| Git-Konflikte | Hoch | Niedrig | Teamweisung: oft pullen, kleine Commits, Feature-Branches (siehe `CODE_OF_CONDUCT.md`) |
| Laptop-Probleme | Niedrig | Hoch | Ersatz-Laptop bereit haben |
| Zeit reicht nicht | Hoch | Mittel | MVP-Fokus, DoD rigoros anwenden |
| Demo schlägt fehl | Niedrig | Hoch | Snapshot-Fallback, vorher 2× durchlaufen |

## Fallback-Pläne

### Szenario 1: WLAN-Ausfall

1. Ruhe bewahren – die App funktioniert komplett offline
2. Snapshot aus `localStorage` wird angezeigt
3. Auto-Refresh schlägt zwar fehl, aber die Werte bleiben sichtbar
4. Git funktioniert nicht → lokale Commits, später pushen
5. Präsentation offline halten (Snapshot zeigen)

### Szenario 2: SuvaSense-Backend nicht erreichbar

1. Snapshot-Fallback in der App greift (sichtbar im Browser, kein UI-Change nötig)
2. Backend neu starten: `docker compose -f SuvaSense/docker-compose.yml restart backend`
3. Falls das nicht hilft: `docker compose logs backend` lesen
4. Im Notfall: gesamten Stack neu bauen: `docker compose down && docker compose up -d --build`
5. Demo funktioniert mit Snapshot weiterhin

### Szenario 2b: MQTT-Broker nicht erreichbar

1. `docker compose -f SuvaSense/docker-compose.yml logs mosquitto` lesen
2. `docker compose restart mosquitto` versuchen
3. `mosquitto_pub` testen:
   ```bash
   docker compose -f SuvaSense/docker-compose.yml exec mosquitto \
     mosquitto_pub -t suva/DEMO-001/data -m '{"bme680":{"temp":22,"hum":50,"press":1013,"gas":100}}'
   ```
4. Falls Messages ankommen aber nicht im Backend ankommen: Backend subscribt nicht → `docker compose restart backend`

### Szenario 2c: Postgres nicht erreichbar

1. `docker compose -f SuvaSense/docker-compose.yml logs postgres`
2. Häufig: Disk voll → `docker system prune` (vorsichtig!)
3. Oder: `docker compose down postgres && docker compose up -d postgres` (Daten bleiben im Volume)
4. Im Notfall: `docker compose down -v` (Daten weg!) – nur als letzte Option

### Szenario 3: Team hängt stark hinterher

1. Fokus auf absolutes Minimum:
    - Dashboard mit statischen Werten (Tag 1)
    - Daten aus JSON laden (Tag 2)
    - Status anzeigen (Tag 2)
    - Admin-Seite weglassen
    - Verlauf stark vereinfachen (nur 3 Push-Bundles)
2. **Optional-Block an Tag 4 streichen**, stattdessen weiter am Pflichtumfang arbeiten
3. Zusätzliches Coaching (Trainer setzt sich 20 Min. dazu)
4. Code-Qualität nicht erzwingen – Hauptsache es funktioniert

!!! warning "Bugfix-Phase hat Vorrang vor Optional-Block"
    Wenn am Tag 4 um 12:00 (Ende Testen) noch offene Bugs in der Pflicht bestehen, wird der **Optional-Block gestrichen** und die Bugfix-Zeit verlängert. Lieber eine App ohne Charts/Dark-Mode, die im Demo nicht crasht, als eine App mit allem, die bei der Präsentation versagt. Die 30-min Demo-Vorbereitung um 14:30 ist nicht verhandelbar.

### Szenario 4: Team ist zu schnell fertig

1. Optionale Features anbieten:
    - Dark Mode (schnell, sichtbar)
    - Diagramm (anspruchsvoll, cool)
    - Auto-Refresh (technisch interessant)
    - Online-Indikator (SuvaSense-spezifisch)
    - Weitere Sensortypen anzeigen (Lux aus VEML7700)
2. Peer-Teaching: Dieses Team hilft einem langsameren Team
3. Eigene Ideen umsetzen lassen

### Szenario 5: Demo schlägt fehl

1. **Vorbeugen**: Snapshot-Fallback funktioniert garantiert
2. **Vorbeugen**: Jedes Team läuft 2× Probe-Demo (inkl. Snapshot-Demo: WLAN trennen)
3. Wenn doch: Trainer moderiert («zeigt uns einfach den Code»)
4. Positiv bleiben: Beim nächsten Mal klappt's

### Szenario 6: PE-Integration an Tag 3 funktioniert nicht

1. AE-Lernende zeigen App gegen Snapshot-Fallback – Demo-tauglich
2. PE-Team zeigt ESP + MQTT-Publishes separat
3. Trainer publiziert **manuell** via `mosquitto_pub` und demonstriert so den Live-Datenfluss
4. **Niemand muss «die eine Live-Integration» zeigen** – das ist ein Bonus, nicht die Pflicht
5. Snapshot-Fallback ist die eigentliche Demo-Heldentat

## Kommunikation

### Bei Problemen

- Immer transparent kommunizieren
- Keine Panik verbreiten
- Lösungen anbieten, nicht Probleme beschreiben
- Positiv framen: «Das ist eine gute Gelegenheit, den Snapshot-Fallback zu zeigen»

### Mit Lernenden

- «Das ist normal, das passiert jedem am Anfang»
- «Genau dafür haben wir den Snapshot-Fallback»
- «Fehler sind gut – daran lernt man am meisten»

## Checkliste vor dem Bootcamp

- [ ] Daten-Seed für `data.json` ist vorbereitet (JSON validiert, Push-Bundle-Schema)
- [ ] **Drei Repositories** sind lokal geklont und auf dem neusten Stand
- [ ] **SuvaSense-Stack wurde getestet** (`docker compose up -d --build`, dann `curl http://localhost:8080/health`)
- [ ] **Demo-Sensor wurde getestet** (`mosquitto_pub` einer Test-Message, im Backend-Log sichtbar)
- [ ] pgAdmin ist erreichbar (`http://localhost:5050`)
- [ ] API-URL und Demo-Seriennummer stehen im Trainer-Briefing
- [ ] WLAN ist stabil (Laptops können den SuvaSense-Host erreichen)
- [ ] Beamer funktioniert
- [ ] Ersatz-Laptop ist bereit
- [ ] VS Code + Extensions sind auf dem neusten Stand
- [ ] Grill ist organisiert (Tag 5)
- [ ] Getränke sind organisiert
