# Hinweise für Trainer

## Deine Rolle

Als PE-Trainer begleitest du die Plattformentwickler durch die
ganze Woche. Du bist **Coach**, nicht Dozent. Dein Ziel: Die
Lernenden bauen selbst eine funktionierende Sensor-Plattform.

Du verwaltest zusätzlich:

- **Die gemeinsame Infrastruktur** (Debian-Boxen, WLAN-AP, Sensoren)
- **Die Joint-Sessions** mit den AE-Teams (Schnittstellen klären,
  Live-Integration)
- **Den Notfall-Backstop** (wenn etwas crasht, bist du die
  Hotline)

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

- [ ] Debian-Box läuft (vom Trainer gestellt oder selbst
      eingerichtet)
- [ ] Docker ist installiert
- [ ] **Drei Repositories sind geklont:** Lernleitfaden, SuvaSense
      (Haupt-Repo), und PE-Read-Only für Lernende
- [ ] Lernende können Commits machen und pushen
- [ ] (ab Tag 2) SuvaSense-Stack läuft zentral; Lernende wissen
      die URLs

### Lernfortschritt

- [ ] Verstehen alle die Grundkonzepte (ESP32, MQTT, Docker)?
- [ ] Kommen alle mit dem Tempo mit?
- [ ] Gibt es jemanden, der abgehängt wird?
- [ ] Gibt es jemanden, der sich langweilt?

### Sozial

- [ ] Arbeiten die Teams gut zusammen?
- [ ] Gibt es Konflikte?
- [ ] Trauen sich alle zu fragen?
- [ ] Reden alle gleich viel im Team?

## Frag-Hierarchie (für Lernende)

1. **Selbst** – Logs lesen, `docker logs`, `mosquitto_sub`,
   Devtools
2. **Team** – Mit-PE diskutieren, Mit-PE debuggen
3. **Trainer** – bei Konzept-Fragen, wenn das Debugging feststeckt

