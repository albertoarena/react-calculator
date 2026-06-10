# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Vite + Vitest project. Use `yarn` (preferred — there's a `yarn.lock`) or `npm`. Node ≥ 20.19 / ≥ 22.12 (see `.nvmrc`: 22).

- Install: `yarn`
- Dev server: `yarn dev` (served at `http://localhost:5173/react-calculator/` — base path matches the GitHub Pages URL)
- Build: `yarn build` (outputs to `dist/`)
- Preview production build: `yarn preview`
- Test (single run): `yarn test`
- Test (watch mode): `yarn test:watch`
- Run a single test file: `yarn test src/logic/Calculator.test.js`
- Run tests by name: `yarn test -t "name pattern"`
- Deploy to GitHub Pages: `yarn deploy` (runs `gh-pages -d dist`; build first)

Prettier 3 is configured in `package.json` (`trailingComma: "all"`). There is no separate lint script.

JSX-containing files use the `.jsx` extension (Vite/oxc requirement); pure-logic files stay `.js`.

## Architecture

The app is split into two layers: pure calculator logic under `src/logic/`, and a thin React UI under `src/component/`. The React layer holds one long-lived `Calculator` instance and re-renders from `calculator.getResult()` after each input.

### Logic layer (`src/logic/`)

- `Calculator.js` is the engine. It implements a **shunting-yard-style** evaluator with three stacks:
  - `output` — `BaseNumber` values produced so far
  - `operators` — pending `BaseOperator`s awaiting a higher-precedence operator or finalization
  - `queue` — finalized `ResultNumber`s (used as the "previous answer" when continuing)
  - Plus `_lastNumber` (digit accumulator for the current input) and `history` (display string source).
  - `calculate(buttonName)` is the single entry point for every button/key. It dispatches on whether the input looks like a number, a control (`clear`/`equals`), or an operator (via `OperatorsFactory.isOperator`). It always returns `getResult()`.
  - `_process()` enforces precedence; `_finaliseProcess()` drains remaining operators on `equals`.
  - Operators with `getApplyImmediately()` true (e.g. unary like `√`, `x²`, `sin`) are evaluated against the current value right away instead of being pushed onto the stack. Operators with `isConstant()` true (e.g. `π`, `e`) push their value directly to `output`.
  - `unit` (radians/degrees) is passed through to operator instances via `OperatorsFactory.getOperator(name, unit)`; trig operators consult `BaseOperator.convertUnit()`.
  - `getResult()` returns `{ processed, total, next, history, exception }` — this object **is** the React state shape used by `App`.

- `OperatorsFactory.js` is the central registry mapping button names (`"add"`, `"sqr2"`, `"sin"`, `"pi"`, ...) to operator classes under `operators/`. **To add a new operator: add a class extending `BaseOperator` under `operators/`, register it here, and wire a button in `ButtonPanel`.** `isOperator(name)` is what `Calculator` uses to detect operator inputs.

- `operators/BaseOperator.js` defines the contract every operator implements: `run(v1, v2)`, `getOperator()` (display symbol), `getPrecedence()` (see `Constants` for low/medium/high), `getApplyImmediately()`, `isConstant()`, plus stringification hooks (`toFullString`, `getStringOrder`, `getStringBrackets`) consumed by `Calculator._getHistory()` to render the expression — note that `_getHistory` may swap an operator with the preceding token when `getStringOrder() < 0` (used for prefix-style operators like `sin`).

- `numbers/` — `BaseNumber` wraps a numeric value with the same stringification hooks; `ResultNumber` marks a finalized total.

- `exceptions/` — `BaseException`/`DivideByZeroException`/`InvalidException`. Operators throw these from `run()`; `Calculator.calculate()` catches and stores the message in `_lastException`, which surfaces as `total: "Error"`.

- `ui/KeyboardInput.js` maps `keydown` events to the same string button names used by the UI, then calls into the handlers passed by `App` (`click`, `clear`, `copy`, `paste`). Keyboard and click paths go through the same `Calculator.calculate()` call.

- `Constants.js` centralizes precedence levels, the default angle unit, and the marker characters used in history strings (`getNoSpaceMarker`, `getCompactSpaceMarker`) that `_getHistory` strips out for display.

### UI layer (`src/component/`)

- `App.js` owns the single `Calculator` instance and the React state; every handler calls a calculator method and then `setState(calculator.getResult())`.
- `calculator/ButtonPanel.js` renders buttons depending on `mode` (`"basic"` vs extended) and emits the button names that `Calculator.calculate()` understands. The `unit` prop (radians/degrees) is plumbed through for the unit toggle.
- `calculator/Display.js`, `BottomPanel.js`, `Mode.js` etc. are presentational.
- `modals/ConfigModal.js` and `HelpModal.js` are toggled by `App` state flags (`config`, `help`).

### Testing

- Vitest (jsdom env, globals enabled via `vite.config.js`). Tests live next to source as `*.test.js` / `*.test.jsx`. The logic layer has thorough unit tests per operator/exception; `Calculator.test.js` covers end-to-end expression evaluation through the public `operation(...).result()` wrapper — that wrapper chain is the idiomatic way to write new calculator tests.
- Assertions use Vitest's `expect()` API. `@testing-library/jest-dom` matchers are wired in `src/setupTests.js`.

## Git Commit Conventions

### Format

- type: short subject line (max 50 chars)
- Detailed body paragraph explaining what and why (not how).

### Rules

- No Claude attribution - NEVER include "Generated with Claude Code" or "Co-Authored-By: Claude"
- Keep first line under 50 characters
- Use heredoc for multi-line commit messages
