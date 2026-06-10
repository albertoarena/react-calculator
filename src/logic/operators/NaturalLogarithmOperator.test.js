import { describe, it, expect } from "vitest";
import NaturalLogarithmOperator from "./NaturalLogarithmOperator";
import Constants from "../Constants";
import InvalidException from "../exceptions/InvalidException";

describe("NaturalLogarithmOperator", () => {
  it("gets operator", () => {
    expect(new NaturalLogarithmOperator().getOperator()).toEqual("ln");
  });

  it("gets precedence", () => {
    expect(new NaturalLogarithmOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceMedium(),
    );
  });

  it("gets string brackets", () => {
    expect(new NaturalLogarithmOperator().getStringBrackets()).toBe(true);
  });

  it("gets string order", () => {
    expect(new NaturalLogarithmOperator().getStringOrder()).toEqual(-1);
  });

  it("gets apply immediately", () => {
    expect(new NaturalLogarithmOperator().getApplyImmediately()).toBe(true);
  });

  describe("runs", () => {
    it("runs", () => {
      const calc = (v) => {
        return Math.log(v);
      };

      expect(new NaturalLogarithmOperator().run(0)).toEqual(calc(0));
      expect(new NaturalLogarithmOperator().run(1)).toEqual(calc(1));
      expect(new NaturalLogarithmOperator().run(5)).toEqual(calc(5));

      // Float
      expect(new NaturalLogarithmOperator().run(1.2)).toEqual(calc(1.2));
      expect(new NaturalLogarithmOperator().run(5.5)).toEqual(calc(5.5));
    });

    it("runs and triggers exception", () => {
      expect(() => {
        new NaturalLogarithmOperator().run(-5);
      }).toThrow(InvalidException);

      expect(() => {
        new NaturalLogarithmOperator().run("A");
      }).toThrow(InvalidException);
    });
  });
});
