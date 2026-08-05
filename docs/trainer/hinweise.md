# Hinweise für Trainer

## Deine Rolle

Als Trainer begleitest du die Lernenden durch die Woche.  
Du bist Coach, nicht Dozent. Dein Ziel: Jede/r Lernende baut
**alleine** eine funktionierende Web-App.

Du verwaltest zusätzlich:

- **Die gemeinsame Infrastruktur** (SuvaSense-Backend, WLAN-AP,
  Sensoren) für die Live-Integration
- **Die Joint-Sessions** mit dem PE-Team (Schnittstellen klären,
  Live-Integration) – diese sind **terminliche Veranstaltungen**,
  kein Team-Work
- **Den Notfall-Backstop** (wenn etwas crasht, bist du die
  Hotline)

!!! warning "Wichtig: Einzelarbeit + KI-Verbot"
    Im aktuellen Bootcamp arbeiten die Lernenden **alleine** in
    ihrem eigenen Fork. Es gibt keine Teams, kein Pair-Programming.
    Und **KI ist verboten** – siehe
    [Quellen und KI-Verbot](../projekt/quellen.md).

    Deine Aufgabe ist es, das **durchzusetzen**:
    - Bei Tag 1 kurz ansagen, dass KI nicht erlaubt ist
    - Auf W3Schools und MDN als Quellen hinweisen
    - Bei Verdacht auf KI-Nutzung: ansprechen, nicht blossstellen

## Grundhaltung

- **Fragen stellen, statt Antworten geben**
    - "Was hast du schon probiert?"
    - "Was zeigt die Konsole?"
    - "Was müsste passieren, damit es funktioniert?"

- **Ermutigen, nicht loben für falsche Sachen**
    - "Gute Idee, probier es aus" statt "Nein, so geht das nicht"
    - Fehler sind Lernchancen

- **Nicht die Lösung vorgeben**
    - Hilf beim Denken, nicht beim Tippen
    - Zeig, wie man die Lösung findet, nicht die Lösung selbst

## Worauf achten?

### Technisch (am Tag 1)

- [ ] VS Code und Live Server laufen bei allen
- [ ] Git ist installiert
- [ ] **Jede/r hat einen eigenen Fork** des Codebase-Repos
- [ ] Lernende können committen und pushen (direkt auf main)
- [ ] (ab Tag 3) **SuvaSense-Stack läuft zentral** (Trainer-Box) – URL und Demo-Seriennummer sind bereit

### Lernfortschritt (Einzelperson!)

- [ ] Versteht jede/r die Grundkonzepte?
- [ ] Kommt jede/r mit dem Tempo mit?
- [ ] Gibt es jemanden, der abgehängt wird?
- [ ] Gibt es jemanden, der sich langweilt?

### Sozial

- [ ] Arbeiten alle konzentriert?
- [ ] Gibt es Konflikte?
- [ ] Trauen sich alle zu fragen?
- [ ] Unterhalten sich die Lernenden untereinander (optional)?

## Frag-Hierarchie (für Lernende)

1. **Selbst** – DevTools, Konsole, Logs lesen
2. **W3Schools** – die zentrale Quelle (siehe [Quellen](../projekt/quellen.md))
3. **MDN** – für Tiefergehende
4. **Trainer** – bei Konzept-Fragen, wenn das Debugging feststeckt

