---
# ============================================================
# KOOLKATZ — Project template (this file is ignored by the build:
# filenames starting with "_" are excluded).
#
# To add a project:
#   1. Create a folder: src/content/projects/tuni/<project-slug>/
#      (or .../any/<project-slug>/)
#   2. Copy this file into it as index.md and fill it in.
#   3. Drop the project's images next to it; MP4s/PDFs go in
#      public/media/<project-slug>/ and are referenced by absolute path.
# Full-quality images are fine — Astro optimizes them at build time.
# ============================================================
title: 'Project Name'
owner: tuni # tuni | any | both
categories: [motion-graphics] # video-editing | social-content | motion-graphics | branding | web-digital | visual-design | experimental (one or more)
year: 2026 # optional — omit if unknown (never invent)
kind: client # optional — client | personal | academic
client: 'Client Name' # optional
role: 'Art Direction & Motion' # optional
tools: [after-effects, figma] # metadata only — never used for navigation
cover: ./cover.jpg
coverAlt: 'Short description of the cover image'
# media renders in this exact order — mix types freely
media:
  - { type: image, src: ./01.jpg, alt: 'Description' }
  - { type: video, src: '/media/project-slug/clip.mp4', poster: ./poster.jpg }
  - { type: pdf, src: '/media/project-slug/deck.pdf' } # shown as "View full project ↗" link
featured: false # true → appears in the Home split collage
order: 999 # lower = earlier in the grid
---

About text for the project goes here (shown in the Project Overlay).
Keep it brief and written in the project's own terms — KoolKatz frames
the work, it never restyles it.
