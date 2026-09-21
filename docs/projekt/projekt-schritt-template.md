# Projekt-Schritt-Template

Dieses Template definiert, **wie ein Projekt-Schritt aussieht**.
Alle Schritte in T61–T64 folgen diesem Schema. Lernende erkennen
das Schema wieder und wissen sofort, was sie pro Schritt tun.

> **Ziel**: Ein Schritt = **eine** Mikro-Aufgabe mit klarem Anfang,
> klarem Test und klarem Abschluss. Keine Romanseiten.

## Wofür das Template da ist

| Ohne Template | Mit Template |
|---|---|
| Lernende fragen "was soll ich nochmal machen?" | Schema ist wiedererkennbar |
| Schritte sind mal lang, mal kurz | Alle Schritte gleich lang (~5 Min) |
| Test am Ende fehlt oft | Jeder Schritt hat einen klaren Test |
| Code-Stil schwankt | Code immer 1:1 zum Abtippen |
| Sprachstil schwankt | Folgt `sprachstil-v2.md` |

## Pflicht-Bestandteile – in dieser Reihenfolge

Jeder Projekt-Schritt hat **genau diese Bestandteile** in dieser
Reihenfolge. Nichts weglassen. Nichts umstellen.

### 1. Schritt-Titel (1 Zeile)

Eine kurze aktive Zeile. Sie sagt, **was passiert**.

**Gut**: "Temperatur im DOM anzeigen"
**Schlecht**: "Jetzt machen wir die Temperatur-Anzeige" (zu lang)

### 2. Lernziel (1 Satz)

Ein einziger Satz. Er sagt, **was du am Ende kannst**.

**Gut**: "Du kannst mit JavaScript den Text in einem DOM-Element setzen."
**Schlecht**: "In diesem Schritt lernst du, wie du mit Hilfe von
JavaScript und der textContent-Eigenschaft auf einfache Weise ein
DOM-Element manipulieren und dessen Inhalt dynamisch verändern
kannst." (zu lang, zu verschachtelt)

### 3. Was passiert (1–2 Sätze)

Eine grobe Erklärung **was im Hintergrund läuft**. Kein Code.

**Gut**: "JavaScript sucht das Element im Browser und schreibt
den Text rein."
**Schlecht**: "Mittels des document-Objekts wird eine Referenz auf
das DOM-Element erlangt und anschliessend dessen textContent-Property
neu gesetzt." (Passiv, Fach-Chinesisch)

### 4. Tippe das (Code-Block 1:1 zum Abtippen)

- **Immer** mit Datei-Name als Überschrift (z. B. `script.js`).
- **Immer** komplett zum Abtippen. Keine Auslassungs-Pünktchen.
- **Immer** in Backticks (```javascript … ```).
- Code folgt den **Best Practices** (G1: `textContent` statt
  `innerHTML`, G2: kleine Funktionen).
- Wenn ein Code-Stück neu ist: **Mini-Erklärung** im Klartext
  direkt über dem Block.

**Gut** (über dem Block):

> Wir schreiben eine Funktion. Sie nimmt einen Wert entgegen
> und setzt ihn als Text in die Karte.

**Dann der Code-Block**.

### 5. Probier es aus (klarer Test-Punkt)

**Genau eine** Sache, die Lernende tun, um zu prüfen, ob es
klappt. Konkret und kurz.

**Gut**: "Öffne die Konsole (F12). Tippe
`updateTemp(23.4)`. Die Karte zeigt `23.4 °C`."
**Schlecht**: "Teste, ob alles funktioniert." (zu vage)

### 6. Was schiefgehen kann (1–3 häufige Fehler)

Eine kurze Liste der **typischen** Fehler für **diesen** Schritt.
Nicht allgemeine JavaScript-Fehler.

Format: kurzer Titel + 1 Satz zur Lösung.

**Gut**:

- **Funktion ist da, Karte bleibt leer.** Prüfe die ID in
  `getElementById`. Sie muss **genau gleich** sein wie die
  `id="…"` im HTML.
- **Konsole zeigt `undefined`.** Du hast die Funktion noch
  nicht aufgerufen. Tippe `updateTemp(23.4)` in die Konsole.

## Optionale Bestandteile

Diese Bestandteile nur einsetzen, wenn es **wirklich hilft**.

### Screenshot-Hinweis (nur Tag 1)

Wenn der Schritt ein visuelles Ergebnis hat: kurzer Hinweis, dass
ein Trainer-Screenshot existiert (z. B. "📷 siehe Anhang A").
Nicht überstrapazieren – einmal pro Schritt-Gruppe reicht.

