type IconProps = { size?: number; className?: string };

export function TelegramIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.9 4.6c.2-1.2-.9-2.2-2-1.7L2.7 9.6c-1.2.5-1.1 2.2.1 2.6l4.4 1.4 1.7 5.3c.4 1.2 2 1.5 2.8.5l2.4-2.9 4.5 3.3c1 .7 2.4.1 2.6-1.1L21.9 4.6zM8.4 12.9l9.1-5.7c.3-.2.6.2.4.4l-7.5 7-.3 2.7-1.7-4.4z" />
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "#FF7B28",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function BoltIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

export function ClockIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function TargetIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  );
}

export function LockIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M16 8V6a4 4 0 0 0-8 0v2" />
    </svg>
  );
}

export function GiftIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M20 12v8H4v-8M12 2v13M12 15l-4-4M12 15l4-4" />
      <rect x="2" y="2" width="20" height="6" rx="1" />
    </svg>
  );
}

export function ChartIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M3 17l5-6 4 4 6-8 3 4" />
      <path d="M3 21h18" />
    </svg>
  );
}
