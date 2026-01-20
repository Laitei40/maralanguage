import { defineCollection, z } from 'astro:content';

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    phase: z.string().default('Phase I: The Foundation'),
    module: z.string().default('Module X: General'),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    order: z.number(),
    description: z.string()
  })
});

export const collections = { lessons };
