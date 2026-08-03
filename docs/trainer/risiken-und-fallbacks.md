# Risiken & Fallbacks

Diese Seite ist die **detaillierte Szenario-Sammlung**: was
kann in welcher Phase kaputtgehen, und was tust du dann? Du
kennst die Theorie aus [Hinweise](hinweise.md) und den Plan aus
[Tagesplanung](tagesplanung.md) – hier geht's um **Konkretes
Feuerlöschen**.

## Risiko-Matrix

| Risiko | Wahrscheinlichkeit | Auswirkung | Massnahme |
|--------|-------------------|-----------|-----------|
| WLAN fällt aus | Mittel | Mittel | Hotspot-Fallback, mehrere APs im Schulungsraum |
| Sensor verliert WLAN | Mittel | Niedrig | Sensor zum AP umsetzen, anderen Kanal wählen |
| Debian-Box crasht | Niedrig | Hoch | Snapshot-Wiederherstellung, Ersatz-Box |
| Docker-Stack startet nicht | Mittel | Hoch | Logs lesen, Volumes prüfen, Port-Konflikte |
| Backend-Restart bricht etwas | Mittel | Niedrig | `docker compose restart` Mosquitto merkt Messages |
| pgAdmin zeigt nichts | Niedrig | Mittel | Postgres-Container-Status prüfen, Healthcheck abwarten |
| Demo-Live crasht | Niedrig | Hoch | Backup-Video, "Live-Systeme sind live" |
| Sensor-Daten kommen nicht an | Mittel | Mittel | I2C-Scanner, 5-Sek-Fenster, Broker-IP prüfen |
| Joint-Session mit AE: keine Daten | Mittel | Mittel | Plattform vs. App-Bug unterscheiden |
| MQTT-Topic-Tippfehler in der Demo | Niedrig | Hoch | Joint-Session am Tag 2 mit Vertrag fixieren |

## Fallback-Pläne (detailliert)

### Szenario 1: WLAN-Ausfall im Schulungsraum

**Symptom:** Alle Sensoren verlieren WLAN, `mosquitto_sub` zeigt
nichts.

**Sofort:**
1. Hotspot auf deinem Handy aktivieren
2. SSID und Passwort sind im Trainer-Briefing hinterlegt
3. ESPs neu verbinden (über 5-Sek-Fenster-Workflow)
4. Backend-IP ist im Schulungs-LAN geblieben, ggf. mDNS oder
   fixe IP nutzen

**Falls Hotspot nicht hilft:**
- Alle Sensoren zeigen das `system.online = false` (RSSI -
  dBm ist nicht mehr aussagekräftig)
- AE-Apps zeigen "Keine Daten" – gemeinsam mit ihnen
  kommunizieren
- Plattform ist **nicht** kaputt, nur das **Netz** ist weg

**Nachbereitung:** WLAN-Router-Log prüfen, AP-Reset.

### Szenario 2: Mehrere Sensoren verlieren WLAN

**Symptom:** Ein einzelner ESP wird im Serial Monitor "disconnected"
oder blinkt rot, andere ESPs funktionieren noch.

**Sofort:**
1. Den betroffenen ESP **näher zum AP** stellen
2. Wenn das nicht hilft: anderen WLAN-Kanal wählen (1, 6 oder 11
   nicht überlappend)
3. 5-Sek-Fenster-Workflow mit dem neuen Kanal nutzen
4. **Wichtig:** Bevor du den AP umkonfigurierst, prüfe mit
   `mosquitto_sub` ob die **anderen** Sensoren noch Daten
   liefern – wenn ja, ist es ein Sensor-Problem, kein
   Plattform-Problem

**Falls es nur ein Sensor ist:** Test mit einem anderen Sensor
an der gleichen Position. Wenn der auch Probleme hat: AP-Position
ist schlecht. Wenn nicht: Sensor-Defekt.

### Szenario 3: Docker-Stack startet nicht

**Symptom:** `docker compose up -d` schlägt fehl, oder ein Service
startet immer wieder neu.

**Diagnose-Schritte (in Reihenfolge):**

```bash
# Welcher Service hat das Problem?
docker compose ps

# Was sagt der Log?
docker compose logs --tail=50 <service>

# Ist der Port frei?
sudo lsof -i :8080      # oder welcher Port auch immer
sudo lsof -i :1883
```

**Häufige Ursachen:**

| Fehler im Log | Ursache | Lösung |
|---|---|---|
| `bind: address already in use` | Port belegt | anderen Port in `docker-compose.yml` wählen |
| `volume ... is in use` | Alter Container existiert noch | `docker compose down --volumes` (Daten weg!) oder nur `--remove-orphans` |
| `connection to database failed` | Postgres nicht ready | 10 s warten, neu versuchen |
| `permission denied` | Docker-Daemon nicht zugänglich | `sudo usermod -aG docker $USER` und neu einloggen |
| `image not found` | `docker compose pull` vergessen | `docker compose pull` |

