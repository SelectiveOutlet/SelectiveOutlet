# Selective Outlet — Next.js store

Port of `../index.html` to Next.js (App Router, TypeScript, plain CSS).

## Setup

```bash
cd store
npm install
npm run dev
```

## Assets to add to `public/`

The original page embedded its images as base64. Export them once:

- `public/logo.webp` — the `LOGO` data-URI from `index.html` (`data:image/webp;base64,...`)
- `public/hero.jpg` — the `hero` JPEG from the `#state` JSON in `index.html`

Quick way (macOS):

```bash
# paste the base64 payload (without the data:...;base64, prefix) into the files first
base64 -d logo.b64 > public/logo.webp
base64 -d hero.b64 > public/hero.jpg
```

If `hero.jpg` is missing, set `hero` to `""` in `lib/data.ts` to show the placeholder.

## Structure

- `app/layout.tsx` — fonts (Unbounded / Onest / JetBrains Mono via `next/font`), metadata, theme colour
- `app/page.tsx` — composes the sections
- `app/globals.css` — styles ported 1:1 from `index.html`
- `components/` — Header, Hero, Outlet (size filter + grid), ProductCard, OrderModal, Reviews, ReviewModal, Contact, Footer, Modal, AfterCopy
- `lib/config.ts` — Instagram handle, currency, site name
- `lib/data.ts` — products / reviews / hero (replace samples with real data or fetch from a CMS/API)

## Not ported

The in-page owner/admin bar relied on the `window.claude` artifact API to republish the HTML. In Next.js, manage the catalogue via `lib/data.ts` or hook up a CMS/API.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
