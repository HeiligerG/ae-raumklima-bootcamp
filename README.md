# AE Raumklima Bootcamp

Dokumentations-Website für das IT-Bootcamp «Raumklima-Monitor».  
Geführter Lernleitfaden für komplett neue Applikationsentwickler-Lernende.

## Was wird gebaut?

Eine Web-App zur Überwachung von Raumklima in Lernräumen – mit Temperatur, Luftfeuchtigkeit, Statusanzeige und Verlauf.

## Lokales Setup

```bash
# Abhängigkeiten installieren
pip install -r requirements.txt

# Lokalen Dev-Server starten (mit Live-Reload)
mkdocs serve

# Statische Seite bauen
mkdocs build
```

## GitHub Pages

Die Website wird automatisch via GitHub Actions bei jedem Push auf `main` deployed.

### Aktivierung

1. Repository-Settings → Pages
2. Source: **GitHub Actions**

Keine weiteren Einstellungen notwendig – das Deployment läuft über `.github/workflows/deploy.yml`.

## Ordnerstruktur

```
├── .github/workflows/   # GitHub Actions Deployment
├── docs/                # Alle Markdown-Inhalte
│   ├── index.md         # Startseite
│   ├── start/           # Einführungs-Material
│   ├── tag-1/ … tag-5/  # Tagespläne mit Theorie, Übung, Projekt, Checkpoint
│   ├── projekt/          # Projektübersicht, Backlog, Mockdaten, API-Vertrag
│   ├── trainer/          # Hinweise für Trainer
│   └── assets/           # Bilder & Downloads
├── mkdocs.yml           # MkDocs-Konfiguration
├── requirements.txt     # Python-Abhängigkeiten
└── README.md            # Diese Datei
```

## Hinweise

- Alle Inhalte sind auf **Deutsch** (Schweizer Schreibweise)
- Keine sensiblen Daten (Tokens, Passwörter) in die Doku committen
- Die Seite ist für **Anfänger ohne Vorkenntnisse** konzipiert
