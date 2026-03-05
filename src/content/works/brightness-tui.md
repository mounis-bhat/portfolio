---
title: brightness-tui
description: A terminal UI tool for controlling screen brightness on Linux, built in Go using the Bubble Tea framework.
year: 2025
tags: [Go, TUI, Linux, Bubble Tea]
github: https://github.com/mounis-bhat/brightness-tui
featured: true
---

## Overview

A terminal-based brightness controller for Linux that uses the Bubble Tea framework for the interactive UI. Built to avoid needing a GUI application for a task that should take one keypress.

## Features

- Interactive TUI with keyboard controls
- Reads and writes to `/sys/class/backlight/`
- Single binary — no daemon, no dependencies at runtime
- Works with any backlight device exposed by the kernel

## Why I built it

I was tired of reaching for a graphical brightness slider when I was already in the terminal. A simple TUI felt like exactly the right abstraction — visible feedback, keyboard-driven, instant.

This was also a good excuse to learn the Bubble Tea framework and get comfortable with Go's approach to file I/O and system interfaces.
