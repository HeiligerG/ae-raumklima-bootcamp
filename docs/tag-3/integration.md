# Projekt Tag 3 – Sensor-Dropdown und API-Fallback

> Folgt [`projekt-anleitung-template.md`](../projekt/projekt-anleitung-template.md).

## Tagesziel

Am Ende des Tages hast du:

- Ein **Admin-Panel** mit Dropdown zur Sensor-Auswahl.
- Die echte **API-URL** als Ziel (nicht mehr `../api/`).
- Den **V2-Fallback** aktiv getestet (Server killen,
  Offline-Modus).
- Das **Layout finalisiert** – passt für die Demo am Tag 5.

Du arbeitest im **Hauptprojekt** `app/` weiter.

## Voraussetzungen

- Stand von Projekt Tag 2 ist fertig (Daten aus `data.json`
  oder API, Status, Verlauf).
- Die **API-URL** (vom Trainer aus dem
  [Trainer-Briefing](https://github.com/HeiligerG/ae-trainer-briefing))
  ist dir bekannt, z. B.
  `http://<trainer-box>:3000`.
- Eine **Seriennummer** zum Testen (z. B. `DEMO-001`).
- Browser-Konsole offen (F12).

## Schritte

1. [Sensor-Dropdown im HTML](#schritt-1-sensor-dropdown-im-html)
2. [API-URL als Konstante](#schritt-2-api-url-als-konstante)
3. [Sensor-Liste dynamisch laden](#schritt-3-sensor-liste-dynamisch-laden)
4. [`change`-Event anbinden](#schritt-4-change-event-anbinden)
5. [Fallback aktiv testen](#schritt-5-fallback-aktiv-testen)
6. [Layout finalisieren](#schritt-6-layout-finalisieren)

---

## Schritt 1 – Sensor-Dropdown im HTML

**Lernziel**: Du kannst ein `<select>` mit einer Default-
**leeren** Option anlegen.

**Was passiert**: Über den beiden Karten erscheint ein
Dropdown mit "Sensor wählen".

### Datei

In `index.html`, **vor** `<main>` (oder oben in `<main>`):

```html
<header>
  <select id="sensor-select">
    <option value="">Sensor wählen</option>
  </select>
</header>
```

### Probier es aus

Speichern, Browser neu laden. Über den Karten ist ein
Dropdown mit genau einer Option.

### Was schiefgehen kann

- **Dropdown erscheint nicht**. Das `<header>` ist ausserhalb
  von `<main>` und es gibt noch kein CSS dafür. Wir stylen es
  gleich in Schritt 6.

---

## Schritt 2 – API-URL als Konstante

**Lernziel**: Du kannst eine Konfiguration aus dem Code in
eine **Konstante oben** ziehen.

**Was passiert**: Die Konstante `API_BASE` ist da, und
`getBundles` benutzt sie.

### Datei

In `script.js`, **ganz oben**:

```javascript
const API_BASE = 'http://<trainer-box>:3000';
```

> Ersetze `<trainer-box>` durch die echte URL, die der Trainer
> dir gibt.

Im bestehenden `getBundles`, ersetze die URL-Zeile:

```javascript
const url = `${API_BASE}/sensors/${serial}/readings?page=1&page_size=10`;
```

### Probier es aus

Konsole:

```javascript
getBundles('DEMO-001').then(items => console.log(items.length));
```

Wenn der Server läuft, kommt eine Zahl (10 oder so). Wenn der
Server down ist, kommt die gewohnte Fallback-Warnung.

---

## Schritt 3 – Sensor-Liste dynamisch laden

**Lernziel**: Du kannst mit `fetch` eine Liste holen und in
ein Dropdown einfügen.

**Was passiert**: Das Dropdown zeigt jetzt eine Liste echter
Sensoren vom Server (oder zumindest die Default-Option, wenn
der Server down ist).

### Datei

In `script.js`:

```javascript
async function fillSensors() {
  try {
    const response = await fetch(`${API_BASE}/sensors`);
    if (!response.ok) throw new Error('Sensors API ' + response.status);
    const sensors = await response.json();

    const select = document.getElementById('sensor-select');
    select.replaceChildren();

    sensors.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.serial;
      opt.textContent = s.room || s.serial;
      select.appendChild(opt);
    });
  } catch (e) {
    console.warn('Sensor-Liste nicht ladbar:', e);
  }
}

fillSensors();
```

### Probier es aus

Speichern, Browser neu laden. Wenn der Trainer-Server läuft:
das Dropdown zeigt Einträge wie "Büro 3.04 / DEMO-001". Wenn
nicht: nur die "Sensor wählen"-Default-Option.

### Was schiefgehen kann

- **Dropdown bleibt leer**. Server nicht erreichbar –
  erwartetes Verhalten bei Tag 2-Fallback.
- **`replaceChildren is not a function`**. Browser zu alt.

---

## Schritt 4 – `change`-Event anbinden

**Lernziel**: Du kannst auf eine Dropdown-Auswahl reagieren
und Daten neu laden.

**Was passiert**: Wenn du einen Sensor im Dropdown wählst,
laden die Karten und der Verlauf neu.

### Datei

In `script.js`, **ersetze** den Haupt-Aufruf am Ende:

```javascript
const select = document.getElementById('sensor-select');

select.addEventListener('change', () => {
  const serial = select.value;
  if (!serial) return;
  getBundles(serial).then(items => {
    showCurrent(items);
    renderHistory(items);
    showStatus(items);
  });
});
```

### Probier es aus

Im Dropdown einen Sensor wählen. Karten und Verlauf
aktualisieren sich.

### Was schiefgehen kann

- **`change` wird nicht ausgelöst**. Browser hat den Tab nicht
  neu geladen. **`F5` drücken**.
- **`Cannot read property 'value' of null`**. Dropdown hat
  noch keine `option`s – Server ist down.

---

## Schritt 5 – Fallback aktiv testen

**Lernziel**: Du kannst **selber prüfen**, dass der Fallback
wirklich greift.

**Was passiert**: Du weisst, **wie** du den Fallback siehst.

### Test-Variante A: Server killen

1. App ist offen, Daten kommen vom Server, Konsole zeigt
   **keine** Warnung.
2. Frage den Trainer, ob er den Server kurz stoppen darf.
3. Browser-Tab mit der App neu laden.
4. Konsolen-Warnung erscheint:
   `API nicht erreichbar, fallback auf data.json: …`.
5. Daten kommen aus `data.json`.

### Test-Variante B: DevTools-Offline

1. App ist offen.
2. F12 → Tab **Network** → Dropdown **"Online"** → wähle
   **"Offline"**.
3. Browser-Tab neu laden.
4. Konsolen-Warnung erscheint. Daten aus `data.json`.

### Was du dokumentierst

Notiere dir kurz:

- Welche Seriennummer du verwendet hast.
- Welche Variante du getestet hast (A oder B).
- Ob der Status nach dem Fallback noch stimmt.

---

## Schritt 6 – Layout finalisieren

**Lernziel**: Du kannst die App so stylen, dass sie für die
Demo **gut aussieht**.

**Was passiert**: Header, Karten, Verlauf sind ordentlich
angeordnet.

### Datei

In `style.css`:

```css
body {
  font-family: system-ui, sans-serif;
  background: #f5f5f5;
  color: #222;
  margin: 0;
}

header {
  background: #00695c;
  color: white;
  padding: 16px;
}

header select {
  font-size: 1rem;
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
}

main {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 16px;
  max-width: 960px;
  margin: 0 auto;
}

.card {
  flex: 1 1 280px;
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card h1 {
  font-size: 1rem;
  color: #555;
  margin: 0 0 8px;
}

.card p {
  font-size: 2rem;
  color: #222;
  margin: 0;
}

#history-card {
  flex-basis: 100%;
}

#history-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

#history-list li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-size: 1rem;
}

.status {
  display: inline-block;
  margin-top: 8px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: bold;
}

.status.gut      { background: #e8f5e9; color: #2e7d32; }
.status.kritisch { background: #fff3e0; color: #e65100; }
.status.schlecht { background: #ffebee; color: #c62828; }

@media (max-width: 600px) {
  main {
    flex-direction: column;
  }

  .card p {
    font-size: 1.5rem;
  }
}
```

### Probier es aus

Speichern, Browser neu laden. Die App sieht jetzt **poliert**
aus – Header in Teal, Karten weiss, Status-Pille mit Farbe.

---

## Definition of Done

- [ ] `<select>` mit Dropdown für Sensoren sichtbar.
- [ ] Sensor-Liste wird dynamisch vom Server geladen
      (oder Default, wenn Server down).
- [ ] Bei Sensor-Wechsel laden alle Karten + Verlauf + Status.
- [ ] Fallback ist **aktiv getestet** mit einer der beiden
      Varianten dokumentiert.
- [ ] Layout ist mobile-tauglich (geprüft im DevTools-Modus).
- [ ] **Kein `localStorage`**.
- [ ] Code committed und gepusht.

## Wie weiter?

Im **Projekt Tag 4** (freiwillig): Polish, Bugs fixen,
optionale Features. Die App ist ab Tag 3 **funktional
komplett**.

## Wo gibt's Hilfe?

- Trainer (1:1).
- [Theorie-Happen Tag 3](../tag-3/index.md).
- [Fallback-Strategie-Doku](../projekt/fallback-strategie.md).
- [Trainer-Briefing: Demo-Sensor einrichten](https://github.com/HeiligerG/ae-trainer-briefing/blob/bootcamp-v2/docs/demo-sensor.md).
