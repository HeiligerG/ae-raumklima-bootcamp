# Projektübersicht

## Raumklima-Monitor

Du baust eine Web-App, die das Raumklima in Lernräumen überwacht.

### Was die App können muss (Pflichtumfang)

- [ ] Dashboard mit Raumname, Temperatur, Luftfeuchtigkeit
- [ ] Status-Anzeige: gut / kritisch / schlecht
- [ ] Daten aus JSON oder API laden
- [ ] Fehlerfall anzeigen (z. B. «Keine Daten verfügbar»)
- [ ] Verlauf der letzten Messungen anzeigen
- [ ] Einfache Admin-Seite für Räume oder Grenzwerte
- [ ] Demo vorbereiten und präsentieren

### Was die App zusätzlich können kann (optional)

- [ ] Mehrere Räume verwalten
- [ ] Diagramm / Chart für Temperatur- und Feuchtigkeitsverlauf
- [ ] Auto-Refresh der Daten
- [ ] Dark Mode
- [ ] Daten in LocalStorage speichern
- [ ] Benachrichtigungs-Banner bei kritischen Werten
- [ ] Schönere UI (Animationen, Icons, Farben)
- [ ] Präsentationsmodus (grosse Schrift, Vollbild)

## Technische Basis

Die App besteht aus drei Dateien:

| Datei | Zweck |
|-------|-------|
| `index.html` | Struktur der Seite |
| `style.css` | Aussehen und Layout |
| `script.js` | Logik und Daten |

Keine Frameworks, kein Build-Tool – reines HTML, CSS und JavaScript.

## Statuslogik

| Status | Bedingung |
|--------|-----------|
| :material-check-circle: Gut | Temperatur 20–24 °C **und** Luftfeuchtigkeit 40–60 % |
| :material-alert: Kritisch | Temperatur 18–26 °C **oder** Luftfeuchtigkeit 30–70 % |
| :material-close-circle: Schlecht | Alles ausserhalb |

## Datenquelle

Die App lädt ihre Daten aus einem **lokalen Backend** (Node/Express), das im Schwester-Repo `ae-raumklima-bootcamp-codebase` unter `mock-api/` mitgeliefert wird. Es liefert die gleichen Mock-Daten wie der Lerninhalt unten – das gibt euch eine realistische Umgebung ohne Sensor-Hardware.

```json
{
  "room": "B101",
  "temperature": 23.4,
  "humidity": 51,
  "timestamp": "2026-08-06T10:30:00"
}
```

Details: [Architektur](architektur.md), [Mockdaten](mockdaten.md), [API-Vertrag](api-vertrag.md).

!!! info "Zwei Datenquellen – ein Vertrag"
    Ab Tag 2 arbeitet ihr zusätzlich mit einer **lokalen `data.json`** als Fallback. Sie hat denselben Aufbau wie die API-Antwort. Wenn das Backend nicht läuft oder die API down ist, fällt eure App automatisch auf `data.json` zurück – so habt ihr immer Daten zum Arbeiten.

## Meilensteine

| Tag | Meilenstein |
|-----|-------------|
| Tag 1 | Dashboard-Grundlayout steht, erster Raum wird angezeigt |
| Tag 2 | Daten werden geladen, Statuslogik funktioniert, Verlauf sichtbar |
| Tag 3 | API-Integration oder Mock-Fallback, Layout finalisiert |
| Tag 4 | Pflichtumfang komplett, getestet, Demo vorbereitet |
| Tag 5 | Präsentation & Abschluss |
