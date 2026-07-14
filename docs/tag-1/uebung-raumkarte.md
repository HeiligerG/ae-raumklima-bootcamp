# Übung: Raumkarte bauen

## :material-target: Ziel

Baue eine einfache «Karte», die einen Raum mit Temperatur und Luftfeuchtigkeit anzeigt.

## Schritt 1: HTML-Gerüst

Erstelle eine neue Datei `uebung-raumkarte.html` im `app/`-Ordner deines Codebase-Repositories:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raumkarte – Übung</title>
    <style>
        /* CSS kommt hier rein */
    </style>
</head>
<body>
    <h1>Raumkarte</h1>

    <div class="card">
        <h2>Raum B101</h2>
        <div class="wert">🌡️ 23.4 °C</div>
        <div class="wert">💧 51 %</div>
        <div class="status gut">Status: Gut</div>
    </div>

</body>
</html>
```

## Schritt 2: CSS-Styling

Ergänze den `<style>`-Block:

```css
body {
    font-family: Arial, sans-serif;
    background: #f0f4f4;
    display: flex;
    justify-content: center;
    padding-top: 40px;
}

.card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    width: 280px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.card h2 {
    margin-top: 0;
    color: #00695c;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 8px;
}

.wert {
    font-size: 24px;
    margin: 12px 0;
    color: #333;
}

.status {
    margin-top: 16px;
    padding: 8px 12px;
    border-radius: 6px;
    font-weight: bold;
    text-align: center;
}

.gut {
    background: #e8f5e9;
    color: #2e7d32;
    border: 1px solid #c8e6c9;
}
```

## Schritt 3: Zweite Karte hinzufügen

Füge eine zweite Karte mit kritischem Status hinzu:

```html
<div class="card" style="margin-top: 16px;">
    <h2>Raum B102</h2>
    <div class="wert">🌡️ 25.5 °C</div>
    <div class="wert">💧 45 %</div>
    <div class="status kritisch">Status: Kritisch</div>
</div>
```

CSS für kritischen Status:

```css
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
```

## Schritt 4: Mit CSS Grid mehrere Karten anordnen

Ändere den Body-Style:

```css
body {
    font-family: Arial, sans-serif;
    background: #f0f4f4;
    padding: 40px;
}

.karten-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
    max-width: 900px;
    margin: 0 auto;
}
```

HTML anpassen – beide Karten in einen Container:

```html
<div class="karten-grid">
    <!-- Karte B101 -->
    <!-- Karte B102 -->
</div>
```

## :material-check-all: Übungs-Checkliste

- [ ] Die Seite zeigt zwei Raumkarten
- [ ] Jede Karte hat Raumname, Temperatur, Luftfeuchtigkeit und Status
- [ ] Die Status-Farben sind unterschiedlich (grün, orange)
- [ ] Die Karten sind mit CSS Grid nebeneinander angeordnet
- [ ] Die Seite läuft im Browser mit Live Server

!!! success "Geschafft!"
    Du hast deine erste CSS-Karte gebaut.  
    Jetzt weiter zum [Projekt: Dashboard](projekt-dashboard.md).
