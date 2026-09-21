# Theorie-Happen 6 – Live-Integration mit SuvaSense

> **Happen 6** von 6 an Tag 3. **Stretch – optional.**
> Dauer: ~10 min.

## Lernziel

Du weisst, wie die App mit dem **SuvaSense-Backend** verbunden
wird und was du brauchst, um sie lokal laufen zu lassen.

## Was ist SuvaSense?

**SuvaSense** ist unser eigenes Backend. Es liefert die
Sensordaten über eine REST-API. Das Backend ist in einem
**eigenen Repo** (`SuvaSense/`) und bleibt **unverändert**.

Wir nutzen es nur als Daten-Quelle.

## Was du brauchst

1. Der **SuvaSense-Server** läuft lokal (oder im Netzwerk).
2. Die **Basis-URL** des Servers steht in `API_BASE`.
3. Die App nutzt **dieselbe `getBundles`-Funktion** wie im
   Happen 2 (Fallback-Strategie).

```javascript
const API_BASE = 'http://localhost:3000';
```

## Wie die App verbunden wird

```javascript
async function start() {
  await fillSensorDropdown();           // lädt Sensoren vom Server
  const initialSerial = document.getElementById('sensor-select').value;
  await updateView(initialSerial);      // lädt Daten + zeigt sie an
}

async function updateView(serial) {
  const items = await getBundles(serial);
  renderValues(items[0]);                // neueste Werte anzeigen
  renderHistory(items);                 // Verlauf anzeigen
}

start();
```

## Wenn der Server **nicht** läuft

Die App nutzt den **Fallback** aus Happen 2 und holt die Daten
aus `data.json`. Du kannst also auch ohne Server entwickeln und
testen.

**Test-Variante** ohne Server:

1. App öffnen, Console (F12) öffnen.
2. DevTools → Network → **Offline** anhaken.
3. Seite neu laden.
4. Daten kommen aus `data.json`. In der Console steht eine
   Warnung.

## Was noch fehlt (Stretch)

- **Auto-Refresh** alle 30 Sekunden (`setInterval`).
- **Lade-Spinner** während die Daten unterwegs sind.
- **Bessere Fehlermeldungen** im UI, nicht nur in der Konsole.
- **Chart.js** für eine hübsche Verlaufsgrafik.

Diese Features sind **freiwillig** und kommen in Tag 4 dran.

## Probier es aus

Im Idealfall hast du den SuvaSense-Server bereits laufen
(`./gradlew run` o. ä.). Falls nein: nicht schlimm, der Fallback
greift.

## Mehr Infos

- [`suvasense-backend.md`](../projekt/suvasense-backend.md) – Was
  das Backend liefert.
- [`api-vertrag.md`](../projekt/api-vertrag.md) – Wie die Endpunkte
  aussehen.
- [`fallback-strategie.md`](../projekt/fallback-strategie.md) –
  Wie der Fallback funktioniert.
