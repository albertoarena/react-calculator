import { describe, it } from "vitest";
import _ from "lodash";
import SubtractOperator from "./SubtractOperator";
import Constants from "../Constants";

describe("SubstractOperator", () => {
  it("gets operator", () => {
    expect(new SubtractOperator().getOperator()).toEqual("-");
  });

  it("gets precedence", () => {
    expect(new SubtractOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceLow(),
    );
  });

  it("runs", () => {
    expect(new SubtractOperator().run(0, 0)).toEqual(0);
    expect(new SubtractOperator().run(1, 2)).toEqual(-1);
    expect(new SubtractOperator().run(2, 1)).toEqual(1);
    expect(
      _.round(new SubtractOperator().run(1.5, 1.3), Constants.getRoundDigits()),
    ).toEqual(0.2);
    expect(
      _.round(
        new SubtractOperator().run(1.5, -1.3),
        Constants.getRoundDigits(),
      ),
    ).toEqual(2.8);
  });
});
