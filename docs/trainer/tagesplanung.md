# Tagesplanung für Trainer

Diese Seite ist die **Tag-für-Tag-Schritt-für-Schritt-Anleitung
für den PE-Trainer**. Du arbeitest sie vor jedem Tag einmal durch
und passt sie an die konkreten Gegebenheiten an (Räume,
Hardware, Anzahl Teilnehmer).

## Übersicht

| Tag | Datum | Schwerpunkt | Deine Rolle |
|-----|-------|-------------|-------------|
| 1 | 06.08. | Einstieg, ESP32, Debian | Führen, Hardware vorbereiten |
| 2 | 07.08. | Sensoren, Netzwerk, MQTT, Joint | Coachen, Joint-Session moderieren |
| 3 | 10.08. | Docker, Postgres, End-to-End | Stack hochfahren, Joint-Session |
| 4 | 11.08. | Stresstest, Demo-Vorbereitung, Show | Stack stabil halten, Demo-Coach |
| 5 | 12.08. | Präsentation, Grill Party | Zuhören, feiern |

## Tag 1 – 06. August – Einstieg

### Vor dem Start
- [ ] 8:00–8:30 Raum vorbereiten (Beamer testen, WLAN-AP
      positionieren, Steckdosen für Sensor-Tests verfügbar)
- [ ] 3+ ESP32-Bereich vorbereiten (USB-Kabel, USB-Hub mit
      eigener Stromversorgung, falls genutzt)
- [ ] 3+ Debian-Boxen testen (oder Trainer-Laptop mit Debian
      VM für die Lernenden)
- [ ] SuvaSense-Repo in den gemeinsamen WLAN-Bereich klonen
      (auf einer Box, von der Lernende kopieren)
- [ ] WLAN prüfen: 2.4 GHz aktiv? SSID sichtbar?

### Während des Tages
- 8:00–8:45 Begrüssung, Projektidee vorstellen
- 9:00–10:00 Input: ESP32 – du zeigst die Live-Firmware, gehst
  die I2C-Adressen durch, erklärst was BME680 misst
- 10:15–12:00 Hands-on: Debian – Lernende richten ihre Box ein
- 13:00–15:00 Hands-on: Debian fortsetzung – IP, Docker,
  Snapshot
- 15:15–16:00 Tagesabschluss, Fragen

### Worauf achten?
- **ESP32 flasht bei manchen Laptops nicht** – USB-Treiber
  fehlt. Häufiger Fall, vor allem Windows. Direkt helfen.
- **Debian-Box hat keine IP** – DHCP-Problem, manuell statische
  IP setzen (siehe [Hands-on Debian](../tag-1/hands-on-debian.md))
- **`docker ps` permission denied** – usermod-Schritt vergessen,
  neu einloggen

## Tag 2 – 07. August – Sensoren + MQTT

### Vor dem Start
- [ ] Alle 3+ ESPs am Vorabend **geflasht** und mit
      Seriennummern versehen (SN12345, SN67890, DEMO-001, …)
- [ ] `mosquitto_pub`-Test mit einer Beispiel-Message
- [ ] IP-Adressen für die Debian-Boxen final (welche Box hat
      welche IP?)
- [ ] WLAN-Kanal geprüft (1, 6 oder 11, je nach Auslastung)

### Während des Tages
- 8:00–8:15 Daily
- 8:15–9:00 Input: Sensoren – Live-Demo Serial Monitor
- 9:00–10:00 Hands-on: Netzwerk – RSSI prüfen, Stabilität
- 10:15–10:30 Input: MQTT – Pub/Sub erklären
- 10:30–10:45 Input: Netzwerk – IP, Subnet
- 10:45–12:00 Hands-on: Broker – Mosquitto installieren
- 12:00–13:00 Mittag
- **13:00–15:00 Joint-Session mit AE-Teams: Schnittstellen
  klären** – siehe [Tag 2 Schnittstellen](../tag-2/schnittstellen.md)
- 15:15–16:00 Tagesabschluss

### Worauf achten?
- **Sensoren verlieren WLAN** – RSSI prüfen, ggf. näher am
  AP platzieren oder anderen Kanal wählen
- **Broker auf falscher IP** – VM-IP aus Sicht des ESP32
  (nicht `localhost`)
- **Topic-Tippfehler in der Joint-Session** – `suva/<serial>/data`
  exakt, case-sensitive!

## Tag 3 – 10. August – Docker, DB, Integration

### Vor dem Start
- [ ] Docker-Stack am Vorabend auf der Trainer-Box **getestet**
      (4 Services `running`, `curl /health` ok, pgAdmin login
      funktioniert)
- [ ] Test-Message via `mosquitto_pub` reingeschickt, in pgAdmin
      verifiziert
- [ ] Snapshot der Trainer-Box (vor Tag 3, falls Stresstest
      etwas kaputt macht)
- [ ] Demo-Seriennummer festgelegt (z. B. `SN12345`)

### Während des Tages
- 8:00–8:15 Daily
- 8:15–9:00 Retro mit anderen Teams
- 9:00–9:30 Theorie: Docker
- 9:30–10:00 Theorie: PostgreSQL
- 10:00–10:15 Pause
- 10:15–10:30 Theorie: SuvaSense-Architektur
- 10:30–12:00 Hands-on: Docker-Stack – 4 Services starten
- 12:00–13:00 Mittag
- **13:00–15:00 Integration: End-to-End mit echten Sensoren
  + Joint mit AE** – siehe [Tag 3 Hands-on Integration](../tag-3/hands-on-integration.md)
- 15:15–16:00 Tagesabschluss

