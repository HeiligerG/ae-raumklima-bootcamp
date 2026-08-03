# Demo-Sensor einrichten (Trainer-Anleitung)

Diese Anleitung beschreibt, wie du **vor Tag 3** mindestens einen
Demo-Sensor im Schulungsraum zum Laufen bringst, damit die Lernenden
am Tag 3 sofort Live-Daten sehen.

## Zwei Varianten

### Variante A: Echtes ESP32 mit SuvaSense-Firmware

Wenn die Plattformentwickler ESP32-Boards geflasht haben:

1. ESP32 mit USB verbinden, Serial-Monitor öffnen (115200 baud)
2. Seriennummer setzen:
   ```
   {"action":"set_serial","value":"DEMO-001"}
   ```
3. Reboot, im 5-Sekunden-Fenster:
   ```
   {"action":"bootloader"}
   ```
4. MQTT-Broker konfigurieren:
   ```
   {"action":"set","target":"broker","value":"<laptop-ip>"}
   {"action":"set","target":"port","value":"1883"}
   {"action":"set","target":"ssid","value":"<wlan-ssid>"}
   {"action":"set","target":"wifi_password","value":"<passwort>"}
   {"action":"set","target":"publish_interval","value":"10000"}
   {"action":"reboot"}
   ```
5. Im Normalbetrieb (grüne Heartbeat-LED) prüfen:
   - `mosquitto_sub -h <laptop-ip> -t 'suva/DEMO-001/data' -v` zeigt Messages
   - `docker compose -f SuvaSense/docker-compose.yml logs backend | grep DEMO-001` zeigt `ingest ok`

### Variante B: Manuell via `mosquitto_pub` (kein ESP nötig)

Falls kein ESP32 verfügbar ist, simuliert ein Skript die Messages:

```bash
# Eine einzelne Message senden:
docker compose -f SuvaSense/docker-compose.yml exec mosquitto \
  mosquitto_pub -t suva/DEMO-001/data \
  -m '{"bme680":{"temp":23.4,"hum":51,"press":1013.2,"gas":145.6}}'
```

Dauer-Loop (alle 10 Sekunden, realistische Schwankungen):

```bash
docker compose -f SuvaSense/docker-compose.yml exec mosquitto sh -c '
  while true; do
    TEMP=$(awk "BEGIN{printf \"%.1f\", 22 + rand()*3}")
    HUM=$(awk "BEGIN{printf \"%d\", 45 + rand()*15}")
    mosquitto_pub -t suva/DEMO-001/data \
      -m "{\"bme680\":{\"temp\":$TEMP,\"hum\":$HUM,\"press\":1013,\"gas\":145}}"
    sleep 10
  done'
```

!!! tip "Mehrere Demo-Sensoren"
    Für die Admin-Seite der Lernenden lohnt es sich, **2–3 Sensoren**
    zu simulieren. Einfach das Skript mehrfach mit anderer Seriennummer
    starten:
    ```bash
    SERIAL=DEMO-002 TEMP=18 HUM=70 docker compose exec mosquitto sh -c '
      while true; do
        mosquitto_pub -t suva/${SERIAL}/data \
          -m "{\"bme680\":{\"temp\":$TEMP,\"hum\":$HUM,\"press\":1013,\"gas\":145}}"
        sleep 10
      done'
    ```

## Vor Tag 3 verifizieren

Checkliste 5 Minuten vor Tag 3:

- [ ] `docker compose ps` – 4 Services healthy
- [ ] `curl http://localhost:8080/health` – `{"status":"ok"}`
- [ ] `curl http://localhost:8080/api/v1/sensors` – DEMO-Sensor in der Liste
- [ ] `mosquitto_sub -h localhost -t 'suva/+/data' -v` – Messages kommen rein
- [ ] pgAdmin `http://localhost:5050` ist offen (Server `postgres`, DB `suvasense`, Tabelle `readings`)
- [ ] API-URL und Demo-Seriennummer auf Flipchart / Beamer sichtbar

## Während Tag 3 (Joint-Session)

Demonstration am Beamer:

```bash
# Terminal 1: MQTT-Traffic beobachten
mosquitto_sub -h localhost -t 'suva/+/data' -v

# Terminal 2: Backend-Logs beobachten
docker compose -f SuvaSense/docker-compose.yml logs -f backend | grep ingest

# Browser: App eines Lernenden zeigen
```

Falls ein Lernendenteam Probleme hat:

```bash
# Manuell eine Message triggern (zeigt, dass das System reagiert):
mosquitto_pub -t suva/DEMO-001/data \
  -m '{"bme680":{"temp":99,"hum":1,"press":1013,"gas":145}}'
# → Lernenden-App zeigt nach Refresh "schlecht" (99°C ist definitiv nicht gut)
```

## Aufräumen nach dem Bootcamp

```bash
# Alle Demo-Sensoren stoppen (Ctrl+C im jeweiligen Terminal)

# Stack herunterfahren, Daten behalten:
docker compose -f SuvaSense/docker-compose.yml down

# Stack herunterfahren, alle Daten löschen:
docker compose -f SuvaSense/docker-compose.yml down -v
```

## Bei Problemen

- `mosquitto_pub` zeigt `Connection refused` → Broker nicht auf `<host>:1883` erreichbar
- Backend-Log zeigt `mqtt subscribe error` → `docker compose restart backend`
- Sensor in `/api/v1/sensors` fehlt → `docker compose logs backend | grep ingest` zeigt, ob Messages ankommen
- Alles steht → Lernende haben mindestens den Snapshot-Fallback und können mit `data.json` weiterarbeiten