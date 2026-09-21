# Curriculum V2 – Pädagogische Neuausrichtung

Dieses Dokument beschreibt das **überarbeitete Curriculum** für die
V2-Überarbeitung des AE-Bootcamps. Es legt die Tagesstruktur, die
Lernziele pro Tag und die bewussten Änderungen gegenüber V1 fest.

> **Hinweis**: V2 verwendet bewusst **keine konkreten Datumsangaben**.
> In diesem Dokument ist ausschliesslich von "Tag 1, Tag 2, …" die Rede.

## Überblick – was ändert sich grundlegend?

V1 hatte zum Ziel, dass Lernende sich die Theorie selber erarbeiten.
V2 dreht das um: Der **Trainer** vermittelt Wissen in **kleinen Happen**
und zeigt direkt im Live-Coding, wie es in der Praxis aussieht. Die
Doku wird zur **Referenz**, nicht zum primären Lernmaterial.

Die fünf Grundpfeiler von V2:

1. **Happen statt Seiten** – 5–6 kurze Theorie-Happen pro Tag statt
   einer langen Theorie-Seite (Tag 1–3).
2. **Live vor Lesen** – Theorie wird im Trainer-Vortrag mit kurzen
   Live-Coding-Snippets (5–15 min) vermittelt, nicht zum Selber-Lesen.
3. **WOW durch Leere** – Übungen starten mit leerem Repo und bauen
   Schritt für Schritt etwas Funktionierendes auf.
4. **Leichter Einstieg** – keine `localStorage`-Fallbacks mehr,
   Vorkenntnisse werden nicht vorausgesetzt.
5. **Klare Rollen** – Lernleitfaden für Lernende, eigenes Repo
   `ae-trainer-briefing` für Trainer-Material.

## Lernziele pro Tag

### Tag 1 – Web-App verstehen und erste Oberfläche bauen

Am Ende von Tag 1 können Lernende:

- erklären, was eine Web-App ist und wie Browser, Server und URL
  zusammenspielen.
- ein HTML-Grundgerüst (`doctype`, `html`, `head`, `body`) eigenständig
  anlegen.
- semantische HTML-Elemente (`h1`, `p`, `div`, `main`, `section`)
  sinnvoll einsetzen und mit Klassen/IDs versehen.
- CSS-Selektoren, das Box-Modell und Farben/Schrift gezielt einsetzen.
- mit Flexbox (oder Grid) einfache Karten-Layouts bauen.
- mit `@media`-Queries ein einfaches Responsive-Layout für Mobile
  herstellen.

### Tag 2 – Daten laden und dynamisch darstellen

Am Ende von Tag 2 können Lernende:

- Variablen und Funktionen in JavaScript schreiben und aufrufen.
- DOM-Elemente mit `getElementById` finden und mit `textContent`
  befüllen.
- JSON-Daten lesen und die relevanten Felder herauslesen.
- mit `fetch()` und `async/await` Daten aus einer lokalen `data.json`
  laden.
- eine einfache Statuslogik (gut / kritisch / schlecht) implementieren.
- eine Verlaufsliste dynamisch mit `createElement` und `appendChild`
  aufbauen.

### Tag 3 – Live-Daten mit vereinfachtem Fallback

Am Ende von Tag 3 können Lernende:

- einen API-Endpunkt (URL, Parameter, Response-Form) lesen und
  nachvollziehen.
- die vereinfachte 2-stufige Fallback-Strategie (API → `data.json`)
  implementieren.
- ein Admin-Panel mit Sensor-Dropdown sauber an die Datenschicht
  koppeln.
- Fehler mit `try/catch` abfangen und sinnvoll reagieren.
- das endgültige Layout fertigstellen.
- optional die Live-Integration mit SuvaSense andocken (Stretch).

### Tag 4 – Polish und freies Austoben

Am Ende von Tag 4 können Lernende:

- den Pflichtumfang (Temperatur, Luftfeuchtigkeit, Status, Verlauf)
  selbstständig polieren.
