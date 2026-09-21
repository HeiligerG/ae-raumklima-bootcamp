# Theorie-Happen 1 – API-Endpunkt verstehen

> **Happen 1** von 6 an Tag 3. Dauer: ~10 min.

## Lernziel

Du kannst eine **API-URL** lesen und weisst, **welche Daten** der
Server zurückgibt.

## Was ist eine API?

**API** steht für *Application Programming Interface*. Für uns
heisst das: ein **URL-Schema**, mit dem der Server Daten liefert.
Du schickst eine URL, der Server antwortet mit **JSON**.

## Beispiel: Sensormesswerte laden

```
GET http://localhost:3000/sensors/abc-123/readings?page=1&page_size=10
```

So liest du die URL:

| Teil | Was es bedeutet |
|---|---|
| `GET` | HTTP-Methode. Wir **holen** Daten. |
| `http://localhost:3000` | Basis-URL des Servers. |
| `/sensors/abc-123/readings` | Pfad. Sensor mit der ID `abc-123`. |
| `?page=1&page_size=10` | Query-Parameter. Seite 1, 10 Einträge pro Seite. |

## Wie der Server antwortet

Der Server liefert **JSON**:

```json
{
  "page": 1,
  "page_size": 10,
  "total": 42,
  "items": [
    {
      "timestamp": "2026-08-06T08:30:00Z",
      "temperature": 23.4,
      "humidity": 42.0
    }
  ]
}
```

- `page`, `page_size`, `total` sind Meta-Daten.
- `items` ist die **Liste** der Messwerte.

## In JavaScript: URL bauen

Du baust die URL **zusammen**. Nimm nicht die volle URL als
String, sondern **kombiniere** Teile:

```javascript
const API_BASE = 'http://localhost:3000';
const serial = 'abc-123';
const url = API_BASE + '/sensors/' + serial + '/readings?page=1&page_size=10';
```

Oder mit **Template-String** (Backticks, `${...}`):

```javascript
const url = `${API_BASE}/sensors/${serial}/readings?page=1&page_size=10`;
```

Beides ist gleich. Template-Strings sind **lesbarer**.

## Probier es aus

Konsole (F12):

```javascript
const API_BASE = 'http://localhost:3000';
const url = `${API_BASE}/sensors/abc-123/readings?page=1&page_size=10`;
url;
```

Du siehst die fertige URL als String.

## Mehr Infos

- [`api-vertrag.md`](../projekt/api-vertrag.md) – Vollständiger API-Vertrag.
