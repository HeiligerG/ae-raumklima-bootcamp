# Theorie-Happen 6 – Verlaufsliste

> **Happen 6** von 6 an Tag 2. Dauer: ~10 min.

## Lernziel

Du kannst eine **Liste** von DOM-Elementen **dynamisch** erzeugen
(mit `createElement` und `appendChild`).

## Was ist eine Verlaufsliste?

Die App zeigt nicht nur den **aktuellen** Wert, sondern auch die
**letzten** Werte – als Verlauf:

```
08:30  23.4 °C
08:25  23.2 °C
08:20  22.9 °C
…
```

Die Liste kommt aus den Daten vom Server (oder `data.json`).

## HTML-Container im DOM

Wir brauchen **einen** Container, in den wir die Einträge
reinschreiben:

```html
<ul id="history-list"></ul>
```

Diese Liste ist anfangs **leer**. JavaScript füllt sie.

## createElement und appendChild

```javascript
function addHistoryEntry(temperature, timestamp) {
  const li = document.createElement('li');

  const time = document.createElement('span');
  time.textContent = timestamp;

  const temp = document.createElement('span');
  temp.textContent = temperature + ' °C';

  li.appendChild(time);
  li.appendChild(temp);

  document.getElementById('history-list').appendChild(li);
}
```

Was passiert:

1. **`document.createElement('li')`** erzeugt ein neues `<li>`-Element
   **im Speicher**. Es ist noch nicht in der Seite.
2. **`createElement('span')`** erzeugt zwei `<span>` für Zeit und
   Temperatur.
3. **`textContent`** setzt den Text. **Kein `innerHTML`** – siehe
   Happen 2.
4. **`appendChild`** hängt das `<span>` an das `<li>`.
5. **Zum Schluss** wird das `<li>` an die Liste `<ul>` gehängt.

## Mehrere Einträge auf einmal

Wir rufen die Funktion für jeden Messwert in der Schleife auf:

```javascript
async function fillHistory(items) {
  for (const item of items) {
    addHistoryEntry(item.temperature, item.timestamp);
  }
}
```

## Probier es aus

Konsole (F12), zuerst die Liste ins DOM schreiben (HTML braucht
ein `<ul id="history-list">`):

```javascript
const ul = document.body.appendChild(document.createElement('ul'));
ul.id = 'history-list';

const li = document.createElement('li');
li.textContent = '23.4 °C';
ul.appendChild(li);
```

Du siehst eine Liste mit einem Eintrag.
