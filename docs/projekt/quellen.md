# Quellen und KI-Verbot

## :material-no-ai: KI ist komplett verboten

Während dieses Bootcamps darfst du **keine KI-Tools** verwenden – nicht
für Fragen, nicht für Code, nicht für Erklärungen, nicht für
"kleine Hilfen". Das gilt für **alle** KI-Tools: ChatGPT, Copilot,
Claude, Gemini, Cursor, Windsurf, JetBrains AI, Github Copilot und
alle anderen.

### Warum?

Die Übungen sind so designt, dass das **Selber-Machen** der Wert
ist. KI würde dir das Denken abnehmen – und damit den Lerngewinn.

| Was du ohne KI lernst | Was du mit KI verpasst |
|---|---|
| HTML-Strukturen verstehen | KI generiert Tags, du lernst nicht welche wann |
| CSS-Selektoren erkennen | KI schreibt Regeln, du lernst nicht zu zielen |
| JavaScript-Logik durchdenken | KI liefert Code, du verstehest nicht warum er funktioniert |
| API-Fehler interpretieren | KI kaschiert Fehler, du lernst nicht Debugging |
| Eigenes Problemlösungs-Muster | KI löst das Problem – das ist nicht dein Pattern |

Kurz: **Du lernst nicht HTML, indem du KI HTML schreiben lässt.**

### Was du stattdessen nutzt

Diese Quellen unten sind deine Nachschlagewerke. Sie sind
**schneller als KI** (keine Wartezeit), **kostenlos** und
**akkurat** (im Gegensatz zu KI, die halluziniert).

## :material-link-variant: W3Schools – deine Hauptquelle

