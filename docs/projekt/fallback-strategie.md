# Fallback-Strategie (vereinfacht)

Diese Seite erklärt die **Fallback-Strategie** für V2.
Sie ist **vereinfacht** gegenüber V1. **Kein `localStorage`** mehr.

## Was ist ein Fallback?

Ein **Fallback** ist ein **Ersatz**. Wenn der gewünschte Weg nicht
klappt, nimmt die App einen anderen Weg.

Beispiel: Wir wollen Live-Daten von einem Server holen. Der Server
ist nicht erreichbar. Dann holen wir die Daten aus einer lokalen
Datei (`data.json`).

## Was war in V1 (und warum nicht mehr)

V1 hatte **drei Stufen**:

1. Live-Daten vom Server holen
2. Wenn das nicht klappt: alte Daten aus `localStorage` holen
3. Wenn das auch nicht klappt: Daten aus `data.json` holen

V2 hat **zwei Probleme** mit V1:

- **`localStorage` ist ein eigenes Konzept.** Lernende ohne
  Vorkenntnisse müssen zuerst verstehen, was der Browser speichert
  und wann das etwas löscht. Das ist **zu viel** für Tag 3.
- **Drei Stufen bedeuten drei Code-Pfade.** Mehr Code-Pfade =
  mehr Bugs. Mehr Bugs = mehr Frust bei Lernenden.

V2 hat deshalb **Q4** bestätigt: **2-stufig ohne `localStorage`**.

## Pflichtumfang V2 – die zwei Stufen

### Stufe 1: Live-Daten vom Server holen

Die App fragt den Server: "Gib mir die letzten 10 Messwerte von
Sensor XY". Der Server antwortet mit JSON.

### Stufe 2: Lokale Daten aus `data.json` holen

Wenn Stufe 1 **nicht klappt**, holt die App die Daten aus der
Datei `data.json`. Diese Datei liegt im Projekt-Ordner und
enthält dieselbe Struktur wie die Server-Antwort.

**Was bedeutet "klappt nicht"?**

- Der Server antwortet gar nicht (Netzwerk-Fehler).
- Der Server antwortet mit einem Fehler-Code (z. B. 404, 500).
- Die Antwort ist kein gültiges JSON.

## Der vollständige Code

