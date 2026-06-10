import { describe, it } from "vitest";
import CosOperator from "./CosOperator";
import Constants from "../Constants";

describe("CosOperator", () => {
  it("gets operator", () => {
    expect(new CosOperator().getOperator()).toEqual("cos");
  });

  it("gets precedence", () => {
    expect(new CosOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceMedium(),
    );
  });

  it("gets string order", () => {
    expect(new CosOperator().getStringOrder()).toEqual(-1);
  });

  it("gets string brackets", () => {
    expect(new CosOperator().getStringBrackets()).toBe(true);
  });

  it("gets apply immediately", () => {
    expect(new CosOperator().getApplyImmediately()).toBe(true);
  });

  describe("runs", () => {
    it("runs with radians unit", () => {
      const value = Math.cos(1);
      expect(new CosOperator().run(1)).toEqual(value);
      expect(new CosOperator().run(0, 1)).toEqual(value);
      expect(new CosOperator().run(-1)).toEqual(value);
      expect(new CosOperator().run(0, -1)).toEqual(value);
    });

    it("runs with degrees unit", () => {
      const value = Math.cos(Math.PI / 180);
      expect(new CosOperator(Constants.getUnitDegrees()).run(1)).toEqual(value);
      expect(new CosOperator(Constants.getUnitDegrees()).run(0, 1)).toEqual(
        value,
      );
      expect(new CosOperator(Constants.getUnitDegrees()).run(-1)).toEqual(
        value,
      );
      expect(new CosOperator(Constants.getUnitDegrees()).run(0, -1)).toEqual(
        value,
      );
    });
  });
});
