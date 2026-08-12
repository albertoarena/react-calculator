# React Calculator

React implementation of calculator built with [Vite][vite] and [Vitest][vitest], based on [Andrew Farmer's calculator][ahfarmer-calculator]. It is inspired by [shunting-yard algorithm][shunting-yard-algorithm].

Requires Node ≥ 20.19 / ≥ 22.12 (see `.nvmrc`).

## Try it

[https://simplicity.albertoarena.it/react-calculator/](https://simplicity.albertoarena.it/react-calculator/)

## Install it

`yarn` or `npm install`

## Use it

`yarn dev` or `npm run dev`

## Test it

`yarn test` (single run) or `yarn test:watch`

## Build it

`yarn build` or `npm run build` (outputs to `dist/`)

## Deploy it

`yarn deploy` publishes `dist/` to GitHub Pages.

## Options

It has a basic and extended version.

It supports basic operators (+, -, /, \*, ^), trigonometric operators and precedence.

## Operators

Order of operations follows the standard (see [Wikipedia][operators]).

High precedence

- `^`: exponent (power)
- `^2`: square
- `√`: square root (alias `sqrt`)
- `eˣ`: exponential
- `!`: factorial
- `%`: percentage
- `1/x`: reciprocal
- `±`: unary negation

Medium precedence

- `×`: multiplication
- `/`: division
- `sin`, `cos`, `tan`: trigonometric (radians or degrees, toggleable)
- `ln`: natural logarithm
- `log`: base-10 logarithm

Low precedence

- `+`: addition
- `-`: subtraction

Constants

- `π`: pi
- `e`: Euler's number

[vite]: https://vite.dev
[vitest]: https://vitest.dev
[ahfarmer-calculator]: https://github.com/ahfarmer/calculator
[shunting-yard-algorithm]: http://en.wikipedia.org/wiki/Shunting-yard_algorithm
[operators]: https://en.wikipedia.org/wiki/Order_of_operations#Definition