- optionale Features nach eigenem Geschmack auswählen und einbauen
  (Dark Mode, Chart.js, Animationen, Auto-Refresh, …).
- die App manuell und mit den DevTools testen.
- typische Bugs systematisch auffinden und beheben.

### Tag 5 – Demo und Abschluss

Am Ende von Tag 5 können Lernende:

- eine Probe-Demo alleine durchführen und ein Backup-Video erstellen.
- ihre App in einer 5-minütigen Live-Demo vor allen vorstellen.
- gezielte Fragen zur eigenen Implementierung beantworten.
- die Woche reflektieren und ihre Learnings formulieren.

## Tagesstruktur im Detail

### Tag 1, Tag 2, Tag 3 – Standard-Struktur

| Block | Dauer | Was passiert |
|---|---|---|
| Theorie + Live-Coding | 1:30 – 2:00 h | 5–6 Happen à ~10 min, dazwischen Live-Coding-Snippets à 5–15 min |
| Pause | kurze Pause | |
| Übung (hands-on) | 2:00 h | WOW-Effekt-Übung, Repo zu Beginn leer, Schritt-für-Schritt mit Lücken |
| Projekt | ~2–3 h | Eigenständige Arbeit am kumulativen Hauptprojekt (`app/`) |
| Trainer Live-Coding | 1:00 h | Trainer zeigt exakt die Projekt-Lösung des Tages |

Ablauf am Beispiel Tag 1:

1. **Happen 1** (Theorie, ~10 min): Was ist eine Web-App?
2. **Live-Coding-Snippet 1** (~10 min): Trainer zeigt ein erstes
   `index.html`-Grundgerüst.
3. **Happen 2** (Theorie, ~10 min): HTML-Elemente.
4. **Live-Coding-Snippet 2** (~10 min): Trainer baut die erste Karte.
5. … weitere Happen bis Theorie-Block abgeschlossen ist.
6. **Pause**.
7. **Übung** (2 h): Lernende legen im `uebungen/tag-1/`-Ordner
   Schritt für Schritt eine eigene kleine Webseite an.
8. **Projekt** (~2–3 h): Lernende arbeiten am Hauptprojekt (`app/`)
   gemäss detaillierter Schritt-für-Schritt-Anleitung.
9. **Trainer Live-Coding** (1 h): Trainer zeigt die exakte Lösung der
   Projekt-Aufgabe von Tag 1.

### Tag 4 – "Austoben"

Tag 4 hat **keine Pflichtstruktur**. Es gibt keine Pflicht-Theorie,
keine Pflicht-Übung und kein Pflicht-Projekt.

- **Eigenständige Arbeit** über den ganzen Tag:
  - Polish des Pflichtumfangs (sollte seit Tag 3 fertig sein)
  - Optionale Features nach Wahl (Dark Mode, Chart.js, Animationen,
    Auto-Refresh, …)
  - Aufräumen, Testen, Bugs fixen
- **Freiwillige Auswahl-Kurzpräsentationen** in mehreren Slots à
  10–15 min (siehe Trainer-Repo). Lernende wählen, zu welchem Slot
  sie kommen.
- **Trainer Live-Coding** am Ende (1 h) für Optional Features /
  Polish – wer schon fertig ist, kann weitermachen, muss aber nicht
  zuhören.

### Tag 5 – nur Demo

| Block | Dauer | Was passiert |
|---|---|---|
| Probe-Demo | ~30 min | Alleine, Backup-Video aufnehmen |
| Live-Demo | ~5 min/Person | Vor allen, App vorstellen, Fragen beantworten |
| Reflexion & Abschluss | Rest des Tages | "Was habe ich gelernt? Was war schwierig?" |

Theorie, Übung und Projekt gibt es an Tag 5 **nicht**.

## Was wegällt (vs. V1)

