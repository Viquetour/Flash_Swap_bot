import type { ReactNode } from "react";
import { TG_URL, SITE, REFERRAL_EXAMPLE } from "@/lib/site";
import { TelegramIcon } from "./icons";

function SectionHead({ kicker, title, lead }: { kicker: string; title: ReactNode; lead?: string }) {
  return (
    <div>
      <span className="text-[13px] font-extrabold uppercase tracking-[3px] text-amber">{kicker}</span>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[46px] md:leading-[1.08]">
        {title}
      </h2>
      {lead ? <p className="mt-3.5 max-w-[640px] text-[17px] leading-relaxed text-muted">{lead}</p> : null}
    </div>
  );
}

/* ── Fees — every number on the table ─────────────────────────────── */
const PODS = [
  { value: SITE.fee, label: "flat platform fee per swap" },
  { value: SITE.quoteTtl, label: "quote lock; then it expires" },
  { value: "1%", label: "default slippage · 5% hard cap" },
  { value: "0.001", label: "SOL minimum swap size" },
  { value: SITE.referralShare, label: "of fees shared to referrers" },
];

export function Fees() {
  return (
    <section id="fees" className="relative py-14 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          kicker="Radical transparency"
          title={
            <>
              Every number, <span className="grad-text">on the table.</span>
            </>
          }
        />
        <div className="mt-12 grid grid-cols-2 gap-3.5 md:grid-cols-5">
          {PODS.map((p) => (
            <div key={p.label} className="conic-card rounded-[18px] px-[18px] py-6 text-center transition-transform hover:-translate-y-1.5">
              <b className="grad-text block text-[26px] tracking-tight">{p.value}</b>
              <span className="mt-1.5 block text-xs font-semibold leading-snug text-muted">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Security ─────────────────────────────────────────────────────── */
const SECURITY = [
  {
    title: "🔐 Envelope encryption at rest",
    body: "Private keys are sealed with AES-256-GCM under a rotating master key. They exist in plaintext only in memory, only for the milliseconds a signature takes, then wiped.",
  },
  {
    title: "📌 PIN-gated sessions",
    body: "Swaps, withdrawals and exports require your argon2id-hashed PIN. Five wrong attempts lock the wallet for 15 minutes; unlocked sessions are scoped and expire just as fast.",
  },
  {
    title: "⏳ Self-destructing key export",
    body: "Need your key out? The export message hides behind a spoiler and auto-deletes after 30 seconds, with the event written to the audit log.",
  },
  {
    title: "🧾 Tamper-evident audit chain",
    body: "Every balance change is idempotent, compare-and-swap transitioned and hash-chained into an append-only audit log. Money can't move twice, and history can't be rewritten.",
  },
];

export function Security() {
  return (
    <section id="security" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          kicker="Security-first by design"
          title={
            <>
              Your keys. <span className="grad-text">Armored.</span>
            </>
          }
          lead="The wallet stack is built like infrastructure, not a demo: envelope encryption, scoped sessions and a tamper-evident audit trail on every lamport that moves."
        />
        <div className="mt-12 grid gap-[18px] md:grid-cols-2">
          {SECURITY.map((s) => (
            <article key={s.title} className="glass p-7">
              <h3 className="mb-2.5 text-lg font-extrabold tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How it works + commands ──────────────────────────────────────── */
function Cmd({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md bg-amber/10 px-2 py-0.5 font-mono text-[13px] text-amber">{children}</code>
  );
}

const STEPS = [
  {
    title: "Open the bot",
    body: (
      <>
        Tap <b className="text-white">Open in Telegram</b> and hit <Cmd>/start</Cmd>. Your custodial wallet is
        generated instantly; address ready for deposits.
      </>
    ),
  },
  {
    title: "Set your PIN & fund",
    body: "Choose a PIN to armor the wallet, then send SOL or SPL tokens to your address. Your balance shows up automatically.",
  },
  {
    title: "Trade",
    body: (
      <>
        <Cmd>/swap</Cmd> for instant trades, <Cmd>/limit</Cmd> for target rates, <Cmd>/tpsl</Cmd> for protection.
        Confirm in one tap; done.
      </>
    ),
  },
];

const COMMANDS = [
  { cmd: "/start", desc: "wallet & main menu" },
  { cmd: "/swap", desc: "instant token swaps" },
  { cmd: "/limit", desc: "limit orders" },
  { cmd: "/tpsl", desc: "take-profit / stop-loss" },
  { cmd: "/help", desc: "all commands" },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          kicker="Up and running in 60 seconds"
          title={
            <>
              Three steps to your <span className="grad-text">first swap.</span>
            </>
          }
        />
        <div className="mt-12 grid gap-[18px] md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-[20px] border border-line bg-panel/75 p-7 backdrop-blur">
              <span className="grad-text text-[15px] font-extrabold tracking-[2px]">0{i + 1}</span>
              <h3 className="mb-2 mt-3 text-lg font-extrabold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          {COMMANDS.map((c) => (
            <div key={c.cmd} className="rounded-xl border border-[#2A3342] bg-panel/80 px-5 py-3">
              <span className="font-mono text-sm font-bold text-amber">{c.cmd}</span>
              <small className="mt-0.5 block text-xs font-semibold text-muted">{c.desc}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Referral ─────────────────────────────────────────────────────── */
export function Referral() {
  return (
    <section id="referral" className="relative py-14 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="conic-card relative flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-[26px] p-9 md:p-12">
          <div
            className="absolute -right-[100px] -top-[120px] h-[380px] w-[380px] rounded-full blur-[20px]"
            style={{ background: "radial-gradient(circle, rgba(244,74,42,.20), transparent 65%)" }}
            aria-hidden="true"
          />
          <div>
            <span className="text-[13px] font-extrabold uppercase tracking-[3px] text-amber">Referral program</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[40px] md:leading-[1.12]">
              Invite friends.
              <br />
              <span className="grad-text">Earn {SITE.referralShare} of fees, in SOL.</span>
            </h2>
            <p className="mt-3 max-w-[480px] leading-relaxed text-muted">
              Every account gets a personal referral link. You collect a quarter of the platform fee on
              every swap your referrals make, accrued automatically and paid out in SOL.
            </p>
          </div>
          <div className="relative z-[2] flex flex-col items-start gap-4">
            <span className="rounded-xl border border-dashed border-amber/50 bg-ink/80 px-5 py-3 font-mono text-sm text-amber">
              {REFERRAL_EXAMPLE.replace("https://", "")}
            </span>
            <a
              href={TG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-grad inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-[15px] font-bold"
            >
              <TelegramIcon size={17} />
              Get my referral link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
