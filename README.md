# AE Raumklima Bootcamp

Dokumentations-Website für das IT-Bootcamp «Raumklima-Monitor».
Geführter Lernleitfaden für komplett neue Applikationsentwickler-Lernende.

> **Stand**: aktuell wird **V2** entwickelt (Branch `bootcamp-v2`).
> V1-Lauf 2026 war noch nicht V2. Die V2-Änderungen sind in
> `bootcamp-v2`-Branch und werden nach **deiner Freigabe** (Phase 9
> der V2-Tasks) auf `master` gemergt.

## Was wird gebaut?

Eine Web-App zur Überwachung von Raumklima in Lernräumen – mit
Temperatur, Luftfeuchtigkeit, Statusanzeige und Verlauf.

## Was ist neu in V2?

V2 bringt eine **pädagogische Neuausrichtung**:

| Bereich | V1 | V2 |
|---|---|---|
| Theorie | Lange Seiten pro Tag zum Selber-Lesen | 5–6 kurze Happen pro Tag + Trainer-Live-Coding |
| Übungen | Vorbereitete Skeletons | **WOW-Effekt**: leeres Repo, Schritt für Schritt mit Lücken |
| Fallback | 3-stufig inkl. `localStorage` | 2-stufig ohne `localStorage` |
| Tag 4 | Polish + Theorie gemischt | Freies Austoben + Auswahl-Kurzpräsentationen |
| Tag 5 | Demo + Theorie | Nur Demo |
| Trainer-Material | Hier im Lernleitfaden | Eigenes Repo [`ae-trainer-briefing`](https://github.com/HeiligerG/ae-trainer-briefing) |
| Datumsangaben | Konkrete Daten | Nur "Tag 1, Tag 2, …" |

## Lokales Setup

```bash
# Abhängigkeiten installieren
pip install -r requirements.txt

# Lokalen Dev-Server starten (mit Live-Reload)
mkdocs serve

# Statische Seite bauen
mkdocs build
```

## Build testen

```bash
mkdocs build --strict
```

Sollte ohne Warnings durchlaufen.

## GitHub Pages

Die Website wird automatisch via GitHub Actions bei jedem Push
auf `master` deployed.

### Aktivierung

1. Repository-Settings → Pages
2. Source: **GitHub Actions**

Keine weiteren Einstellungen notwendig – das Deployment läuft
über `.github/workflows/deploy.yml`.

## Ordnerstruktur

```
.
├── .github/workflows/   # GitHub Actions Deployment
├── docs/                # Alle Markdown-Inhalte
│   ├── curriculum-v2.md # V2-Curriculum-Überblick
│   ├── sprachstil-v2.md # V2-Sprachrichtlinie
│   ├── index.md         # Startseite
│   ├── start/           # Einführungs-Material (Arbeitsweise, Setup, Git)
│   ├── tag-1/ … tag-5/  # Theorie-Happen + Übungen + Projekte + Checkpoints
│   ├── projekt/          # Projekt-Übersicht + Templates + Fallback-Doku
│   ├── uebungen/         # WOW-Effekt-Übungen + Schritt-Template
│   ├── trainer/          # Stub (umgezogen → ae-trainer-briefing)
│   └── assets/           # Bilder & Downloads
├── mkdocs.yml           # MkDocs-Konfiguration
├── requirements.txt     # Python-Abhängigkeiten
├── v2-changes/          # Planungs-Files für V2-Überarbeitung
└── README.md            # Diese Datei
```

## Verwandte Repos

- **Lernenden-Code**:
  [`ae-raumklima-bootcamp-codebase`](https://github.com/HeiligerG/ae-raumklima-bootcamp-codebase) –
  `app/` für das Hauptprojekt, `uebungen/` für Übungs-Mini-Projekte.
- **Trainer-Material**:
  [`ae-trainer-briefing`](https://github.com/HeiligerG/ae-trainer-briefing) –
  Präsentationen, Live-Coding-Skripte, Trainer-Anweisungen.

## Hinweise

- Alle Inhalte sind auf **Deutsch** (Schweizer Schreibweise).
- Keine sensiblen Daten (Tokens, Passwörter) in die Doku committen.
- Die Seite ist für **Anfänger ohne Vorkenntnisse** konzipiert.
- V1-Material ist noch im Repo, wird in V2 nach und nach ersetzt.
