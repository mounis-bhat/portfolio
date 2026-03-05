---
title: notes-cli
description: A minimal command-line note-taking tool written in Go. Fast, file-based, and built to stay out of the way.
year: 2025
tags: [Go, CLI]
github: https://github.com/mounis-bhat/notes-cli
featured: false
---

## Overview

A small CLI for creating and searching plain-text notes from the terminal. Notes are stored as markdown files in a directory of your choice — no proprietary format, no sync service.

## Commands

```bash
notes new "title of note"   # create a new note
notes list                  # list all notes
notes search "query"        # full-text search across notes
notes edit "title"          # open in $EDITOR
```

## Design decisions

- **Plain files** — your notes are just `.md` files. No lock-in.
- **$EDITOR** — opens whatever editor you have configured, not a built-in one.
- **No config file required** — sensible defaults, override via env vars.
