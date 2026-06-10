import { describe, it } from "vitest";
import PercentageOperator from "./PercentageOperator";
import Constants from "../Constants";

describe("PercentageOperator", () => {
  it("gets operator", () => {
    expect(new PercentageOperator().getOperator()).toEqual("%");
  });

  it("gets precedence", () => {
    expect(new PercentageOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceHigh(),
    );
  });

  it("gets apply immediately", () => {
    expect(new PercentageOperator().getApplyImmediately()).toBe(true);
  });

  it("runs", () => {
    expect(new PercentageOperator().run(0)).toEqual(0);
    expect(new PercentageOperator().run(1)).toEqual(0.01);
    expect(new PercentageOperator().run(-1)).toEqual(-0.01);
    expect(new PercentageOperator().run(100)).toEqual(1.0);
    expect(new PercentageOperator().run(10000)).toEqual(100.0);
    expect(new PercentageOperator().run(0, 0)).toEqual(0);
    expect(new PercentageOperator().run(0, 1)).toEqual(0.01);
    expect(new PercentageOperator().run(0, -1)).toEqual(-0.01);
    expect(new PercentageOperator().run(0, 100)).toEqual(1.0);
    expect(new PercentageOperator().run(0, 10000)).toEqual(100.0);
  });

  it("gets full string", () => {
    expect(new PercentageOperator().toFullString()).toEqual(
      Constants.getNoSpaceMarker() + "%",
    );
  });
});
