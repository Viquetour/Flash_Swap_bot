# Flash SolanaSwap — Website

Marketing site for **Flash SolanaSwap Bot** (Solana swaps inside Telegram).
Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript. Zero runtime
dependencies beyond Next/React — all icons and the logo are inline SVG.

## Quick start

```bash
npm install
npm run dev        # → http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## ⚙️ One required edit before launch

Open **`lib/site.ts`** and set your real bot handle:

```ts
export const BOT_USERNAME = "FlashSolanaSwapBot"; // ← your live bot username
```

Every "Open in Telegram" button, the referral example link and the footer link
derive from this single constant.

Also update `metadataBase` in `app/layout.tsx` once you know your domain.

## Deploy

- **Vercel** (recommended): import the repo → deploy. No config needed.
- **Static export**: uncomment `output: "export"` in `next.config.ts`, then
  `npm run build` — the site is fully static and lands in `out/`, ready for
  Netlify / Cloudflare Pages / GitHub Pages / any static host.

## Structure

```
app/
  layout.tsx        metadata (OG/Twitter), fonts (Inter + Space Grotesk)
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
