# Setup & Tools

## Was du installieren musst

### :material-microsoft-visual-studio-code: Visual Studio Code

Der empfohlene Code-Editor. Kostenlos und mächtig.

1. [VS Code herunterladen](https://code.visualstudio.com/)
2. Installieren und starten
3. Empfohlene Extensions:
    - **Live Server** – HTML-Seiten live im Browser anzeigen
    - **Prettier** – Code automatisch formatieren
    - **GitLens** – Git-Historie im Editor sehen

### :material-git: Git

Git ist ein Versionierungssystem. Es speichert jede Änderung an deinem Code.

1. [Git herunterladen](https://git-scm.com/)
2. Installieren (Standard-Einstellungen sind ok)
3. Prüfen:

```bash
git --version
```

### :material-web: Browser

Du brauchst einen modernen Browser mit Entwickler-Tools:

- :material-google-chrome: Google Chrome (empfohlen)
- :material-firefox: Firefox
- :material-microsoft-edge: Edge

Die Entwickler-Tools öffnest du mit `F12`.

## Projekt einrichten

### 1. Repository klonen

```bash
git clone <repository-url>
cd ae-raumklima-bootcamp
```

### 2. Projektstruktur im Editor öffnen

```bash
code .
```

### 3. Erste Datei anlegen

Lege eine Datei `index.html` im Projektordner an:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raumklima Monitor</title>
</head>
<body>
    <h1>Raumklima Monitor</h1>
    <p>Meine erste Web-App!</p>
</body>
</html>
```

### 4. Live Server starten

- Rechtsklick auf `index.html` → **Open with Live Server**
- Oder in VS Code unten rechts auf **Go Live** klicken

Der Browser öffnet sich automatisch mit deiner Seite.

## Checkliste Setup

- [ ] VS Code installiert
- [ ] Live Server Extension installiert
- [ ] Git installiert
- [ ] Repository geklont
- [ ] Projekt in VS Code geöffnet
- [ ] Erste HTML-Seite erstellt
- [ ] Live Server gestartet und Seite sichtbar

!!! success "Geschafft!"
    Deine Entwicklungsumgebung ist bereit.  
    Weiter zu [Git Basics](git-basics.md).
