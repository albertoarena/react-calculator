import { describe, it } from "vitest";
import SquareRootOperator from "./SquareRootOperator";
import Constants from "../Constants";

describe("SquareRootOperator", () => {
  it("gets operator", () => {
    expect(new SquareRootOperator().getOperator()).toEqual("√");
  });

  it("gets precedence", () => {
    expect(new SquareRootOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceHigh(),
    );
  });

  it("gets string brackets", () => {
    expect(new SquareRootOperator().getStringBrackets()).toBe(true);
  });

  it("gets string order", () => {
    expect(new SquareRootOperator().getStringOrder()).toEqual(-1);
  });

  it("runs", () => {
    const calc = (x) => {
      return Math.sqrt(x);
    };

    expect(new SquareRootOperator().run(0)).toEqual(calc(0));
    expect(new SquareRootOperator().run(1)).toEqual(calc(1));
    expect(new SquareRootOperator().run(2)).toEqual(calc(2));
    expect(new SquareRootOperator().run(8)).toEqual(calc(8));
    expect(new SquareRootOperator().run(0, 0)).toEqual(calc(0));
    expect(new SquareRootOperator().run(0, 1)).toEqual(calc(1));
    expect(new SquareRootOperator().run(0, 2)).toEqual(calc(2));
    expect(new SquareRootOperator().run(0, 8)).toEqual(calc(8));
  });
});
