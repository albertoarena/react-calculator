import { describe, it, expect } from "vitest";
import LogarithmOperator from "./LogarithmOperator";
import Constants from "../Constants";
import InvalidException from "../exceptions/InvalidException";

describe("LogarithmOperator", () => {
  it("gets operator", () => {
    expect(new LogarithmOperator().getOperator()).toEqual("log");
  });

  it("gets precedence", () => {
    expect(new LogarithmOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceMedium(),
    );
  });

  it("gets string order", () => {
    expect(new LogarithmOperator().getStringOrder()).toEqual(-1);
  });

  it("gets apply immediately", () => {
    expect(new LogarithmOperator().getApplyImmediately()).toBe(true);
  });

  describe("runs", () => {
    it("runs", () => {
      const calc = (v) => {
        return Math.log10(v);
      };

      expect(new LogarithmOperator().run(0)).toEqual(calc(0));
      expect(new LogarithmOperator().run(1)).toEqual(calc(1));
      expect(new LogarithmOperator().run(5)).toEqual(calc(5));

      // Float
      expect(new LogarithmOperator().run(1.2)).toEqual(calc(1.2));
      expect(new LogarithmOperator().run(5.5)).toEqual(calc(5.5));
    });

    it("runs and triggers exception", () => {
      expect(() => {
        new LogarithmOperator().run(-5);
      }).toThrow(InvalidException);

      expect(() => {
        new LogarithmOperator().run("A");
      }).toThrow(InvalidException);
    });
  });
});
