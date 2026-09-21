# Theorie-Happen 1 – JavaScript Grundlagen

> **Happen 1** von 6 an Tag 2. Dauer: ~10 min.

## Lernziel

Du kannst eine **Variable** deklarieren und eine **Funktion**
schreiben und aufrufen.

## Was ist JavaScript?

**JavaScript** ist die Sprache des Browsers. Mit JavaScript kannst
du das DOM **verändern** und **reagieren** (z. B. auf einen Klick).

Wichtig: JavaScript und Java sind **zwei verschiedene Sprachen**.
Der Name ist nur historisch so.

## Variablen

Eine **Variable** ist ein **Namen** für einen Wert.

```javascript
const apiBase = 'http://localhost:3000';
let lastValue = 23.4;
```

- **`const`** = bleibt gleich (Konstante).
- **`let`** = kann sich ändern.

## Funktionen

Eine **Funktion** ist ein **Code-Block**, den du mehrmals aufrufen
kannst.

```javascript
function greet(name) {
  return 'Hallo, ' + name + '!';
}

const text = greet('Gianluca');
console.log(text);
```

Das `return` schickt einen Wert **zurück** an den Aufrufer.

## Aufruf

Eine Funktion **macht nichts**, bis du sie **aufrufst**:

```javascript
greet('Gianluca');   // Aufruf, aber Rückgabe wird weggeworfen
const t = greet('Gianluca');  // Aufruf, Rückgabe in t gespeichert
```

## Probier es aus

Öffne die Konsole im Browser (F12 → Tab "Console"). Tippe:

```javascript
function greet(name) { return 'Hallo, ' + name + '!'; }
greet('Welt');
```

Du siehst: `"Hallo, Welt!"`.