Diese Hierarchie gilt **nicht** in Notfällen (z. B. "Plattform
ist down, morgen ist Demo"). Dann direkt zum Trainer.

## Trainer-Werkzeuge (lokal, nicht im Lern-Repo)

Lösungen und Referenz-Material liegen im **Test-Frontend/
pe-loesungen/**: Konzept, Notizen, fertige Konfigurationen.

```text
Test-Frontend/pe-loesungen/
├── README.md              # Konzept
├── tag-1/                 # ESP32-Flash, Debian-Setup
├── tag-2/                 # Mosquitto-Konfig, Netzwerk-Tipps
├── tag-3/                 # docker-compose.yml, pgAdmin-Tricks
└── tag-4/                 # Stresstest-Skripte, Demo-Backup
```

!!! info "Nicht im Lern-Repo"
    Lösungen sind **nicht** im `ae-raumklima-bootcamp`-Repo
    (siehe Variante-A-Diskussion mit dem User). Sie leben nur
    im `Test-Frontend/pe-loesungen/` als Trainer-Werkzeug.

    **Niemand ausser dir** sollte diesen Ordner sehen. Lernende
    bekommen ihn **nur**, wenn du sie explizit coachst.

## Lösungs-Workflow (für Trainer)

Es gibt **keine** Lösungen im Lernmaterial. Lernende lernen besser,
wenn sie selbst knobeln und fragen statt Lösungen abzuschreiben.

**Wenn ein Lernender fragt "Wie geht das?":**

1. **Frag zuerst zurück:** "Was hast du schon versucht? Was
   zeigt die Konsole?" (CoC-Prinzip: nicht die Lösung vorgeben)
2. **Zeig live am Code:** Öffne parallel den passenden Tag-
   Ordner in `Test-Frontend/pe-loesungen/`
3. **Erkläre das _Warum_** (siehe `NOTIZEN.md` im Tag-Ordner)
4. **Lass den Lernenden selbst zurückschreiben** – nicht
   kopieren

**Smart-Learner-Bonus:** Wenn ein Lernender fragt "Gibt es
irgendwo Lösungen?" – das ist ein gutes Zeichen. Antworte
ehrlich: "Nein, ich zeig sie dir, wenn du 20 Min selbst
probiert hast."

## Häufige Stolpersteine

| Problem | Lösung |
|---------|--------|
| ESP32 wird nicht erkannt | USB-Treiber (CP210x oder CH340)? Kabel? Anderer USB-Port? |
| WiFi verbindet sich nicht | 2.4 GHz aktiv? Passwort korrekt? 5-Sek-Fenster nutzen |
| `docker ps` zeigt nichts | `docker compose up -d` vergessen? `docker compose logs`? |
| pgAdmin: "Connection refused" | Postgres-Container noch nicht ready? `docker compose ps`? |
| `mosquitto_sub` zeigt nichts | Broker auf ESP32 richtig konfiguriert? Topic-Tippfehler? |
| API antwortet 500 | Backend-Log zeigt Fehler. `docker compose logs backend` |
| Live-Demo crasht | Backup-Video zeigen, "Lass uns nach der Show schauen" |

## Was tun, wenn...

### ...die Plattform in der Joint-Session nicht funktioniert?

1. Erst die AE-Teams beruhigen: "Wir schauen das gleich an"
2. Im Hintergrund prüfen: `docker compose ps`, Backend-Log,
   pgAdmin
3. Falls Bug: gemeinsam debuggen, Demo fortsetzen
4. Falls Hard-Crash: Backup-Video zeigen, nach der Session
   beheben

### ...die Lernenden mit Theorie kämpfen?

Du weisst aus Erfahrung, dass Theorie oft schwerer ist als
Hands-on. Deshalb ist die Doku bewusst **konkret und
SuvaSense-spezifisch** aufgebaut:

- Kein "MQTT ist ein leichtgewichtiges Protokoll" – sondern "Wir
  publishen auf `suva/<serial>/data` mit QoS 1, weil…"
- Theorie kommt **direkt vor** dem Hands-on, damit verstanden
  wird, **warum** sie tun, was sie tun
- Häufige Fehler am Ende jeder Theorie-Seite, mit Diagnose-
  Tipps

**Wenn ein Lernender trotzdem hängt:**

- Erkläre das Konzept an **konkreten Beispielen** aus SuvaSense
- Zeig live im Code, **wo** das Konzept umgesetzt ist
- Lass den Lernenden **selbst erklären** (Rubber-Duck-Methode)

### ...die Demo-Show katastrophal läuft?

1. Ruhe bewahren
2. Backup-Video zeigen
3. "Live-Systeme sind live" – entschuldige euch nicht,
   dokumentiert die Probleme für die Nachbereitung
4. Nach der Show: gemeinsam debuggen, ggf. Snapshot der VM
   wiederherstellen

### ...jemand nicht mit dem Tempo mithält?

- **Schnelle Lernende:** Pair-Teaching, optionale Features
  anbieten (siehe Tag 4 Optionale Features)
- **Langsame Lernende:** mehr Pair-Programming, Fokus auf
  Pflichtumfang, weniger Features
- **Völlig feststeckend:** 1:1-Coaching (5–10 Min), MVP-Fokus

## Checkliste vor jedem Tag

- [ ] Raum vorbereitet (Stühle, Tische, Beamer)
- [ ] Beamer funktioniert (HDMI-Kabel, Auflösung)
- [ ] WLAN läuft und ist stabil (mehrere APs getestet)
- [ ] Debian-Boxen sind erreichbar (für die Lernenden)
- [ ] Sensoren sind geladen und geflasht (mind. 3 Stück)
- [ ] Theorie-Folien bereit (oder Link zur Doku)
- [ ] Tagesplan im Kopf
- [ ] GitHub-Repositories erreichbar
- [ ] SuvaSense-Stack läuft (ab Tag 3)
- [ ] Demo-Sensor publiziert (ab Tag 2)
- [ ] (Tag 4) Backup-Video bereit

## Checkliste nach jedem Tag

- [ ] Tagesabschluss mit den PE-Gruppen gemacht
- [ ] Offene Fragen notiert (für morgen)
- [ ] Snapshot der VM (vor grösseren Änderungen)
- [ ] `pg_dump` der DB (vor destruktiven Änderungen)

## Weiterführend

- [Tagesplanung](tagesplanung.md) – Tag-für-Tag-Schritte für
  den Trainer
- [Risiken & Fallbacks](risiken-und-fallbacks.md) – was tun,
  wenn etwas schiefläuft
- `Test-Frontend/pe-loesungen/` – Referenz-Lösungen (lokal,
  nur Trainer)