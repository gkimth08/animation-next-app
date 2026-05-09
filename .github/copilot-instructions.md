# Copilot instructions for training-next-app

This file gives concise, actionable guidance for AI coding agents working in this repository.

- Project type: Next.js app using the `app/` directory and TypeScript.
- Key scripts: `npm run dev` (starts Next dev server), `npm run build`, `npm start`, `npm run lint`, `npm run lint:fix`.

Quick orientation
- Entry points: `app/layout.tsx` sets the global HTML shell and body classes.
- Pages: `app/page.tsx` (root) and `app/game/page.tsx` (game route) — prefer editing files under `app/`.
- Styles: global styles in `app/globals.css`; Tailwind is configured via `postcss.config.mjs` and `tailwindcss` packages.
- Types: TypeScript is enabled (`tsconfig.json`, `next-env.d.ts`) — keep edits TypeScript-safe.

Patterns & conventions
- Use the Next `app/` conventions (server components by default). Keep components as `.tsx` and export default functions.
- Global layout is centralized in `app/layout.tsx`; add global wrappers or providers there rather than duplicating HTML in pages.
- Styling uses Tailwind utility classes in JSX (see `body` classes in `app/layout.tsx`). Prefer adding Tailwind classes over writing new CSS files unless necessary.
- Linting: run `npm run lint` to surface issues. Use `npm run lint:fix` to auto-fix trivial problems.

Build & debug commands
- Dev server: `npm run dev` — use this to iterate locally.
- Production build: `npm run build` then `npm start` to run the built app.
- If editing PostCSS/Tailwind, restart the dev server after config changes.

Integration points & external deps
- Tailwind + PostCSS: configured via `postcss.config.mjs` and `tailwindcss` in `package.json`.
- No backend services or API routes detected in the repo root — there are no obvious external integrations to mock.

Files to inspect for context
- Global layout and language: `app/layout.tsx` (sets `<html lang="ko">`).
- Pages: `app/page.tsx`, `app/game/page.tsx`.
- Styles & tooling: `app/globals.css`, `postcss.config.mjs`, `tailwind.config` (if present), `tsconfig.json`, `package.json`.

When changing code
- Run `npm run dev` locally to verify UI changes.
- Keep TypeScript types intact; run the build step when making structural changes to ensure no type/runtime regressions.
- Prefer small, incremental commits.

What I did
- Created/updated this file to capture repo-specific conventions and commands.

If anything here is unclear or missing, tell me which area to expand (routing, styling, build, or CI instructions).
