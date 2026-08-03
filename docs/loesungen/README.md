# Lösungen (nur für Lernende, die nicht weiterkommen)

!!! danger "Bitte erst nach 20 Minuten Eigenversuch lesen"
    Dieser Ordner enthält die vollständigen Referenz-Implementierungen
    für die Projekt-Aufgaben. Schau hier **nur** rein, wenn du nach
    mindestens 20 Minuten Probieren nicht weiterkommst.

    Der Lerneffekt entsteht durch das **Versuchen und Scheitern** –
    nicht durch das Abschreiben einer funktionierenden Lösung.

## Konzept

In den Projekt-Aufgaben der Tag-1-bis-Tag-3-Dokumentation findest du:

- **Anforderungen** (was muss die App können)
- **Skelett** (welche IDs/Klassen/Funktions-Signaturen sind Pflicht)
- **Hinweise** (verbale Tipps, kein Code)
- **Definition of Done** (Selbst-Check)

Die **konkrete Implementierung** lebst du. Die Referenz hier ist
**deine Belohnung für 20 Min eigene Arbeit** – und dein Vergleich,
wenn du fertig bist.

## Wann darfst du hier schauen?

| Situation | Empfehlung |
|---|---|
| 5 Min nicht weitergekommen | **Weiterprobieren.** Recherche im MDN oder der Theorie. |
| 20 Min nicht weitergekommen | **Hier nachschauen.** Eine Referenz pro Aufgabe. |
| Fertig, unsicher | **Vergleichen.** Hast du es gleich, besser, oder anders gelöst? |
| Vor dem ersten Versuch | **Auf keinen Fall.** Du verdirbst dir den Aha-Moment. |

## Struktur

```
loesungen/
├── tag-1/                # Dashboard Grundlayout
│   ├── index.html
│   ├── style.css
│   └── NOTIZEN.md        # Warum diese Variante? Welche Alternativen?
├── tag-2/                # Statuslogik + Daten laden
│   ├── data.json
│   ├── script.js
│   └── NOTIZEN.md
├── tag-3/                # Snapshot-Fallback + Sensor-Auswahl
│   ├── script.js
│   └── NOTIZEN.md
└── tag-4/                # Optionale Features
    └── ...
```

Die `NOTIZEN.md` pro Tag erklären die Design-Entscheidungen und
zeigen Alternativen – sie sind auch nach dem Bootcamp nützlich zum
Nachschlagen.

## Hinweis für Lehrpersonen

Die Referenz ist absichtlich **eine** mögliche Lösung, nicht "die
richtige". Eure Schülerinnen und Schüler werden andere Farben
wählen, andere Abstände, andere Variablennamen. Das ist gut so.

Diskutiert in der Demo-Runde die **Unterschiede**: "Wer hat die
Temperatur mit `font-size: 2.5em` statt `28px` dargestellt? Welche
Variante ist lesbarer?" Solche Diskussionen vertiefen das Verständnis
mehr als jede Referenz-Implementierung.