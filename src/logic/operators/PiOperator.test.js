import { describe, it } from "vitest";
import PiOperator from "./PiOperator";
import Constants from "../Constants";

describe("PiOperator", () => {
  it("gets operator", () => {
    expect(new PiOperator().getOperator()).toEqual("π");
  });

  it("gets apply immediately", () => {
    expect(new PiOperator().getApplyImmediately()).toBe(true);
  });

  it("is constant", () => {
    expect(new PiOperator().isConstant()).toBe(true);
  });

  it("gets precedence", () => {
    expect(new PiOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceLow(),
    );
  });

  it("runs", () => {
    expect(new PiOperator().run(0, 0)).toEqual(Math.PI);
    expect(new PiOperator().run(1, 2)).toEqual(Math.PI);
    expect(new PiOperator().run(1.23, 4.56)).toEqual(Math.PI);
    expect(new PiOperator().run("A", "B")).toEqual(Math.PI);
  });
});
