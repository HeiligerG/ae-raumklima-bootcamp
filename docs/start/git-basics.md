# Git Basics

!!! info "Wichtig: Im Bootcamp kein Branch-Workflow"
    Du arbeitest **alleine** in deinem **eigenen Fork**. Es gibt
    keinen Branch-Workflow, keine Pull Requests, keine Code-Reviews.

    **Nur 3 Git-Befehle brauchst du:**
    `git add`, `git commit`, `git push`.

    That's it.

## Was ist Git?

Git merkt sich jede Änderung an deinem Code. Du kannst
jederzeit zu einer früheren Version zurückkehren. So geht
nie Code verloren.

## Die 3 Befehle (die du wirklich brauchst)

### 1. Status anzeigen

```bash
git status
```

Zeigt: welche Dateien geändert wurden, welche bereit zum
Commit sind.

### 2. Änderungen speichern

```bash
git add .
git commit -m "Was ich gemacht habe"
```

- `git add .` nimmt alle geänderten Dateien
- Der Commit ist ein "Schnappschuss" mit einer Beschreibung
- Die Commit-Message beschreibt, was du gemacht hast

### 3. Auf deinen Fork hochladen

```bash
git push
```

Lädt deine Commits auf GitHub (in deinen Fork).

## Typischer Arbeitsablauf

```bash
# 1. Im app/-Ordner arbeiten
code app/

# 2. Wenn du etwas fertig hast:
cd /pfad/zu/ae-raumklima-bootcamp-codebase

# 3. Status anschauen
git status

# 4. Änderungen speichern
git add .
git commit -m "Mein Dashboard Tag 1 fertig"

# 5. Hochladen (auf deinen Fork)
git push

# 6. Browser: dein Fork auf GitHub zeigt jetzt den neuen Commit
```

## Gute Commit-Messages

Schreibe, **was** du geändert hast (nicht wie).

!!! tip "Format"
    Eine kurze, beschreibende Zeile. Beispiele:
    - `feat(dashboard): Temperatur und Feuchte anzeigen`
    - `fix(status): Farbe der Status-Pille korrigieren`
    - `chore: data.json als Initial-Seed hinzugefügt`

## Häufige Fehler

??? warning "'git push' geht nicht – 'no upstream'"
    Beim ersten Push fragt Git nach dem Remote. Lösung:
    ```bash
    git push -u origin main
    ```
    Beim zweiten Push reicht dann `git push`.

??? warning "'Permission denied' beim Push"
    Du hast wahrscheinlich den Original-Repo geklont statt deinen
    Fork. Lösung: in `setup.md` nachlesen, wie man den Fork klont.

??? warning "'Merge conflict'"
    Im Bootcamp sehr unwahrscheinlich (Einzelarbeit, kein Team).
    Falls doch: Trainer fragen.

## Was Git NICHT macht

- ❌ **Branches** – du arbeitest immer auf `main`
- ❌ **Pull Requests** – du hast keinen Reviewer
- ❌ **Code-Review** – du bist dein eigener Reviewer
- ❌ **Rebase** – nicht nötig im Bootcamp

## Zusammenfassung

Drei Befehle reichen:

```bash
git status    # Was ist geändert?
git add .     # Alles zum Commit vormerken
git commit -m "..."   # Speichern
git push      # Hochladen
```

Mehr brauchst du nicht.

!!! info "Mehr zu Git"
    Git ist ein riesiges Thema. Fürs Bootcamp reichen diese Basics.
    Für tieferes Wissen: [Pro Git Buch (kostenlos)](https://git-scm.com/book/de/v2).