---
title: yanker
description: A terminal clipboard helper for named values and secrets — browse, filter, preview, and copy from a Bubble Tea TUI, or reach for quick CLI commands without opening the full interface.
year: 2026
category: TUI
tags: [Go, TUI, Bubble Tea, CLI]
github: https://github.com/mounis-bhat/yanker
featured: true
---

## Overview

`yanker` is a small terminal helper for the values you copy all day — tokens, IDs, connection strings, snippets. It opens straight into a Bubble Tea TUI for browsing, filtering, previewing, and copying entries, and it also exposes quick CLI commands for add/get/pick flows when you don't want the full interface.

## Features

- Single-binary, single-file app structure
- JSON-backed storage with atomic saves and restrictive file permissions
- In-memory fuzzy filtering across key and description
- Secret-aware previews that never render full secret values in the TUI
- Clipboard copy from both the TUI and the CLI
- In-app add, edit, and delete flows

## Why I built it

I kept juggling secrets and named values across shells and password managers for things that weren't quite secrets but weren't throwaway either. `yanker` is the small, keyboard-driven middle ground — fast to open, safe about what it shows, and scriptable when I already know the key I want.
