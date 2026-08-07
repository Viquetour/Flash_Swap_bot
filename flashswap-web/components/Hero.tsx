import { TG_URL, SITE } from "@/lib/site";
import { LogoMark } from "./Logo";
import { TelegramIcon } from "./icons";

const STATS = [
  { value: SITE.fee, label: "flat swap fee" },
  { value: SITE.quoteTtl, label: "locked quotes" },
  { value: SITE.slippage, label: "default slippage cap" },
  { value: "24/7", label: "order engines" },
];

const SELL_CHIPS = ["SOL", "USDC", "BONK", "JUP"];

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden py-24 md:py-28">
      <div className="grid-floor" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-11 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ── Copy ── */}
        <div>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-amber/5 px-4 py-2 text-[13px] font-bold tracking-wide text-sand backdrop-blur">
            <span className="pulse-dot h-[7px] w-[7px] rounded-full bg-amber shadow-[0_0_12px_#FFA93B]" />
            POWERED BY JUPITER AGGREGATION
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.04] tracking-tighter md:text-[66px]">
            Swap Solana at
            <br />
            <span className="grad-text">lightning speed.</span>
          </h1>
          <p className="mt-5 max-w-[530px] text-lg leading-relaxed text-muted">
            Flash SolanaSwap is a security-first trading bot that lives inside Telegram.
            Best-price swaps, limit orders, TP/SL protection and a custodial wallet with
            bank-grade encryption: no browser, no extensions, no seed-phrase stress.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href={TG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-grad inline-flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-[15px] font-bold"
            >
              <TelegramIcon size={18} />
              Open in Telegram
            </a>
            <a
              href="#features"
              className="btn-ghost inline-flex items-center rounded-2xl px-6 py-3.5 text-[15px] font-bold text-white"
            >
              Explore features
            </a>
          </div>
          <div className="mt-10 flex flex-wrap border-t border-line pt-7">
            {STATS.map((s) => (
              <div key={s.label} className="mr-8 border-r border-line pr-8 last:mr-0 last:border-r-0 last:pr-0">
                <b className="block text-[25px] tracking-tight">{s.value}</b>
                <span className="text-xs font-semibold text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3D stage: floating coin + tilted phone ── */}
        <div className="relative h-[560px] [perspective:1300px] max-lg:min-h-[600px] max-lg:h-auto">
          <div
            className="pulse-dot absolute -left-[60px] -top-[50px] h-[300px] w-[300px] rounded-full blur-[36px]"
            style={{ background: "radial-gradient(circle, rgba(255,123,40,.32), rgba(244,74,42,.10) 55%, transparent 70%)" }}
            aria-hidden="true"
          />
          {/* 3D extruded coin — the Void Bolt */}
          <div className="coin left-[-30px] top-[-24px] z-[3]" aria-hidden="true">
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={i} className="face" style={{ transform: `translateZ(${i - 6}px)` }}>
                <LogoMark size={210} />
              </div>
            ))}
          </div>

          {/* Floating phone */}
          <div className="phone3d absolute right-0 top-[26px] z-[2] w-[min(360px,88%)] rounded-[32px] border border-amber/25 bg-gradient-to-b from-[#171D29]/95 to-[#0D111A]/95 p-[22px] shadow-[0_60px_110px_rgba(0,0,0,0.6),0_0_90px_rgba(255,123,40,0.14)] backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3 border-b border-line pb-4">
              <LogoMark size={38} />
              <div>
                <div className="text-[15px] font-extrabold">Flash SolanaSwap</div>
                <div className="text-xs font-semibold text-amber">● online</div>
              </div>
            </div>

            <div className="mb-1 ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-md bg-gradient-to-br from-[#8C2A1A] to-[#C94E1D] px-3.5 py-2.5 text-[13.5px]">
              /swap
            </div>
            <div className="mb-2.5 mr-2 text-right text-[11px] text-[#7A8296]">14:02 ✓✓</div>

            <div className="mb-2 max-w-[88%] rounded-2xl rounded-bl-md border border-[#2A3342] bg-white/5 px-3.5 py-2.5 text-[13.5px] leading-relaxed">
              🔄 <b>Swap</b>: select the token you're selling:
            </div>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {SELL_CHIPS.map((c) => (
                <span key={c} className="rounded-lg border border-amber/30 bg-amber/10 px-3 py-1.5 text-xs font-bold text-[#FFC98A]">
                  {c}
                </span>
              ))}
            </div>

            <div className="mb-2 max-w-[92%] rounded-2xl rounded-bl-md border border-[#2A3342] bg-white/5 px-3.5 py-2.5 text-[13.5px] leading-relaxed">
              🔄 <b>SOL → USDC</b>
              <br />
              You sell: <b>1.5 SOL</b>
              <br />
              You get: <b className="font-mono text-[12.5px] text-amber">312.44 USDC</b>
              <br />
              <span className="text-[12.5px] text-muted">
                Rate 208.29 · Fee {SITE.fee} · Slippage {SITE.slippage} · quote locked {SITE.quoteTtl}
              </span>
            </div>
            <div className="mb-3 flex flex-wrap gap-1.5">
              <span className="rounded-lg border border-amber/30 bg-amber/10 px-3 py-1.5 text-xs font-bold text-[#FFC98A]">
                ✅ Confirm
              </span>
              <span className="rounded-lg border border-amber/30 bg-amber/10 px-3 py-1.5 text-xs font-bold text-[#FFC98A]">
                ❌ Cancel
              </span>
            </div>

            <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-[#2A3342] bg-white/5 px-3.5 py-2.5 text-[13.5px] leading-relaxed">
              ✅ <b>Swap confirmed!</b>
              <br />
              <b className="font-mono text-[12.5px] text-amber">312.44 USDC</b> ·{" "}
              <span className="text-[#FFC98A]">View in Solscan ↗</span>
            </div>
          </div>

          <div
            className="absolute -bottom-1.5 right-[8%] z-[1] h-[34px] w-[78%] blur-[10px]"
            style={{ background: "radial-gradient(ellipse, rgba(0,0,0,.65), transparent 70%)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </header>
  );
}