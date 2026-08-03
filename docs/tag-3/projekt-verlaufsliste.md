# Projekt: Verlaufsliste

!!! info "Hinweis"
    Die Verlaufsliste wurde von Tag 2 hierher verschoben, damit der
    Tag-2-Nachmittag für die Datenvertrag-Diskussion mit dem PE-Team
    frei bleibt. Wenn du Tag 2 sauber abgeschlossen hast, ist die
    Verlaufsliste eigentlich schon fertig – kontrolliere kurz die
    Checkliste am Ende dieser Seite.

!!! warning "Eigenarbeit – Spec + Skelett, kein Copy-Paste"
    Diese Aufgabe gibt dir **Anforderungen und ein Skelett**. Wie
    genau du die Liste renderst, ist deine Entscheidung. Wenn du nach
    20 Min nicht weiterkommst: [`loesungen/tag-3/`](https://ae-raumklima-bootcamp.readthedocs.io/loesungen/tag-3/).

## :material-target: Aufgabe

Stelle sicher, dass dein Dashboard die letzten Messungen in einer
**Verlaufsliste** anzeigt. Die Daten kommen bereits aus
`data.json` (Tag 2) oder von der SuvaSense-API (Tag 3). Du musst
sie nur im HTML darstellen.

## :material-book-open-outline: Anforderungen

- [ ] Es gibt einen Container `<div class="history-list" id="history-list">` im `<main>`-Bereich
- [ ] Pro Push-Bundle wird ein `<div class="history-item">` erzeugt
- [ ] Jedes Item zeigt: Zeit (hh:mm), Temperatur (°C), Feuchte (%),
      Status-Pille (mit der richtigen Farbe)
- [ ] Maximal 10 Items werden angezeigt, neueste zuerst
- [ ] Push-Bundles ohne `bme680` werden **übersprungen** (defensiv)
- [ ] Bei API- oder Fetch-Fehler ist die Liste leer (kein Crash)

## :material-hammer-wrench: Skelett

### Funktion

```text
renderHistory(bundles)  // bundles: Array von Push-Bundles
```

### Ablauf in eigenen Worten

1. Hole dir das DOM-Element `#history-list`
2. Leere seinen Inhalt (`innerHTML = ''`)
3. Für jeden Bundle im Array:
    a. Hole `bundle.readings.bme680` – falls fehlt, **überspringen**
    b. Erstelle ein neues `<div>` mit `className = 'history-item'`
    c. Setze den innerHTML mit Zeit, Werten und Status-Pille
    d. Hänge es an die Liste an
4. Die ersten 10 Items anzeigen (Rest ignorieren)

### Benötigte CSS-Selektoren

(Stehen bereits in `style.css` aus Tag 2 – kontrolliere, ob sie da sind)

- `.history-list`
- `.history-item`
- `.history-time`, `.history-temp`, `.history-hum`
- `.history-status`
- `.history-status.gut`, `.history-status.kritisch`,
  `.history-status.schlecht`

## :material-lightbulb-on: Hinweise (verbal, kein Code)

### Zeitformat

`bundle.recorded_at` ist ISO-8601 (z. B. `"2026-08-06T10:30:00Z"`).
Mit `new Date(string).toLocaleTimeString('de-CH', { hour: '2-digit',
minute: '2-digit' })` bekommst du ein hübsches 24-h-Format.

### Status-Pille pro Eintrag

Für jeden Verlaufs-Eintrag berechnest du den Status **frisch** aus
dessen `temp_c` und `hum_pct`. Die Schwellwerte sind dieselben wie
im Dashboard oben. Ein Eintrag kann also z. B. "kritisch" sein,
während das Dashboard "gut" zeigt – das ist realistisch.

### Reihenfolge

Das Array ist bereits **neueste zuerst** sortiert. Du brauchst
kein `sort()` – nur `slice(0, 10)` oder eine `forEach` mit
Counter.

### Defensive Programmierung

`if (!bme) return;` innerhalb der Schleife. Falls ein Bundle
kein BME680 enthält (z. B. weil der Sensor dafür defekt ist),
wird es sauber übersprungen statt dass die App crasht.

## :material-check-all: Definition of Done (Selbst-Check)

- [ ] Alle 6 Anforderungen erfüllt
- [ ] Konsole (F12) zeigt keine roten Fehler
- [ ] Liste zeigt mindestens 5 Einträge
- [ ] Bei API-Fehler wird die Liste leer angezeigt (kein Crash)
- [ ] Code ist committed und gepusht

## Optional: weitere Sensortypen anzeigen

Falls die Mock-API `extras` liefert (z. B. CO2, Licht), kannst du
diese in der Verlaufsliste oder im Dashboard anzeigen. **Erst
nachdem** der Pflichtumfang läuft.

## Nächster Schritt

[Projekt: Integration (mit PE-Team)](integration.md) – ab 13:00 Uhr, dort
wird die Snapshot-Fallback-Strategie implementiert.