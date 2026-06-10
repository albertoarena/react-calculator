import { describe, it } from "vitest";
import SinOperator from "./SinOperator";
import Constants from "../Constants";

describe("SinOperator", () => {
  it("gets operator", () => {
    expect(new SinOperator().getOperator()).toEqual("sin");
  });

  it("gets precedence", () => {
    expect(new SinOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceMedium(),
    );
  });

  it("gets string order", () => {
    expect(new SinOperator().getStringOrder()).toEqual(-1);
  });

  it("gets string brackets", () => {
    expect(new SinOperator().getStringBrackets()).toBe(true);
  });

  it("gets apply immediately", () => {
    expect(new SinOperator().getApplyImmediately()).toBe(true);
  });

  describe("runs", () => {
    it("runs with radians unit", () => {
      const value = Math.sin(1);
      expect(new SinOperator().run(1)).toEqual(value);
      expect(new SinOperator().run(0, 1)).toEqual(value);
      expect(new SinOperator().run(-1)).toEqual(-value);
      expect(new SinOperator().run(0, -1)).toEqual(-value);
    });

    it("runs with degrees unit", () => {
      const value = Math.sin(Math.PI / 180);
      expect(new SinOperator(Constants.getUnitDegrees()).run(1)).toEqual(value);
      expect(new SinOperator(Constants.getUnitDegrees()).run(0, 1)).toEqual(
        value,
      );
      expect(new SinOperator(Constants.getUnitDegrees()).run(-1)).toEqual(
        -value,
      );
      expect(new SinOperator(Constants.getUnitDegrees()).run(0, -1)).toEqual(
        -value,
      );
    });
  });
});
