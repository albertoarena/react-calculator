import { describe, it } from "vitest";
import _ from "lodash";
import MultiplyOperator from "./MultiplyOperator";
import Constants from "../Constants";

describe("MultiplyOperator", () => {
  it("gets operator", () => {
    expect(new MultiplyOperator().getOperator()).toEqual("x");
  });

  it("gets precedence", () => {
    expect(new MultiplyOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceMedium(),
    );
  });

  it("runs", () => {
    expect(new MultiplyOperator().run(0, 0)).toEqual(0);
    expect(new MultiplyOperator().run(0, 1)).toEqual(0);
    expect(new MultiplyOperator().run(1, 2)).toEqual(2);
    expect(new MultiplyOperator().run(-1, 2)).toEqual(-2);
    expect(
      _.round(
        new MultiplyOperator().run(1.5, -1.3),
        Constants.getRoundDigits(),
      ),
    ).toEqual(-1.95);
    expect(
      _.round(
        new MultiplyOperator().run(-1.3, 1.5),
        Constants.getRoundDigits(),
      ),
    ).toEqual(-1.95);
  });
});
