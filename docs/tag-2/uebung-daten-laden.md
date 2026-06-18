# Übung: Daten laden

## :material-target: Ziel

Lade Daten aus einer JSON-Datei und zeige sie dynamisch auf einer Webseite an.

## Schritt 1: JSON-Datei erstellen

Erstelle `uebung-daten.json`:

```json
{
  "room": "B101",
  "temperature": 23.4,
  "humidity": 51,
  "timestamp": "2026-08-06T10:30:00"
}
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
                const data = await response.json();

                card.innerHTML = `
                    <h2>Raum ${data.room}</h2>
                    <div class="wert">🌡️ ${data.temperature} °C</div>
                    <div class="wert">💧 ${data.humidity} %</div>
                    <p style="color: #999; font-size: 13px;">
                        Letzte Messung: ${new Date(data.timestamp).toLocaleString()}
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

Erstelle `uebung-verlauf.json`:

```json
[
  { "room": "B101", "temperature": 23.4, "humidity": 51, "timestamp": "2026-08-06T10:30:00" },
  { "room": "B101", "temperature": 23.1, "humidity": 52, "timestamp": "2026-08-06T10:15:00" },
  { "room": "B101", "temperature": 22.9, "humidity": 53, "timestamp": "2026-08-06T10:00:00" }
]
```

Ergänze den Code, um eine Liste anzuzeigen:

```javascript
// Statt card.innerHTML für ein Objekt:
data.forEach(messung => {
    const item = document.createElement('div');
    item.innerHTML = `
        <p>${new Date(messung.timestamp).toLocaleTimeString()} –
        ${messung.temperature} °C / ${messung.humidity} %</p>
    `;
    card.appendChild(item);
});
```

## :material-check-all: Übungs-Checkliste

- [ ] JSON-Datei erstellt
- [ ] `loadData()`-Funktion mit `fetch()` geschrieben
- [ ] Daten werden auf der Seite angezeigt
- [ ] Bei fehlender Datei erscheint eine Fehlermeldung
- [ ] «Neu laden»-Button funktioniert
- [ ] Bonus: Verlaufsliste mit mehreren Einträgen

!!! success "Geschafft!"
    Du kannst jetzt Daten aus JSON laden und anzeigen.  
    Weiter zum [Projekt](projekt-statuslogik-verlauf.md).