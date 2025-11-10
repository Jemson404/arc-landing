ARC Download Hub — Drop-In Pack (v1.0)
Generated: 2025-11-10T13:41:38

What this adds
--------------
• /data/downloads.ts — central list of your downloadable files
• /components/AnimatedDownloadButton.tsx — hover/accessible download button
• /components/DownloadGrid.tsx — renders a list
• /app/downloads/page.tsx — App Router page
• /pages/downloads.tsx — Pages Router page
• /public/downloads/.gitkeep — keeps folder in git
• /config-snippets/next.config.mjs — full template
• /config-snippets/next.config.headers.partial.mjs — merge-only headers()
• /public/robots.txt — optional

Install
-------
1) Unzip into your Next.js repo (files land in correct folders).
2) If you already have next.config.mjs, merge headers() from config-snippets/next.config.headers.partial.mjs.
   Otherwise move config-snippets/next.config.mjs to repo root.
3) Drop your PDFs/PPTX into /public/downloads/ and ensure names match /data/downloads.ts.
4) Add a nav link to /downloads.
5) Test: npm run build && npm run start
