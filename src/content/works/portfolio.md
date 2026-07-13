---
title: This Portfolio
description: My personal site — rebuilt from scratch more than once, evolving from Next.js 12 to Astro 5 and now Astro 7, with plain CSS and the View Transitions API.
year: 2026
category: Personal site
tags: [Astro, TypeScript, CSS, View Transitions]
featured: true
---

## Overview

The site you're on right now. It began life on **Next.js 12**, was rebuilt on **Astro 5**, and now runs on **Astro 7** — each rewrite a chance to shed weight and get closer to the metal.

## Approach

- **Plain CSS, no framework** — a small design-token system (colours, type scale, spacing) drives everything, with light and dark themes via a `data-theme` attribute.
- **View Transitions API** — client-side routing with morphing project tiles and titles between the works grid and each detail page.
- **Self-hosted fonts** — Bricolage Grotesque, Instrument Sans, and Geist Mono, subset and served locally.
- **Content collections** — projects and posts authored in Markdown, typed with the Astro Content Layer and Zod.

## Why the rewrites

Each move was about doing more with less. Next.js was more machinery than a mostly-static personal site needed; Astro ships almost no JavaScript by default, and every major version has made the build faster and the authoring simpler. Astro 7 moved the compiler and Markdown pipeline to Rust, so builds are quick enough to stop thinking about.
