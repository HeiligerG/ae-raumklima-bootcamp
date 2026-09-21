# Theorie-Happen 1 – Was ist eine Web-App?

> **Happen 1** von 6 an Tag 1. Dauer: ~10 min.

## Lernziel

Du kannst in einem Satz erklären, was eine **Web-App** ist und
welche drei Teile zusammenspielen.

## Was ist eine Web-App?

Eine **Web-App** ist ein Programm, das im **Browser** läuft. Du
öffnest sie nicht wie ein Word-Dokument vom Desktop, sondern über
eine **URL** (eine Web-Adresse).

Beispiel: `https://app.example.com/dashboard`

Drei Dinge spielen zusammen:

| Teil | Was es macht |
|---|---|
| **Browser** | Zeigt die App an. Liest HTML, CSS und JavaScript. |
| **Server** | Liefert Daten (z. B. Sensormesswerte). Antwortet auf Anfragen. |
| **URL** | Sagt dem Browser, **welche** App und **welche** Daten. |

## Was hat das mit dem Bootcamp zu tun?

Wir bauen eine kleine Web-App. Sie zeigt Temperatur und
Luftfeuchtigkeit aus einem Sensor an.

- **Browser** zeigt die App (HTML, CSS, JavaScript).
- **Server** liefert Sensordaten (oder wir nutzen eine Datei).
- **URL** öffnen wir am Ende der Woche im Browser.

## Was passiert beim Aufruf?

Wenn du die URL eintippst, passiert das in dieser Reihenfolge:

1. **Browser** fragt den Server: "Gib mir die Seite".
2. **Server** schickt HTML, CSS und JavaScript zurück.
3. **Browser** zeigt die Seite an.
4. JavaScript im Browser fragt den Server (oder eine Datei) nach
   Daten.
5. **Daten kommen zurück**. JavaScript schreibt sie ins DOM.

Mehr brauchst du **nicht** zu wissen für den Anfang.

## Verweis

- Happen 2: HTML-Grundgerüst.
- Happen 6: Mobile-Ansicht.