**W3Schools** (https://www.w3schools.com/) ist deine
Standard-Anlaufstelle. Sie hat Tutorials, Live-Editor
("Try it Yourself") und Referenz auf einer Seite.

### HTML

- [HTML Tutorial](https://www.w3schools.com/html/) – alle Tags,
  Attribute, Struktur
- [HTML Elements](https://www.w3schools.com/html/html_elements.asp)
  – alphabetische Liste aller erlaubten Tags
- [HTML Forms](https://www.w3schools.com/html/html_forms.asp) –
  `<form>`, `<input>`, `<select>` für deinen Sensor-Dropdown
- [HTML Headings](https://www.w3schools.com/html/html_headings.asp)
  – h1–h6

### CSS

- [CSS Tutorial](https://www.w3schools.com/css/) – Selektoren,
  Box-Modell, Layout
- [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp) –
  `padding`, `border`, `margin`
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) –
  Layouts in einer Zeile oder Spalte
- [CSS Grid](https://www.w3schools.com/css/css_grid.asp) –
  zweidimensionale Layouts (deine Sensorkarten!)
- [CSS Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) –
  Responsive Design für Mobile
- [CSS Colors](https://www.w3schools.com/css/css_colors.asp) –
  Hex, RGB, Named Colors

### JavaScript

- [JS Tutorial](https://www.w3schools.com/js/) – Syntax, Variablen,
  Funktionen
- [JS Arrow Functions](https://www.w3schools.com/js/js_arrow_function.asp)
  – die kurze Schreibweise
- [JS Events](https://www.w3schools.com/js/js_events.asp) –
  `click`, `change`, `submit`
- [JS Try/Catch](https://www.w3schools.com/js/js_errors.asp) –
  Fehlerbehandlung für `fetch()`
- [JS Async/Await](https://www.w3schools.com/js/js_async.asp) –
  `fetch()` richtig nutzen

### DOM-Manipulation

- [HTML DOM](https://www.w3schools.com/js/js_htmldom.asp) –
  JavaScript auf HTML-Elemente
- [getElementById](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
  – das wichtigste Werkzeug
- [textContent](https://www.w3schools.com/jsref/prop_node_textcontent.asp)
  – Text in Elementen ändern
- [createElement](https://www.w3schools.com/jsref/met_document_createelement.asp)
  – neue Elemente dynamisch erstellen
- [DOM Events](https://www.w3schools.com/js/js_htmldom_events.asp) –
  Event-Listener anhängen

### Fetch und JSON

- [Fetch API](https://www.w3schools.com/js/js_api_fetch.asp) –
  HTTP-Requests vom Browser
- [Fetch Response](https://www.w3schools.com/jsref/api_fetch_response.asp)
  – die Antwort auslesen
- [JSON Intro](https://www.w3schools.com/js/js_json_intro.asp) –
  was JSON ist
- [JSON.parse](https://www.w3schools.com/js/js_json_parse.asp) –
  JSON → JavaScript-Objekt
- [JSON.stringify](https://www.w3schools.com/js/js_json_stringify.asp) –
  JavaScript-Objekt → JSON-String

### LocalStorage (für deine Snapshot-Fallback-Strategie)

- [localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
  – Browser-seitige Persistenz
- [localStorage.setItem](https://www.w3schools.com/jsref/met_storage_setitem.asp)
  – speichern
- [localStorage.getItem](https://www.w3schools.com/jsref/met_storage_getitem.asp)
  – laden

## :material-book-multiple: MDN – für Tiefergehende

**MDN Web Docs** (Mozilla Developer Network) ist präziser als
W3Schools und detaillierter. Nutze es, wenn W3Schools zu oberflächlich
ist oder du die **offizielle Spezifikation** brauchst.

- [MDN – JavaScript](https://developer.mozilla.org/de/docs/Web/JavaScript)
  – alle APIs, alles JS
- [MDN – fetch()](https://developer.mozilla.org/de/docs/Web/API/Window/fetch)
  – die Fetch-API im Detail
- [MDN – localStorage](https://developer.mozilla.org/de/docs/Web/API/Window/localStorage)
  – Browser-Storage-Spezifikation
- [MDN – CSS](https://developer.mozilla.org/de/docs/Web/CSS) – CSS-
  Referenz
- [MDN – HTML](https://developer.mozilla.org/de/docs/Web/HTML) –
  HTML-Referenz

## :material-help-circle: Frag-Hierarchie (in dieser Reihenfolge!)

1. **W3Schools durchsuchen** (Tutorial + Referenz auf einer Seite)
2. **MDN durchsuchen** (für Details, Edge Cases)
3. **Im Serial Monitor / DevTools** nachschauen (was sagt die Konsole?)
4. **Im Trainer-Briefing nachschlagen** (oft steht die Antwort drin)
5. **Trainer fragen** (1:1, kurz, präzise Frage)

**Was NICHT:**
- KI für Fragen oder Code (verboten, siehe oben)
- Mitlernende "abschreiben" – jeder arbeitet allein
- Trial-and-Error ohne Lesen der Doku (5 Min lesen spart oft 30 Min
  Probieren)

## :material-help: Häufige Fragen

??? failure "Aber W3Schools ist auf Englisch, ich nicht so gut"
    W3Schools ist sehr einfach geschrieben. Die Code-Beispiele
    funktionieren unabhängig von deinem Englisch-Niveau. Wenn du
    ein Wort nicht verstehst: copy-paste es in
    [DeepL](https://www.deepl.com/) (Übersetzer, **nicht** eine KI –
    nur ein Wörterbuch).

??? failure "Aber MDN ist englisch und riesig"
    Ja, MDN ist umfangreich. Für den Anfang reicht W3Schools.
    MDN nutzt du erst, wenn W3Schools zu oberflächlich ist.

??? failure "Was, wenn ich die Antwort nirgends finde?"
    Frag deinen Trainer. Nach 10 Min Suche in W3Schools + MDN +
    DevTools ist das die richtige Eskalation.

## Weiter

Zurück zur [Start-Seite](../start/index.md) oder direkt zu
[Tag 1](../tag-1/index.md).