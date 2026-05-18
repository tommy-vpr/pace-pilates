# Reform Pilates — Next.js + Tailwind

Production-grade landing page. App Router, Tailwind v4, TypeScript, Server Components.

## File structure

```
app/
├── layout.tsx       # Root layout · loads Fraunces + Geist via next/font/google
├── page.tsx         # Homepage — all sections inline as components
└── globals.css      # Tailwind v4 entry · brand palette in @theme
```

## Setup

Drop into a fresh Next.js 15 app:

```bash
npx create-next-app@latest reform-pilates --typescript --tailwind --app --no-src-dir
cd reform-pilates
# Replace the generated app/ files with the three in this folder
pnpm dev
```

The `next/font/google` imports handle Fraunces + Geist automatically — no font files to download, no FOUT.

## Customization

**Palette** is in `globals.css` under `@theme`:
- `--color-cream` / `cream-2` / `cream-3` — warm neutrals (lightest → mid)
- `--color-espresso` — deep brown, used for ink and the dark Philosophy/Footer sections
- `--color-sage` — single accent green (italic hero word, member tag, pricing border)
- `--color-terra` — limited-spots warning

Change one variable and it propagates everywhere.

**Content** lives in the data constants at the top of `page.tsx`:
- `NAV_LINKS`, `STATS`, `CLASSES`, `SCHEDULE`, `PRICING`

When you have real data, swap these arrays for fetches (server component, no `"use client"` needed).

**Imagery** — the gradient blocks in `<Hero>` and `<Classes>` are placeholders. Replace with `next/image` once studio photography exists:

```tsx
import Image from "next/image";
import heroImg from "@/public/hero.jpg";

<div className="aspect-[4/5] rounded-sm overflow-hidden relative">
  <Image src={heroImg} alt="Studio interior" fill className="object-cover" placeholder="blur" />
</div>
```

## Splitting components

Everything sits in `page.tsx` for portability. When sections grow, peel them out:

```
app/
├── _components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   └── ...
├── layout.tsx
└── page.tsx
```

Use the `_components` folder convention (leading underscore) so Next won't treat it as a route.

## Booking wire-up

The `Book` and `Join` buttons in `<Schedule>` are currently static. When ready:

1. Promote `<Schedule>` to a client component (`"use client"`).
2. Pass `scheduleData` as a prop from a server parent that fetches from your booking provider.
3. Wire onClick → checkout / waitlist API.
