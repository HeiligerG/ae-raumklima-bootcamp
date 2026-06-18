# Risiken & Fallbacks

## Risiko-Matrix

| Risiko | Wahrscheinlichkeit | Auswirkung | Massnahme |
|--------|-------------------|-----------|-----------|
| WLAN fällt aus | Mittel | Hoch | Mock-Daten funktionieren offline |
| API nicht erreichbar | Mittel | Mittel | Fallback-Strategie ist Pflicht |
| Lernende überfordert | Mittel | Hoch | Aufgaben vereinfachen, Pair-Programming |
| Lernende unterfordert | Mittel | Niedrig | Optionale Features, Peer-Teaching |
| Git-Konflikte | Hoch | Niedrig | Teamweisung: oft pullen, kleine Commits |
| Laptop-Probleme | Niedrig | Hoch | Ersatz-Laptop bereit haben |
| Zeit reicht nicht | Hoch | Mittel | MVP-Fokus, DoD rigoros anwenden |
| Demo schlägt fehl | Niedrig | Hoch | Mock-Daten, vorher 2× durchlaufen |

## Fallback-Pläne

### Szenario 1: WLAN-Ausfall

1. Ruhe bewahren – die App funktioniert komplett offline
2. Mock-Daten sind lokal – kein Netzwerk nötig
3. Git funktioniert nicht → lokale Commits, später pushen
4. Präsentation offline halten (Mock-Daten zeigen)

### Szenario 2: API nicht erreichbar

1. `USE_API` auf `false` setzen
2. Alle Daten kommen aus `data.json`
3. Fallback ist eingebaut und getestet
4. Demo mit Mock-Daten ist genauso gültig

### Szenario 3: Team hängt stark hinterher

1. Fokus auf absolutes Minimum:
    - Dashboard mit statischen Werten (Tag 1)
    - Daten aus JSON laden (Tag 2)
    - Status anzeigen (Tag 2)
    - Admin-Seite weglassen
    - Verlauf stark vereinfachen (nur 3 Einträge)
2. Zusätzliches Coaching (Trainer setzt sich 20 Min. dazu)
3. Code-Qualität nicht erzwingen – Hauptsache es funktioniert

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
- [ ] API ist getestet (falls vorhanden)
- [ ] WLAN ist stabil
- [ ] Beamer funktioniert
- [ ] Ersatz-Laptop ist bereit
- [ ] Alle Repositories existieren
- [ ] VS Code + Extensions sind auf dem neusten Stand
- [ ] Grill ist organisiert (Tag 5)
- [ ] Getränke sind organisiert
