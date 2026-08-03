# Tag 2 – 07. August

## :material-target: Tagesziel

Am Ende des Tages lädt deine App Daten aus dem SuvaSense-Push-Bundle-Format (oder dem `data.json`-Seed), zeigt den korrekten Status an und stellt eine Verlaufsliste dar. Du kennst den Datenvertrag zwischen Sensor und App.

## :material-clock-outline: Ablauf

| Zeit | Phase | Inhalt |
|------|-------|--------|
| 08:00–08:15 | :material-weather-sunny: Daily | Stand-up im Team |
| 08:15–09:00 | :material-book-open-outline: Theorie | JSON, API, Fetch |
| 09:00–10:00 | :material-pencil-outline: Übung | Daten laden |
| 10:00–10:15 | :material-coffee: Pause | |
| 10:15–12:00 | :material-hammer-wrench: Projekt | Seed-Daten + Statuslogik |
| 12:00–13:00 | :material-food: Mittag | |
| **13:00–15:00** | **:material-handshake: Datenvertrag klären** | **Gemeinsame Session mit PE-Team: Sensor → MQTT → Backend → App live durchspielen** |
| 15:15–16:00 | :material-clipboard-check-outline: Checkpoint | Tagesabschluss |

!!! warning "Wichtig: Joint-Session mit PE um 13:00"
    Von 13:00–15:00 ist eine **gemeinsame Session** mit dem PE-Team (Plattformentwickler). Hier wird der **Datenfluss live durchgespielt**: das PE-Team zeigt die ESP-Firmware, die auf `suva/<serial>/data` publiziert; das Trainer-Team zeigt im Backend (`docker compose logs backend`) wie die Messages ankommen; die Lernenden sehen, dass ihr App-Datenmodell (Push-Bundle) genau dem MQTT-Payload entspricht. So wird der Vertrag aus dem API-Vertrag **empirisch** validiert.

    **Vorbereitung:** bis 13:00 sollten alle Teams Seed-Daten + Statuslogik fertig haben, damit sie an der Datenvertrag-Diskussion teilnehmen können.

## :material-school: Was lernst du heute?

- Was ist JSON?
- Wie funktioniert eine REST-API?
- Wie lade ich Daten mit `fetch()`?
- Was sind Promises und `async/await`?
- Wie zeige ich Daten dynamisch im HTML an?
- Wie schreibe ich eine Statuslogik?

## :material-hammer-wrench: Was baust du heute?

- `data.json` als Initial-Seed (gleiches Schema wie API-Push-Bundle)
- Daten per `fetch()` laden
- Dynamische Anzeige von `readings.bme680.temp_c` und `hum_pct`
- Statuslogik: gut / mittel / kritisch
- Fehlerfall: «Keine Daten verfügbar»

!!! note "Verlaufsliste verschoben auf Tag 3"
    Die Verlaufsliste bauen wir **erst am Tag 3 morgens** (09:00–10:00). So bleibt der Tag 2 Nachmittag frei für die wichtige Datenvertrag-Diskussion mit dem PE-Team.

## :material-check-all: Definition of Done

- [ ] `data.json` mit Seed-Push-Bundles existiert
- [ ] Daten werden mit `fetch()` geladen und angezeigt
- [ ] Der Status wird korrekt berechnet
- [ ] Bei fehlenden Daten wird eine Fehlermeldung angezeigt
- [ ] Datenvertrag mit PE-Team ist durchgespielt
- [ ] Code ist committed und gepusht

## :material-arrow-right: Weiter

- [Theorie: JSON / API / Fetch](theorie-json-api-fetch.md)
- [Übung: Daten laden](uebung-daten-laden.md)
- [Projekt: Statuslogik](projekt-statuslogik-verlauf.md)
- [Datenvertrag klären](schnittstellen.md)
- [Checkpoint Tag 2](checkpoint.md)