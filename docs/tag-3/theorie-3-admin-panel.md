# Theorie-Happen 3 – Admin-Panel mit Dropdown

> **Happen 3** von 6 an Tag 3. Dauer: ~10 min.

## Lernziel

Du kannst ein **Dropdown** im HTML anlegen und sein **`change`-
Event** mit JavaScript behandeln.

## Was ist ein Admin-Panel?

Im Admin-Panel wählt man den **Sensor** aus, dessen Daten man
sehen will. Dafür gibt es ein Dropdown.

```
[Sensor wählen ▼]
  abc-123 (Büro 3.04)
  xyz-789 (Konferenzraum)
  zzz-000 (Server-Raum)
```

## HTML: das Dropdown

```html
<select id="sensor-select">
  <option value="abc-123">Büro 3.04</option>
  <option value="xyz-789">Konferenzraum</option>
  <option value="zzz-000">Server-Raum</option>
</select>
```

- `<select>` ist die Dropdown-Box.
- Jede `<option>` ist ein Eintrag. `value` ist die Sensor-ID.

## JavaScript: auf Auswahl reagieren

Wir wollen: wenn der Nutzer eine andere Option wählt, sollen die
Daten **neu geladen** werden.

```javascript
const select = document.getElementById('sensor-select');

select.addEventListener('change', async () => {
  const serial = select.value;
  const items = await getBundles(serial);
  renderBundles(items);
});
```

Schritt für Schritt:

1. **`addEventListener('change', …)`** – reagiert auf eine neue
   Auswahl.
2. **`select.value`** – die gewählte `value` (z. B. `"abc-123"`).
3. **`getBundles(serial)`** – lädt die Daten (mit Fallback aus
   Happen 2).
4. **`renderBundles(items)`** – zeigt die Daten im DOM an.

## Liste der Sensoren dynamisch

Oft kennen wir die Sensoren nicht im Voraus. Sie kommen von
**einer anderen API** (`/sensors`):

```javascript
async function fillSensorDropdown() {
  const response = await fetch(`${API_BASE}/sensors`);
  const sensors = await response.json();

  const select = document.getElementById('sensor-select');
  select.replaceChildren();   // alte Optionen entfernen – kein innerHTML

  for (const sensor of sensors) {
    const option = document.createElement('option');
    option.value = sensor.serial;
    option.textContent = sensor.room;
    select.appendChild(option);
  }
}
```

**Wichtig**: Wir benutzen **`replaceChildren()`** zum Leeren, nicht
`innerHTML = ''`. Für die einzelnen Optionen setzen wir `value` und
`textContent` über Properties. **Niemals** `innerHTML` mit Daten.

## Probier es aus

Konsole (F12): lege im DOM zuerst ein `<select>` an, dann ändere
ihren Wert programmatisch:

```javascript
const s = document.body.appendChild(document.createElement('select'));
s.id = 'sensor-select';
s.addEventListener('change', () => console.log('gewählt:', s.value));
document.body.appendChild(document.createElement('option')).value = 'x';
```

(Hinweis: dieses Beispiel ist vereinfacht – es soll nur zeigen,
dass Events ankommen.)
