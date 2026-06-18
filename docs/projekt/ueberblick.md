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

Die App nutzt Mock-Daten aus einer JSON-Datei:

```json
{
  "room": "B101",
  "temperature": 23.4,
  "humidity": 51,
  "timestamp": "2026-08-06T10:30:00"
}
```

Details: [Mockdaten](mockdaten.md) und [API-Vertrag](api-vertrag.md).

!!! info "Mock-Daten zuerst"
    Wir starten mit Mock-Daten. Eine echte API ist ein optionales Ziel.  
    So hat jedes Team garantiert etwas, das funktioniert.

## Meilensteine

| Tag | Meilenstein |
|-----|-------------|
| Tag 1 | Dashboard-Grundlayout steht, erster Raum wird angezeigt |
| Tag 2 | Daten werden geladen, Statuslogik funktioniert, Verlauf sichtbar |
| Tag 3 | API-Integration oder Mock-Fallback, Layout finalisiert |
| Tag 4 | Pflichtumfang komplett, getestet, Demo vorbereitet |
| Tag 5 | Präsentation & Abschluss |
