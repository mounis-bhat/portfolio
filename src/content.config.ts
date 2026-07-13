import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number().optional(),
    // Short eyebrow label shown on the generated project tile (e.g. "CLI", "TUI", "Web app", "Client work").
    category: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    github: z.url().optional(),
    url: z.url().optional(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { works, blog };
