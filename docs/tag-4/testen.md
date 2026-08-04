# Testen & Bugs fixen

## :material-target: Ziel

Finde und behebe alle Fehler in deiner App, bevor du die Demo zeigst.

## Diagnose-Baum: was tun, wenn X nicht funktioniert?

```mermaid
flowchart TD
    Start[App zeigt<br/>nicht die<br/>erwarteten Daten] --> Q1{API-Request<br/>erfolgreich?}
    Q1 -->|Nein| Q2{Server<br/>erreichbar?}
    Q2 -->|Nein| A1[Snapshot aus<br/>localStorage<br/>verwenden]
    Q2 -->|Ja| A2[curl manuell<br/>probieren<br/>welche URL?]
    A2 --> Q3{JSON in<br/>Antwort?}
    Q3 -->|Nein| A3[Backend-Log<br/>pruefen<br/>mgmt docker logs]
    Q3 -->|Ja| A4[CORS-Problem?<br/>DevTools-<br/>Console]
    Q1 -->|Ja| Q4{Richtige<br/>Sensor-ID<br/>gewahlt?}
    Q4 -->|Nein| A5[Admin-Panel<br/>oeffnen,<br/>Sensor waehlen]
    Q4 -->|Ja| Q5{Temperature<br/>im richtigen<br/>Range?}
    Q5 -->|Nein| A6[Statuslogik<br/>pruefen,<br/>Schwellen]
    Q5 -->|Ja| Q6{Status-Farbe<br/>korrekt?}
    Q6 -->|Nein| A7[CSS-Klassen<br/>.gut/.kritisch/<br/>.schlecht]
    Q6 -->|Ja| Done[Alles OK,<br/>Demo ready]

    A1 -.->|Fallback<br/>zeigt| Done
    A3 -.->|gefixt| Done
    A4 -.->|gefixt| Done
    A5 -.->|korrigiert| Done
    A6 -.->|korrigiert| Done
    A7 -.->|gefixt| Done

    style Start fill:#ffe1e1
    style Done fill:#e1ffe1
    style A1 fill:#fff4e1
    style A2 fill:#fff4e1
    style A3 fill:#fff4e1
    style A4 fill:#fff4e1
    style A5 fill:#fff4e1
    style A6 fill:#fff4e1
    style A7 fill:#fff4e1
```

**Wie du den Baum benutzt:**

1. Fang oben an mit "App zeigt nicht die erwarteten Daten"
2. Folge den Fragen (`{ja/nein}`-Diamanten) basierend auf dem,
   was du beobachtest
3. Jeder Endpunkt (`A1`–`A7`) ist eine konkrete Aktion
4. Wenn der Fix klappt, kommst du zurück zum grünen "Demo ready"

**Was NICHT im Baum steht:**

- Performance-Probleme (eigene Kategorie)
- Browser-Kompatibilität (jeder Browser ist heute OK für Basics)
- Mobile-Ansicht (separater Test, nicht kritisch)

## Systematisch testen

Geh jeden Bereich deiner App durch:

### 1. Start-Test

- [ ] Seite laden → alles da?
- [ ] Keine Fehler in der Browser-Konsole (F12)?
- [ ] CSS geladen? (keine kaputten Styles)

### 2. Daten-Test

- [ ] Richtige `temp_c` und `hum_pct` werden angezeigt?
- [ ] Status passt zu den Werten?
- [ ] Verlaufsliste zeigt mehrere Push-Bundles?
- [ ] Snapshot ist im LocalStorage gespeichert (DevTools → Application)?

### 3. Status-Test

Setze in `data.json` verschiedene BME680-Werte und prüfe:

| `temp_c` | `hum_pct` | Soll-Status |
|---|---|---|
| 22.0 | 50 | Gut |
| 23.0 | 41 | Gut |
| 25.5 | 45 | Kritisch |
| 18.5 | 60 | Kritisch |
| 30.0 | 20 | Schlecht |
| 15.0 | 80 | Schlecht |

### 4. Snapshot-Fallback-Test

- [ ] App frisch laden (Cache leeren) → Seed aus `data.json` greift
- [ ] WLAN trennen → App zeigt weiterhin Werte (aus `localStorage`)
- [ ] WLAN wieder verbinden → App holt neue Daten
- [ ] `localStorage.clear()` + `data.json` umbenennen → Fehlermeldung erscheint

### 5. Admin-Test

- [ ] Sensor wechseln → Daten ändern sich?
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
    **Lösung**: `console.log(tempC, humPct)` in `getStatus()` einbauen.

??? bug "element.textContent is null"
    **Ursache**: HTML-Element mit der ID existiert nicht.  
    **Lösung**: IDs in HTML und JavaScript abgleichen.

??? bug "Snapshot zeigt alte Werte"
    **Ursache**: API liefert nicht, App greift auf alten Snapshot zurück.  
    **Lösung**: `localStorage.removeItem('snapshot:SN12345')` in der Konsole, dann Reload.

??? bug "Push-Bundle enthält kein BME680"
    **Ursache**: PE-Team publiziert nur `veml7700` und `system`, kein `bme680`.  
    **Lösung**: Mit Trainer klären; App sollte das mit `if (!bme) return` abfangen.

## Checkliste Testen

- [ ] Alle 6 Testbereiche geprüft
- [ ] Status-Test mit 6 verschiedenen Wertepaaren
- [ ] Snapshot-Fallback einmal mit und ohne API getestet
- [ ] Browser-Konsole ist sauber (keine roten Fehler)
- [ ] Gefundene Bugs sind behoben oder dokumentiert

!!! success "Bugfrei?"
    Super! Dann weiter zu den [optionalen Features](optionale-features.md).