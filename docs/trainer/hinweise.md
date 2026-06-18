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

### Technisch

- [ ] Läuft Live Server bei allen?
- [ ] Ist Git installiert und funktioniert es?
- [ ] Können alle pushen und pullen?
- [ ] Haben alle ein Repository?

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

- Mock-Daten sind immer der Fallback
- Keine Panik – die App funktioniert auch ohne
- Allen Teams erklären: Mock first, API nice-to-have

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
