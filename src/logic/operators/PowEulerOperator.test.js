import { describe, it } from "vitest";
import PowEulerOperator from "./PowEulerOperator";
import Constants from "../Constants";

describe("PowEulerOperator", () => {
  it("gets operator", () => {
    expect(new PowEulerOperator().getOperator()).toEqual("e^");
  });

  it("gets precedence", () => {
    expect(new PowEulerOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceHigh(),
    );
  });

  it("gets apply immediately", () => {
    expect(new PowEulerOperator().getApplyImmediately()).toBe(true);
  });

  it("runs", () => {
    const calc = (v) => {
      return Math.pow(Math.E, v);
    };

    expect(new PowEulerOperator().run(0)).toEqual(calc(0));
    expect(new PowEulerOperator().run(1)).toEqual(calc(1));
    expect(new PowEulerOperator().run(-1)).toEqual(calc(-1));
    expect(new PowEulerOperator().run(0, 0)).toEqual(calc(0));
    expect(new PowEulerOperator().run(0, 1)).toEqual(calc(1));
    expect(new PowEulerOperator().run(0, -1)).toEqual(calc(-1));
  });
});
