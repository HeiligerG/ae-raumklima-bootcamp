# Demo-Checkliste

## Ziel der Demo

Ihr zeigt am Ende der Woche eure App vor allen anderen Teams und Trainern.

- Dauer: ca. 5–10 Minuten pro Team
- Format: Live-Demo der App + kurze Erklärung
- Jedes Teammitglied zeigt einen Teil

## Checkliste für die Demo

### Vorbereitung

- [ ] App läuft lokal und zeigt Live-Daten vom SuvaSense-Backend
- [ ] Snapshot-Fallback funktioniert (Browser-Cache leeren, neu laden, prüfen ob Initial-Seed greift)
- [ ] Alle Pflicht-Features sind umgesetzt
- [ ] Es gibt keine offensichtlichen Bugs
- [ ] Die App wurde mit verschiedenen Werten getestet (gut, kritisch, schlecht)
- [ ] Der Browser ist im Vollbild-Modus
- [ ] Die Schrift ist gross genug für den Beamer
- [ ] Teammitglieder wissen, wer was zeigt
- [ ] **Trainer hat den SuvaSense-Stack laufen** (oder ihr habt Backup-Daten im `localStorage`)

### Ablauf der Demo

1. **Einleitung (1 Min.)**
    - Wer sind wir?
    - Was zeigt unsere App?
    - Welche Sensoren sind im Schulungsraum verteilt? (Seriennummern)

2. **Live-Demo (3–5 Min.)**
    - Dashboard zeigen
    - Sensor-Auswahl erklären (welche Seriennummer zeigt was)
    - Status erklären (Farben)
    - Verlauf zeigen (Push-Bundle-Datenstruktur)
    - Snapshot-Fallback demonstrieren (WLAN kurz aus, App bleibt funktional)
    - Admin-Seite zeigen (falls vorhanden)
    - Optionales Feature zeigen (falls vorhanden, z. B. Lux aus VEML7700)

3. **Herausforderungen & Learnings (1–2 Min.)**
    - Was war schwierig? (z. B. push-bundle-Struktur vs. einfaches Array)
    - Was haben wir gelernt? (z. B. async/await, try/catch)
    - Was würden wir nächstes Mal anders machen?

### Demo-Skript (Vorlage)

```markdown
## Demo-Skript Team XY

### Person A – Dashboard
- Seite öffnen
- Sensor-Auswahl: "Wir zeigen den Sensor SN12345, der im Raum B101 steht"
- Temperatur und Luftfeuchtigkeit zeigen
- Auf Status-Farbe hinweisen (gut / kritisch / schlecht)

### Person B – Verlauf & Logik
- Verlauf einblenden
- Erklären, wie sich der Status aus temp_c / hum_pct berechnet
- Zeigen, was bei kritischen Werten passiert (Notification-Banner)

### Person C – Live-Integration & Snapshot
- WLAN kurz trennen → App fällt automatisch auf localStorage-Snapshot zurück
- Wieder verbinden → Live-Daten sind zurück
- Optional: pgAdmin zeigen (http://localhost:5050), wo die Daten in Postgres landen

### Person D – Technik (optional)
- Kurz erklären, wie die App das Push-Bundle rendert
- Zeigen, wo der Snapshot im Browser gespeichert wird (DevTools → Application → LocalStorage)
```

## Tipps für die Präsentation

!!! tip "Do's"
    - Vorher mindestens einmal durchlaufen
    - Langsam und deutlich sprechen
    - Blickkontakt zum Publikum
    - Bei Fehlern: ruhig bleiben, weitermachen
    - Alle Teammitglieder kommen zu Wort

!!! warning "Don'ts"
    - Nicht den Code vorlesen
    - Nicht nur auf den Bildschirm schauen
    - Nicht zu schnell klicken
    - Keine Entschuldigungen («ist noch nicht fertig…»)
    - Nicht nur eine Person reden lassen

## Bewertung (falls zutreffend)

- Funktioniert die App? (Pflichtumfang inkl. Live-Integration oder Fallback)
- Ist die App verständlich?
- Wurden eigene Ideen umgesetzt?
- Teamarbeit sichtbar?
- Präsentation klar und strukturiert?