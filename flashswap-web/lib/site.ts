/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG — the ONLY file you need to edit before launch.
 *
 *  BOT_USERNAME is your live Telegram bot handle (no "@").
 *  Every "Open in Telegram" button and the referral example derive from it.
 * ─────────────────────────────────────────────────────────────────────────
 */
export const BOT_USERNAME = "Flash_SolanaSwap_bot"; // ← change to your real bot handle

export const TG_URL = `https://t.me/${BOT_USERNAME}`;
export const REFERRAL_EXAMPLE = `${TG_URL}?start=ref_13e210b7`;

export const SITE = {
  name: "Flash SolanaSwap",
  tagline: "Lightning-fast Solana swaps, inside Telegram.",
  description:
    "Flash SolanaSwap is a security-first trading bot inside Telegram: Jupiter-aggregated swaps, limit orders, TP/SL protection and an AES-256-GCM encrypted custodial wallet.",
  // Facts pulled from the bot source (solswap-bot-v2/.env.example + README):
  fee: "0.5%",
  quoteTtl: "15s",
  slippage: "1%",
  referralShare: "25%",
};
