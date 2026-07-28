import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({
    base: './src/content/articles',
    pattern: '**/*.{md,mdx}',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),

    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    category: z.enum([
      'AI 与科技',
      '学习与开发',
      '社会与文化',
      '历史与城市',
      '澳洲生活',
    ]),

    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  articles,
};