### Worauf achten?
- **`docker compose up` schlägt fehl** – Port bereits belegt
  oder Volume-Konflikt. Häufige Lösung: anderen Port wählen
  oder `docker compose down` und neu starten
- **pgAdmin zeigt "Connection refused" zu postgres:5432** –
  Postgres-Container ist noch im Healthcheck, warte 10 s
- **Backend schreibt nicht in DB** – `docker compose logs backend`
  zeigt meistens die Ursache (Constraint-Verletzung, fehlende
  Topic-Parse, etc.)
- **Joint-Session: AE-Apps zeigen keine Daten** – haben sie die
  richtige API-URL? Die richtige Seriennummer? CORS?

## Tag 4 – 11. August – Stresstest, Demo

### Vor dem Start
- [ ] Snapshot der VM (vor Stresstest)
- [ ] Backup-Video aufgenommen (30–60 s, falls Live crasht)
- [ ] Beamer getestet (Auflösung 1920×1080, gespiegelt)
- [ ] Demo-Skript geschrieben und Probe-Demo gehalten
- [ ] Demo-Reihenfolge mit AE-Teams abgesprochen (5–7 Min pro
      Team)

### Während des Tages
- 8:00–8:15 Daily
- 8:15–10:00 Stresstest: mehrere Sensoren parallel
- 10:00–12:00 Stresstest fortsetzen (1 h Laufzeit,
  Verbindungsabbrüche, Backend-Restart)
- 12:00–13:00 Mittag
- 13:00–14:30 Puffer / Debuggen
- 14:30–15:00 Demo-Vorbereitung
- 15:15–16:00 Tagesabschluss, **letzte Handgriffe**
- **16:30–17:30 Gemeinsame Demo-Show mit AE** – siehe
  [Tag 4 Gemeinsame Demo](../tag-4/gemeinsame-demo.md)

### Worauf achten?
- **Sensor fällt aus** – erst andere Sensoren zeigen, später
  debuggen
- **Backend crasht** – Container restarten, im schlimmsten Fall
  Snapshot wiederherstellen
- **AE-App zeigt keine Daten** – Plattform oder App? Mit
  `mosquitto_sub` prüfen
- **Demo-Live crasht** – Backup-Video zeigen, "Live-Systeme
  sind live", weiter

## Tag 5 – 12. August – Präsentation, Grill

### Vor dem Start
- [ ] PV-Vorstellung vorbereitet (Plattform-Übersicht, 30 Min)
- [ ] Eigene Projektpräsentation vorbereitet (5–10 Min, Skript
  aus [tag-5/praesentation.md](../tag-5/praesentation.md))
- [ ] Statement für Abschluss-Video vorbereitet (30–60 s)
- [ ] Grill vorbereitet (oder bestellt)

### Während des Tages
- 9:00–10:00 PV-Vorstellung (Trainer + ggf. PE-Vertreter)
- 10:00–10:30 Pause, Vorbereitung
- 10:30–11:30 Projektpräsentationen (jedes Team 5–10 Min)
- 11:30–12:00 Abschluss-Video
- 12:00–16:00 Grill Party

### Worauf achten?
- **Bei der Präsentation: nicht über die Zeit gehen** – lieber
  eine Phase überspringen
- **Beim Video: kurze, ehrliche Statements** statt auswendig
  gelernter Sätze
- **Beim Grill: locker, fröhlich** – das Team hat 4 Tage
  intensiv gearbeitet, jetzt wird gefeiert

## Zeitplan pro Tag (kompakt)

| Tag | Start | Pause | Mittag | Demo | Tagesabschluss | Ende |
|-----|-------|-------|--------|------|----------------|------|
| 1 | 8:00 | 10:00–10:15 | 12:00–13:00 | – | 15:15–16:00 | 16:00 |
| 2 | 8:00 | 10:00–10:15 | 12:00–13:00 | – | 15:15–16:00 | 16:00 |
| 3 | 8:00 | 10:00–10:15 | 12:00–13:00 | 13:00–15:00 (Joint) | 15:15–16:00 | 16:00 |
| 4 | 8:00 | 10:00–10:15 | 12:00–13:00 | 16:30–17:30 (Show) | 15:15–16:00 | 17:30 |
| 5 | 9:00 | 10:00–10:30 | (mit Show) | 10:30–11:30 (Show) | – | 16:00 |

## Notfall-Kontakte

- **WLAN-AP-Problem:** Trainer hat Ersatz-AP, Hotspot auf
  Handy als Fallback
- **Debian-Box crash:** Snapshot der Trainer-Box als
  Fallback-Backup
- **Sensor verloren:** Ersatz-Sensor in der Schublade (mind.
  1 Stück)
- **Demo-Katastrophe:** Backup-Video (immer vor Tag 4
  aufnehmen!)

## Nach der Woche

- [ ] Plattform dokumentieren (Screenshot vom finalen Stand)
- [ ] Lessons Learned aufschreiben (was lief, was nicht)
- [ ] `Test-Frontend/pe-loesungen/` aktualisieren (basierend
      auf dem, was tatsächlich funktioniert hat)
- [ ] Diese Doku-Repo-Issues / PRs für die nächste Iteration
      sammeln

## Weiterführend

- [Hinweise](hinweise.md) – Grundhaltung, Stolpersteine
- [Risiken & Fallbacks](risiken-und-fallbacks.md) – detaillierte
  Szenarien
- [Tag 4 Theorie: Stresstest](../tag-4/theorie-stresstest.md) –
  was am Stresstest-Tag läuft
- [Tag 4 Demo-Skript](../tag-4/hands-on-demo-skript.md) – die
  Demo-Vorbereitung