import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the tracing root to this project so Next.js doesn't get confused by
  // other lockfiles in parent directories (e.g. a monorepo or home dir).
  outputFileTracingRoot: path.join(__dirname),

  // Static export: run `npm run build:static` (sets NEXT_PUBLIC_STATIC=1).
  // Outputs a fully static site into `out/` — no Node server required.
  ...(process.env.NEXT_PUBLIC_STATIC === "1" ? { output: "export" as const } : {}),
};

export default nextConfig;