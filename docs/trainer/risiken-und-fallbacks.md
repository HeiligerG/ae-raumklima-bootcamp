# Risiken & Fallbacks

## Risiko-Matrix

| Risiko | Wahrscheinlichkeit | Auswirkung | Massnahme |
|--------|-------------------|-----------|-----------|
| WLAN fällt aus | Mittel | Hoch | Mock-Daten funktionieren offline; Mock-API läuft im lokalen Terminal |
| API nicht erreichbar | Mittel | Mittel | Fallback-Strategie ist Pflicht; `data.json` als Backup |
| Node.js auf Laptop fehlt | Mittel | Mittel | Tag 2 Abend ankündigen; Installationsanleitung im Setup; Docker als Alternative |
| Lernende überfordert | Mittel | Hoch | Aufgaben vereinfachen, Pair-Programming |
| Lernende unterfordert | Mittel | Niedrig | Optionale Features, Peer-Teaching |
| Git-Konflikte | Hoch | Niedrig | Teamweisung: oft pullen, kleine Commits, Feature-Branches (siehe `CODE_OF_CONDUCT.md`) |
| Laptop-Probleme | Niedrig | Hoch | Ersatz-Laptop bereit haben |
| Zeit reicht nicht | Hoch | Mittel | MVP-Fokus, DoD rigoros anwenden |
| Demo schlägt fehl | Niedrig | Hoch | Mock-Daten, vorher 2× durchlaufen |

## Fallback-Pläne

### Szenario 1: WLAN-Ausfall

1. Ruhe bewahren – die App funktioniert komplett offline
2. Mock-Daten sind lokal – kein Netzwerk nötig
3. Mock-API läuft im lokalen Terminal, braucht kein WLAN
4. Git funktioniert nicht → lokale Commits, später pushen
5. Präsentation offline halten (Mock-Daten zeigen)

### Szenario 2: API nicht erreichbar

1. `USE_API` auf `false` setzen in `script.js` → App fällt auf `data.json` zurück
2. Alle Daten kommen aus `data.json` (im `app/`-Ordner)
3. Fallback ist eingebaut und getestet
4. Demo mit Mock-Daten ist genauso gültig

### Szenario 2b: Mock-API startet nicht

1. Terminal-Ausgabe lesen (oft fehlt `npm install` oder Port 3000 belegt)
2. `npm install` im `mock-api/`-Ordner ausführen
3. Anderen Prozess auf Port 3000 beenden oder `PORT=3001 npm start`
4. Wenn nichts hilft: Lernende arbeiten temporär nur mit `data.json` (siehe Szenario 2)

### Szenario 3: Team hängt stark hinterher

1. Fokus auf absolutes Minimum:
    - Dashboard mit statischen Werten (Tag 1)
    - Daten aus JSON laden (Tag 2)
    - Status anzeigen (Tag 2)
    - Admin-Seite weglassen
    - Verlauf stark vereinfachen (nur 3 Einträge)
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
2. Peer-Teaching: Dieses Team hilft einem langsameren Team
3. Eigene Ideen umsetzen lassen

### Szenario 5: Demo schlägt fehl

1. **Vorbeugen**: Mock-Daten funktionieren garantiert
2. **Vorbeugen**: Jedes Team läuft 2× Probe-Demo
3. Wenn doch: Trainer moderiert («zeigt uns einfach den Code»)
4. Positiv bleiben: Beim nächsten Mal klappt's

### Szenario 6: PE-Integration an Tag 3 funktioniert nicht

1. AE-Lernende zeigen App gegen Mock-Fallback (`USE_API = false`) – Demo-tauglich
2. PE-Team zeigt ESP + Sensor-Aufbau separat, ggf. mit Hard-Copy der Messwerte in PHPMyAdmin
3. **Niemand muss «die eine Live-Integration» zeigen** – das ist ein Bonus, nicht die Pflicht
4. Nach der Woche in Ruhe die echte Integration fertigstellen (ausserhalb Bootcamp-Scope)

## Kommunikation

### Bei Problemen

- Immer transparent kommunizieren
- Keine Panik verbreiten
- Lösungen anbieten, nicht Probleme beschreiben
- Positiv framen: «Das ist eine gute Gelegenheit, den Fallback zu testen»

### Mit Lernenden

- «Das ist normal, das passiert jedem am Anfang»
- «Genau dafür haben wir Mock-Daten eingebaut»
- «Fehler sind gut – daran lernt man am meisten»

## Checkliste vor dem Bootcamp

- [ ] Mock-Daten sind vorbereitet (JSON validiert)
- [ ] **Beide Repositories** sind lokal geklont und auf dem neusten Stand
- [ ] **Mock-API wurde getestet** (`npm start` → <http://localhost:3000> zeigt Übersicht)
- [ ] (Optional) **Docker-Variante** mit MySQL + PHPMyAdmin funktioniert (`docker compose up -d`)
- [ ] API-Key ist festgelegt (für ESP-Demo, falls relevant)
- [ ] WLAN ist stabil
- [ ] Beamer funktioniert
- [ ] Ersatz-Laptop ist bereit
- [ ] VS Code + Extensions sind auf dem neusten Stand
- [ ] Grill ist organisiert (Tag 5)
- [ ] Getränke sind organisiert
