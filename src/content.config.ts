import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Portfolio categories (WEBSITE_BRIEF.md §9).
 * "All" is a UI filter, not a category.
 * Tools are metadata, never the architecture of the portfolio.
 */
export const CATEGORIES = [
  'video-editing',
  'social-content',
  'motion-graphics',
  'branding',
  'web-digital',
  'visual-design',
  'mockups',
  'experimental',
  'audiovisual',
  '3d',
  'illustration',
] as const;

const projects = defineCollection({
  // Files starting with "_" are ignored → _TEMPLATE.md is safe to keep around.
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      owner: z.enum(['tuni', 'any', 'both']),
      categories: z.array(z.enum(CATEGORIES)).min(1),
      /** Optional metadata: omitted fields simply don't render —
          never invented. Fill in as the real data is confirmed. */
      year: z.number().int().optional(),
      /** Academic work is presented alongside professional work;
          its academic nature is metadata only (BRIEF §9). */
      kind: z.enum(['client', 'personal', 'academic']).optional(),
      client: z.string().optional(),
      role: z.string().optional(),
      tools: z.array(z.string()).default([]),
      /** Optional: projects without a local cover render the neutral tile. */
      cover: image().optional(),
      coverAlt: z.string().optional(),
      media: z
        .array(
          z.discriminatedUnion('type', [
            z.object({
              type: z.literal('image'),
              src: image(),
              alt: z.string(),
            }),
            z.object({
              type: z.literal('video'),
              /** Source is configurable per project: a local file path
                  (e.g. "/media/slug/reel.mp4") or an embed/stream URL.
                  Final video hosting strategy is pending — the player
                  component will resolve this field accordingly. */
              src: z.string(),
              poster: image().optional(),
              caption: z.string().optional(),
            }),
            z.object({
              type: z.literal('pdf'),
              /** Rendered as a "VIEW FULL PROJECT ↗" link, not embedded. */
              src: z.string(),
              label: z.string().optional(),
            }),
          ]),
        )
        .default([]),
      /** Appears in the Home split collage for its owner. */
      featured: z.boolean().default(false),
      /** Manual ordering within the grid (lower = earlier). */
      order: z.number().default(999),
      // The markdown body of the file is the "About" text of the project.
    }),
});

const people = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/people' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      /** Short list, shown discreetly — never a giant CV (BRIEF §9). */
      tools: z.array(z.string()).default([]),
      /** Grouped toolkit shown below the bio on the portfolio page. */
      toolGroups: z
        .array(z.object({ label: z.string(), items: z.array(z.string()).min(1) }))
        .default([]),
      portrait: image().optional(),
      portraitAlt: z.string().optional(),
      /** Contact routing key used by the serverless contact endpoint. */
      contactKey: z.enum(['tuni', 'any']),
      // The markdown body is the short intro/bio.
    }),
});

export const collections = { projects, people };
