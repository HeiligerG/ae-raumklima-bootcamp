# Theorie-Happen 4 – fetch und async/await

> **Happen 4** von 6 an Tag 2. Dauer: ~10 min.

## Lernziel

Du kannst mit **`fetch()`** und **`async/await`** Daten von einem
Server (oder aus einer Datei) laden.

## Was ist `fetch`?

**`fetch`** ist eine eingebaute Funktion im Browser. Sie ruft eine
**URL** auf und liefert die **Antwort**.

```javascript
const response = await fetch('http://localhost:3000/sensors');
```

Die Antwort ist erst ein **Response-Objekt** – noch keine Daten.
Daraus machen wir JSON:

```javascript
const data = await response.json();
```

## Warum `await`?

`fetch` ist **asynchron**: der Server braucht Zeit. Ohne
`await` würde JavaScript sofort weitermachen, **bevor** die
Antwort da ist.

Mit `await` sagst du: "Warte hier, bis die Antwort da ist".

`await` geht **nur in `async`-Funktionen**. So sieht es komplett
aus:

```javascript
async function getData() {
  const response = await fetch('http://localhost:3000/sensors');
  const data = await response.json();
  return data;
}
```

## Fehler prüfen

Der Server kann einen **Fehler-Code** schicken (z. B. 404 oder
500). `fetch` wirft dann **keinen** Fehler, sondern liefert eine
Antwort mit `response.ok === false`. Deshalb prüfen wir:

```javascript
const response = await fetch('http://localhost:3000/sensors');
if (!response.ok) {
  throw new Error('Server Fehler: ' + response.status);
}
```

## Komplettes Beispiel

```javascript
async function getBundles(serial) {
  try {
    const url = 'http://localhost:3000/sensors/' + serial + '/readings';
    const response = await fetch(url);
    if (!response.ok) throw new Error('API ' + response.status);
    const data = await response.json();
    return data.items;
  } catch (err) {
    console.warn('Konnte Daten nicht laden:', err);
    return [];
  }
}
```

## Probier es aus

Im Browser (F12 → Console) – aber nur falls du einen Server lokal
laufen hast. Sonst wartet das auf Tag 3.
