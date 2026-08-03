# Tag 3 – 10. August

## :material-target: Tagesziel

Am Ende des Tages kommuniziert deine App mit dem SuvaSense-Backend, du hast Feedback von anderen Teams erhalten und die Demo-Vorbereitung gestartet. Die Live-Integration mit echten Sensordaten ist im Browser sichtbar – oder der Snapshot-Fallback greift sauber.

## :material-clock-outline: Ablauf

| Zeit | Phase | Inhalt |
|------|-------|--------|
| 08:00–08:15 | :material-weather-sunny: Daily | Stand-up im Team |
| 08:15–09:00 | :material-account-group: Retro | Austausch mit anderen Teams (45 min) |
| 09:00–10:00 | :material-hammer-wrench: Projekt | Verlaufsliste bauen |
| 10:00–10:15 | :material-coffee: Pause | |
| 10:15–12:00 | :material-hammer-wrench: Projekt | API-Integration + Snapshot-Fallback |
| 12:00–13:00 | :material-food: Mittag | |
| **13:00–15:00** | **:material-connection: Live-Integration** | **Gemeinsame Session mit PE-Team: App ↔ API ↔ Sensor live testen** |
| 15:15–16:00 | :material-clipboard-check-outline: Checkpoint | Tagesabschluss & Demo-Vorbereitung |

!!! warning "Wichtig: Joint-Session mit PE um 13:00"
    Von 13:00–15:00 ist eine **gemeinsame Integrations-Session** mit dem PE-Team. Die AE-Lernenden testen ihre App gegen das SuvaSense-Backend (oder Snapshot-Fallback), das PE-Team publiziert Messwerte über MQTT. So wird der Datenvertrag aus Tag 2 live validiert.

    **Was du zur Integration mitbringst:** deine App muss soweit sein, dass sie Daten per `fetch()` lädt. Snapshot-Fallback ist Pflicht; Admin-Seite (Sensor-Auswahl) ist ein nice-to-have, kein Muss für die Session.

## :material-school: Was lernst du heute?

- Wie hole ich konstruktives Feedback von anderen Teams?
- Wie integriere ich eine echte API?
- Was ist eine Fallback-Strategie (API → localStorage → Seed)?
- Wie funktioniert Integration mit anderen Teams?
- Wie bereite ich meine App für die Demo auf?

## :material-hammer-wrench: Was baust du heute?

- Verlaufsliste (aus Tag 2 verschoben)
- Feedback von anderen Teams einarbeiten
- API-Integration inkl. Snapshot-Fallback
- Admin-Seite für Sensor-Auswahl (optional)
- Layout-Feinschliff
- Demo-Skript vorbereiten

## :material-check-all: Definition of Done

- [ ] Retro mit mindestens einem anderen Team durchgeführt
- [ ] Verlaufsliste zeigt mehrere Push-Bundles
- [ ] App lädt Daten zuverlässig (mit Snapshot-Fallback aus `localStorage`)
- [ ] (Optional) Admin-Seite existiert
- [ ] Live-Integration mit SuvaSense ist getestet (oder Fallback demonstriert)
- [ ] Demo-Skript ist geschrieben

## :material-arrow-right: Weiter

- [Retro](retro.md)
- [Projekt: Verlaufsliste](projekt-verlaufsliste.md)
- [Projekt: Integration](integration.md)
- [Checkpoint Tag 3](checkpoint.md)