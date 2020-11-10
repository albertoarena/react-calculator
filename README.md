React Calculator
===

React implementation of calculator created with [create-react-app][create-react-app],
and based on [Andrew Farmer's calculator][ahfarmer-calculator]. It is inspired by [shunting-yard algorithm][shunting-yard-algorithm].

Try it
---

[http://albertoarena.it/react-calculator](http://albertoarena.it/react-calculator)


Install it
---

`yarn` or `npm install`

Use it
---

`yarn start` or `npm start`

Test it
---

`yarn test` or `npm test`

Build it
---

`yarn build` or `npm run build`


Options
---

It has a basic and extended version.

It supports basic operators (+, -, /, \*, ^), trigonometric operators and precedence.



Operators
---

The Order of operators follows the standard (see [Wikipedia][operators]):

High precedence

- `^`: exponent (power)
- `^2`: exponent 2
- `√`: square root (alias `sqrt`)

Medium precedence

- `\*`: multiplication
- `/`: division
- `sin`: sine
- `cos`: cosine
- `tan`: tangent

Low precedence

- `+`: addition
- `-`: subtraction


[create-react-app]:             https://github.com/facebook/create-react-app
[ahfarmer-calculator]:          https://github.com/ahfarmer/calculator
[shunting-yard-algorithm]:      http://en.wikipedia.org/wiki/Shunting-yard_algorithm
[operators]:                    https://en.wikipedia.org/wiki/Order_of_operations#Definition
