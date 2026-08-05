# Backlog

Das Backlog enthält alle Aufgaben, die im Projekt umgesetzt werden müssen.

## Legende

| Symbol | Bedeutung |
|--------|-----------|
| :material-star: | Pflichtaufgabe |
| :material-star-outline: | Optionale Aufgabe |
| :material-head-cog: | Empfohlen für Anfänger-Teams |

## Epic 1: Grundgerüst (Tag 1)

- :material-star: :material-head-cog: `index.html` mit Grundstruktur erstellen
- :material-star: :material-head-cog: `style.css` mit Basis-Styling anlegen
- :material-star: :material-head-cog: Dashboard-Layout mit HTML aufbauen
- :material-star: Seriennummer, Temperatur und Luftfeuchtigkeit als Platzhalter anzeigen
- :material-star-outline: Responsive Design – auch auf dem Handy gut aussehen

## Epic 2: Daten & Logik (Tag 2)

- :material-star: :material-head-cog: `data.json` als Initial-Seed anlegen
- :material-star: :material-head-cog: Daten mit `fetch()` in die App laden
- :material-star: :material-head-cog: Statuslogik implementieren (gut/kritisch/schlecht, Werte von EDB)
- :material-star: :material-head-cog: Verlauf der letzten Push-Bundles anzeigen
- :material-star: Fehlerfall: «Keine Daten verfügbar» anzeigen, wenn Laden fehlschlägt
- :material-star-outline: Daten automatisch alle 30 Sekunden aktualisieren

## Epic 3: Integration (Tag 3)

- :material-star: App mit dem SuvaSense-Backend verbinden
- :material-star: Snapshot-Fallback in `localStorage` implementieren
- :material-star: Admin-Seite: Sensor-Auswahl oder Grenzwerte anpassen
- :material-star: Layout und Styling finalisieren
- :material-star-outline: Diagramm mit Chart.js oder Canvas einbauen

## Epic 4: Finish & Demo (Tag 4)

- :material-star: Pflichtumfang prüfen (Definition of Done)
- :material-star: App manuell testen
- :material-star: :material-head-cog: Demo vorbereiten (wer zeigt was?)
- :material-star: Alle gefundenen Bugs fixen
- :material-star-outline: Dark Mode umschalten können
- :material-star-outline: LocalStorage für Snapshot der letzten API-Daten
- :material-star-outline: Benachrichtigungs-Banner bei kritischen Werten
- :material-star-outline: Präsentationsmodus (grosse Schrift, Vollbild)
- :material-star-outline: Weitere Sensortypen anzeigen (`veml7700.lux`, `system.cpu_temp_c`, …)

## Epic 5: Abschluss (Tag 5)

- :material-star: Projektpräsentation (ca. 5–10 Minuten pro Team)
- :material-star: Live-Demo der App zeigen
- :material-star: Reflexion: Was habe ich gelernt?