**Im schlimmsten Fall:** Snapshot der VM wiederherstellen (vorher
gemachter Snapshot, falls vorhanden).

### Szenario 4: Backend persistiert keine Daten

**Symptom:** `mosquitto_sub` zeigt Messages, aber `pgAdmin` zeigt
keine neuen Zeilen in `readings`.

**Diagnose:**

```bash
# Was sagt der Backend-Log?
docker compose logs --tail=100 backend | grep -E "ingest|error|ERROR"
```

**Häufige Log-Meldungen:**

| Meldung | Ursache | Lösung |
|---|---|---|
| `ingest ok serial=...` | Funktioniert! | Backend ist OK, prüfe pgAdmin-Refresh |
| `ingest error: missing bme680` | MQTT-Payload ohne bme680 | Sensor-Konfiguration prüfen |
| `JSON parse error` | Payload ist kein gültiges JSON | Sensor sendet Müll, neu flashen |
| `DB connection refused` | Postgres nicht erreichbar | `docker compose ps postgres` |
| `constraint violation` | DB-Constraint greift | `docker compose exec postgres psql ...` |

### Szenario 5: Backend-Restart überleben

**Symptom:** `docker compose restart backend` ist nötig, aber die
Lernenden haben Angst um Datenverlust.

**Beruhigung:** Mosquitto speichert Messages im RAM
(`persistence true` muss gesetzt sein, default ist es). Nach
dem Backend-Restart holt das Backend die wartenden Messages ab.

**Test-Sequenz:**

```bash
# 1. Backend stoppen
docker compose stop backend

# 2. mosquitto_sub zeigt keine neuen Messages mehr
mosquitto_sub -t 'suva/+/data' -v  # zeigt Messages aus dem RAM

# 3. Sensor publishen lassen (z. B. 3 Messages)

# 4. Backend wieder starten
docker compose start backend

# 5. Backend-Log zeigt "ingest ok" für die 3 verpassten Messages
docker compose logs --tail=20 backend
```

**Falls `persistence false`:** Messages gehen verloren. Lösung:
in `mosquitto.conf` `persistence true` setzen, Container neu
starten.

### Szenario 6: Demo-Live crasht

**Vorbereitung (immer am Tag 4 Vormittag):**

- Backup-Video aufnehmen (30–60 s, alle wichtigen Live-Szenen)
- Backup-Video auf dem Desktop verfügbar
- Probe-Demo gehalten (ohne Crash)

**Wenn es live crasht:**

1. **Ruhe bewahren**, nicht hektisch werden
2. "Live-Systeme sind live" – kurz erklären, was passiert ist
3. Backup-Video zeigen, **nicht** versuchen, den Fehler live zu
   fixen
4. **Nach der Show:** gemeinsam debuggen, Snapshot wiederherstellen
   wenn nötig

**Was du NICHT tust:**

- ❌ Live-Debugging vor dem Publikum (ablenkend, langwierig)
- ❌ Den Fehler kleinreden ("ist nur ein kleines Problem")
- ❌ Schuldzuweisungen (an AE-Teams, an die Lernenden, an die
  Plattform – erst debuggen, dann analysieren)

### Szenario 7: Sensor-Daten kommen nicht an

**Symptom:** Serial Monitor zeigt `Published`, aber `mosquitto_sub`
zeigt nichts.

**Diagnose-Kaskade:**

1. **Broker erreichbar?**
   ```bash
   # Vom Sensor-Laptop oder der Debian-Box
   mosquitto_sub -t 'suva/SN12345/data' -v
   # Wenn nichts kommt: Broker down oder falsches Topic
   ```

2. **Broker akzeptiert Messages?**
   ```bash
   mosquitto_pub -t suva/TEST-001/data -m '{"bme680":{"temp":22,"hum":50}}'
   mosquitto_sub -t 'suva/+/data' -v
   # Wenn TEST-001 erscheint: Broker OK, Sensor-Problem
   ```

3. **Sensor konfiguriert?**
   ```
   # Im 5-Sek-Fenster nach Reset
   {"action":"status"}
   {"action":"set","target":"broker","value":"tcp://<deine-debian-ip>:1883"}
   {"action":"reboot"}
   ```

4. **Falsche Broker-Adresse?**
   ```
   {"action":"set","target":"broker","value":"tcp://localhost:1883"}
   ```
   `localhost` ist der ESP32 selbst, nicht die Debian-Box!

5. **WLAN-Problem?** RSSI im Serial Monitor prüfen. Wenn RSSI
   > -80 dBm, ist die Verbindung instabil.

