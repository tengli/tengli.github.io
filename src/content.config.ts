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
    title: z.string(),
    description: z.string(),

    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    showType: z.enum([
      '播客',
      '视频',
      '音频',
    ]),

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
    title: z.string(),
    description: z.string(),

    startDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    status: z.enum([
      '规划中',
      '开发中',
      '持续维护',
      '已完成',
      '暂停',
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