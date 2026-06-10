import { describe, it } from "vitest";
import NegativeOperator from "./NegativeOperator";
import Constants from "../Constants";

describe("NegativeOperator", () => {
  it("gets operator", () => {
    expect(new NegativeOperator().getOperator()).toEqual("-");
  });

  it("gets precedence", () => {
    expect(new NegativeOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceHigh(),
    );
  });

  it("gets string order", () => {
    expect(new NegativeOperator().getStringOrder()).toEqual(-1);
  });

  it("gets string no spacing", () => {
    expect(new NegativeOperator().getStringNoSpacing()).toBe(true);
  });

  it("gets apply immediately", () => {
    expect(new NegativeOperator().getApplyImmediately()).toBe(true);
  });

  it("runs", () => {
    expect(new NegativeOperator().run(0)).toEqual(-0);
    expect(new NegativeOperator().run(1)).toEqual(-1);
    expect(new NegativeOperator().run(-1)).toEqual(1);
    expect(new NegativeOperator().run(0, 5)).toEqual(-5);
    expect(new NegativeOperator().run(1, 5)).toEqual(-1);
    expect(new NegativeOperator().run(-1, 5)).toEqual(1);
    expect(new NegativeOperator().run(0, 0)).toEqual(-0);
    expect(new NegativeOperator().run(0, 1)).toEqual(-1);
    expect(new NegativeOperator().run(0, -1)).toEqual(1);
  });

  it("gets full string", () => {
    expect(new NegativeOperator().toFullString(0)).toEqual(
      "-" + Constants.getNoSpaceMarker(),
    );
  });
});
