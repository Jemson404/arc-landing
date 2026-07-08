# ARC — Two Minds. One Pulse.

A reflection engine for reflective AI: two specialized minds in structured dialogue, producing insight instead of answers.

This repository contains the **landing page and marketing site for the ARC Project**, live at **[extralifestudio.com](https://extralifestudio.com)**. It is the public face of ARC — the philosophy, the architecture, and the case for a different kind of AI — not the ARC runtime itself.

## What is ARC?

Most AI systems are built to react: question in, answer out, as fast as possible. ARC is built to reflect.

ARC pairs two minds with deliberately different jobs:

- **ARC-0 (Observe)** — the witnessing mind. It grounds: *What do I notice? What patterns am I seeing? How does this connect to what came before?*
- **ARC-1 (Explore)** — the exploring mind. It diverges: *What if? What might be? What haven't we considered?*

Their dialogue — inspectable, contract-bound, and unhurried — crystallizes into **✦ Sparks**: compact insights with the supporting evidence attached. A Spark is not an answer or a notification; it offers an interpretation and leaves the interpreting, and all of the acting, to you.

The project's core principles:

> Reflection > Reaction · Privacy > Personalization · Balance > Brilliance · Meaning > Metrics · Sparks > Notifications

To go deeper, read [What Is Reflective AI?](https://extralifestudio.com/reflective-ai/), the [Philosophy](https://extralifestudio.com/philosophy/), and the [Manifesto](https://extralifestudio.com/manifesto/).

## Site structure

| Route | Purpose |
| --- | --- |
| [`/`](https://extralifestudio.com/) | Overview — Two Minds. One Pulse. |
| [`/reflective-ai/`](https://extralifestudio.com/reflective-ai/) | What Is Reflective AI? — the category-defining essay |
| [`/philosophy/`](https://extralifestudio.com/philosophy/) | The law of reflection and the two-mind architecture |
| [`/manifesto/`](https://extralifestudio.com/manifesto/) | A declaration of reflective intelligence |
| [`/developers/`](https://extralifestudio.com/developers/) | Architecture, contracts, and contribution principles |
| [`/investors/`](https://extralifestudio.com/investors/) | Category thesis and business model |
| [`/believers/`](https://extralifestudio.com/believers/) | The vision — technology that returns humans to themselves |
| [`/users/`](https://extralifestudio.com/users/) | The two-mind dialogue, demonstrated |
| [`/downloads/`](https://extralifestudio.com/downloads/) | Official ARC documents |
| [`/license/`](https://extralifestudio.com/license/) | ARC-Reflective Use License v1.0 |

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router, static export)
- React 19
- Tailwind CSS 4
- MDX for long-form content
- GSAP for the hero animation, lucide-react for icons
- Deployed on Vercel

## Local development

```bash
npm install
npx next dev
```

Open [http://localhost:3000](http://localhost:3000).

The production build is a fully static export:

```bash
npx next build
```

The site is emitted to `out/`.

## License & authorship

© 2026 Albira Rahman — concept, philosophy, and design.

Licensed under the **ARC-Reflective Use License v1.0** — non-commercial, attribution required. See [`public/arc_license.txt`](public/arc_license.txt) or the [license page](https://extralifestudio.com/license/).
