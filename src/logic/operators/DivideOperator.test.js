import { describe, it, expect } from "vitest";
import _ from "lodash";
import DivideOperator from "./DivideOperator";
import Constants from "../Constants";
import DivideByZeroException from "../exceptions/DivideByZeroException";

describe("DivideOperator", () => {
  it("gets operator", () => {
    expect(new DivideOperator().getOperator()).toEqual("/");
  });

  it("gets precedence", () => {
    expect(new DivideOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceMedium(),
    );
  });

  describe("runs", () => {
    it("runs", () => {
      expect(new DivideOperator().run(0, 1)).toEqual(0);
      expect(new DivideOperator().run(1, 2)).toEqual(0.5);
      expect(new DivideOperator().run(-1, 2)).toEqual(-0.5);
      expect(
        _.round(
          new DivideOperator().run(1.5, -1.3),
          Constants.getRoundDigits(),
        ),
      ).toEqual(-1.1538461538);
      expect(
        _.round(
          new DivideOperator().run(-1.3, 1.5),
          Constants.getRoundDigits(),
        ),
      ).toEqual(-0.8666666667);
    });

    it("triggers divide by zero error", () => {
      expect(() => {
        new DivideOperator().run(0, 0);
      }).toThrow(DivideByZeroException);
      expect(() => {
        new DivideOperator().run(1.23, 0);
      }).toThrow(DivideByZeroException);
      expect(() => {
        new DivideOperator().run(100, 0.0);
      }).toThrow(DivideByZeroException);
    });
  });
});
