# Physiotherapie Musterfrau

Beispielwebsite einer fiktiven Physiotherapiepraxis. Sie ist eine Referenz für den Webdesign-Service von
[Hannes Schaletzky](https://hschaletzky.com) und zeigt bewusst genau das Paket „Website-Erstellung“: fünf Seiten in
einer Sprache plus Impressum und Datenschutz.

**Live:** https://physio-musterfrau.hschaletzky.com

## Drei Designs, ein Inhalt

Die Seite gibt es in drei Stilen, umschaltbar in der Demo-Leiste oder per Link:

| Stil          | Link                   | Idee                                                                     |
| ------------- | ---------------------- | ------------------------------------------------------------------------ |
| Ruhepuls      | `/?stil=ruhepuls`      | Ruhig und mittig: rundes Foto auf der Pulslinie, Atemübung 4 – 7 – 8 (Standard) |
| Lehrbuch      | `/?stil=lehrbuch`      | Anatomie-Atlas: Serifenschrift, Wirbelsäulen-Tafel, Abbildungen, Kapitel  |
| Trainingsplan | `/?stil=trainingsplan` | Sportphysio: Millimeterraster, Übungsplan, Winkelmesser, Datenblätter    |

Alle Stile teilen Markup, Inhalte und Daten. Ruhepuls steckt in `global.css` und den Komponenten, die anderen
beiden sind je eine Datei in `src/styles/stile/`, die über `<html data-stil="…">` greift. Elemente, die nur ein Stil
zeigt, tragen die Klasse `nur-<stil>`. Ein kleines Inline-Skript im `<head>` setzt den Stil vor dem ersten Zeichnen
und merkt ihn sich (`localStorage`). Ohne JavaScript gilt Ruhepuls. Die Liste der Stile steht in `src/data/praxis.ts`
(`stile`), die Wirbelsäule und der Winkelmesser werden in `Anatomie.astro` und `Winkel.astro` zur Bauzeit berechnet.

## Stack

- [Astro 7](https://astro.build), komplett statisch, nur ein paar Zeilen JavaScript (Terminanfrage)
- Inhalte als typisierte Daten in `src/data/`, kein CMS
- Bilder über `astro:assets` → AVIF/WebP in mehreren Größen, Schriften selbst gehostet (Fontsource)
- Strikte Content Security Policy mit Hashes, kein Tracking, keine Cookies, keine Drittanbieter, keine Karte
- Ausgeliefert von Caddy in einem schlanken Container, Deployment über das
  [hschaletzky-infra](https://github.com/hannesschaletzky/hschaletzky-infra)-Repo

## Entwicklung

```sh
npm install
npm run dev          # http://localhost:4321
npx astro check      # Typen prüfen
npm run build        # statische Seite nach dist/
```

## Inhalte pflegen

| Was                                  | Wo                                                   |
| ------------------------------------ | ---------------------------------------------------- |
| Praxisdaten, Öffnungszeiten, Menü    | `src/data/praxis.ts`                                 |
| Leistungen und Preise                | `src/data/leistungen.ts`                             |
| Team                                 | `src/pages/praxis.astro`                             |
| Ablauf, Kosten, häufige Fragen       | `src/pages/ihr-termin.astro`                         |
| Farben, Typografie                   | `src/styles/global.css` (`:root`), `src/styles/stile/` |
| Fotos                                | `src/assets/images/` (+ Bildnachweis in `praxis.ts`) |

Die Öffnungszeiten stehen zusätzlich für Suchmaschinen in `src/layouts/BaseLayout.astro` (`oeffnung`).

## Deployment

Jeder Push auf `main` löst `.github/workflows/deploy.yml` aus:

1. `astro check` und Bau des Docker-Images (amd64), Push nach `ghcr.io/hannesschaletzky/physio-musterfrau`
2. `ssh deploy@<server> deploy physio-musterfrau` → Der Server zieht das neue Image und startet den Container neu

Benötigte Secrets (im Environment `production`): `DEPLOY_SSH_KEY`, `DEPLOY_HOST`, `DEPLOY_KNOWN_HOSTS`.
Details stehen im infra-Repo.

## Bildnachweise

Alle Fotos von [Unsplash](https://unsplash.com) (Unsplash-Lizenz). Auf den Fotos sind keine Gesichter zu sehen, die
mit dem erfundenen Team verwechselt werden könnten. Die Liste steht in `src/data/praxis.ts` und auf `/datenschutz/`.
