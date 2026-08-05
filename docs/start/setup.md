# Setup & Tools

## :material-no-ai: Vor dem Loslegen: KI ist verboten

!!! danger "Erinnerung"
    Du darfst während des Bootcamps **keine KI-Tools** verwenden – nicht für Fragen, nicht für Code, nicht für Erklärungen. Siehe [Quellen und KI-Verbot](../projekt/quellen.md) für die erlaubten Alternativen.

## Was du installieren musst

### :material-microsoft-visual-studio-code: Visual Studio Code

Der empfohlene Code-Editor. Kostenlos und mächtig.

1. [VS Code herunterladen](https://code.visualstudio.com/)
2. Installieren und starten
3. Empfohlene Extensions:
    - **Live Server** – HTML-Seiten live im Browser anzeigen
    - **Prettier** – Code automatisch formatieren
    - **Markdown All in One** – nützlich für die Doku

### :material-git: Git

Git ist ein Versionierungssystem. Es speichert jede Änderung
an deinem Code.

1. [Git herunterladen](https://git-scm.com/)
2. Installieren (Standard-Einstellungen sind ok)
3. Prüfen:

```bash
git --version
```

### :material-web: Browser

Du brauchst einen modernen Browser mit Entwickler-Tools:

- :material-google-chrome: Google Chrome (empfohlen – die
  DevTools sind am mächtigsten)
- :material-firefox: Firefox

Die Entwickler-Tools öffnest du mit `F12`.

!!! info "Kein Node.js nötig"
    Im Bootcamp nutzen wir keine Node.js-Tools. Die App ist reines
    HTML/CSS/JS und wird direkt im Browser über den Live Server
    ausgeführt.

## :material-source-fork: Dein Fork: 1 Repo, deine Version

!!! warning "Wichtig: Du arbeitest in deinem eigenen Fork"
    Du klonst **nicht** das Original-Repo, sondern:

    1. **Erst forken** auf GitHub (dein eigener Account)
    2. **Dann klonen** deinen Fork
    3. **Dann arbeiten** in deinem Fork
    4. **Am Ende pushen** auf deinen Fork (kein Pull Request nötig)

    Der Trainer schaut am Ende der Woche in alle Forks rein.

### Schritt 1: Fork erstellen

1. Öffne im Browser:
   https://github.com/HeiligerG/ae-raumklima-bootcamp-codebase
2. Klicke oben rechts auf den **Fork**-Button
3. Wähle deinen eigenen GitHub-Account als Ziel
4. Warte ein paar Sekunden – GitHub erstellt eine Kopie unter
   `https://github.com/<DEIN-USERNAME>/ae-raumklima-bootcamp-codebase`

### Schritt 2: Deinen Fork klonen

Ersetze `<DEIN-USERNAME>` durch deinen GitHub-Account:

```bash
git clone https://github.com/<DEIN-USERNAME>/ae-raumklima-bootcamp-codebase.git
cd ae-raumklima-bootcamp-codebase
```

### Schritt 3: VS Code öffnen

```bash
code .
```

Du siehst jetzt:

```
ae-raumklima-bootcamp-codebase/
├── app/                  ← Hier arbeitest du
│   ├── README.md         ← Lies das zuerst
│   ├── QUELLEN.md        ← Deine Nachschlagewerke
│   └── snapshot-strategie.md
├── CODE_OF_CONDUCT.md    ← Lies das auch
└── README.md             ← Repo-Übersicht
```

### Schritt 4: Live Server starten

1. Öffne den Ordner `app/` in VS Code
2. Lege eine Datei `index.html` an (gemäss [Tag 1](../tag-1/index.md))
3. **Live Server Extension** installieren (falls noch nicht da)
4. Rechtsklick auf `index.html` → **Open with Live Server**
5. Der Browser öffnet sich automatisch

### Schritt 5: Datenquelle (ab Tag 3)

Deine App lädt ihre Daten vom **SuvaSense-Backend**, das vom
Trainer zentral bereitgestellt wird. Die konkrete URL und die
Demo-Seriennummer bekommst du vom Trainer zu Tag 3.

Wenn du offline testen willst, nutzt du die mitgelieferte
`data.json` als Initial-Fallback (siehe
[Snapshot-Strategie](https://github.com/HeiligerG/ae-raumklima-bootcamp-codebase/blob/main/app/snapshot-strategie.md)).

### Schritt 6: Wenn du fertig bist

```bash
git add .
git commit -m "Mein Dashboard Tag 1 fertig"
git push
```

Das war's. **Kein Pull Request, kein Branch-Workflow** – du
arbeitest direkt auf `main` in deinem Fork. Einfacher geht's nicht.

## :material-help: Was ist mit den anderen Repos?

Im Bootcamp lernst du **ein** Repo kennen: deinen Fork von
`ae-raumklima-bootcamp-codebase`. Die anderen Repos (das
SuvaSense-Backend, der Lernleitfaden) sind Sache des
Trainer-Teams, nicht deine.

Falls du neugierig bist: der Lernleitfaden ist online unter
https://heiligerg.github.io/ae-raumklima-bootcamp/

## Checkliste Setup

- [ ] VS Code installiert
- [ ] Live Server Extension installiert
- [ ] Git installiert und Version geprüft
- [ ] Browser mit DevTools (Chrome oder Firefox)
- [ ] **Eigenen Fork erstellt** auf GitHub
- [ ] **Fork geklont** mit `git clone`
- [ ] VS Code im `app/`-Ordner geöffnet
- [ ] Live Server gestartet (`index.html` in `app/`)
- [ ] [app/README.md](https://github.com/HeiligerG/ae-raumklima-bootcamp-codebase/blob/main/app/README.md) gelesen
- [ ] [app/QUELLEN.md](https://github.com/HeiligerG/ae-raumklima-bootcamp-codebase/blob/main/app/QUELLEN.md) gelesen
- [ ] [CODE_OF_CONDUCT.md](https://github.com/HeiligerG/ae-raumklima-bootcamp-codebase/blob/main/CODE_OF_CONDUCT.md) gelesen

!!! success "Geschafft!"
    Deine Entwicklungsumgebung ist bereit.  
    Weiter zu [Git Basics](git-basics.md).