# Git Basics

## Was ist Git?

Git merkt sich jede Änderung an deinem Code.  
Du kannst jederzeit zu einer früheren Version zurückkehren.  
So geht nie Code verloren.

## Wichtige Begriffe

| Begriff | Bedeutung |
|---------|-----------|
| Repository | Dein Projektordner mit Git-Versionierung |
| Commit | Ein gespeicherter Schnappschuss deines Codes |
| Push | Commits auf GitHub hochladen |
| Pull | Commits von GitHub herunterladen |
| Branch | Ein eigener Entwicklungszweig |

## Grundbefehle

### Status anzeigen

```bash
git status
```

Zeigt, welche Dateien geändert wurden.

### Änderungen speichern

```bash
git add .
git commit -m "Beschreibung der Änderung"
```

Der Punkt `.` nimmt alle geänderten Dateien.  
Die Nachricht beschreibt, was du gemacht hast.

### Auf GitHub hochladen

```bash
git push
```

### Änderungen von anderen holen

```bash
git pull
```

## Typischer Arbeitsablauf

```bash
# 1. Neuesten Stand holen
git pull

# 2. Code schreiben ...

# 3. Änderungen anzeigen
git status

# 4. Änderungen speichern
git add .
git commit -m "Dashboard: Layout erstellt"

# 5. Hochladen
git push
```

## Gute Commit-Nachrichten

Schreibe, **was** du geändert hast und **warum** – nicht wie.

=== "Gut :material-check:"
    ```
    Dashboard: Temperatur-Anzeige mit Farbcodierung hinzugefügt
    ```

=== "Schlecht :material-close:"
    ```
    Update
    index.html geändert
    ```

## Häufige Fehler

??? warning "Ich habe `git push` vergessen"
    Kein Problem. Mach es einfach jetzt.  
    Besser spät als nie.

??? warning "Merge-Konflikt"
    Das passiert, wenn zwei Personen die gleiche Datei geändert haben.  
    Ruf einen Trainer – das lösen wir gemeinsam.

## Checkliste Git

- [ ] Ich kenne die Befehle `status`, `add`, `commit`, `push`, `pull`
- [ ] Ich weiss, was ein Commit ist
- [ ] Ich weiss, was ein Repository ist
- [ ] Ich kann meine Änderungen auf GitHub hochladen

!!! info "Mehr zu Git"
    Git ist ein grosses Thema. Fürs Bootcamp reichen diese Basics.  
    Alles Weitere lernst du nach und nach.
