# Theorie-Happen 2 – Fallback-Strategie (vereinfacht)

> **Happen 2** von 6 an Tag 3. Dauer: ~10 min.

## Lernziel

Du kannst die **2-stufige Fallback-Strategie** in JavaScript
umsetzen: API → `data.json`.

## Was ist ein Fallback nochmal?

Wenn der gewünschte Weg nicht klappt, nimm einen Ersatz.

V2 hat **zwei Stufen**:

1. Versuche, **Live-Daten** vom Server zu holen.
2. Wenn das nicht klappt: hol die Daten aus der **lokalen Datei**
   `data.json`.

**Kein `localStorage`**, kein Caching, kein Auto-Retry.

## Die vollständige Funktion

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

## Schritt für Schritt

| Zeile | Was passiert |
|---|---|
| 1 | Wir deklarieren die Funktion. `async`, weil wir auf Daten **warten**. |
| 2 | `try` – wir versuchen den Hauptweg. |
| 3 | Wir bauen die **URL** zur API. |
| 4 | Wir rufen den Server mit `fetch` an. `await`: warte auf die Antwort. |
| 5 | Wenn der Server einen Fehler-Code schickt (z. B. 500), werfen wir einen Fehler. |
| 6 | Wir lesen die Antwort als **JSON**. |
| 7 | Wir geben die `items`-Liste zurück. |
| 8 | `catch` – der Plan-B. Hier landen wir bei jedem Fehler. |
| 9 | Wir schreiben eine **Warnung** in die Konsole (F12 öffnen). |
| 10 | Wir laden die **lokale Datei** `data.json`. |
| 11 | Wir lesen sie als JSON. |
| 12 | Wir geben die lokalen Daten zurück. |

## Wann greift der Fallback?

- **Server nicht erreichbar** (WLAN aus, Server abgestürzt).
- **Server liefert Fehler** (500, 404, …).
- **Antwort ist kein gültiges JSON**.

In allen Fällen springt JavaScript in den `catch`-Block.

## Warum einfach halten

V1 hatte **drei** Stufen mit `localStorage`. V2 hat **zwei**. Das
ist **bewusst**:

- Weniger Konzepte für Lernende.
- Weniger Code = weniger Bugs.
- Klare Verantwortung: entweder Daten vom Server oder aus der Datei.

## Probier es aus

Konsole (F12): tippe die Funktion komplett. Dann versuche,
`fetch` mit einer kaputten URL aufzurufen – z. B.
`await fetch('http://localhost:1/').catch(e => console.log('geht nicht:', e.message));`

## Mehr Infos

- [`fallback-strategie.md`](../projekt/fallback-strategie.md) – Vollständige
  Doku mit Test-Varianten.
