# Tag 2 – 07. August

## :material-target: Tagesziel

Am Ende des Tages lädt deine App Daten aus einer JSON-Datei (oder der lokalen Mock-API), zeigt den korrekten Status an und stellt eine Verlaufsliste dar. Du kennst den Schnittstellen-Vertrag mit dem PE-Team.

## :material-clock-outline: Ablauf

| Zeit | Phase | Inhalt |
|------|-------|--------|
| 08:00–08:15 | :material-weather-sunny: Daily | Stand-up im Team |
| 08:15–09:00 | :material-book-open-outline: Theorie | JSON, API, Fetch |
| 09:00–10:00 | :material-pencil-outline: Übung | Daten laden |
| 10:00–10:15 | :material-coffee: Pause | |
| 10:15–12:00 | :material-hammer-wrench: Projekt | Mock-Daten + Statuslogik |
| 12:00–13:00 | :material-food: Mittag | |
| **13:00–15:00** | **:material-handshake: Schnittstellen klären** | **Gemeinsame Session mit PE-Team: API-Vertrag final festlegen** |
| 15:15–16:00 | :material-clipboard-check-outline: Checkpoint | Tagesabschluss |

!!! warning "Wichtig: Joint-Session mit PE um 13:00"
    Von 13:00–15:00 ist eine **gemeinsame Session** mit dem PE-Team (Plattformentwickler). Hier wird der Schnittstellen-Vertrag final zwischen den beiden Teams abgestimmt: Welche URL? Welche Felder? Welche Auth? Die Lernenden-App-Seite läuft parallel weiter, der Ingest-Endpoint für die ESPs wird definiert.

    **Vorbereitung:** bis 13:00 sollten alle Teams Mock-Daten + Statuslogik fertig haben, damit sie an der Schnittstellen-Diskussion teilnehmen können.

## :material-school: Was lernst du heute?

- Was ist JSON?
- Wie funktioniert eine REST-API?
- Wie lade ich Daten mit `fetch()`?
- Was sind Promises und `async/await`?
- Wie zeige ich Daten dynamisch im HTML an?
- Wie schreibe ich eine Statuslogik?

## :material-hammer-wrench: Was baust du heute?

- Mock-Daten als JSON-Datei
- Daten per `fetch()` laden
- Dynamische Anzeige von Temperatur und Luftfeuchtigkeit
- Statuslogik: gut / mittel / kritisch (Schwellwerte werden im Projekt evaluiert)
- Fehlerfall: «Keine Daten verfügbar»

!!! note "Verlaufsliste verschoben auf Tag 3"
    Die Verlaufsliste bauen wir **erst am Tag 3 morgens** (09:00–10:00). So bleibt der Tag 2 Nachmittag frei für die wichtige Schnittstellen-Klärung mit dem PE-Team.

## :material-check-all: Definition of Done

- [ ] `data.json` mit Mock-Daten existiert
- [ ] Daten werden mit `fetch()` geladen und angezeigt
- [ ] Der Status wird korrekt berechnet
- [ ] Bei fehlenden Daten wird eine Fehlermeldung angezeigt
- [ ] Schnittstellen-Vertrag mit PE-Team ist abgestimmt
- [ ] Code ist committed und gepusht

## :material-arrow-right: Weiter

- [Theorie: JSON / API / Fetch](theorie-json-api-fetch.md)
- [Übung: Daten laden](uebung-daten-laden.md)
- [Projekt: Statuslogik](projekt-statuslogik-verlauf.md)
- [Schnittstellen klären](schnittstellen.md)
- [Checkpoint Tag 2](checkpoint.md)