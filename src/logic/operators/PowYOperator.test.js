import { describe, it } from "vitest";
import PowYOperator from "./PowYOperator";
import Constants from "../Constants";

describe("PowYOperator", () => {
  it("gets operator", () => {
    expect(new PowYOperator().getOperator()).toEqual("^");
  });

  it("gets precedence", () => {
    expect(new PowYOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceHigh(),
    );
  });

  it("runs", () => {
    const calc = (x, y) => {
      return Math.pow(x, y);
    };

    expect(new PowYOperator().run(0, 0)).toEqual(calc(0, 0));
    expect(new PowYOperator().run(0, 1)).toEqual(calc(0, 1));
    expect(new PowYOperator().run(1, 0)).toEqual(calc(1, 0));
    expect(new PowYOperator().run(1, 1)).toEqual(calc(1, 1));
    expect(new PowYOperator().run(2, 4)).toEqual(calc(2, 4));
    expect(new PowYOperator().run(2, 300)).toEqual(calc(2, 300));
    expect(new PowYOperator().run(2, 300000)).toEqual(Infinity);
  });
});
