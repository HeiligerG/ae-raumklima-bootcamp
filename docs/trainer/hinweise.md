# Hinweise für Trainer

## Deine Rolle

Als Trainer begleitest du die Lernenden durch die Woche.  
Du bist Coach, nicht Dozent. Dein Ziel: Die Lernenden bauen ihre App selbst.

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
- [ ] **Beide Repositories sind geklont** (`ae-raumklima-bootcamp` + `ae-raumklima-bootcamp-codebase`)
- [ ] Lernende können Commits machen und pushen
- [ ] (ab Tag 3) Node.js ist installiert und die Mock-API startet auf `localhost:3000`

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
| Mock-API liefert keine Daten | Prüfen ob `npm start` im zweiten Terminal läuft → <http://localhost:3000> im Browser öffnen |
| JSON-Syntax-Fehler | JSON-Validator zeigen, Komma am Ende |
| CSS wird nicht angewendet | Pfad prüfen, Browser-Cache leeren (Ctrl+Shift+R) |
| Verzweiflung / Aufgeben | Kleine Erfolge feiern, Aufgabe aufteilen |
| Langeweile / Unterforderung | Optionale Features anbieten, Peer-Teaching |

## Wie helfen, ohne die Lösung vorzugeben?

=== "Schlecht :material-close:"
    «Schreib einfach `element.textContent = data.temperature`»
    «Hier, ich zeig's dir» (und tippt selbst)

=== "Gut :material-check:"
    «Was steht in `data.temperature` drin?»
    «Wie heisst das HTML-Element, das du ändern willst?»
    «Schau mal in die Konsole, was zeigt `console.log`?»

## Was tun, wenn...

### ...die API nicht funktioniert?

- Lernende-App hat immer `data.json` als Fallback eingebaut
- Bei API-Problemen: `USE_API = false` in `script.js` setzen (z. B. wenn Node.js auf einem Laptop nicht läuft)
- Allen Teams erklären: Backend ist ideal, Mock-Daten funktionieren genauso
- Wenn die API gar nicht startet: `http://localhost:3000` im Browser öffnen → Fehlermeldung lesen

### ...Node.js nicht installiert ist?

- Lernende installieren LTS-Version von <https://nodejs.org> (5 Min, «weiter, weiter, installieren»)
- Alternativ die Mock-API per `docker compose up -d` aus dem Codebase-Repo starten (falls Docker verfügbar)
- Im Notfall: Lernende zeigen, wie `data.json` direkt funktioniert (vorübergehender API-Verzicht)

### ...Lernende stark unterschiedlich schnell sind?

- Schnelle Teams: optionale Features, Peer-Teaching
- Langsame Teams: Pflichtumfang reduzieren? Nein – lieber helfen und Tempo anpassen
- Paar-Programming: Schnell + Langsam kann gut funktionieren

### ...ein Team komplett feststeckt?

- Kurzes 1:1-Coaching (5–10 Minuten)
- Auf das Wesentliche fokussieren (MVP-Ansatz)
- Nicht den ganzen Tag an einem Bug verbringen

## Checkliste vor jedem Tag

- [ ] Raum ist bereit (Stühle, Tische)
- [ ] Beamer funktioniert
- [ ] WLAN läuft
- [ ] Theorie-Folien sind bereit
- [ ] Tagesplan ist im Kopf
- [ ] GitHub-Repositories sind erreichbar
