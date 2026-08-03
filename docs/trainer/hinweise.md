# Hinweise für Trainer

## Deine Rolle

Als Trainer begleitest du die Lernenden durch die Woche.  
Du bist Coach, nicht Dozent. Dein Ziel: Die Lernenden bauen ihre App selbst.

Du verwaltest zusätzlich den **SuvaSense-Stack** (Backend, Broker,
Postgres, pgAdmin) und stellst den Lernenden die API-URL und die
Demo-Seriennummer bereit.

## Grundhaltung

- **Fragen stellen, statt Antworten geben**
    - «Was hast du schon probiert?»
    - «Was zeigt die Konsole?»
    - «Was müsste passieren, damit es funktioniert?»

- **Ermutigen, nicht loben für falsche Sachen**
    - «Gute Idee, probier es aus» statt «Nein, so geht das nicht»
    - Fehler sind Lernchancen

- **Nicht die Lösung vorgeben**
    - Hilf beim Denken, nicht beim Tippen
    - Zeig, wie man die Lösung findet, nicht die Lösung selbst

## Worauf achten?

### Technisch (am Tag 1)

- [ ] VS Code + Live Server läuft bei allen
- [ ] Git ist installiert
- [ ] **Drei Repositories sind geklont** (Leitfaden + Codebase + SuvaSense für PE-Team)
- [ ] Lernende können Commits machen und pushen
- [ ] (ab Tag 3) **SuvaSense-Stack läuft zentral** (dein Laptop oder Schulungs-Server) – URL und Demo-Seriennummer sind bereit

### Lernfortschritt

- [ ] Verstehen alle die Grundkonzepte?
- [ ] Kommen alle mit dem Tempo mit?
- [ ] Gibt es jemanden, der abgehängt wird?
- [ ] Gibt es jemanden, der sich langweilt?

### Sozial

- [ ] Arbeiten die Teams gut zusammen?
- [ ] Gibt es Konflikte?
- [ ] Trauen sich alle zu fragen?
- [ ] Reden alle gleich viel im Team?

## Häufige Stolpersteine

| Problem | Lösung |
|---------|--------|
| Live Server läuft nicht | VS Code neu starten, Extension prüfen |
| Git-Konflikte | Gemeinsam im Team lösen, erklären warum |
| `fetch()` funktioniert nicht | Pfad prüfen, Live Server muss laufen |
| SuvaSense-API liefert keine Daten | `curl http://<host>:8080/health` und `docker compose -f SuvaSense/docker-compose.yml ps` |
| Push-Bundle enthält kein BME680 | Mit PE-Team klären, ob BME680 angeschlossen ist |
| JSON-Syntax-Fehler | JSON-Validator zeigen, Komma am Ende |
| CSS wird nicht angewendet | Pfad prüfen, Browser-Cache leeren (Ctrl+Shift+R) |
| Snapshot zeigt alte Daten | `localStorage.removeItem('snapshot:SN12345')` in DevTools-Konsole |
| Verzweiflung / Aufgeben | Kleine Erfolge feiern, Aufgabe aufteilen |
| Langeweile / Unterforderung | Optionale Features anbieten, Peer-Teaching |

## Wie helfen, ohne die Lösung vorzugeben?

=== "Schlecht :material-close:"
    «Schreib einfach `latest.readings.bme680.temp_c`»
    «Hier, ich zeig's dir» (und tippt selbst)

=== "Gut :material-check:"
    «Was steht in `latest.readings.bme680` drin?»
    «Wie heisst das HTML-Element, das du ändern willst?»
    «Schau mal in die Konsole, was zeigt `console.log(latest)`?»

## Was tun, wenn...

### ...die SuvaSense-API nicht funktioniert?

1. `docker compose -f SuvaSense/docker-compose.yml ps` – laufen alle 4 Services?
2. `curl http://localhost:8080/health` – antwortet das Backend?
3. `docker compose -f SuvaSense/docker-compose.yml logs backend` – was sagt das Log?
4. `docker compose -f SuvaSense/docker-compose.yml restart backend` – als schneller Fix
5. Lernende können währenddessen mit `data.json` weiterarbeiten (Snapshot-Fallback greift nach erstem Erfolg)

### ...der MQTT-Broker keine Messages sieht?

1. `mosquitto_sub -h <host> -t 'suva/+/data' -v` – kommen Messages?
2. ESP-Serial-Monitor zeigen, was er publiziert
3. Topic exakt `suva/<serial>/data`? Letztes Segment muss `data` sein

### ...PE-Team ESP32 nicht verbinden kann?

- Trainer publiziert manuell via `mosquitto_pub` (Beispiel im
  [Demo-Sensor-Setup](demo-sensor.md))
- Demo läuft trotzdem, Daten sehen für die Lernenden identisch aus

### ...Lernende stark unterschiedlich schnell sind?

- Schnelle Teams: optionale Features, Peer-Teaching
- Langsame Teams: Pflichtumfang reduzieren? Nein – lieber helfen und Tempo anpassen
- Paar-Programming: Schnell + Langsam kann gut funktionieren

### ...ein Team komplett feststeckt?

- Kurzes 1:1-Coaching (5–10 Minuten)
- Auf das Wesentliche fokussieren (MVP-Ansatz: Dashboard + Status + Verlauf)
- Nicht den ganzen Tag an einem Bug verbringen

## Lösungs-Workflow (für Trainer)

Es gibt **keine** Lösungen im Lernmaterial. Lernende lernen besser,
wenn sie selbst knobeln und fragen statt Lösungen abzuschreiben.

**Wenn ein Lernender fragt "Wie geht das?":**

1. **Frag zuerst zurück:** "Was hast du schon versucht? Was
   zeigt die Konsole?" (CoC: nicht die Lösung vorgeben)
2. **Zeig live am Code:** Öffne parallel den Lösungs-Ordner
   `Test-Frontend/loesungen/tag-N/` (lokal, nicht im Lernrepo)
   und geh den relevanten Abschnitt durch
3. **Erkläre das _Warum_, nicht nur das _Was_:** Die
   `NOTIZEN.md` pro Tag im Lösungs-Ordner helfen dabei
4. **Lass den Lernenden selbst tippen:** Nach der Erklärung
   geht der Lernende zurück an den eigenen Code – nicht
   kopieren, sondern umsetzen

**Lösungs-Inhalt (lokal, nicht in Git):**

- `Test-Frontend/loesungen/tag-1/` – HTML, CSS, NOTIZEN
- `Test-Frontend/loesungen/tag-2/` – data.json, script.js, NOTIZEN
- `Test-Frontend/loesungen/tag-3/` – script.js, NOTIZEN
- `Test-Frontend/loesungen/index.md` – Konzept-Übersicht

**Smart-Learner-Hinweis:** Wenn ein Lernender fragt "Gibt es hier
irgendwo Lösungen?" – das ist ein gutes Zeichen. Antworte
ehrlich: "Nein, die sind im Trainer-Ordner. Ich zeig sie dir,
wenn du 20 Min selbst probiert hast."

## Checkliste vor jedem Tag

- [ ] Raum ist bereit (Stühle, Tische)
- [ ] Beamer funktioniert
- [ ] WLAN läuft (Laptops der Lernenden erreichen den SuvaSense-Host)
- [ ] Theorie-Folien sind bereit
- [ ] Tagesplan ist im Kopf
- [ ] GitHub-Repositories sind erreichbar
- [ ] SuvaSense-Stack ist hochgefahren (ab Tag 3)
- [ ] Demo-Sensor publiziert (ab Tag 3)