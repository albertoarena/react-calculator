import { describe, it } from "vitest";
import EulerOperator from "./EulerOperator";
import Constants from "../Constants";

describe("EulerOperator", () => {
  it("gets operator", () => {
    expect(new EulerOperator().getOperator()).toEqual("e");
  });

  it("gets apply immediately", () => {
    expect(new EulerOperator().getApplyImmediately()).toBe(true);
  });

  it("is constant", () => {
    expect(new EulerOperator().isConstant()).toBe(true);
  });

  it("gets precedence", () => {
    expect(new EulerOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceLow(),
    );
  });

  it("runs", () => {
    expect(new EulerOperator().run(0, 0)).toEqual(Math.E);
    expect(new EulerOperator().run(1, 2)).toEqual(Math.E);
    expect(new EulerOperator().run(1.23, 4.56)).toEqual(Math.E);
    expect(new EulerOperator().run("A", "B")).toEqual(Math.E);
  });
});