### Szenario 8: Joint-Session mit AE – Plattform vs. App-Bug

**Symptom:** AE-App zeigt "Keine Daten", aber `mosquitto_sub` und
pgAdmin zeigen Daten.

**Diagnose-Hierarchie:**

1. **AE-Apps haben falsche API-URL?** → Trainer fragt nach,
   gemeinsam prüfen
2. **AE-Apps haben falsche Seriennummer?** → wie oben
3. **CORS-Problem?** → Backend-Log zeigt CORS-Rejects
4. **Snapshot-Fallback läuft mit alten Daten?** → Browser-Refresh
   erzwingen

**Wenn die Plattform OK ist, aber AE-App nicht:**

- "Das ist gut, dann wissen wir, dass die Plattform
  funktioniert. Deine App hat einen Bug – schau im
  Browser-Console-Log nach Fehlern."
- Lass das AE-Team selbst debuggen, du coachst nur

**Wenn die Plattform down ist (durch dich verursacht):**

- Ehrlich sein: "Sorry, ich teste gerade, kurze Pause"
- Debugge im Hintergrund, kommuniziere Status
- Backup-Video zeigen

### Szenario 9: PGAdmin-Login funktioniert nicht

**Symptom:** pgAdmin zeigt "Invalid email or password" trotz
korrekter Eingabe.

**Diagnose:**

```bash
# Läuft pgAdmin?
docker compose ps pgadmin

# Welche Credentials hat der Trainer im .env gesetzt?
docker compose exec pgadmin env | grep -i password
```

**Häufige Ursache:** Trainer hat `PGADMIN_DEFAULT_PASSWORD` im
`.env` nicht gesetzt. Lösung: `.env` bearbeiten, Container neu
starten.

### Szenario 10: Mehrere Sensoren beim Flashen bricken

**Symptom:** ESP32 reagiert nach Flash-Versuch nicht mehr, kein
Serial-Monitor-Output.

**Lösung:**

1. USB-Kabel tauschen (manche Kabel sind nur Ladekabel, keine
   Datenkabel)
2. USB-Port direkt am Laptop (nicht über Hub)
3. ESP32 kurz vom Strom trennen, wieder einstecken
4. **Bootloader-Modus** manuell auslösen: GPIO0 mit GND
   verbinden, USB einstecken, dann wieder trennen
5. Im schlimmsten Fall: ESP32 ist kaputt, Ersatz-Sensor aus der
   Schublade

## Notfall-Kit (was du immer dabeihaben solltest)

- [ ] **Ersatz-ESP32** (mindestens 1 Stück, in Schublade)
- [ ] **Ersatz-USB-Kabel** (Datenkabel, nicht nur Ladekabel)
- [ ] **Mobiler Hotspot** (Hotspot auf Handy aktivieren können)
- [ ] **VM-Snapshot** (vor Tag 3, 4 erstellen)
- [ ] **`pg_dump` der DB** (vor Tag 3, 4 erstellen)
- [ ] **Backup-Video** (vor Tag 4 Demo aufnehmen)
- [ ] **Drucker** der AE-Datenvertrag-Skizze (für die Joint-Session)

## Kommunikation

### Mit Lernenden

- **Ehrlich** – "Ja, X ist kaputt, wir arbeiten dran"
- **Nicht dramatisieren** – "Ist im Bootcamp normal, machen wir
  in den Griff"
- **Nachvollziehbar** – "Was siehst du? Was hast du probiert?"

### Mit AE-Teams

- **Plattform-Status proaktiv kommunizieren** – "Unser Backend
  ist gerade nicht erreichbar, wir restarten gleich"
- **Bei Joint-Sessions** – im Voraus klären, wann wer Support
  leistet
- **Nach der Show** – gemeinsam feiern oder debuggen, je nach
  Ergebnis

### Mit anderen Trainern (AE-Trainer)

- **Synchronisiert bleiben** – "Wir probieren gerade X, was
  braucht ihr von uns?"
- **Klare Aufgabenverteilung** – du kümmerst dich um Plattform,
  der AE-Trainer um die Apps

## Nachbereitung (am Ende der Woche)

- [ ] Was lief gut? → Lessons Learned
- [ ] Was lief nicht? → Verbesserungen für nächste Iteration
- [ ] Doku-Issues / PRs aufsammeln
- [ ] Snapshot der finalen VM behalten
- [ ] Trainer-Notizen an Nachfolger übergeben

## Weiterführend

- [Hinweise](hinweise.md) – Grundhaltung, Frag-Hierarchie
- [Tagesplanung](tagesplanung.md) – Tag-für-Tag-Plan
- `Test-Frontend/pe-loesungen/` – Referenz-Lösungen für 1:1-Coaching