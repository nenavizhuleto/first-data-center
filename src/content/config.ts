import { defineCollection, z } from 'astro:content';

export const collections = {
	configs: defineCollection({
		schema: z.object({
			title: z.string(),
			cores: z.number(),
			memory: z.string(),
			storage: z.string(),
			price: z.number(),
		}),
	}),
	services: defineCollection({
		schema: z.object({
			disposable: z.boolean(),
			title: z.string(),
			price: z.number(),
			description: z.string(),
		})
	})
};

