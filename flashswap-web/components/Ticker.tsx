const ITEMS: Array<[string, string]> = [
  ["Jupiter", "aggregation"],
  ["Solana", "mainnet"],
  ["AES-256-GCM", ""],
  ["argon2id", ""],
  ["0.5%", "flat fee"],
  ["25%", "referral share"],
  ["15s", "quote lock"],
];

function Row() {
  return (
    <span className="flex items-center gap-[54px] whitespace-nowrap text-sm font-extrabold uppercase tracking-[3px] text-[#7A8296]">
      {ITEMS.map(([b, rest]) => (
        <span key={b + rest} className="flex items-center gap-[54px]">
          <span>
            <b className="text-amber">{b}</b>
            {rest ? ` ${rest}` : ""}
          </span>
          <span aria-hidden="true">✦</span>
        </span>
      ))}
    </span>
  );
}

export default function Ticker() {
  return (
    <div className="ticker-mask relative z-[2] border-y border-line py-5">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
