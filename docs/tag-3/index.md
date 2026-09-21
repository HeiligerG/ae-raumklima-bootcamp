# Tag 3

> **V2-Tag.** Datumsangaben wurden bewusst entfernt
> (Q8). Die einzelnen Happen findest du weiter unten.

## Tagesziel

Am Ende des Tages kommuniziert deine App mit dem
**SuvaSense-Backend**. Du hast den **2-stufigen Fallback**
(API → `data.json`) **aktiv getestet**. Die Live-Integration
mit echten Sensordaten ist im Browser sichtbar – oder der
Fallback greift sauber.

> **Kein `localStorage`** in V2. Der Fallback ist 2-stufig,
> siehe [`../projekt/fallback-strategie.md`](../projekt/fallback-strategie.md).

## Ablauf

| Block | Was passiert |
|---|---|
| Theorie-Block (~2 h) | 6 Happen mit Live-Coding |
| Pause (~15 min) | |
| Übung (~2 h) | WOW-Effekt im `uebungen/tag-3/`-Ordner |
| Projekt (~2–3 h) | Eigenständig im Hauptprojekt `app/` |
| Trainer Live-Coding (~1 h) | Trainer co-det die Tag-3-Lösung |

## Theorie-Happen

| Happen | Thema | Dauer |
|---|---|---|
| 1 | [API-Endpunkt](theorie-1-api-endpunkt.md) | ~10 min |
| 2 | [Fallback-Strategie](theorie-2-fallback.md) | ~10 min |
| 3 | [Admin-Panel](theorie-3-admin-panel.md) | ~10 min |
| 4 | [Fehlerbehandlung](theorie-4-fehlerbehandlung.md) | ~10 min |
| 5 | [Layout](theorie-5-layout.md) | ~10 min |
| 6 | [Integration (Stretch)](theorie-6-integration.md) | ~10 min |

## Was lernst du heute?

- Wie integriere ich eine echte API?
- Wie funktioniert die 2-stufige Fallback-Strategie?
- Wie baue ich ein Admin-Panel mit Sensor-Dropdown?
- Wie behandle ich Fehler mit `try/catch`?
- Wie teste ich den Fallback aktiv?

## Was baust du heute?

- [Übung: Statuslogik ohne `localStorage`](../../docs/uebungen/tag-3/aufgabe.md).
- [Projekt: Sensor-Dropdown und API-Fallback](integration.md).

## Definition of Done

- [ ] App lädt Daten vom API oder Fallback (`data.json`).
- [ ] Dropdown für Sensoren ist da.
- [ ] **Fallback aktiv getestet** mit einer der zwei Varianten
      dokumentiert (Server killen **oder** DevTools-Offline).
- [ ] **Kein `localStorage`** im Code.
- [ ] Layout funktioniert auf Mobile und Desktop.
- [ ] Code committed und gepusht.

## Weiter

- [Retro](retro.md)
- [Projekt: Integration](integration.md)
- [Checkpoint Tag 3](checkpoint.md)

## Querverweise

- [Curriculum V2](../curriculum-v2.md).
- [Fallback-Strategie](../projekt/fallback-strategie.md).