### Vergleich mit dem Vortag (ab Tag 2)

Wenn der Schritt auf einem früheren Schritt aufbaut: kurzer
Verweis am Anfang ("Du hast gestern `updateTemp` gebaut. Jetzt
bauen wir `updateHumidity` daneben.").

## Worauf zu achten ist

- **Sprache**: folgt `sprachstil-v2.md`. Kurze Sätze, aktive
  Verben, Fachbegriffe sofort erklärt.
- **Trainer-Sprache (F4)**: Trainer-Skripte (T71–T74) verwenden
  das gleiche Schema, aber mit zusätzlichen Feldern für die
  Trainer-Anweisung (siehe T70).
- **Keine Lücken**: anders als bei Übungen gibt es hier **keine
  Lücken** zum Selber-Ausfüllen. Lernende tippen den Code
  vollständig ab.
- **`textContent`**: niemals `innerHTML`. Niemals.

## Negativ-Beispiel

> **Schritt: Setup der Web-App**
>
> Zunächst ist es notwendig, dass wir uns mit der grundlegenden
> Konzeptionierung unserer Web-App auseinandersetzen, wobei wir
> insbesondere berücksichtigen müssen, dass sowohl HTML als auch
> CSS und JavaScript in separaten Dateien organisiert werden
> sollten, um eine klare Trennung der Verantwortlichkeiten zu
> gewährleisten. Dies ermöglicht es uns, die jeweiligen
> Technologien unabhängig voneinander zu optimieren.
>
> **Tipp**: Denken Sie daran, dass moderne Web-Apps in der Regel
> nach diesem Muster aufgebaut sind.
>
> *(Kein Code-Block. Kein Test-Punkt. Keine Fehlerliste.)*

**Warum schlecht**:

- 4 Sätze ohne Punkt. Sagt viel, ändert nichts.
- Kein konkreter Schritt – alles auf einmal.
- Kein Code, kein Test.
- Passiv, Konjunktiv, Floskeln.
- Lernende wissen nach dem Lesen: nichts Genaues.

## Positiv-Beispiel

> **Schritt: Temperatur im DOM anzeigen**
>
> **Lernziel**: Du kannst mit JavaScript den Text in einem
> DOM-Element setzen.
>
> **Was passiert**: JavaScript sucht das Element im Browser
> und schreibt den Text rein.
>
> **Tippe das** in `script.js`:
> ```javascript
> function updateTemp(value) {
>   document.getElementById('temp-card').textContent = value + ' °C';
> }
> ```
>
> **Probier es aus**: Öffne die DevTools-Konsole (F12). Tippe
> `updateTemp(23.4)`. Die Karte zeigt `23.4 °C`.
>
> **Was schiefgehen kann**:
>
> - **Karte bleibt leer.** Die ID in `getElementById` muss **genau
>   gleich** sein wie `id="…"` im HTML. Gross-/Kleinschreibung
>   zählt.
> - **Konsole zeigt `ReferenceError: updateTemp is not defined`.**
>   Du hast die Funktion noch nicht aufgerufen. Tippe sie in
>   die Konsole oder füge den Aufruf ins HTML hinzu.

## Selbst-Check vor dem Einchecken

- [ ] Schritt-Titel: 1 Zeile, aktiv.
- [ ] Lernziel: 1 Satz mit "Du kannst …"
- [ ] Was passiert: 1–2 Sätze, grobe Erklärung.
- [ ] Tippe das: mit Datei-Name und 1:1-Code-Block.
- [ ] Probier es aus: genau eine konkrete Test-Anweisung.
- [ ] Was schiefgehen kann: 1–3 typische Fehler + Lösung.
- [ ] Keine Passiv-Konstrukte, keine Konjunktiv-Aufgaben.
- [ ] Keine Alternativ-Vorschläge ("man könnte auch …").
- [ ] `textContent` statt `innerHTML`.

## Querverweise

- **Übungen** folgen einem ähnlichen Schema (siehe T14).
  Übungen haben aber zusätzlich **Lücken** zum Selber-Ausfüllen.
- **Trainer-Live-Coding** (T70–T75) erweitert dieses Schema um
  Trainer-spezifische Felder (Reihenfolge, Anweisung, Andeutung).
- **Sprache**: `docs/sprachstil-v2.md` ist verbindlich.
- **Curriculum**: `docs/curriculum-v2.md` zeigt, an welchem Tag
  welcher Schritttyp vorkommt.
