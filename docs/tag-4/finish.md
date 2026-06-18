# Pflichtumfang fertigstellen

## :material-target: Ziel

Schliesse alle offenen Pflichtaufgaben ab. Nutze die Definition of Done.

## Pflicht-Checkliste

Geh diese Liste Punkt für Punkt durch. Alles muss abgehakt sein.

### Dashboard

- [ ] Raumname wird korrekt angezeigt
- [ ] Temperatur wird in °C angezeigt
- [ ] Luftfeuchtigkeit wird in % angezeigt
- [ ] Status wird korrekt berechnet (gut/kritisch/schlecht)
- [ ] Statusfarbe passt zum Status (grün/orange/rot)

### Daten

- [ ] Daten werden aus `data.json` oder API geladen
- [ ] Fallback-Strategie funktioniert
- [ ] Fehlerfall wird angezeigt («Keine Daten verfügbar»)
- [ ] Verlaufsliste zeigt die letzten Messungen

### Admin

- [ ] Admin-Seite oder Einstellungen-Panel existiert
- [ ] Raum kann gewechselt werden
- [ ] ODER Grenzwerte können angepasst werden

### Allgemein

- [ ] App startet ohne Fehler
- [ ] Keine statischen Werte mehr (alles aus JSON/API)
- [ ] Git-Commit vorhanden und gepusht

## Letzte offene Punkte

Notiere, was noch fehlt, und arbeite es ab:

| Aufgabe | Status | Wer? |
|---------|--------|------|
| | :material-circle-outline: | |
| | :material-circle-outline: | |
| | :material-circle-outline: | |

## Typische Lücken

??? bug "Status ändert sich nicht"
    Prüf: Wird `getStatus()` nach dem Laden der Daten aufgerufen?  
    Prüf: Wird die CSS-Klasse korrekt gesetzt (`element.className = 'status ' + status`)?

??? bug "Verlaufsliste ist leer"
    Prüf: Ist `renderHistory()` nach dem Laden aufgerufen?  
    Prüf: Existiert das HTML-Element mit der ID `history-list`?

??? bug "Fehlerfall wird nie gezeigt"
    Prüf: Greift das `catch` im `try/catch`-Block?  
    Prüf: Funktioniert `showError()` und ändert es die richtigen Elemente?

## Nach dem Abhaken

Wenn alles grün ist:

1. Nochmal alle Tests durchlaufen (siehe [Testen](testen.md))
2. Code committen und pushen
3. Ab zu den [optionalen Features](optionale-features.md) oder direkt zur Demo!
