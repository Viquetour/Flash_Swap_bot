import type { ReactNode } from "react";
import { SITE } from "@/lib/site";
import { BoltIcon, ClockIcon, TargetIcon, LockIcon, GiftIcon, ChartIcon } from "./icons";

function Card({
  icon,
  title,
  children,
  tag,
  span = false,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  tag: string;
  span?: boolean;
}) {
  return (
    <article className={`glass p-7 ${span ? "md:col-span-2" : ""}`}>
      <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[13px] border border-flame/30 bg-flame/10 shadow-[0_0_24px_rgba(255,123,40,0.12)]">
        {icon}
      </div>
      <h3 className="mb-2 mt-4 text-lg font-extrabold tracking-tight">{title}</h3>
      <div className="text-sm leading-relaxed text-muted">{children}</div>
      <span className="mt-4 inline-block text-[11.5px] font-extrabold uppercase tracking-widest text-flame">
        {tag}
      </span>
    </article>
  );
}

export default function Bento() {
  return (
    <section id="features" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <span className="text-[13px] font-extrabold uppercase tracking-[3px] text-amber">Everything in one chat</span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[46px] md:leading-[1.08]">
          A full trading desk,
          <br />
          compressed into <span className="grad-text">Telegram.</span>
        </h2>
        <p className="mt-3.5 max-w-[640px] text-[17px] leading-relaxed text-muted">
          Every feature is engineered against real mainnet failure modes: idempotent money movement,
          crash-safe engines and quotes that expire before the market can move against you.
        </p>

        <div className="mt-12 grid gap-[18px] md:grid-cols-3">
          <Card icon={<BoltIcon />} title="Lightning swaps" tag="Jupiter aggregated" span>
            <p>
              Routing through Jupiter scans every Solana DEX for the best execution price. Quotes lock
              for {SITE.quoteTtl}, the fee is a flat {SITE.fee}, and slippage is hard-capped at 5%; the
              market never gets to move against you mid-tap.
            </p>
            <div className="mt-3 space-y-2.5">
              <div className="flex items-center justify-between rounded-xl border border-amber/20 bg-amber/5 px-3.5 py-2.5 text-[13px]">
                <span>
                  1.5 SOL → <b className="text-amber">312.44 USDC</b>
                </span>
                <span className="text-muted">rate 208.29 · fee {SITE.fee}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-amber/20 bg-amber/5 px-3.5 py-2.5 text-[13px]">
                <span>
                  800 USDC → <b className="text-amber">5.921 SOL</b>
                </span>
                <span className="text-muted">slippage {SITE.slippage} · TTL {SITE.quoteTtl}</span>
              </div>
            </div>
          </Card>

          <Card icon={<ClockIcon />} title="Limit orders" tag="Set & forget">
            Name your rate and walk away. The engine polls the market every 15 seconds and fills exactly
            once; orders stay open for 7 days.
          </Card>

          <Card icon={<TargetIcon />} title="Take-profit / stop-loss" tag="24/7 protection">
            Attach USD trigger prices to any token. TP/SL fires automatically; gains locked, losses cut,
            even while you sleep.
          </Card>

          <Card icon={<LockIcon />} title="Custodial wallet, armored" tag="AES-256-GCM · argon2id" span>
            Generated the moment you hit /start. Keys are sealed with AES-256-GCM envelope encryption,
            gated behind your argon2id PIN, and only ever exist in plaintext for the milliseconds a
            signature takes. Deposit, withdraw, or export with a self-destructing reveal.
          </Card>

          <Card icon={<GiftIcon />} title="Referral rewards" tag={`${SITE.referralShare} fee share`}>
            Share your link, earn {SITE.referralShare} of the platform fee on every trade your friends
            make, paid in SOL.
          </Card>

          <Card icon={<ChartIcon />} title="Portfolio & prices" tag="EN / RU">
            Live balances, USD valuations and token prices in one tap. Speaks English and Russian, with
            per-wallet slippage settings.
          </Card>
        </div>
      </div>
    </section>
  );
}