```javascript
async function getBundles(serial) {
  try {
    const url = `${API_BASE}/sensors/${serial}/readings?page=1&page_size=10`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API ${response.status}`);
    const data = await response.json();
    return data.items;
  } catch (apiError) {
    console.warn('API nicht erreichbar, fallback auf data.json:', apiError);
    const response = await fetch('data.json');
    const items = await response.json();
    return items;
  }
}
```

### Zeile für Zeile erklärt

**Zeile 1**: `async function getBundles(serial)` – Wir definieren
eine Funktion. Sie ist `async`, weil wir auf den Server **warten**.
Der Parameter `serial` ist die Sensor-Nummer.

**Zeile 2**: `try {` – Wir probieren Stufe 1. Wenn etwas schief
geht, springt JavaScript in den `catch`-Block.

**Zeile 3**: `const url = …` – Wir bauen die URL zum Server.
`API_BASE` ist eine Konstante, die wir vorher definiert haben
(z. B. `http://localhost:3000`).

**Zeile 4**: `const response = await fetch(url);` – Wir rufen den
Server an. `await` heisst: **Warte**, bis der Server antwortet.

**Zeile 5**: `if (!response.ok) throw new Error(…)` – Wenn der
Server einen Fehler-Code schickt (nicht 200–299), werfen wir einen
Fehler. Das schickt uns direkt in den `catch`-Block.

**Zeile 6**: `const data = await response.json();` – Wir lesen die
Antwort als JSON. Das ist ein JavaScript-Objekt.

**Zeile 7**: `return data.items;` – Wir geben das Array mit den
Messwerten zurück. Der Aufrufer bekommt sie.

**Zeile 8**: `} catch (apiError) {` – Der Plan-B-Block. Hier landen
wir, wenn oben irgendetwas schiefgegangen ist.

**Zeile 9**: `console.warn(…)` – Wir schreiben eine Warnung in die
Browser-Konsole (F12 öffnen). So siehst du, dass der Fallback
aktiv war.

**Zeile 10**: `const response = await fetch('data.json');` – Wir
laden die lokale Fallback-Datei.

**Zeile 11**: `const items = await response.json();` – Wir lesen
sie als JSON.

**Zeile 12**: `return items;` – Wir geben die lokalen Daten zurück.

**Zeile 13**: `}` – Ende der Funktion.

### Wann greift der Fallback?

| Situation | Was passiert |
|---|---|
| Server erreichbar, antwortet mit 200 | Stufe 1 liefert Daten. Fallback läuft nicht. |
| Server erreichbar, antwortet mit 500 | Zeile 5 wirft Fehler. Fallback läuft. |
| Server nicht erreichbar (WLAN aus) | `fetch` wirft Fehler. Fallback läuft. |
| Server liefert kaputtes JSON | `response.json()` wirft Fehler. Fallback läuft. |

### Wann greift der Fallback **nicht**?

- Wenn der Server **mit einem Fehler antwortet, aber der Aufruf
  technisch klappt** – dann läuft der Fallback.
- Wenn die App **gar nicht gestartet** ist – dann läuft gar nichts.
- Wenn die Datei `data.json` **fehlt** – dann wirft der Fallback
  selbst einen Fehler. Das ist **bewusst** so. In Tag 4 fügen wir
  optional eine bessere Fehlermeldung dazu (Stretch).

## Was ist KEIN Pflichtumfang

Diese Dinge sind **nicht** im Pflichtumfang. Sie können in Tag 4
als **freiwillige Features** dazukommen.

- **`localStorage`-Snapshot.** Nicht nötig. Wenn du es doch machst:
  nur als optionales Feature, nie still im Hintergrund.
- **Auto-Retry.** Nicht nötig. Der Fallback ist die "Retry"-Strategie.
- **Caching.** Nicht nötig.
- **Mehrere Fallback-Dateien.** Nicht nötig. Eine `data.json` reicht.

## Wie teste ich den Fallback?

Test 1: **Server "killen"** während die App läuft.

1. Starte die App normal. Daten kommen vom Server.
2. Stoppe den Server (z. B. mit `Ctrl+C` im Terminal, wo der
   Server läuft).
3. Drücke den Refresh-Knopf der App (oder lade die Seite neu).
4. **Erwartet**: Die App zeigt weiter Daten aus `data.json`.
   In der Konsole (F12) steht:
   `API nicht erreichbar, fallback auf data.json: TypeError: failed to fetch`

Test 2: **Offline-Modus** im Browser.

1. Starte die App normal. Daten kommen vom Server.
2. Öffne die DevTools (F12). Gehe zum Tab "Network".
3. Aktiviere "Offline" (oben in der Network-Toolbar).
4. Lade die Seite neu.
5. **Erwartet**: Daten aus `data.json`. Warnung in der Konsole.

## Warum ist das gut so?

- **Weniger Konzepte.** Lernende müssen kein `localStorage`
  verstehen, um die App fertig zu bauen.
- **Weniger Code.** Die Funktion hat zwei Pfade statt drei.
- **Weniger Bugs.** Weniger Pfade = weniger Fehlerquellen.
- **Klarere Verantwortung.** Entweder kommen die Daten frisch vom
  Server, oder sie kommen aus der Datei. Nie still im Hintergrund.

## Wo wird das gebraucht?

| Task | Was passiert |
|---|---|
| **T52** (Übung Tag 3) | Lernende bauen den Fallback in einer Übung selbst ein. |
| **T63** (Projekt Tag 3) | Lernende bauen den Fallback in die echte App ein. |
| **T81** (Code-Quality-Check) | Querprüfung: nirgendwo darf `localStorage` auftauchen. |

## Verwandte Seiten

- [`api-vertrag.md`](api-vertrag.md) – Wie der Server antwortet.
- [`mockdaten.md`](mockdaten.md) – Wie `data.json` aussieht.
- [`architektur.md`](architektur.md) – Wo die Funktion im Gesamtbild lebt.
