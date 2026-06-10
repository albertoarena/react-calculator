# Plan: modernize toolchain and clean up repo

## Goals (from user request)

1. Node ≥ 20, with a committed `.nvmrc`.
2. Upgrade `package.json` dependencies, addressing Dependabot warnings.
3. Remove one of the two LICENSE files (the misnamed one).

## Current state (verified)

- `package.json` pins:
  - `react`, `react-dom` 18.2.0
  - `react-scripts` ^5.0.1
  - `react-icons` ^4.6.0
  - `lodash` ^4.17.21
  - `jest` 29.2.2, `@jest/globals` ^29.2.2
  - `chai` ^4.2.0 (declared but **not imported anywhere** — tests use Jest's own matchers)
  - `prettier` ^2.7.1
- `yarn audit`: **332 vulnerabilities** (18 critical, 163 high). Almost all come transitively from `react-scripts`.
- Two license files at repo root:
  - `LICENCE` — copyright **Andrew H Farmer 2018** (upstream `ahfarmer/calculator`)
  - `LICENSE` — copyright **Alberto Arena 2020** (the project's own)
  - → `LICENCE` is the one to remove.
- Local Node is already v20.13.0; no `.nvmrc` exists; no `engines` field in `package.json`.
- Build tool: Create React App (`react-scripts`). CRA is deprecated (last release April 2022). It is the root cause of essentially all the audit findings and blocks meaningful upgrades of `jest`/`prettier`/`webpack`.

## Approach: migrate off react-scripts to Vite + Vitest

`react-scripts` (CRA) is deprecated and is the source of essentially all 332 audit findings. Vite is the de-facto replacement: modern, ESM-native, actively maintained.

### Locked decisions

1. **Bundler/test runner:** Vite + `@vitejs/plugin-react`, Vitest + `jsdom` + `@testing-library/jest-dom`.
2. **React: 19 (latest stable)**, with `18.3.1` documented as the trivial fallback if anything blocks.
3. **Remove `chai`** (declared but never imported — grep-verified).
4. **Remove `LICENCE`** (upstream Andrew Farmer 2018 copy); keep `LICENSE` (Alberto Arena 2020).
5. **GitHub Pages base path:** keep `/react-calculator/` (set as Vite `base`).
6. **Node:** add `.nvmrc` with `20` and `engines.node: ">=20"` in `package.json`.

### Package changes

- Replace `react-scripts` → `vite` + `@vitejs/plugin-react`
- Replace `jest` + `@jest/globals` → `vitest` + `jsdom` + `@testing-library/jest-dom`
- `react`, `react-dom` → **19.x**
- `react-icons` → 5.x (v5 supports React 19)
- `prettier` → 3.x (formatting-only changes; run `prettier --write` once after, separate commit)
- `lodash` stays at 4.17.21 (already latest in 4.x line)
- Drop `chai`

### React 19 considerations specific to this codebase

- **`ReactDOM.render` removal** — `src/index.js` must use `createRoot`. Check and update.
- **Class components** — `App.js` is still a class component; class components are still supported in React 19, no rewrite needed.
- **`defaultProps` on function components** — deprecated; none in use here.
- **Legacy string refs** — none in use here.
- **New JSX transform** — default in React 19; Vite supports it out of the box.
- **`act()` / Testing Library** — most tests are pure-logic Jest tests; UI tests are minimal. Vitest + Testing Library handle the act warnings.

### Fallback

If React 19 surfaces an unexpected blocker, pin `react@18.3.1`/`react-dom@18.3.1` and ship. Nothing else in the plan depends on the React major.

## Out of scope (call out, don't do silently)

- **Class components → hooks** rewrite of `App.js`. Not required.
- **TypeScript** migration. Not required.

## Proposed execution order

1. Branch off `main`.
2. Delete `LICENCE` (the upstream-Farmer one).
3. Add `.nvmrc` (`20`) and `engines.node: ">=20"` in `package.json`.
4. Install: `vite`, `@vitejs/plugin-react`, `vitest`, `jsdom`, `@testing-library/jest-dom`. Remove: `react-scripts`, `chai`, `@jest/globals`, `jest`.
5. Bump: `react@19`, `react-dom@19`, `react-icons@5`, `prettier@3`.
6. Update `src/index.js` to use `createRoot` from `react-dom/client` (React 19 requirement).
7. Create `vite.config.js`: React plugin, `base: "/react-calculator/"`, Vitest config (`environment: "jsdom"`, globals on, setup file for `@testing-library/jest-dom`).
8. Move `public/index.html` → `index.html` at project root; add `<script type="module" src="/src/index.js"></script>`; drop `%PUBLIC_URL%` substitutions; keep favicon/manifest in `public/`.
9. Rewrite test imports: replace `from "@jest/globals"` with `from "vitest"` where present (most tests use globals and need no change).
10. Update `package.json` `scripts`: `dev`, `build`, `preview`, `test`. Update gh-pages deploy to use `dist/` instead of `build/`.
11. Smoke-check: `yarn` → `yarn test` → `yarn build` → `yarn dev` and exercise the calculator UI (basic + extended mode, keyboard input, help/config modals).
12. Run `prettier --write .` once (Prettier 3 formatting tweaks); commit separately so the functional diff stays clean.
13. Update `CLAUDE.md` Commands section: `yarn dev` (not `start`), Vitest, build output `dist/`.
14. Update `README.md` with the same command changes.
15. Final `yarn audit` and record remaining findings.

## Verification checklist

- `yarn test` — all existing tests pass unchanged in behavior.
- `yarn build` — produces `dist/`.
- `yarn dev` — calculator loads, basic and extended modes work, keyboard input works, help/config modals open.
- `yarn audit` — record the new count.
- `node -v` matches `.nvmrc`.

## Decisions (locked)

1. Migrate to Vite + Vitest ✅
2. React 19 (fallback: 18.3.1 if blocked) ✅
3. Delete `chai` ✅
4. Delete `LICENCE`, keep `LICENSE` ✅
5. GitHub Pages base path: `/react-calculator/` ✅
6. Node 20 via `.nvmrc` + `engines.node` ✅
