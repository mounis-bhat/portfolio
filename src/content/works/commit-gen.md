---
title: commit-gen
description: A CLI tool written in Go that generates meaningful, conventional commit messages from your staged git diff.
year: 2025
tags: [Go, CLI, Git, AI]
github: https://github.com/mounis-bhat/commit-gen
featured: true
---

## Overview

`commit-gen` is a CLI tool that reads your staged `git diff` and generates a conventional commit message. It uses an LLM API under the hood, but the interface is as simple as running a command.

## Usage

```bash
git add .
commit-gen
# → feat(auth): add JWT refresh token rotation
```

## Why I built it

Writing good commit messages consistently is hard, especially in the middle of a flow state. I wanted something that inferred intent from the diff rather than just echoing filenames.

Built in Go because I wanted a single binary I could drop anywhere in my PATH — no runtime, no install script.
