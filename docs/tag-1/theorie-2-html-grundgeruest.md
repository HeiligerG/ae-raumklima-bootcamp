# Theorie-Happen 2 – HTML-Grundgerüst

> **Happen 2** von 6 an Tag 1. Dauer: ~10 min.

## Lernziel

Du kannst ein HTML-Grundgerüst (`doctype`, `html`, `head`, `body`)
selber hinschreiben und weisst, wofür jeder Teil da ist.

## Was ist HTML?

**HTML** steht für *HyperText Markup Language*. Es ist die Sprache,
mit der der Browser versteht, **was** auf der Seite ist (Text,
Bilder, Buttons, Karten).

HTML besteht aus **Tags**. Ein Tag steht in spitzen Klammern: `<p>`.
Die meisten Tags haben ein Anfang- und ein Schluss-Tag:
`<p>Hallo</p>`.

## Das Grundgerüst

Jede HTML-Seite hat **diesen** Aufbau:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Meine App</title>
</head>
<body>
  <!-- Hier kommt der sichtbare Inhalt -->
</body>
</html>
```

Jeder Teil hat eine Aufgabe:

| Tag | Aufgabe |
|---|---|
| `<!DOCTYPE html>` | Sagt dem Browser: das ist HTML5. |
| `<html lang="de">` | Wurzel-Element. `lang="de"` = Sprache ist Deutsch. |
| `<head>` | Infos **über** die Seite (nicht sichtbar). |
| `<meta charset="UTF-8">` | Zeichensatz. Umlaute (ä, ö, ü) gehen damit. |
| `<title>` | Text im Browser-Tab. |
| `<body>` | Der **sichtbare** Teil der Seite. |

## Probier es aus

Öffne die Übung Tag 1 im Repo `ae-raumklima-bootcamp-codebase`,
Ordner `uebungen/tag-1/`. Folge der Übung Schritt für Schritt.
Du wirst dieses Grundgerüst selber anlegen.
