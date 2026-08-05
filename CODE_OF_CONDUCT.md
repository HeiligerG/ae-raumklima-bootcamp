# Verhaltenskodex

Willkommen beim **AE Raumklima Bootcamp**! Dieses Repository
enthält den Code, den **du alleine** während des fünftägigen
Bootcamps schreibst – eine Web-App, die Sensordaten aus dem
**SuvaSense-Backend** anzeigt (Temperatur, Luftfeuchtigkeit,
Status, Verlauf). Wenn du einen Beitrag leisten möchtest – sei
es durch Bugfixes, neue Features, Verbesserungen am UI – bitten
wir dich, die folgenden Regeln zu beachten.

!!! danger "KI ist verboten"
    Während des Bootcamps darfst du **keine KI-Tools** verwenden.
    Siehe [Quellen und KI-Verbot](https://heiligerg.github.io/ae-raumklima-bootcamp/projekt/quellen/) für Details.

---

## 1. Respektvoller Umgang

- **Sei freundlich und geduldig.** Viele Mitwirkende sind am
  Anfang ihrer Lernreise.
- **Akzeptiere unterschiedliche Erfahrungsstufen.** Es gibt keine
  "dummen" Fragen.

---

## 2. Git-Workflow (minimal)

Im Bootcamp nutzen wir den **minimalsten** Git-Workflow:

### 2.1 Du arbeitest direkt auf `main`

Keine Feature-Branches, keine Pull Requests, keine Reviews.
Dein Fork ist **dein** Workspace.

### 2.2 Die 3 Befehle

```bash
git add .
git commit -m "Kurze Beschreibung der Aenderung"
git push
```

Mehr nicht. Mehr brauchst du nicht.

### 2.3 Commit-Messages

Eine kurze, beschreibende Zeile. Beispiele:

```
feat(dashboard): Temperatur und Feuchte anzeigen
fix(status): Farbe der Status-Pille korrigieren
chore: data.json als Initial-Seed hinzufuegen
```

Schreibe, **was** du geändert hast (nicht wie).

### 2.4 Haeufige Situationen

- **'git push' fragt nach Remote:** Beim ersten Push `git push -u
  origin main` benutzen.
- **'Permission denied':** Du hast den Original-Repo geklont statt
  deinen Fork. Siehe `setup.md` im Lernleitfaden.
- **'Merge conflict':** Sehr unwahrscheinlich (Einzelarbeit). Falls
  doch: Trainer fragen.

---

## 3. Qualitaetsanspruch

### 3.1 Testen vor dem Commit

Da wir reines HTML, CSS und JavaScript ohne Build-Tool
entwickeln, gibt es **kein** `npm run build`. Stattdessen
testest du so:

- **App-Code (`app/`)**: Live Server in VS Code starten, Seite
  im Browser öffnen, F12-Devtools auf Fehler pruefen, manuell
  durchklicken.
- **Datenquelle**: Das SuvaSense-Backend wird vom Trainerteam
  betrieben. Zum lokalen Testen ohne Backend kannst du die
  `data.json` als Initial-Fallback nutzen.

### 3.2 Sauberkeit

- Sei prazise. Lieber eine kleine, saubere Aenderung als ein
  grosser, halbfertiger Patch.
- Halte dich an bestehende Patterns: Klassennamen in CSS
  (`.gut`, `.kritisch`, `.schlecht`), JSON-Feldnamen aus dem
  API-Vertrag (z. B. `readings.bme680.temp_c`), deutschsprachige
  Commit-Messages.
- **Keine Geheimnisse** committen (Passwoerter, API-Keys, interne
  URLs).

### 3.3 Backend nicht veraendern

Das **SuvaSense-Backend** (im Schwester-Repo `SuvaSense`) wird
vom Trainerteam verwaltet. Du arbeitest **ausschliesslich** im
`app/`-Ordner dieses Repos. Es gibt in diesem Repo **kein**
lokales Backend mehr – die App spricht direkt mit SuvaSense.

---

## 4. Wo finde ich Hilfe?

In dieser Reihenfolge:

1. **[Quellen und KI-Verbot](https://heiligerg.github.io/ae-raumklima-bootcamp/projekt/quellen/)** – W3Schools, MDN
2. **DevTools (F12)** – Konsole zeigt oft die Antwort
3. **Trainer fragen** – 1:1, kurz, prazise Frage

**Was NICHT:** KI-Tools (verboten), Mitlernende um Code
abschreiben (Einzelarbeit).

---

## 5. Inhaltliche Beitraege (Aufgaben & Curriculum)

- Neue Aufgaben sollten didaktisch sinnvoll sein und
  aufeinander aufbauen.
- Inhaltliche Anpassungen gehoeren ins Schwester-Repo
  `ae-raumklima-bootcamp` (MkDocs-Leitfaden), nicht hier.

---

Vielen Dank, dass du das AE Raumklima Bootcamp besser machst!