import { TG_URL } from "@/lib/site";
import { LogoMark, Wordmark } from "./Logo";
import { TelegramIcon } from "./icons";

export default function Footer() {
  return (
    <>
      {/* ── Final CTA ── */}
      <section className="relative py-24 text-center md:py-28">
        <div
          className="glow left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 bg-ember opacity-[0.16]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-[56px] md:leading-[1.08]">
            Ready to move at <span className="grad-text">flash speed?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-muted">
            Your wallet is one tap away. No sign-up, no email; just Telegram.
          </p>
          <a
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-grad mt-9 inline-flex items-center gap-2.5 rounded-2xl px-9 py-4 text-[17px] font-bold"
          >
            <TelegramIcon size={20} />
            Launch Flash SolanaSwap
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative border-t border-line py-12 text-sm text-muted">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-between gap-8 px-6">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark size={28} />
              <Wordmark className="text-base" />
            </div>
            <p className="mt-4 max-w-[540px] text-xs leading-relaxed text-[#7A8296]">
              Flash SolanaSwap Bot is a trading tool that operates a custodial wallet on your behalf.
              Cryptocurrency trading involves substantial risk of loss. Nothing on this site is financial,
              investment or trading advice. Swap fees (0.5%) and Solana network fees apply. Never trade
              more than you can afford to lose.
            </p>
          </div>
          <div className="md:text-right">
            <div className="flex gap-5 font-semibold md:justify-end">
              <a href="#features" className="transition-colors hover:text-white">Features</a>
              <a href="#faq" className="transition-colors hover:text-white">FAQ</a>
              <a href={TG_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                Telegram ↗
              </a>
            </div>
            <p className="mt-4">© 2026 Flash SolanaSwap Bot · Built on Solana · Powered by Jupiter</p>
          </div>
        </div>
      </footer>
    </>
  );
}
