import { describe, it } from "vitest";
import Pow2Operator from "./Pow2Operator";
import Constants from "../Constants";

describe("Pow2Operator", () => {
  it("gets operator", () => {
    expect(new Pow2Operator().getOperator()).toEqual("^2");
  });

  it("gets precedence", () => {
    expect(new Pow2Operator().getPrecedence()).toEqual(
      Constants.getPrecedenceHigh(),
    );
  });

  it("runs", () => {
    const calc = (v) => {
      return Math.pow(v, 2);
    };

    expect(new Pow2Operator().run(0)).toEqual(calc(0));
    expect(new Pow2Operator().run(1)).toEqual(calc(1));
    expect(new Pow2Operator().run(2)).toEqual(calc(2));
    expect(new Pow2Operator().run(-2)).toEqual(calc(-2));
    expect(new Pow2Operator().run(0, 0)).toEqual(calc(0));
    expect(new Pow2Operator().run(0, 1)).toEqual(calc(1));
    expect(new Pow2Operator().run(0, 2)).toEqual(calc(2));
    expect(new Pow2Operator().run(0, -2)).toEqual(calc(-2));
  });
});
