---
title: CSS Custom Properties Patterns I Actually Use
description: Beyond simple theming — how I use CSS variables for responsive spacing, component APIs, and stateful UI without a single line of JavaScript.
pubDate: 2025-11-12
tags: [CSS, Frontend, Design Systems]
---

CSS custom properties have been around long enough that most articles cover the basics: define a `--color-primary`, swap it in a `[data-theme="dark"]` selector, done. That's useful, but it barely scratches the surface of what they can do.

Here are the patterns I actually reach for in day-to-day work.

## Component API via custom properties

Instead of juggling modifier classes, you can expose a component's internals as CSS variables and let the caller tune them:

```css
.card {
  --card-radius: var(--radius-md);
  --card-pad: var(--space-6);
  --card-shadow: var(--shadow-sm);

  border-radius: var(--card-radius);
  padding: var(--card-pad);
  box-shadow: var(--card-shadow);
}
```

Now a parent can write:

```css
.featured-card {
  --card-radius: var(--radius-lg);
  --card-shadow: var(--shadow-lg);
}
```

No extra class needed on `.card` itself. The component stays clean; the caller decides the variant. This is what design token systems do under the hood.

## Stateful properties with JS

Custom properties are the cleanest bridge between JavaScript state and CSS. Instead of toggling classes, set a single property:

```js
document.documentElement.style.setProperty('--sidebar-width', collapsed ? '64px' : '240px');
```

Then in CSS, everything that depends on sidebar width just reads `--sidebar-width`. One source of truth, zero cascade fights.

## Responsive spacing without media queries

Rather than writing the same breakpoint in a dozen places, I calculate spacing from a single multiplier:

```css
:root {
  --space-unit: clamp(0.75rem, 2vw, 1rem);
}

.section {
  padding-block: calc(var(--space-unit) * 6);
  gap: calc(var(--space-unit) * 2);
}
```

The whole spacing scale breathes with the viewport. One variable, every element updates.

## Fallback chains for progressive enhancement

Custom properties support fallback values, and you can chain them:

```css
.button {
  background: var(--button-bg, var(--accent, #88ccca));
}
```

This is useful when building component libraries: consumers can override `--button-bg`, but if they don't, it gracefully falls through to the global accent, then to a hard-coded default.

---

None of these patterns are exotic — they're just the boring, robust ways to write CSS that scales. The goal is always fewer moving parts, not more.