| Bereich | V1 | V2 |
|---|---|---|
| Theorie-Stoff-Vermittlung | Lange Seite pro Tag zum Selber-Lesen | Kurze Happen + Trainer-Vortrag |
| Theorie Tag 4 | Gemischter Pflicht-Stoff | Keine Pflicht-Theorie (nur Stub) |
| Theorie Tag 5 | Vorhanden (Demo-Vorbereitungs-Stoff) | Keine Theorie (nur Stub) |
| Übungs-Skeletons | Vorbereitete Files im Repo | Leerer Ordner (WOW-Effekt) |
| Übungs-Pfad | `app/`-nah (Vermischung mit Projekt) | Separater `uebungen/tag-N/`-Ordner |
| Fallback-Strategie | 3-stufig (API → `localStorage` → `data.json`) | 2-stufig (API → `data.json`) |
| Datumsangaben | Konkrete Daten | Nur "Tag 1, Tag 2, …" |
| Pflichtstruktur Tag 4 | Polish + Theorie gemischt | Reine Eigenarbeit + Auswahl-Slots |
| Pflichtstruktur Tag 5 | Demo + Abschluss | Nur Demo + Abschluss |

## Was neu kommt (vs. V1)

| Bereich | Was ist neu |
|---|---|
| **Happen-Format** | 5–6 kurze Theorie-Happen pro Tag (Tag 1–3), je ~10 min |
| **Live-Coding-Snippets** | 5–15 min Coding-Sessions vom Trainer zwischen den Happen |
| **WOW-Effekt-Übungen** | Repo zu Übungsbeginn leer, Schritt-für-Schritt mit Lücken |
| **Lösungs-Aufklappbar** | Lösung direkt unter der Aufgabe in der Doku aufklappbar |
| **2-stufiger Fallback** | API → `data.json`, ohne `localStorage` |
| **Trainer-Repo** | Neues Repo `ae-trainer-briefing` für Trainer-Material |
| **Tag-4-Auswahl-Slots** | Mehrere Kurzpräsentationen à 10–15 min zu optionalen Features |
| **Demo-Tag** | Tag 5 nur Demo, ohne Theorie/Übung/Projekt |
| **Schritt-für-Schritt-Projekt** | Detaillierte Projekt-Anleitung mit echtem Sinn, nicht lose Anforderungen |

## Was gleich bleibt

- 5-Tage-Struktur (5 Tage, egal welche Wochentage).
- Datenmodell: Push-Bundle, BME680-Felder.
- API-Vertrag (SuvaSense bleibt unverändert).
- EDB-Schwellenwerte als Statusquelle.
- EDB als Referenz für Schwellenwerte.
- **KI-Verbot** – Lernende lösen die Aufgaben selbst.
- **Einzelarbeit** – keine Pair-Programming-Pflicht.
- **3 Git-Befehle** reichen (`add`, `commit`, `push`).
- **W3Schools / MDN** als offizielle Quellen.
- `ae-codebase`-Repo `app/` als Lernenden-Hauptprojekt-Workspace.
- Codebase **ohne Build-Tool, ohne Framework** – vanilla
  HTML/CSS/JS, Servieren über Live-Server.

## Wie es weitergeht

Die konkreten Phasen und Tasks sind in
[`v2-changes/05-TASKS.md`](https://github.com/HeiligerG/ae-raumklima-bootcamp/blob/bootcamp-v2/v2-changes/05-TASKS.md)
festgehalten. Die Task-Liste ist in 9 Phasen gegliedert:

1. **Phase 1** – Pädagogische Neuausrichtung (Konzept)
2. **Phase 2** – Theorie-Stoff neu strukturieren
3. **Phase 3** – Trainer-Repo `ae-trainer-briefing` aufsetzen
4. **Phase 4** – Trainer-Material aus ae-bootcamp auslagern
5. **Phase 5** – Übungen schreiben
6. **Phase 6** – Projekt-Anleitungen schreiben
7. **Phase 7** – Trainer-Live-Coding-Anweisungen schreiben
8. **Phase 8** – Integration & Polish
9. **Phase 9** – Deployment (auf explizite Freigabe)

Pro Task wartet das Modell auf das "go" des Verantwortlichen, bevor
gearbeitet wird.