Diese Hierarchie gilt **nicht** in Notfällen (z. B. "Plattform
ist down, morgen ist Demo"). Dann direkt zum Trainer.

## Trainer-Werkzeuge (lokal, nicht im Lern-Repo)

Lösungen und Referenz-Material liegen im
**Test-Frontend/loesungen/** (lokal auf deinem Laptop, nicht in Git).

```
Test-Frontend/loesungen/
├── README.md              # Konzept
├── tag-1/                 # Tag-1-Referenz
├── tag-2/                 # Tag-2-Referenz
├── tag-3/                 # Tag-3-Referenz
└── tag-4/                 # Tag-4-Referenz
```

!!! info "Nicht im Lern-Repo"
    Lösungen sind **nicht** im `ae-raumklima-bootcamp`-Repo
    (siehe Diskussion mit dem User). Sie leben nur im
    `Test-Frontend/loesungen/` als Trainer-Werkzeug.

    **Niemand ausser dir** sollte diesen Ordner sehen. Lernende
    bekommen sie **nur**, wenn du sie explizit im 1:1-Coaching
    zeigst.

## Was tun, wenn...

### ...die Lernenden nicht weiterkommen?

1. Erst die Lernenden fragen, was sie schon probiert haben
2. Konsole zeigen lassen (DevTools → Console)
3. W3Schools-Checkliste durchgehen (siehe [Quellen](../projekt/quellen.md))
4. Erst dann: selbst am Code arbeiten, aber **gemeinsam**, nicht "ich mach das mal eben"

### ...die Lernenden stark unterschiedlich schnell sind?

- **Schnelle Lernende:** optionale Features anbieten (Diagramm,
  Dark Mode, Chart.js)
- **Langsame Lernende:** Fokus auf Pflichtumfang, weniger Features.
  Du kannst auch bei 5 von 7 Anforderungen ankommen.
- **Völlig feststeckend:** 1:1-Coaching (5–10 Min), MVP-Fokus

Wichtig: **Keine Lernende wird wegen anderer Geschwindigkeit
abgestempelt.** Jede/r arbeitet im eigenen Tempo.

### ...jemand die KI nutzt?

1. Ruhig ansprechen, nicht blossstellen
2. Auf W3Schools und MDN verweisen (die haben alle Antworten)
3. Erklären, warum KI den Lerngewinn zerstört (siehe
   [Quellen](../projekt/quellen.md))
4. Beim nächsten Mal: kontrollieren, ob sie aus W3Schools zitieren
   statt aus KI

### ...der Plattform in der Joint-Session nicht funktioniert?

1. Erst die AE-Lernenden beruhigen: "Wir schauen das gleich an"
2. Im Hintergrund prüfen: `docker compose ps`, Backend-Log, pgAdmin
3. Falls Bug: gemeinsam debuggen, Demo fortsetzen
4. Falls Hard-Crash: Backup-Video zeigen, nach der Session beheben

### ...die Demo-Show katastrophal läuft?

1. Ruhe bewahren
2. Backup-Video zeigen
3. "Live-Systeme sind live" – entschuldige dich nicht
4. Nach der Show: gemeinsam debuggen, ggf. Snapshot der VM wiederherstellen

### ...jemand nicht mit dem Tempo mithält?

- **Schnelle Lernende:** optionale Features anbieten, in der
  1:1-Session Tipps geben für Fortgeschrittene
- **Langsame Lernende:** mehr 1:1-Coaching, Fokus auf Pflichtumfang
- **Völlig feststeckend:** 1:1-Coaching (5–10 Min), MVP-Fokus

## Checkliste vor jedem Tag

- [ ] Raum vorbereitet (Stühle, Tische, Beamer)
- [ ] Beamer funktioniert
- [ ] WLAN läuft
- [ ] Laptops der Lernenden sind im WLAN
- [ ] SuvaSense-Stack läuft (ab Tag 3, Trainer-Box)
- [ ] Theorie-Folien bereit (oder Link zur Doku)
- [ ] Tagesplan im Kopf
- [ ] GitHub erreichbar (Lernende forken und pushen)
- [ ] KI-Verbot nochmal erwähnt (vor allem Tag 1, dann bei Bedarf)
- [ ] (Tag 4) Backup-Video der Demo bereit

!!! tip "Wichtig für Tag 1"
    Am Tag 1 nochmal klar ansagen:
    - Jede/r arbeitet **alleine** (keine Teams, keine Pair-Programming-
      Sessions)
    - **KI ist verboten** – W3Schools und MDN sind die Quellen
    - Jede/r hat einen **eigenen Fork** des Codebase-Repos
    - Jede/r arbeitet auf einem **eigenen Branch** im Fork

## Checkliste nach jedem Tag

- [ ] Tagesabschluss mit den Lernenden gemacht (Selbst-Check)
- [ ] Offene Fragen notiert (für morgen)
- [ ] Snapshot der VM (vor grösseren Änderungen)
- [ ] `pg_dump` der DB (vor destruktiven Änderungen)

## Weiterführend

- [Tagesplanung](tagesplanung.md) – Tag-für-Tag-Schritte für
  den Trainer
- [Risiken & Fallbacks](risiken-und-fallbacks.md) – was tun,
  wenn etwas schiefläuft
- `Test-Frontend/loesungen/` – Referenz-Lösungen (lokal,
  nur Trainer)
