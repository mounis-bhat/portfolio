---
title: View Transitions in Astro Are Better Than I Expected
description: How Astro's ClientRouter and the View Transition API let me add page morphing and SPA-like navigation to a fully static site with almost no JavaScript.
pubDate: 2026-01-14
tags: [Astro, Frontend, Web APIs]
---

When I rebuilt this portfolio in Astro, I wanted the snappy navigation of a SPA without the overhead of one. The View Transition API — now available in every major browser — is exactly that escape hatch.

## What the API actually does

At its core, `document.startViewTransition()` does three things:

1. Captures a screenshot of the current state
2. Makes the DOM change happen instantly
3. Animates between the old screenshot and the new live DOM

The default is a cross-fade. But you can target specific elements with `view-transition-name` and give them their own animation — that's where the interesting stuff happens.

## Astro's ClientRouter wires it all up

Astro wraps the native API in `<ClientRouter />`, which intercepts same-origin link clicks and runs transitions between pages automatically. Drop it in your layout and navigation becomes animated with zero extra configuration:

```astro
---
import { ClientRouter } from 'astro:transitions';
---
<head>
  <ClientRouter />
</head>
```

The default cross-fade already feels more polished than a hard reload.

## Morphing elements across pages

The real magic is `transition:name`. Give two elements on different pages the same name and the browser morphs one into the other:

```astro
<!-- Project card on /works -->
<img src={project.data.image} transition:name={`project-image-${slug}`} />

<!-- Hero on /works/[slug] -->
<img src={data.image} transition:name={`project-image-${slug}`} />
```

When you navigate from the grid to the detail page, the thumbnail smoothly expands into the hero image. No JavaScript animation library, no `FLIP` calculation — the browser handles it.

## Persisting elements across transitions

Some elements shouldn't animate at all — the navbar being the obvious one. `transition:persist` keeps an element mounted across navigations:

```astro
<Nav transition:persist />
```

Without this, the nav fades out and back in on every page change, which looks wrong. With it, the nav stays rock-solid while the content transitions beneath it.

## The gotchas

**Scroll position.** The browser resets scroll on navigation by default. For most page transitions this is correct, but if you're animating an element that's in the middle of the page, you might need `transition:animate="none"` on the scroll container.

**Third-party scripts.** Anything that attaches to `DOMContentLoaded` won't re-run on client-side navigation. You need to listen for `astro:page-load` instead.

**Reduced motion.** Always wrap custom animations in a `prefers-reduced-motion` media query. The browser respects this for the default cross-fade, but custom keyframes are your responsibility.

---

View Transitions are one of those APIs where the spec seemed academic until you actually use it. Now it's the first thing I add to any content-heavy site.
