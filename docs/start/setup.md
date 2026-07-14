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

### :material-nodejs: Node.js (ab Tag 3)

Ab Tag 3 brauchst du zusätzlich **Node.js**, um die Mock-API lokal starten zu können.
Die Mock-API liefert die Sensordaten, mit denen deine App arbeitet – sie simuliert die echten Sensoren.

1. [Node.js LTS herunterladen](https://nodejs.org/)
2. Installieren (Standard-Einstellungen sind ok)
3. Prüfen:

```bash
node --version
npm --version
```

!!! info "Wozu Node.js?"
    Node.js ist eine JavaScript-Laufzeitumgebung – mit ihr kannst du JavaScript *ausserhalb* des Browsers ausführen. Unser Mock-Backend (`mock-api/`) ist ein kleines Node-Programm, das auf deinem Laptop einen Webserver startet.

## Projekt einrichten

Das Bootcamp nutzt **zwei Repositories**:

| Repo                                       | Inhalt                                            |
|--------------------------------------------|---------------------------------------------------|
| `ae-raumklima-bootcamp`                     | Lernleitfaden (diese Dokumentation)               |
| `ae-raumklima-bootcamp-codebase`           | Dein App-Code (`app/`) und die Mock-API (`mock-api/`) |

### 1. Beide Repositories klonen

```bash
git clone <url-leitfaden-repo>
git clone <url-codebase-repo>
```

### 2. Codebase in VS Code öffnen

```bash
cd ae-raumklima-bootcamp-codebase
code .
```

### 3. Mock-API starten (ab Tag 3)

```bash
cd mock-api
npm install      # nur beim ersten Mal
npm start
```

Die API läuft anschliessend auf <http://localhost:3000>. Du kannst die URL im Browser öffnen – es erscheint eine Übersicht der verfügbaren Räume und Endpunkte.

!!! tip "Zwei Terminals"
    Lass das Terminal mit der laufenden API offen. Für deine App startest du **zusätzlich** den Live Server in VS Code. So hast du zwei Prozesse parallel – wie in einem echten Web-Projekt.

### 4. Erste App-Datei anlegen

Lege eine Datei `index.html` im Ordner `app/` an:

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

### 5. Live Server starten

- Rechtsklick auf `app/index.html` → **Open with Live Server**
- Oder in VS Code unten rechts auf **Go Live** klicken

Der Browser öffnet sich automatisch mit deiner Seite.

## Checkliste Setup

- [ ] VS Code installiert
- [ ] Live Server Extension installiert
- [ ] Git installiert
- [ ] Node.js installiert (ab Tag 3)
- [ ] Beide Repositories geklont
- [ ] Codebase in VS Code geöffnet
- [ ] `index.html` in `app/` erstellt
- [ ] Live Server gestartet und Seite sichtbar
- [ ] (ab Tag 3) Mock-API läuft auf `localhost:3000`

!!! success "Geschafft!"
    Deine Entwicklungsumgebung ist bereit.  
    Weiter zu [Git Basics](git-basics.md).
