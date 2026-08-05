# Cross-funktionale Retro (AE + PE + EDB)

!!! info "Wichtigste Änderung"
    Im aktuellen Bootcamp findet die Retro **im grossen Team** statt
    – **AE-Lernende + PE-Team + EDB zusammen** (alle ~10–15
    Personen). Das ist ein **cross-funktionales Retro**.

    Ziel: Nicht nur "was lief gut/schlecht bei mir", sondern
    **"was waren die grössten Probleme, Schwierigkeiten und Blocker
    – über die Team-Grenzen hinweg"**. AE-Probleme betreffen oft
    PE (API nicht erreichbar, falsches Topic). PE-Probleme betreffen
    oft EDB (Schwellenwerte unklar, Demo-Show-Vorbereitung).
    Blocker müssen sichtbar werden.

!!! info "Wer ist EDB nochmal?"
    EDB = **Entwickler Digital Business**. Verantwortlich für
    **Schwellenwerte** (gut/kritisch/schlecht), die **Demo-Show**
    am Tag 4, und **übergreifende Koordination**. EDB ist **nicht
    PE** (das ist das Plattform-Team). Siehe [projekt/edb.md](../projekt/edb.md).

## Wann?

Mittwoch Vormittag (08:15–09:00) im Tagesplan von Tag 3.

## Was du davor machst (5 Min alleine)

Bevor die Retro startet, **reflektierst du kurz allein**:

1. **Was lief gestern und vorgestern gut?**
2. **Was lief nicht so gut?** (privat für dich, nicht teilen)
3. **Was war die grösste Schwierigkeit / der grösste Blocker?**
   - Konkret: "Ich konnte X nicht, weil Y"
   - Wer könnte das lösen? (AE, PE, EDB, du selbst)
4. **Eine konkrete Bitte an ein anderes Team** (optional)

Schreib deine Antworten auf eine Karteikarte oder in dein
Notizbuch. Du wirst sie gleich verwenden.

## Ablauf (45 Min, alle zusammen)

### 1. Geteilte Highlights (10 Min)

Im Kreis, jede Person 30 Sekunden:

> **"Was lief gut – was war mein Highlight?"**

Kurze Statements, kein Detail. Trainer moderiert und schreibt
die Highlights auf ein Whiteboard oder Padlet.

### 2. Probleme und Blocker sammeln (15 Min) — **der Kern**

Immer noch im Kreis. Jetzt mit **Struktur**:

| Kategorie | Beispiele |
|---|---|
| **Eigene Probleme** (im eigenen Code/Setup) | "Mein CSS-Grid bricht bei 600 px", "Mein fetch() wirft CORS-Fehler" |
| **Team-Grenzen-Probleme** | "Die API antwortet 500 wegen PE-Stack-Crash", "EDB hat keine Snapshots" |
| **Werkzeug-Probleme** | "VS Code Live Server hängt", "WLAN reisst ab" |
| **Konzept-Lücken** | "Ich verstehe `async/await` nicht", "Was ist JSONB?" |

**Regeln für diesen Block:**

- **Konkret sein** – nicht "Backend war down", sondern "Backend
  war von 14:00–14:30 down, ich habe in der Zeit nichts machen
  können"
- **Blocker markieren** – wenn dich etwas **aktiv aufhält**, sag es
  explizit: "Das ist ein Blocker, ich komme nicht weiter"
- **Andere fragen, nicht nur beschweren** – "Hat jemand das auch
  gesehen?" aktiviert die cross-funktionale Hilfe

### 3. Blocker im Detail (10 Min)

Die **drei wichtigsten Blocker** (vom Trainer priorisiert) werden
im Detail diskutiert:

- **Was ist der Blocker genau?**
- **Welches Team ist betroffen?** (AE-Lernende, PE-Team, EDB-Team)
- **Wer kann helfen?** (Selbsthilfe, Team-Hilfe, oder muss EDB ran?)
- **Bis wann?** (10 Min? Bis Mittag? Bis morgen?)

Der Trainer oder ein EDB-Vertreter moderiert. Pro Blocker wird
ein **Owner** bestimmt, der sich bis zum nächsten Tag drum kümmert.

### 4. Was hat gut funktioniert? (5 Min)

Nicht nur Probleme – auch positive Dinge sichtbar machen:

- "Das Snapshot-Fallback funktioniert super, gestern beim
  Backend-Crash hat die App weitergerendert"
- "Die Joint-Session mit PE gestern war super, wir haben den
  Datenvertrag sofort geklärt"

### 5. Verabschiedung und Verantwortlichkeiten (5 Min)

Der Trainer fasst zusammen:

- **Top 3 Blocker** mit Owner und Frist
- **Was funktioniert** (soll erhalten bleiben)
- **Was ändern wir für Tag 4** (z. B. zusätzliche Test-Zeit,
  frühere Sensor-Konfiguration)

## Format: Was du als Lernende/r beiträgst

Du bist in der Retro **aktiv**:

- Bring deine **3 Antworten** mit (was lief gut, was lief nicht,
  was war der grösste Blocker)
- Wenn du einen Blocker hast: **sag es laut** – Trainer und EDB
  können nur helfen, wenn sie es wissen
- Wenn ein anderer Lernender ein Problem hat und du die Lösung
  kennst: **biet deine Hilfe an**
- Wenn PE oder EDB etwas fragt: **antworte ehrlich**

!!! tip "Blocker-Beispiele für die Diskussion"
    - "Mein fetch() schlägt fehl, weil ich die falsche API-URL
      habe → PE-Team, wer hat sie?"
    - "Mein CSS ist nicht responsive bei 600 px → hat jemand
      einen Tipp?" (Lernende helfen Lernende)
    - "Der Sensor liefert seit heute morgen keine Daten → EDB,
      ist der Sensor kaputt?"
    - "Ich verstehe `async/await` nicht → Trainer, kurze Erklärung
      in 5 Min?"

## Was nach der Retro passiert

- **Trainer hängt die Top-Blöcker** mit Owner + Frist an ein
  sichtbares Board (oder ins Wiki)
- **EDB-Vertreter** meldet sich bei Lernenden mit Blocker direkt
- **Vor Tag 4** (Stresstest-Tag) sollten die Top-Blöcker gelöst sein
- **In der Tag-4-Reflexion** (Checkpoint) wird nachgeprüft, was
  gelöst wurde

!!! info "Verwandte Seiten"
    - [tag-3/index.md](index.md) – wo die Retro im Tagesplan liegt
    - [tag-3/integration.md](integration.md) – die Probleme aus
      der End-to-End-Integration können hier diskutiert werden
    - [Definition of Done](../projekt/definition-of-done.md) – was
      muss erfüllt sein, damit wir Retro überspringen können