import { BOT_USERNAME } from "@/lib/site";

const FAQS = [
  {
    q: "Is Flash SolanaSwap custodial?",
    a: "Yes, the bot holds a wallet on your behalf so trades execute instantly from chat. Keys are encrypted at rest with AES-256-GCM under a rotating master key, gated by your argon2id PIN, and you can export your private key at any time (the reveal self-destructs after 30 seconds). Treat it like a hot wallet: keep trading balances, not your life savings.",
  },
  {
    q: "What does a swap cost?",
    a: "A flat 0.5% platform fee per swap, plus the usual Solana network fee. Quotes are locked for 15 seconds and show the exact receive amount before you confirm; no hidden spreads.",
  },
  {
    q: "Which tokens can I trade?",
    a: "Any token routable through Jupiter on Solana mainnet: SOL, USDC, BONK, JUP and the long tail of SPL tokens. The bot quotes the best route across all major Solana DEXs.",
  },
  {
    q: "How do limit orders and TP/SL work?",
    a: "You set a target rate (limit) or USD trigger price (TP/SL). Background engines poll the market every 15 seconds and fill exactly once; limit orders live for 7 days, TP/SL watches around the clock.",
  },
  {
    q: "How does the referral program pay?",
    a: `Share your personal link (t.me/${BOT_USERNAME}?start=ref_CODE). You earn 25% of the platform fee on every swap your referrals make, accrued automatically and paid out in SOL once you cross 0.01 SOL.`,
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <span className="text-[13px] font-extrabold uppercase tracking-[3px] text-amber">Questions</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[46px]">
            Asked <span className="grad-text">often.</span>
          </h2>
        </div>
        <div className="mx-auto mt-11 max-w-[820px]">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group mb-3 overflow-hidden rounded-2xl border border-line bg-panel/60 transition-colors open:border-amber/45"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-base font-bold marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="text-[22px] font-normal leading-none text-amber transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
