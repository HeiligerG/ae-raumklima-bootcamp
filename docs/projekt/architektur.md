# Architektur

Das Bootcamp-Projekt besteht aus drei klar getrennten Schichten, die unabhängig voneinander gebaut und gewartet werden:

```
┌────────────────────────┐
│ Sensoren (Hardware)    │  ← Plattformentwickler
│ ESP32 + DHT22          │     Arduino IDE
└──────────┬─────────────┘
           │ POST /api/v1/ingest
           │ (HTTP, JSON, X-API-Key)
           ▼
┌────────────────────────┐
│ Backend (Node/Express) │  ← AE-Trainerteam
│ - nimmt Daten an       │     im Schwester-Repo
│ - speichert (MySQL)    │     ae-raumklima-bootcamp-codebase/mock-api
│ - liefert aus          │
└──────────┬─────────────┘
           │ GET /api/v1/...
           │ (HTTP, JSON, CORS)
           ▼
┌────────────────────────┐
│ Web-App (HTML/CSS/JS)  │  ← Lernende
│ - Dashboard            │     im Schwester-Repo
│ - Statuslogik          │     ae-raumklima-bootcamp-codebase/app
│ - Verlauf              │
└────────────────────────┘
```

## Verantwortlichkeiten

| Schicht | Wer              | Liefert                                             |
|---------|------------------|-----------------------------------------------------|
| Sensor  | Plattformentwickler | Funktionierende Firmware, sendet Messwerte an den Ingest-Endpunkt |
| Backend | AE-Trainerteam   | Empfängt Daten, speichert sie, stellt GET-API bereit |
| App     | Lernende         | Web-Frontend, das die GET-API konsumiert            |

## Warum diese Trennung?

- **Plattformentwickler** müssen sich nicht mit Web-Apps auskennen
- **Lernende** müssen sich nicht mit Sensoren und MySQL auseinandersetzen
- **Backend** ist die einzige Schnittstelle – Vertrag ist im [API-Vertrag](api-vertrag.md) festgehalten
- Jede Schicht kann unabhängig ersetzt werden, solange der Vertrag eingehalten wird

## Zwei Repositories

| Repo                                  | Inhalt                                  | Wer arbeitet hier                |
|---------------------------------------|-----------------------------------------|----------------------------------|
| `ae-raumklima-bootcamp`               | Dieser Lernleitfaden (MkDocs)           | Trainer                          |
| `ae-raumklima-bootcamp-codebase`      | App-Code + Backend                      | Lernende (App), Trainer (Backend)|

## Betriebsmodi des Backends

Das Backend läuft in zwei Modi – umgeschaltet per env-Variable `USE_DB`:

| Modus             | Wann                                              | Datenpersistenz    |
|-------------------|---------------------------------------------------|--------------------|
| **In-Memory**     | Lokale Entwicklung, Lernenden-Demos               | Daten weg nach Neustart, deterministische Mock-Werte |
| **MySQL + PHPMyAdmin** | Echtes Setup mit Sensoren, Demo-Show, produktiv | Persistiert in MySQL-Container      |

Wechsel zwischen den Modi: `USE_DB=true` in `.env` setzen, dann `docker compose up -d` (MySQL) oder `npm start` ohne Docker (In-Memory).
