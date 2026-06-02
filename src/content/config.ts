import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    guideId: z.string(),
    icon: z.string(),
  }),
});

export const collections = { guides };
