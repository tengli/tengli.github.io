import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({
    base: './src/content/articles',
    pattern: '**/*.{md,mdx}',
  }),

  schema: z.object({
    locale: z.enum(['en', 'zh']),
    title: z.string(),
    description: z.string(),

    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    category: z.enum([
      'ai-tech',
      'learning-development',
      'society-culture',
      'history-cities',
      'australia-life',
    ]),

    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),

    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const shows = defineCollection({
  loader: glob({
    base: './src/content/shows',
    pattern: '**/*.{md,mdx}',
  }),

  schema: z.object({
    locale: z.enum(['en', 'zh']),
    title: z.string(),
    description: z.string(),

    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    showType: z.enum(['podcast', 'video', 'audio']),

    platform: z.enum([
      'YouTube',
      'Bilibili',
      'Podcast',
      '其他',
    ]),

    episodeNumber: z.number().int().positive().optional(),
    duration: z.string().optional(),

    cover: z.string().optional(),
    externalUrl: z.string().url().optional(),
    embedUrl: z.string().url().optional(),

    tags: z.array(z.string()).default([]),

    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.{md,mdx}',
  }),

  schema: z.object({
    locale: z.enum(['en', 'zh']),
    title: z.string(),
    description: z.string(),

    startDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    status: z.enum([
      'planning',
      'building',
      'maintaining',
      'completed',
      'paused',
    ]),

    techStack: z.array(z.string()).default([]),

    repositoryUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    cover: z.string().optional(),

    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  articles,
  shows,
  projects,
};
