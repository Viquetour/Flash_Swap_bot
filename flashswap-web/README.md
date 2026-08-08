# Flash SolanaSwap — Website

Marketing site for **Flash SolanaSwap Bot** (Solana swaps inside Telegram).
Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript. Zero runtime
dependencies beyond Next/React — all icons and the logo are inline SVG.

## Quick start

```bash
npm install
npm run dev        # → http://localhost:3000
```

## Build

```bash
npm run build      # type-check + production build (server-rendered, .next/)
npm start          # serve the production build
```

The build pipeline runs three steps in order:

1. **`npm run clean`** — removes stale `.next/`, `out/` and `tsconfig.tsbuildinfo`
2. **`npm run typecheck`** — strict TypeScript check (`tsc --noEmit`)
3. **`next build`** — production build

### Static export

For a fully static site (no Node server) that can be hosted on Netlify,
Cloudflare Pages, GitHub Pages, or any static host:

```bash
npm run build:static   # → outputs to out/
npm run preview        # → serve out/ locally to verify
```

`build:static` sets the `NEXT_PUBLIC_STATIC=1` env var which `next.config.ts`
reads to enable `output: "export"` — so you can switch between server-rendered
and static builds without touching any config files.

## ⚙️ One required edit before launch

Open **`lib/site.ts`** and set your real bot handle:

```ts
export const BOT_USERNAME = "FlashSolanaSwapBot"; // ← your live bot username
```

Every "Open in Telegram" button, the referral example link and the footer link
derive from this single constant.

Also update `metadataBase` in `app/layout.tsx` once you know your domain.

## Deploy

- **Netlify**: a `netlify.toml` at the repo root wires everything up
  automatically (base dir `flashswap-web/`, build command `npm run build:static`,
  publish dir `out/`). Import the repo → Deploy. No manual config needed.
- **Vercel**: import the repo → deploy. No config needed.
- **Any static host**: run `npm run build:static` — the site is fully static
  and lands in `out/`, ready for Netlify / Cloudflare Pages / GitHub Pages / any
  static host.

## Structure

```
app/
  layout.tsx        metadata (OG/Twitter), self-hosted fonts
  fonts/            Inter + Space Grotesk variable woff2 (self-hosted)
  page.tsx          section assembly
  globals.css       brand tokens + utilities (Tailwind v4 @theme)
  icon.svg          favicon (auto-served by Next)
components/
  Logo.tsx          brand mark + wordmark (inline SVG)
  Nav.tsx           sticky glass nav
  Hero.tsx          hero + Telegram chat mockup
  Sections.tsx      Features · Security · HowItWorks · Referral
  Footer.tsx        final CTA + footer + risk disclaimer
  icons.tsx         inline SVG icon set
lib/
  site.ts           ★ BOT_USERNAME + brand constants
public/
  logo.svg          app icon (SVG)
  logo-horizontal.svg  lockup used for OG image
```

## Brand assets

The full logo suite (app icon, favicon, horizontal lockup, brand sheet) ships
alongside this project in `flashswap-brand/` as SVG. To export PNGs (e.g. for a
Twitter/OG card at 1200×630), open any SVG in Figma/Inkscape or run
`npx @aspect-ratio/cli` / `rsvg-convert` and save into `public/`.

## Copy facts (sourced from the bot codebase)

- 0.5% flat swap fee · 15s quote TTL · 1% default slippage (5% hard cap)
- Limit orders (7-day expiry) · TP/SL with USD triggers
- AES-256-GCM envelope encryption · argon2id PIN · 30s self-destruct key export
- Referrals: 25% of platform fees, paid in SOL · EN/RU UI

_Nothing on this site is financial advice._
