# Projekt Tag 5 – Demo-Vorbereitung

> Folgt [`projekt-anleitung-template.md`](../projekt/projekt-anleitung-template.md).

## Tagesziel

Heute ist **Demo-Tag**. Du zeigst deine App live vor allen
und beantwortest Fragen.

Du bereitest dich am Morgen vor, mittags ist die Live-Demo.

## Voraussetzungen

- Stand von Tag 4 ist fertig (App läuft, optionale Features
  nach Wahl).
- Du hast **gestern** ein Backup-Video aufgenommen.
- Du hast die **Demo-Slots** aus dem
  [Trainer-Briefing](https://github.com/HeiligerG/ae-trainer-briefing)
  noch einmal gelesen.

## Schritte

1. [App final durchgehen](#schritt-1-app-final-durchgehen)
2. [Backup-Video kontrollieren](#schritt-2-backup-video-kontrollieren)
3. [Demo-Skript vorbereiten](#schritt-3-demo-skript-vorbereiten)
4. [Probe-Demo mit Backup-Plan](#schritt-4-probe-demo-mit-backup-plan)

---

## Schritt 1 – App final durchgehen

**Lernziel**: Du kannst deine App **in 5 Minuten** zeigen,
ohne Suchen.

**Was passiert**: Alle Pfade sind klar. Die App öffnet sich
schnell.

### Vorgehen

- App öffnen: lädt sie in unter 2 Sekunden?
- Sensor-Dropdown: gibt es **mehrere** Sensoren zur Auswahl?
- Werte anzeigen: kommen sie vom Server?
- Status reagiert: zeigt er die richtige Farbe?
- Fallback-Test: was passiert, wenn du **einmal** die
  Internet-Verbindung trennst?

### Häufige Stolperfallen

- **App ist nicht gestartet**. Lösung: Live-Server neu
  starten.
- **Daten kommen nicht**. Lösung: Server-Status prüfen, ggf.
  auf `data.json`-Fallback warten.
- **Console zeigt rote Fehler**. Lösung: kurz schauen, was
  sie sagt, dann **Ruhe bewahren** – du kannst das im Demo
  erklären.

---

## Schritt 2 – Backup-Video kontrollieren

**Lernziel**: Du hast einen Plan B, falls die App crasht.

**Was passiert**: Du weisst, wo das Video liegt und kannst
es im Notfall zeigen.

### Vorgehen

1. Backup-Video öffnen (so wie es war gestern aufgenommen).
2. Prüfe: ist alles drauf? App, Verlauf, Status?
3. Prüfe: ist der **Ton** verständlich? Wenn nein, neu
   aufnehmen.
4. Prüfe: ist es **kurz genug** (max. 5 min)?
5. Speichere es **mehrfach** ab (Laptop + Cloud).

### Wenn etwas fehlt

- **Video zu lang**. Neu aufnehmen, fokussierter.
- **Ton schlecht**. Headset benutzen, neu aufnehmen.
- **WLAN-Fallback-Demo fehlt**. Mit dem Trainer nochmal
  aufnehmen.

---

## Schritt 3 – Demo-Skript vorbereiten

**Lernziel**: Du kannst deine 5 Minuten strukturieren.

**Was passiert**: Du hast einen klaren Plan, was du sagst.

### Demo-Struktur (5 min)

| Dauer | Was |
|---|---|
| ~30 s | Begrüssung: "Hallo, ich bin [Name]. Das ist mein Raumklima-Monitor." |
| ~1 min | **Was** hast du gebaut? (kurzer Überblick) |
| ~2 min | **Live-Vorführung** der App: Dropdown wechseln, Daten anschauen, Status erklären |
| ~1 min | **Eine** Sache, die du besonders gelernt hast (Lerngewinn) |
| ~30 s | **Eine** Frage ans Publikum oder an den Trainer |

### Was du vermeidest

- **Nicht** den Code erklären (zu technisch für Publikum).
- **Nicht** über Schwierigkeiten jammern.
- **Nicht** zu lange reden – 5 min reichen.

---

## Schritt 4 – Probe-Demo mit Backup-Plan

**Lernziel**: Du bist bereit für den Live-Moment.

**Was passiert**: Du hast einmal durchgespielt. Du weisst,
was bei einem Crash zu tun ist.

### Probe-Lauf (~5 min)

1. App starten.
2. **Live** vor dich selbst laufen lassen (mit Timer).
3. Wenn etwas crasht: **Backup-Video** zeigen.
4. Wenn etwas hakt: **kurz** warten, dann mit dem nächsten
   Punkt weitermachen.

### Was im echten Demo zu beachten ist

- **Micro-Headset** nutzen, wenn vorhanden.
- **Live-Server ist an**, App ist offen.
- **Backup-Video ist in Reichweite** (Desktop oder Tab offen).
- **Zeit im Blick**: spätestens nach 5 min Schluss machen.

### Was bei einem Crash im Live-Demo

1. **Ruhe bewahren**.
2. Backup-Video starten.
3. Trainer moderiert.
4. Nach Demo: gemeinsam debuggen (nicht öffentlich).

---

## Definition of Done

- [ ] App öffnet in unter 2 Sekunden.
- [ ] Backup-Video ist vorhanden, kurz, verständlich.
- [ ] Demo-Skript steht (5 min, klare Struktur).
- [ ] Probe-Lauf durchgeführt.
- [ ] Keine roten Fehler in der Konsole.

## Wie weiter?

**Heute Nachmittag**: die Live-Demo vor allen.

## Wo gibt's Hilfe?

- [Trainer-Briefing, Demo-Moderation](https://github.com/HeiligerG/ae-trainer-briefing/blob/bootcamp-v2/docs/praesentationen/tag-5-demo.md)
- [Trainer-Briefing, Risiken & Fallbacks](https://github.com/HeiligerG/ae-trainer-briefing/blob/bootcamp-v2/docs/risiken-und-fallbacks.md) (Szenario 5: Demo schlägt fehl)
- Trainer (1:1).
