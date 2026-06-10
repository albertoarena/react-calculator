import { describe, it } from "vitest";
import ReciprocalOperator from "./ReciprocalOperator";
import DivideByZeroException from "../exceptions/DivideByZeroException";
import Constants from "../Constants";

describe("ReciprocalOperator", () => {
  it("gets operator", () => {
    expect(new ReciprocalOperator().getOperator()).toEqual("1/x");
  });

  it("gets precedence", () => {
    expect(new ReciprocalOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceHigh(),
    );
  });

  it("gets apply immediately", () => {
    expect(new ReciprocalOperator().getApplyImmediately()).toBe(true);
  });

  it("runs with single arg", () => {
    expect(new ReciprocalOperator().run(1)).toEqual(1);
    expect(new ReciprocalOperator().run(2)).toEqual(0.5);
    expect(new ReciprocalOperator().run(-4)).toEqual(-0.25);
    expect(new ReciprocalOperator().run(0.5)).toEqual(2);
  });

  it("runs with value2 (immediate-apply path)", () => {
    expect(new ReciprocalOperator().run(0, 1)).toEqual(1);
    expect(new ReciprocalOperator().run(0, 2)).toEqual(0.5);
    expect(new ReciprocalOperator().run(0, -4)).toEqual(-0.25);
  });

  it("throws DivideByZeroException on 0", () => {
    expect(() => new ReciprocalOperator().run(0)).toThrow(
      DivideByZeroException,
    );
    expect(() => new ReciprocalOperator().run(0, 0)).toThrow(
      DivideByZeroException,
    );
  });

  it("gets full string", () => {
    expect(new ReciprocalOperator().toFullString()).toEqual(
      Constants.getNoSpaceMarker() + "1/x",
    );
  });
});
