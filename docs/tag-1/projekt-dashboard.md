# Projekt: Dashboard Grundlayout

## :material-target: Aufgabe

Erstelle das Grundlayout für das Raumklima-Dashboard deiner echten Projekt-App.

## Anforderungen

Dein Dashboard soll enthalten:

1. Eine Kopfzeile mit dem Titel «Raumklima Monitor»
2. Eine Karte mit:
    - Raumname
    - Temperatur (noch statisch)
    - Luftfeuchtigkeit (noch statisch)
    - Status-Anzeige (noch statisch)
3. Einen Bereich für die Verlaufsliste (erstmal leer oder mit Platzhalter)

## Schritt für Schritt

### 1. Projektdateien anlegen

Erstelle im `app/`-Ordner des Codebase-Repositories (`ae-raumklima-bootcamp-codebase/app/`):

- `index.html`
- `style.css`
- `script.js` (leer, kommt morgen)

### 2. HTML-Grundstruktur

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raumklima Monitor</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Raumklima Monitor</h1>
    </header>

    <main>
        <section class="dashboard">
            <!-- Raumkarte -->
            <div class="card">
                <h2 id="room-name">Raum B101</h2>
                <div class="values">
                    <div class="value-item">
                        <span class="label">Temperatur</span>
                        <span class="number" id="temperature">23.4 °C</span>
                    </div>
                    <div class="value-item">
                        <span class="label">Luftfeuchtigkeit</span>
                        <span class="number" id="humidity">51 %</span>
                    </div>
                </div>
                <div class="status gut" id="status">Gut</div>
            </div>

            <!-- Verlauf -->
            <section class="history">
                <h3>Verlauf</h3>
                <p class="placeholder">Die Verlaufsliste wird morgen gebaut.</p>
            </section>
        </section>
    </main>

    <footer>
        <p>Raumklima Bootcamp &copy; 2026</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

### 3. CSS-Styling

```css
/* Grundlayout */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f5f7f7;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    background: #00695c;
    color: white;
    padding: 16px 24px;
}

header h1 {
    font-size: 22px;
}

main {
    flex: 1;
    padding: 24px;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
}

/* Karte */
.card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    margin-bottom: 24px;
}

.card h2 {
    color: #00695c;
    margin-bottom: 16px;
    font-size: 20px;
    border-bottom: 2px solid #e0f2f1;
    padding-bottom: 8px;
}

.values {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
}

.value-item {
    background: #f8fafa;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
}

.label {
    display: block;
    font-size: 13px;
    color: #777;
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.number {
    display: block;
    font-size: 28px;
    font-weight: bold;
    color: #333;
}

/* Status */
.status {
    padding: 10px 16px;
    border-radius: 6px;
    font-weight: bold;
    text-align: center;
    font-size: 16px;
}

.gut {
    background: #e8f5e9;
    color: #2e7d32;
    border: 1px solid #c8e6c9;
}

.kritisch {
    background: #fff3e0;
    color: #e65100;
    border: 1px solid #ffe0b2;
}

.schlecht {
    background: #ffebee;
    color: #c62828;
    border: 1px solid #ffcdd2;
}

/* Verlauf */
.history {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.history h3 {
    color: #00695c;
    margin-bottom: 12px;
}

.placeholder {
    color: #999;
    font-style: italic;
}

/* Footer */
footer {
    background: #00695c;
    color: rgba(255,255,255,0.7);
    text-align: center;
    padding: 12px;
    font-size: 13px;
}

/* Responsive */
@media (max-width: 600px) {
    .values {
        grid-template-columns: 1fr;
    }
}
```

### 4. Testen

- Live Server starten
- Seite im Browser öffnen
- Prüfen: Sieht es gut aus?
- Fenster verkleinern: Responsive?

### 5. Committen

```bash
git add .
git commit -m "Projekt: Dashboard Grundlayout erstellt"
git push
```

## Tipps

!!! tip "Farben"
    Nutze die Teal-Farbfamilie (`#00695c`) für ein ruhiges, professionelles Design.

!!! tip "CSS-Klassen vorbereiten"
    Du hast jetzt schon `.gut`, `.kritisch` und `.schlecht` definiert.  
    Morgen schaltest du diese Klassen per JavaScript um.

## :material-check-all: Projekt-Checkliste Tag 1

- [ ] `index.html` mit sauberem HTML erstellt
- [ ] `style.css` mit allen Status-Farben erstellt
- [ ] Dashboard zeigt Raumname, Temperatur und Luftfeuchtigkeit
- [ ] Status-Bereich ist sichtbar (noch statisch)
- [ ] Verlaufsbereich ist vorbereitet
- [ ] Die Seite ist responsive (passt sich dem Fenster an)
- [ ] Code ist committed und gepusht

## Nächster Schritt

[Checkpoint Tag 1](checkpoint.md)
