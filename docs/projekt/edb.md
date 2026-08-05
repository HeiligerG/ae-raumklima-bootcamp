# EDB – Entwickler Digital Business

!!! info "Was ist EDB?"
    **EDB** steht für **Entwickler Digital Business**. Das ist ein
    separates Team im Bootcamp mit drei Aufgaben:

    1. **Schwellenwerte definieren** – EDB legt fest, wann ein
       Sensor-Wert "gut", "kritisch" oder "schlecht" ist
       (basierend auf Raumklima-Standards)
    2. **Präsentation & Demo-Show** – EDB moderiert die gemeinsame
       Demo-Show am Tag 4 Abend, präsentiert die
       Plattform-Gesamtsicht
    3. **Übergreifende Koordination** – EDB ist die Schnittstelle
       zwischen AE-Lernenden, PE-Team und Trainer-Team
       (z. B. für Support bei Demo-Crashes)

    **EDB ist NICHT das Plattform-Team** (das ist PE). EDB
    definiert die **Regeln**, PE liefert die **Plattform**.

## Schwellenwerte (von EDB vorgegeben)

Diese Werte sind **fix** und kommen direkt von EDB. Du
verwendest sie in deiner `getStatus()`-Funktion ohne Änderung.

| Status | Temperatur (°C) | Feuchte (%) | Was tun? |
|---|---|---|---|
| :material-check-circle: **gut** | 20 – 24 | 40 – 60 | Normalzustand, nichts tun |
| :material-alert: **kritisch** | 18 – 26 | 30 – 70 | Achtung, an Monitor bleiben, ggf. lüften |
| :material-close-circle: **schlecht** | < 18 oder > 26 | < 30 oder > 70 | **EDB benachrichtigen**, sofort |

### Erklärung der Schwellen

**Warum 20–24 °C "gut"?** Das ist der übliche Komfortbereich
für Büro- und Schulungsräume. ASHRAE-Standard empfiehlt
21–23 °C.

**Warum 18–26 °C "kritisch" und nicht "gut"?** Noch akzeptabel,
aber ausserhalb des Komfortbereichs. Kann auf Probleme
hinweisen (Klimaanlage defekt, Tür offen, viele Leute im Raum).

**Warum ausserhalb 18–26 °C "schlecht"?** Akute
Gesundheits-/Komfort-Probleme. Die Plattform selbst könnte
auch defekt sein, oder die Sensor-Werte sind unrealistisch.

### Feuchte-Schwellen

**Warum 40–60 % "gut"?** Zu trocken: Schleimhäute, Elektrostatik.
Zu feucht: Schimmel. 40–60 % ist der Komfortbereich.

**Warum 30–70 % "kritisch"?** Noch OK, aber ausserhalb
Komfort. Bei 30 % oder weniger kann es zu trocken sein, bei
70 %+ zu feucht.

**Warum < 30 % oder > 70 % "schlecht"?** Akute
Probleme (Schimmel-Risiko oder Elektrostatik).

### Warum die Werte fix sind

- Du **wählst die Werte nicht selbst** – EDB hat sie basierend
  auf Standards festgelegt
- Du **begründest sie nicht selbst** – EDB hat sie begründet
- Du **dokumentierst sie nicht selbst** – EDB hat sie
  dokumentiert (siehe diese Seite)
- Du **verwendest sie nur** in deinem Code (`getStatus()`-Funktion)

!!! warning "Harte Regel"
    Wenn du eigene Schwellenwerte verwendest, ist deine App
    nicht konform mit der EDB-Vorgabe. Bei der Demo-Show kann
    das zu Disqualifikation führen, weil die App nicht mit den
    anderen Apps vergleichbar ist.

## EDB kontaktieren

**Wie?** Ganz einfach: **EDB-Lernende sind im Raum** – du
gehst zu ihnen hin und fragst. Kein Slack, keine E-Mail, kein
Ticketsystem. EDB macht mit, ist vor Ort, und antwortet direkt.

**Wann?**

- Wenn dein Status **"schlecht"** wird
- Wenn die Plattform nicht reagiert und du nicht weiterkommst
- Wenn du eine Frage zur Demo-Show hast

**Was du melden sollst:**

| Was | Beispiel |
|---|---|
| Welcher Sensor? | `SN12345` |
| Welcher Status? | `schlecht` |
| Welche Werte? | `temp_c = 12.0, hum_pct = 85` |
| Seit wann? | `seit 14:23 (vor ~5 Min)` |
| Was sagt deine App? | "Dashboard zeigt rot, 'schlecht', seit 5 Min" |
| Was hast du probiert? | "Browser-Refresh, snapshot aus localStorage" |

!!! info "Diese Doku ist read-only"
    Diese Seite ist auf GitHub Pages gehostet (read-only). Es
    gibt kein Formular, kein Ticket-System, kein Issue-Tracker
    hier. Für alles Interaktive: direkt mit den EDB-Lernenden
    sprechen.

## EDB bei der Demo-Show (Tag 4 Nachmittag)

- EDB moderiert die Show (16:30–17:30)
- EDB präsentiert die Plattform-Gesamtsicht (live mit Sensoren
  und Backend)
- AE-Lernende präsentieren ihre Apps einzeln
- EDB koordiniert die Reihenfolge und hilft bei technischen
  Problemen

## Verwandte Seiten

- [tag-1/projekt-dashboard.md – EDB-Benachrichtigung](../tag-1/projekt-dashboard.md#edb-benachrichtigung)
- [tag-2/projekt-statuslogik-verlauf.md – Statuslogik mit EDB-Werten](../tag-2/projekt-statuslogik-verlauf.md)
- [tag-3/retro.md – Cross-funktionale Retro mit EDB](../tag-3/retro.md)
- [Definition of Done](definition-of-done.md) – was EDB bei
  deiner App prüft