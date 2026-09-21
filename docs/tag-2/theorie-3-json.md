# Theorie-Happen 3 – JSON lesen und verstehen

> **Happen 3** von 6 an Tag 2. Dauer: ~10 min.

## Lernziel

Du kannst **JSON** lesen und die wichtigsten Felder herauspicken.

## Was ist JSON?

**JSON** steht für *JavaScript Object Notation*. Es ist ein
Text-Format, mit dem **Daten** ausgetauscht werden. Es sieht aus
wie JavaScript, ist aber **nur Text**.

```json
{
  "id": "abc-123",
  "room": "Büro 3.04",
  "temperature": 23.4,
  "humidity": 42.0
}
```

## Zwei wichtige Strukturen

| JSON | Was es ist |
|---|---|
| `{ "key": "value" }` | Ein **Objekt**: Schlüssel-Wert-Paare. |
| `[1, 2, 3]` | Eine **Liste** (Array) von Werten. |

Du kannst **Objekte in Listen** und **Listen in Objekten** haben.

## Beispiel: Sensormesswerte

Unser Server liefert eine **Liste** von Messwerten:

```json
{
  "items": [
    {
      "timestamp": "2024-01-01T08:30:00Z",
      "temperature": 23.4,
      "humidity": 42.0
    },
    {
      "timestamp": "2024-01-01T08:25:00Z",
      "temperature": 23.2,
      "humidity": 42.1
    }
  ]
}
```

> Hinweis: Das Datum oben ist ein **technisches Beispiel** für die
> ISO-8601-Form (`JJJJ-MM-THH:MM:SSZ`). Es ist **kein**
> Bootcamp-Datum.

- Ganz oben ist ein **Objekt** mit einem Schlüssel `items`.
- `items` ist eine **Liste** von Objekten.
- Jedes Objekt hat `timestamp`, `temperature`, `humidity`.

## In JavaScript verwenden

JSON kannst du direkt in JavaScript-Objekte **umwandeln**:

```javascript
const text = '{"temperature": 23.4, "humidity": 42.0}';
const data = JSON.parse(text);
console.log(data.temperature);   // 23.4
```

Umgekehrt: Objekt zu JSON-Text:

```javascript
const data = { temperature: 23.4 };
const text = JSON.stringify(data);
console.log(text);  // '{"temperature":23.4}'
```

Diese beiden (`JSON.parse`, `JSON.stringify`) brauchst du oft.

## Probier es aus

Konsolen-Browser (F12):

```javascript
const text = '{"items":[{"temperature":23.4}]}';
const data = JSON.parse(text);
data.items[0].temperature;
```

Du siehst: `23.4`.
