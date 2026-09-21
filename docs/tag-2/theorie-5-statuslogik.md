# Theorie-Happen 5 – Statuslogik

> **Happen 5** von 6 an Tag 2. Dauer: ~10 min.

## Lernziel

Du kannst aus einem **Temperaturwert** einen **Status** ableiten
(gut / kritisch / schlecht).

## Was ist eine Statuslogik?

Die App soll zeigen, ob die Luft **gut**, **kritisch** oder
**schlecht** ist. Wir haben **Schwellenwerte**:

| Status | Temperatur | Bedeutung |
|---|---|---|
| **gut** | 20 – 26 °C | Alles in Ordnung. |
| **kritisch** | 18 – 20 oder 26 – 28 °C | Noch okay, aber am Rand. |
| **schlecht** | unter 18 oder über 28 °C | Nicht mehr akzeptabel. |

Die genauen Schwellen stehen in [`docs/projekt/edb.md`](../projekt/edb.md).

## Eine Funktion dafür

Eine **Funktion** nimmt einen Wert entgegen und gibt einen Status
**zurück**:

```javascript
function tempStatus(temperature) {
  if (temperature < 18 || temperature > 28) return 'schlecht';
  if (temperature < 20 || temperature > 26) return 'kritisch';
  return 'gut';
}
```

### Schritt für Schritt

1. Wenn der Wert **ausserhalb** 18 – 28: `schlecht`.
2. Sonst, wenn der Wert **ausserhalb** 20 – 26: `kritisch`.
3. Sonst: `gut`.

## Status ins DOM schreiben

Wir haben drei Elemente im HTML:

```html
<p id="status-good" class="status" hidden>Gut</p>
<p id="status-warn" class="status" hidden>Kritisch</p>
<p id="status-bad"  class="status" hidden>Schlecht</p>
```

JavaScript zeigt das **passende** Element:

```javascript
function showStatus(temperature) {
  const status = tempStatus(temperature);

  document.getElementById('status-good').hidden = (status !== 'gut');
  document.getElementById('status-warn').hidden = (status !== 'kritisch');
  document.getElementById('status-bad').hidden  = (status !== 'schlecht');
}
```

`hidden = true` = Element ist **ausgeblendet**. `hidden = false`
= sichtbar. So ist immer **nur eines** sichtbar.

## Probier es aus

Konsole (F12):

```javascript
function tempStatus(t) {
  if (t < 18 || t > 28) return 'schlecht';
  if (t < 20 || t > 26) return 'kritisch';
  return 'gut';
}
tempStatus(23.4);
```

Du siehst: `"gut"`.
