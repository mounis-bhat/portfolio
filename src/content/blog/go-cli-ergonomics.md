---
title: Making Go CLIs Feel Good to Use
description: Lessons learned building small CLI tools in Go — flag design, output formatting, and the details that separate a tool you reach for from one you forget.
pubDate: 2025-12-08
tags: [Go, CLI, Developer Tooling]
---

I've built a handful of small CLI tools in Go over the past year — a commit message generator, a notes manager, a brightness controller. Each one taught me something about what makes a CLI feel good versus merely functional.

## Flags should be discoverable, not memorised

The first thing someone does with an unfamiliar CLI is run `--help`. Make that output genuinely useful:

```
$ commit-gen --help

Generate a conventional commit message from your staged diff.

Usage:
  commit-gen [flags]

Flags:
  -d, --dry-run   Print the message without committing
  -m, --model     LLM model to use (default "claude-haiku-4-5")
  -v, --verbose   Show the raw diff being sent
```

Short flags for frequent operations, long flags for everything. Group them logically. Don't use positional arguments when a flag name makes intent clearer.

## Exit codes matter more than you think

Scripts compose CLIs. If your tool always exits `0`, you break every pipeline that wraps it. Use the standard:

- `0` — success
- `1` — general error
- `2` — misuse (bad flags, wrong arguments)

In Go this means resisting the urge to `log.Fatal` everywhere and instead returning errors up to `main`, where you can `os.Exit` with the right code.

## Colour is context, not decoration

Terminals that don't support colour exist. Pipes exist. CI exists. A tool that vomits ANSI escape codes into a log file is a bad tool.

The rule I follow: check `os.Stdout.Fd()` with `term.IsTerminal` before enabling colour. When piped, fall back to plain text. When the user passes `--no-color` or `NO_COLOR` env is set, always strip it.

## Streaming output beats spinners

For operations that take time, stream output if you can:

```go
cmd := exec.Command("git", "diff", "--staged")
cmd.Stdout = os.Stdout
cmd.Stderr = os.Stderr
cmd.Run()
```

If you can't stream (e.g. you need to transform the result first), show a minimal spinner — but kill it before printing the result, otherwise you get interleaved garbage.

## Configuration: flag → env → file → default

Users configure tools in different contexts — scripts use env vars, interactive use prefers flags, and persistent preferences live in a config file. Respect that hierarchy. cobra + viper wire this up almost for free in Go.

---

A CLI tool is a product with one user: you, in six months. Build it to be the tool you'll actually want to reach for.
