# Sprachstil V2 – Richtlinie für einfache Sprache

Diese Richtlinie gilt für **alle** Texte in diesem Lernleitfaden, in
den Übungen, in den Projekt-Anleitungen und in den Trainer-Skripten.

> **Zielgruppe**: Trainer, die die deutsche Sprache "fast nicht können".
> Jeder Text muss so sein, dass er **laut vorgelesen** werden kann und
> klar ist – auch ohne Vorkenntnisse in Web-Entwicklung.

> **Wichtig**: Diese Richtlinie ersetzt nicht das gesunde
> Trainer-Urteil. Wenn eine Formulierung trotz Checkliste unklar wirkt:
> lieber noch einmal vereinfachen.

## 1. Sprachniveau – drei harte Regeln

1. **Kurze Sätze.** Ein Satz, ein Gedanke. Maximal ~15 Wörter.
   Lieber zwei kurze Sätze statt einem langen.
2. **Aktive Verben.** "Der Browser **lädt** die Datei" statt
   "Die Datei **wird vom Browser geladen**".
3. **Fachbegriff sofort übersetzen.** Jeder Fachbegriff bekommt
   direkt bei erster Nennung eine kurze Erklärung in einfacher Sprache.

## 2. Konkrete Do's

### 2.1 Sätze

| Statt | Lieber so |
|---|---|
| "Im folgenden Schritt werden wir nun eine Funktion implementieren, welche die Temperatur aus dem DOM liest." | "Wir schreiben jetzt eine Funktion. Sie liest die Temperatur aus dem DOM." |
| "Es ist darauf zu achten, dass die Variable den korrekten Datentyp enthält." | "Achte auf den Datentyp der Variable." |

### 2.2 Fachbegriffe

Immer **erklären, dann benutzen**. Beispiel:

> "Der Browser zeigt die Seite an. Das macht er über das **DOM**
> (Document Object Model). Das DOM ist wie ein Baum aus allen
> Elementen der Seite. Wir können Elemente aus dem DOM holen und
> verändern."

Beim zweiten Vorkommen nur den Fachbegriff:

> "Wir holen das Element aus dem DOM."

### 2.3 Code im Text

- Code immer mit Backticks und Original-Schreibweise, nie umschrieben.
- UI-Beschriftungen 1:1 wie im Code, inkl. Gross-/Kleinschreibung.
- Beispiel:
  > "Tippe `document.getElementById('temp-card')` in die Konsole."
- Aufzählungen für Tippschritte, nicht Fliesstext.

### 2.4 Aufgaben an Lernende

Aufgaben kommen in **Imperativ** und in der **Reihenfolge**, in der
sie auch getan werden:

> **Schritt 1: Datei anlegen**
>
> 1. Öffne VS Code.
> 2. Klicke rechts auf den Ordner `uebungen/tag-1/`.
> 3. Wähle "New File".
> 4. Tippe den Namen `index.html`.
> 5. Drücke Enter.

### 2.5 Trainer-Sprache (siehe F4)

Trainer-Skripte verwenden **gleiche** Stilregeln, zusätzlich:

- Erklärungen sind **ausformulierte Sätze zum Vorlesen**, nicht
  Stichwörter.
- Was der Trainer **tippt**, steht **vor** dem, was er **sagt**.
- Reihenfolge exakt: `const` zuerst, dann Funktion, dann Aufrufe.

## 3. Konkrete Don'ts

- **Keine verschachtelten Nebensätze.** Maximal eine Nebensatz-Ebene.
- **Keine englischen Floskeln** ausserhalb von Code (`Let's`,
  `Now we will`, `Basically`).
- **Keine Code-Kommentare**, die umgangssprachlich sind
  (z. B. `// jetzt machen wir das hier`). Kommentare nur, wenn sie
  echte Zusatz-Infos liefern.
- **Keine Hinweise auf Alternativen** ("man könnte auch …").
  V2 nennt **den einen Weg**, der gilt.
- **Kein Konjunktiv** in Aufgaben ("würdest du gerne …"). Direkt
  sagen, was zu tun ist.
- **Keine Datumsangaben** in den Lerntexten. Nur "Tag 1", "Tag 2", …

## 4. Vergleich V1-Stil vs. V2-Stil

| V1-typisch (zu schwer) | V2-typisch (einfach) |
|---|---|
| "Im nachfolgenden Codeblock wird exemplarisch dargestellt, wie eine asynchrone Datenabfrage unter Verwendung der Fetch-API realisiert werden kann." | "Wir holen Daten mit `fetch`. Das geht so:" (dann Code-Block) |
| "Die Implementierung sollte derart erfolgen, dass eine klare Trennung zwischen Datenzugriff und Darstellung gewährleistet ist." | "Trenne Daten holen und Daten anzeigen. Zwei Funktionen." |
| "Es wird empfohlen, `textContent` anstelle von `innerHTML` zu verwenden." | "Benutze `textContent`. Niemals `innerHTML`." |
| "Bei erfolgreicher Response wird das resultierende Promise mit den entsprechenden Messwerten aufgelöst." | "Wenn der Aufruf klappt, haben wir die Daten." |

## 5. Checkliste vor dem Einchecken

Jede Theorie-Seite, Übung, Projekt-Schritt-Anleitung und jedes
Trainer-Skript wird vor dem Commit durch diese Liste gejagt:

- [ ] Kein Satz länger als ~15 Wörter (Ausnahme: Code-Zitate).
- [ ] Alle Fachbegriffe bei erster Nennung erklärt.
- [ ] Aktive Verben statt Passiv.
- [ ] Code immer in Backticks und 1:1 wie im Editor.
- [ ] Aufgaben in Imperativ und in Tipp-Reihenfolge.
- [ ] Trainer-Erklärungen sind ganze Sätze zum Vorlesen.
- [ ] Keine Datumsangaben im Fliesstext.
- [ ] Kein Konjunktiv in Aufgaben.
- [ ] Keine Hinweise auf Alternativen ("man könnte auch …").
- [ ] `textContent` statt `innerHTML` (G1).

## 6. Querverweise

- **Curriculum-Überblick**: siehe `docs/curriculum-v2.md`.
- **Theorie-Happen**: werden in T20, T21, T22 nach dieser Richtlinie
  geschrieben.
- **Übungen und Projekt-Schritte**: folgen ebenfalls dieser
  Richtlinie (T50–T52, T61–T64).
- **Trainer-Skripte**: gleiche Stilregeln, zusätzlich genaue
  Tipp-Reihenfolge (siehe Phase 3 und Phase 7 in
  `v2-changes/05-TASKS.md`).
