# Projekt: Statuslogik

!!! warning "Eigenarbeit – Spec + Skelett, kein Copy-Paste"
    Diese Aufgabe gibt dir **Anforderungen und ein Skelett**, aber nicht den fertigen Code. Die Schwellwerte für die Statuslogik, die Fetch-Logik und das Error-Handling wählst du selbst. Der Lerngewinn liegt im Ausprobieren, nicht im Abschreiben.

    Wenn du nach 20 Minuten nicht weiterkommst, **frag dein
    Trainer-Team** – sie zeigen dir live, wo's hakt.

## :material-target: Aufgabe

Erweitere dein Dashboard um:

1. **Daten aus einer JSON-Datei laden** (im selben `app/`-Ordner)
2. **Korrekte Statusberechnung** (gut / mittel / kritisch) aus
   Temperatur und Feuchte
3. **Verlaufsliste** der letzten 10 Messwerte
4. **Fehlerbehandlung** ("Keine Daten verfügbar")

Die Datenstruktur ist ein **Push-Bundle-Array** (siehe
[API-Vertrag](../projekt/api-vertrag.md)). Jeder Eintrag hat
`recorded_at` und ein `readings.bme680`-Objekt mit `temp_c` und
`hum_pct`.

## :material-book-open-outline: Anforderungen

- [ ] `data.json` existiert im `app/`-Ordner mit mindestens 5
      Push-Bundles (gleiches Format wie der API-Vertrag)
- [ ] `loadDashboard()` lädt die Datei per `fetch()` und befüllt
      das Dashboard mit den Werten des **neuesten** Eintrags
- [ ] `getStatus(tempC, humPct)` gibt einen von drei Werten zurück:
      `gut`, `kritisch`, `schlecht`
- [ ] `getStatusText(status)` liefert den deutschen Text dazu
- [ ] Die Status-Farbe der `.status`-Klasse passt zum berechneten
      Wert (`gut` → grün, `kritisch` → orange, `schlecht` → rot)
- [ ] Wenn der Status **"schlecht"** ist, wird die
      [EDB-Benachrichtigung](../tag-1/projekt-dashboard.md#edb-benachrichtigung)
      ausgelöst (z. B. via `alert()` oder `console.warn()` – die
      echte API-Integration kommt am Tag 3)
- [ ] Die Verlaufsliste zeigt bis zu 10 Einträge, neueste zuerst
- [ ] Bei fehlender Datei oder Fehler erscheint "Keine Daten
      verfügbar" und die Werte sind Platzhalter (`-- °C`, `-- %`)
- [ ] Code ist committed und auf einen eigenen Feature-Branch gepusht

## :material-hammer-wrench: Skelett

### `data.json` (im selben `app/`-Ordner)

Mindestens 5 Push-Bundles in dieser Struktur:

```json
[
  {
    "recorded_at": "<ISO-8601-Zeitstempel>",
    "readings": {
      "bme680": {
        "temp_c": <Zahl>,
        "hum_pct": <Zahl>
      }
    }
  }
]
```

Die **exakten Werte** darfst du wählen – mische ruhig Werte aus
allen drei Status-Bereichen (gut, kritisch, schlecht), damit du
die Logik testen kannst.

### `script.js` – Funktions-Signaturen

Du brauchst diese Funktionen. **Implementierung wählst du selbst.**

| Funktion | Aufgabe |
|---|---|
| `getStatus(tempC, humPct)` | Berechnet Status aus Werten, gibt String zurück |
| `getStatusText(status)` | Wandelt Status in Anzeige-Text um |
| `loadDashboard()` | Lädt Daten, befüllt das DOM, ruft `renderHistory` |
| `renderHistory(bundles)` | Baut die `.history-item`-Einträge im DOM |
| `showError()` | Setzt Platzhalter und Fehlertext |

### `script.js` – Selektoren

- Lese: `document.getElementById('serial-number').textContent` (etc.)
- Setze Status: `element.className = 'status ' + status`
- Verlauf-Container leeren: `list.innerHTML = ''`
- Verlauf-Item erstellen: `document.createElement('div')` mit
  `className = 'history-item'`

### `style.css` – Selektoren

Du brauchst zusätzlich zum Tag-1-CSS diese Selektoren (Werte
wählst du selbst):

- `.history-list` (Container für Verlaufs-Einträge)
- `.history-item` (eine Zeile)
- `.history-time` (Zeit-Stempel)
- `.history-temp` (Temperatur)
- `.history-hum` (Feuchte)
- `.history-status` (Status-Pille rechts)
- `.history-status.gut`, `.history-status.kritisch`,
  `.history-status.schlecht` (Farben)

## :material-lightbulb-on: Hinweise (verbal, kein Code)

### Schwellwerte für die Statuslogik

Sinnvolle Startwerte (alle in °C bzw. %):

| Status | Temperatur | Feuchte |
|---|---|---|
| gut | 20–24 | 40–60 |
| kritisch | 18–26 | 30–70 |
| schlecht | alles ausserhalb | alles ausserhalb |

Du kannst die Werte selbst anpassen – diskutiere sie danach im
Team. Begründe, **warum** du andere Schwellwerte gewählt hast.

### Zeit-Format

`bundle.recorded_at` ist ISO-8601 (z. B. `"2026-08-06T10:30:00Z"`).
Für die Anzeige nutzt du `new Date(string).toLocaleTimeString(...)`.
Mit `de-CH` als Locale bekommst du 24-h-Format.

### Reihenfolge

`data[0]` ist der **neueste** Eintrag. Beim Sortieren nicht
verwirren lassen – das Array kommt schon sortiert.

### Verlauf rendern

Pro Eintrag ein `<div class="history-item">` mit:
- Zeit (kurz, nur hh:mm)
- Temperatur mit °C
- Feuchte mit %
- Status-Pille rechts (mit derselben Farbe wie im Dashboard)

Wenn `bundle.readings.bme680` fehlt (defensiv), überspringe
den Eintrag mit `if (!bme) return;`.

### Error-Handling

`try { ... } catch (error) { showError(); console.error(error); }`
umgibt das gesamte `loadDashboard()`. So crasht die App nicht,
wenn `data.json` fehlt.

## :material-check-all: Definition of Done (Selbst-Check)

- [ ] Alle 8 Anforderungen erfüllt
- [ ] Konsole (F12) zeigt keine roten Fehler
- [ ] Status-Logik funktioniert mit allen 3 Werte-Bereichen
- [ ] Bei umbenannter `data.json` erscheint die Fehlermeldung
- [ ] Git-Commit und Push auf eigenen Feature-Branch

## :material-help: Wenn du nicht weiterkommst

Nach 20 Min ohne nennenswerten Fortschritt:

1. **Frag dein Trainer-Team.** Sie zeigen dir den nächsten Schritt
   live und helfen beim Debugging.
2. **Pair-Programming mit einem Mitlernenden.**
3. **Browser DevTools (F12) → Console** – die meisten Fehler
   stehen dort in roter Schrift.

## Nächster Schritt

**Tag 2 Nachmittag:** [Datenvertrag klären (mit PE-Team)](schnittstellen.md)  
**Tag 3:** [Projekt: Integration](../tag-3/integration.md) – dort wird die App live an die SuvaSense-API angebunden.