# Theorie-Happen 4 – Fehlerbehandlung mit try/catch

> **Happen 4** von 6 an Tag 3. Dauer: ~10 min.

## Lernziel

Du kannst Fehler mit **`try/catch`** abfangen und **sinnvoll**
reagieren.

## Was ist try/catch?

Manchmal geht etwas schief. Der Server ist weg, das JSON ist
kaputt, eine Variable ist `null`. JavaScript **wirft** einen
**Fehler** (eine `Error`-Instanz).

Ohne Schutz bricht das Programm **ab**. Mit **`try/catch`** kannst
du den Fehler **fangen** und weitermachen.

```javascript
try {
  // Code, der schiefgehen könnte
} catch (error) {
  // Was tun, wenn es schiefgeht
}
```

## Beispiel: Division durch null abfangen

```javascript
function safeDivide(a, b) {
  try {
    if (b === 0) throw new Error('Teilen durch null ist nicht erlaubt');
    return a / b;
  } catch (error) {
    console.warn('Fehler:', error.message);
    return null;
  }
}
```

## Mit fetch kombinieren

```javascript
async function getBundles(serial) {
  try {
    const response = await fetch(`${API_BASE}/sensors/${serial}/readings`);
    if (!response.ok) throw new Error(`API ${response.status}`);
    const data = await response.json();
    return data.items;
  } catch (apiError) {
    console.warn('API nicht erreichbar:', apiError);
    const response = await fetch('data.json');
    return await response.json();
  }
}
```

- Im `try`: API-Aufruf.
- Im `catch`: Fallback auf `data.json`.
- **Wichtig**: `await fetch(...)` **wirft** bei Netzwerkfehlern,
  **nicht** bei HTTP-Status wie 404. Deshalb prüfen wir `ok`.

## Fehler loggen, nicht verstecken

Eine **goldene Regel**: **logge den Fehler** in die Konsole
(`console.warn` oder `console.error`). So siehst du später, was
passiert ist.

**Schlecht** (Fehler wird verschluckt):

```javascript
try { ... } catch (e) { /* nichts */ }
```

**Gut**:

```javascript
try { ... } catch (e) { console.warn('Konnte Daten nicht laden:', e); }
```

## finally (optional)

Wenn du **immer** etwas tun willst – egal ob Fehler oder nicht –
nimm `finally`:

```javascript
let isLoading = true;
try {
  const data = await fetchData();
  showData(data);
} catch (e) {
  console.warn(e);
} finally {
  isLoading = false;   // immer, am Ende
}
```

## Probier es aus

Konsole (F12):

```javascript
try { JSON.parse('kein json'); }
catch (e) { console.log('Fehler:', e.message); }
```

Du siehst: der Fehler wird **gefangen** und geloggt, das Programm
läuft **weiter**.
