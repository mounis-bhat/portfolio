---
title: UI Prompter
description: A context-aware, dual-engine tool that distills Figma frames and design screenshots into lightweight, accurate "design blueprints" for AI coding assistants.
year: 2026
category: Dev tool
tags: [Go, SQLite, Figma API, AI]
featured: true
---

## Overview

Sending screenshots of designs straight to coding LLMs is token-heavy, slow, and prone to wrong colours, spacings, and hallucinations. **UI Prompter** sits in the middle: it turns heavy visual designs into compact, high-accuracy "design blueprint" markdown, then writes an instructional `intent.md` and the required assets straight into your project folder — ready to hand off to your AI coding assistant.

## Two input engines

- **Figma engine** — paste one or more Figma frame URLs. The tool walks each node tree via the Figma API and parses it into flexbox-equivalent layouts with accurate colours, typography, and structure. Add several URLs (desktop, tablet, mobile) and they merge into a single responsive blueprint, with breakpoints inferred from the real frame widths.
- **Vision engine** — upload a screenshot or mockup and a vision LLM (auto-selecting the best available model on your key) extracts layout, palette, and design tokens. It also scans the target project — frameworks, Tailwind tokens, existing components — and folds that context into the prompt.

## Tech

- **Backend:** Go (`net/http`)
- **Storage:** SQLite via SQLC + Goose, caching blueprints keyed by stable Figma node IDs so repeat runs are instant
- **Frontend:** a pure HTML/JS/CSS SPA embedded into the Go binary with `embed.FS`, using a custom hash router and native `document.startViewTransition()`

## Why I built it

Handing designs to coding agents kept producing near-misses. I wanted a deterministic middle-layer that captures *intent* precisely and cheaply, so the agent builds the right thing on the first pass instead of guessing from a lossy screenshot.
