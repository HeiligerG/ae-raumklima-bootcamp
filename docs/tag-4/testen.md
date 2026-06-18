# Testen & Bugs fixen

## :material-target: Ziel

Finde und behebe alle Fehler in deiner App, bevor du die Demo zeigst.

## Systematisch testen

Geh jeden Bereich deiner App durch:

### 1. Start-Test

- [ ] Seite laden → alles da?
- [ ] Keine Fehler in der Browser-Konsole (F12)?
- [ ] CSS geladen? (keine kaputten Styles)

### 2. Daten-Test

- [ ] Richtige Temperatur und Luftfeuchtigkeit?
- [ ] Status passt zu den Werten?
- [ ] Verlaufsliste zeigt mehrere Einträge?

### 3. Status-Test

Setze in `data.json` verschiedene Werte und prüfe:

| Temperatur | Luftfeuchtigkeit | Soll-Status |
|-----------|-----------------|-------------|
| 22.0 | 50 | Gut |
| 23.0 | 41 | Gut |
| 25.5 | 45 | Kritisch |
| 18.5 | 60 | Kritisch |
| 30.0 | 20 | Schlecht |
| 15.0 | 80 | Schlecht |

### 4. Fehlerfall-Test

- [ ] `data.json` temporär umbenennen → Fehlermeldung erscheint?
- [ ] Nach Umbenennung: App stürzt nicht ab?
- [ ] Fehlermeldung ist verständlich?
- [ ] Datei zurückbenennen → Daten wieder da?

### 5. Admin-Test

- [ ] Raum wechseln → Daten ändern sich?
- [ ] Grenzwerte ändern → Status reagiert?

### 6. Responsive-Test

- [ ] Fenster auf Handy-Breite verkleinern → Layout passt sich an?
- [ ] Keine Elemente abgeschnitten?
- [ ] Schrift noch lesbar?

## Konsole prüfen

Öffne die Entwickler-Tools (F12) und schau auf den «Console»-Tab.  
Alles, was **rot** ist, ist ein Fehler. Alles, was **gelb** ist, ist eine Warnung.

## Bug-Tracking

| Bug | Schwere | Status | Wer? |
|-----|---------|--------|------|
| | :material-alert: Hoch :material-close: Mittel :material-information: Niedrig | Offen | |
| | | | |

## Häufige Bugs

??? bug "fetch() funktioniert nicht"
    **Ursache**: Live Server läuft nicht, oder Pfad falsch.  
    **Lösung**: Live Server starten, Pfad prüfen (relativ zur HTML-Datei).

??? bug "Status bleibt immer gleich"
    **Ursache**: `getStatus()` wird mit falschen oder keinen Werten aufgerufen.  
    **Lösung**: `console.log(temp, humidity)` in `getStatus()` einbauen.

??? bug "element.textContent is null"
    **Ursache**: HTML-Element mit der ID existiert nicht.  
    **Lösung**: IDs in HTML und JavaScript abgleichen.

## Checkliste Testen

- [ ] Alle 6 Testbereiche geprüft
- [ ] Status-Test mit 6 verschiedenen Wertepaaren
- [ ] Fehlerfall getestet
- [ ] Browser-Konsole ist sauber (keine roten Fehler)
- [ ] Gefundene Bugs sind behoben oder dokumentiert

!!! success "Bugfrei?"
    Super! Dann weiter zu den [optionalen Features](optionale-features.md).