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

!!! note "Node.js nicht mehr nötig"
    Frühere Bootcamps hatten eine lokale Mock-API (Node/Express). Im
    aktuellen Bootcamp läuft die Datenquelle zentral: das
    **SuvaSense-Backend** wird vom Trainerteam über Docker gestartet.
    Du brauchst **kein Node.js auf deinem Laptop**.

## Drei Repositories

Das Bootcamp nutzt **drei Repositories**:

| Repo                                       | Inhalt                                                | Wer arbeitet hier |
|--------------------------------------------|-------------------------------------------------------|-------------------|
| `ae-raumklima-bootcamp`                     | Lernleitfaden (diese Dokumentation)                   | Trainer (Doku)    |
| `ae-raumklima-bootcamp-codebase`           | Deine App (`app/`)                                    | **Lernende**      |
| `SuvaSense`                                | Backend, Broker, Firmware, Hardware (nur Trainer)     | Trainer (Plattform) |

### 1. Alle drei Repositories klonen

```bash
git clone <url-leitfaden-repo>
git clone <url-codebase-repo>
git clone <url-suvasense-repo>     # nur falls ihr auch am Backend mitarbeitet
```

Im Normalfall reichen die ersten zwei. Das `SuvaSense`-Repo brauchen
nur die Plattformentwickler, die die ESPs flashen.

### 2. Codebase in VS Code öffnen

```bash
cd ae-raumklima-bootcamp-codebase
code .
```

### 3. Warten auf den SuvaSense-Stack

Das **SuvaSense-Backend** läuft nicht auf deinem Laptop, sondern auf
dem Trainer-Laptop oder einem Schulungs-Server. Du brauchst nichts zu
installieren oder zu starten – der Trainer verteilt zu Tag 3 die URLs:

- API-Base-URL (z. B. `http://192.168.1.42:8080/api/v1`)
- Demo-Seriennummer (z. B. `SN12345`)

Falls du schon vor Tag 3 stöbern willst, kannst du die API im Browser
öffnen – die HTML-Übersichtsseite hilft beim Erkunden.

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
- [ ] Browser mit DevTools (Chrome/Firefox/Edge)
- [ ] **Leitfaden-Repo** (`ae-raumklima-bootcamp`) geklont – zum Nachschlagen
- [ ] **Codebase-Repo** (`ae-raumklima-bootcamp-codebase`) geklont
- [ ] Codebase in VS Code geöffnet
- [ ] `index.html` in `app/` erstellt
- [ ] Live Server gestartet und Seite sichtbar
- [ ] (ab Tag 3) SuvaSense-API-URL vom Trainer erhalten

!!! success "Geschafft!"
    Deine Entwicklungsumgebung ist bereit.  
    Weiter zu [Git Basics](git-basics.md).