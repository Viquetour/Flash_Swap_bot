import { TG_URL } from "@/lib/site";
import { LogoMark, Wordmark } from "./Logo";
import { TelegramIcon } from "./icons";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#security", label: "Security" },
  { href: "#how", label: "How it works" },
  { href: "#referral", label: "Referrals" },
];

export default function Nav() {
  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Flash SolanaSwap home">
          <LogoMark size={36} />
          <Wordmark />
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-muted md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={TG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-grad inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold"
        >
          <TelegramIcon size={16} />
          Launch Bot
        </a>
      </div>
    </nav>
  );
}
