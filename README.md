# Portfolio

My personal website and portfolio, live at [mounis.net](https://mounis.net).

Built with **Astro 7**, plain CSS, and the View Transitions API — no UI framework, minimal JavaScript, static output. The site has been rebuilt from scratch more than once: it started on **Next.js 12**, moved to **Astro 5**, and now runs on **Astro 7**.

## Stack

- **[Astro 7](https://astro.build)** — static output, Content Layer collections, View Transitions
- **TypeScript** (strict)
- **Plain CSS** — a small design-token system (colours, type scale, spacing) with light/dark themes via a `data-theme` attribute
- **Self-hosted fonts** — Bricolage Grotesque (display), Instrument Sans (body), Geist Mono (code)
- **[Bun](https://bun.sh)** — runtime and package manager

## Project structure

```text
src/
├── components/       # Astro components (Nav, ProjectCard, ProjectTile, …)
├── content/          # Markdown content collections
│   ├── works/        # Projects shown on /works
│   └── blog/         # Blog posts
├── content.config.ts # Collection schemas (Zod)
├── data/             # Structured data (experience, skills, uses)
├── layouts/          # BaseLayout
├── pages/            # File-based routes
└── styles/           # Global CSS + design tokens
```

## Commands

All commands are run from the root of the project:

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `bun install`       | Install dependencies                         |
| `bun run dev`       | Start the dev server at `localhost:4321`     |
| `bun run build`     | Build the production site to `./dist/`       |
| `bun run preview`   | Preview the production build locally         |
| `bunx astro check`  | Type-check `.astro` files and content        |

## License

See [LICENSE](./LICENSE).
