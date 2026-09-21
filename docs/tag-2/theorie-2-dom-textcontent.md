# Theorie-Happen 2 – DOM und textContent

> **Happen 2** von 6 an Tag 2. Dauer: ~10 min.

## Lernziel

Du kannst ein **DOM-Element** per ID finden und seinen Text mit
**`textContent`** ändern.

## Was ist das DOM?

**DOM** steht für *Document Object Model*. Das ist der **Baum**
aus allen HTML-Elementen deiner Seite. JavaScript kann diesen
Baum lesen und verändern.

```
html
├── head
└── body
    └── main
        └── section#temp-card
            ├── h1
            └── p
```

## Ein Element finden: `getElementById`

Du hast ein Element mit `id="temp-card"`. So findest du es mit
JavaScript:

```javascript
const element = document.getElementById('temp-card');
```

`document` ist der ganze Baum. `getElementById` sucht nach der ID
und gibt das Element zurück. Existiert die ID nicht, gibt es
**`null`** zurück.

## Text setzen: `textContent`

Du willst den Text im Element ändern. So:

```javascript
const element = document.getElementById('temp-card');
element.textContent = '23.4 °C';
```

Der Browser aktualisiert die Seite **sofort**. Du siehst den neuen
Text im Element.

## Die goldene Regel: `textContent`, nie `innerHTML`

Es gibt eine **zweite** Methode: `innerHTML`. Die kann **HTML-Code**
ausführen. Das ist **gefährlich**:

```javascript
// NIEMALS so:
element.innerHTML = userInput;
```

Wenn `userInput` z. B. `<script>alert('hacked')</script>` enthält,
führt der Browser das aus. Das ist ein Sicherheits-Risiko.

**Regel**: in diesem Bootcamp **immer** `textContent`. Punkt.

## Probier es aus

Im Konsolen-Browser (F12):

```javascript
document.getElementById('temp-card').textContent = '23.4 °C';
```

Wenn deine HTML-Seite ein Element mit `id="temp-card"` hat,
siehst du den Text sofort.
