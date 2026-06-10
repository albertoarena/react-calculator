import { describe, it } from "vitest";
import TanOperator from "./TanOperator";
import Constants from "../Constants";

describe("TanOperator", () => {
  it("gets operator", () => {
    expect(new TanOperator().getOperator()).toEqual("tan");
  });

  it("gets precedence", () => {
    expect(new TanOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceMedium(),
    );
  });

  it("gets string order", () => {
    expect(new TanOperator().getStringOrder()).toEqual(-1);
  });

  it("gets string brackets", () => {
    expect(new TanOperator().getStringBrackets()).toBe(true);
  });

  it("gets apply immediately", () => {
    expect(new TanOperator().getApplyImmediately()).toBe(true);
  });

  describe("runs", () => {
    it("runs with radians unit", () => {
      const value = Math.tan(1);
      expect(new TanOperator().run(1)).toEqual(value);
      expect(new TanOperator().run(0, 1)).toEqual(value);
      expect(new TanOperator().run(-1)).toEqual(-value);
      expect(new TanOperator().run(0, -1)).toEqual(-value);
    });

    it("runs with degrees unit", () => {
      const value = Math.tan(Math.PI / 180);
      expect(new TanOperator(Constants.getUnitDegrees()).run(1)).toEqual(value);
      expect(new TanOperator(Constants.getUnitDegrees()).run(0, 1)).toEqual(
        value,
      );
      expect(new TanOperator(Constants.getUnitDegrees()).run(-1)).toEqual(
        -value,
      );
      expect(new TanOperator(Constants.getUnitDegrees()).run(0, -1)).toEqual(
        -value,
      );
    });
  });
});
