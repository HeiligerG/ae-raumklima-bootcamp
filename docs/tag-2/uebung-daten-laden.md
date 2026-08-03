# Übung: Daten laden

## :material-target: Ziel

Lade Push-Bundles aus einer JSON-Datei und zeige sie dynamisch auf einer Webseite an.

## Schritt 1: JSON-Datei erstellen

Erstelle `uebung-daten.json` im `app/`-Ordner deines Codebase-Repositories:

```json
[
  {
    "recorded_at": "2026-08-06T10:30:00Z",
    "readings": {
      "bme680": { "temp_c": 23.4, "hum_pct": 51 }
    }
  },
  {
    "recorded_at": "2026-08-06T10:29:50Z",
    "readings": {
      "bme680": { "temp_c": 23.3, "hum_pct": 51 }
    }
  }
]
```

## Schritt 2: HTML-Seite erstellen

Erstelle `uebung-daten-laden.html`:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daten laden – Übung</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 400px;
            margin: 40px auto;
            padding: 20px;
        }
        .card {
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .wert {
            font-size: 22px;
            margin: 8px 0;
        }
        .laden { color: #999; }
        .error { color: red; }
        button {
            margin-top: 12px;
            padding: 8px 16px;
            background: #00695c;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Daten laden</h1>

    <div class="card" id="card">
        <p class="laden">⏳ Lade Daten...</p>
    </div>

    <button onclick="loadData()">Neu laden</button>

    <script>
        async function loadData() {
            const card = document.getElementById('card');

            try {
                card.innerHTML = '<p class="laden">⏳ Lade Daten...</p>';

                const response = await fetch('uebung-daten.json');
                const bundles = await response.json();

                const latest = bundles[0];                    // neuester Push-Bundle
                const bme    = latest.readings.bme680;        // BME680-Block

                card.innerHTML = `
                    <h2>Sensor SN12345</h2>
                    <div class="wert">🌡️ ${bme.temp_c} °C</div>
                    <div class="wert">💧 ${bme.hum_pct} %</div>
                    <p style="color: #999; font-size: 13px;">
                        Letzte Messung: ${new Date(latest.recorded_at).toLocaleString()}
                    </p>
                `;
            } catch (error) {
                card.innerHTML = '<p class="error">Fehler: Daten konnten nicht geladen werden.</p>';
                console.error(error);
            }
        }

        // Automatisch beim Laden der Seite
        loadData();
    </script>
</body>
</html>
```

## Schritt 3: Testen

1. Live Server starten
2. Seite öffnen
3. Daten sollten erscheinen
4. Temporär `uebung-daten.json` umbenennen → Fehlermeldung erscheint
5. Datei wieder zurückbenennen → Button «Neu laden» klicken

## Schritt 4: Mehrere Datensätze (Bonus)

Erweitere `uebung-daten.json` um einen dritten Push-Bundle:

```json
[
  {
    "recorded_at": "2026-08-06T10:30:00Z",
    "readings": { "bme680": { "temp_c": 23.4, "hum_pct": 51 } }
  },
  {
    "recorded_at": "2026-08-06T10:29:50Z",
    "readings": { "bme680": { "temp_c": 23.1, "hum_pct": 52 } }
  },
  {
    "recorded_at": "2026-08-06T10:29:40Z",
    "readings": { "bme680": { "temp_c": 22.9, "hum_pct": 53 } }
  }
]
```

Zeige eine Liste aller Push-Bundles untereinander:

```javascript
async function loadData() {
    const card = document.getElementById('card');
    card.innerHTML = '';

    try {
        const response = await fetch('uebung-daten.json');
        const bundles = await response.json();

        bundles.forEach(bundle => {
            const bme = bundle.readings.bme680;
            const item = document.createElement('div');
            item.innerHTML = `
                <p>
                    ${new Date(bundle.recorded_at).toLocaleTimeString()} –
                    ${bme.temp_c} °C / ${bme.hum_pct} %
                </p>
            `;
            card.appendChild(item);
        });
    } catch (error) {
        card.innerHTML = '<p class="error">Fehler: Daten konnten nicht geladen werden.</p>';
        console.error(error);
    }
}
```

## :material-check-all: Übungs-Checkliste

- [ ] JSON-Datei im Push-Bundle-Format erstellt
- [ ] `loadData()`-Funktion mit `fetch()` geschrieben
- [ ] Daten werden auf der Seite angezeigt
- [ ] Bei fehlender Datei erscheint eine Fehlermeldung
- [ ] «Neu laden»-Button funktioniert
- [ ] Bonus: Liste aller Push-Bundles

!!! success "Geschafft!"
    Du kannst jetzt Daten aus JSON laden und anzeigen.  
    Weiter zum [Projekt](projekt-statuslogik-verlauf.md).