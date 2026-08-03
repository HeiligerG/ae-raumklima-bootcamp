# Projekt: Integration (Joint-Session mit PE-Team)

!!! warning "Eigenarbeit – Spec + Skelett, kein Copy-Paste"
    Diese Aufgabe gibt dir das **Skelett** der Snapshot-Strategie,
    aber nicht die komplette Implementierung. Die Reihenfolge der
    Fallbacks (API → localStorage → Seed) und das Fehler-Handling
    baust du selbst. Wenn du nach 20 Min nicht weiterkommst:
    [`loesungen/tag-3/`](https://ae-raumklima-bootcamp.readthedocs.io/loesungen/tag-3/).

## :material-target: Aufgabe

Integriere deine App mit dem **SuvaSense-Backend** und sorge dafür,
dass sie auch dann funktioniert, wenn das Backend nicht erreichbar
ist. Das ist die **Snapshot-Fallback-Strategie**.

## :material-book-open-outline: Anforderungen

- [ ] Deine App versucht **zuerst** die SuvaSense-API
      (`GET /api/v1/sensors/{serial}/readings?page=1&page_size=10`)
- [ ] Bei Erfolg: die Daten werden im `localStorage` unter
      `snapshot:{serial}` gespeichert
- [ ] Bei API-Fehler: die App greift auf den Snapshot zurück
- [ ] Falls auch kein Snapshot existiert: `data.json` als
      Initial-Seed
- [ ] Im Admin-Panel kann der Nutzer den Sensor wechseln
- [ ] Bei Sensor-Wechsel werden die **richtigen** Bundles
      angezeigt (nicht die vom alten Sensor)

## :material-hammer-wrench: Skelett

### Konfiguration (oben in `script.js`)

```javascript
const API_BASE = 'http://<vom-trainer-bekanntgegeben>:8080/api/v1';
let currentSerial = 'SN12345';   // Demo-Seriennummer vom Trainer

function snapshotKey(serial) { return `snapshot:${serial}`; }
```

### Drei Phasen in eigenen Worten

**Phase 1 – Live-API:**

```
URL = API_BASE + '/sensors/' + serial + '/readings?page=1&page_size=10'
fetch(URL) → response
wenn response.ok:
    data = response.json()
    items = data.items
    localStorage.setItem(snapshotKey(serial), JSON.stringify(items))
    return items
sonst: wirf einen Fehler
```

**Phase 2 – Snapshot (nur wenn Phase 1 fehlschlägt):**

```
cached = localStorage.getItem(snapshotKey(serial))
wenn cached:
    return JSON.parse(cached)
```

**Phase 3 – Initial-Seed (nur wenn 1 und 2 scheitern):**

```
fetch('data.json') → items
return items
```

### Funktions-Signaturen

| Funktion | Aufgabe |
|---|---|
| `getBundles(serial, limit)` | Die dreistufige Fallback-Funktion |
| `getLatestBundle(serial)` | Ruft `getBundles` auf, gibt `items[0]` zurück |
| `onSensorChange()` | Liest neuen Sensor aus Dropdown, ruft `loadDashboard` |
| `loadDashboard()` | Hauptfunktion: lädt, rendert Dashboard + Verlauf |

### HTML-Erweiterung (Admin-Panel)

In `index.html` unter `<main>` einfügen:

```html
<section class="admin-panel">
    <details>
        <summary>Einstellungen</summary>
        <div class="admin-content">
            <label>
                Sensor:
                <select id="sensor-select" onchange="onSensorChange()">
                    <option value="SN12345">SN12345</option>
                    <option value="SN67890">SN67890</option>
                    <option value="DEMO-001">DEMO-001</option>
                </select>
            </label>
            <button onclick="loadDashboard()">Aktualisieren</button>
        </div>
    </details>
</section>
```

### CSS-Selektoren (Admin-Panel)

- `.admin-panel`
- `.admin-panel summary`
- `.admin-content`
- `.admin-content select`
- `.admin-content button`
- `.admin-content button:hover`

(Werte wählst du selbst – Farbe passt zum Rest der App.)

## :material-lightbulb-on: Hinweise (verbal, kein Code)

### try/catch um jede Phase

Jede der drei Phasen braucht ein eigenes `try/catch`. Wenn die
API wirft, fängst du den Fehler in Phase 1 ab und gehst zu
Phase 2 über. Phase 2 braucht ein `try` für `JSON.parse()`
(kann kaputt sein). Phase 3 braucht ein `try` für `fetch` auf
`data.json`.

### Reihenfolge im Code

Pseudocode:

```text
async function getBundles(serial, limit):
    try:    # Phase 1
        ... API holen, Snapshot speichern
        return items
    catch:  # API fehlgeschlagen
        pass

    try:    # Phase 2
        cached = localStorage.getItem(...)
        if cached: return JSON.parse(cached)
    catch:
        pass

    try:    # Phase 3
        return await fetch('data.json').then(r => r.json())
    catch:
        return []    # Komplett gescheitert, leere Liste
```

### getLatestBundle als Wrapper

```text
async function getLatestBundle(serial):
    bundles = await getBundles(serial, 10)
    if (bundles.length == 0): throw new Error('Keine Daten')
    return bundles[0]
```

### Sensor-Wechsel

`onSensorChange` liest den neuen Wert aus dem `<select>` und
startet `loadDashboard()` neu. **Wichtig:** der Snapshot
wechselt mit, weil `snapshotKey` den Serial enthält.

### Optional-Fortgeschritten: dynamisches Dropdown

Statt der festen drei Optionen kannst du `GET /api/v1/sensors`
aufrufen und das Dropdown mit allen verfügbaren Sensoren
befüllen. Das ist **Bonus**, nicht Pflicht.

## :material-check-all: Definition of Done (Selbst-Check)

- [ ] Alle 6 Anforderungen erfüllt
- [ ] Snapshot-Fallback funktioniert: Backend stoppen → App
      zeigt weiterhin Werte aus `localStorage`
- [ ] `localStorage.clear()` + `data.json` umbenennen → App
      zeigt Fehlermeldung
- [ ] Sensor-Wechsel im Dropdown funktioniert
- [ ] Konsole (F12) zeigt keine roten Fehler
- [ ] Code ist committed und gepusht

## Nächster Schritt

[Checkpoint Tag 3](checkpoint.md)