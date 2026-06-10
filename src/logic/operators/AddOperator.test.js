import { describe, it } from "vitest";
import _ from "lodash";
import AddOperator from "./AddOperator";
import Constants from "../Constants";

describe("AddOperator", () => {
  it("gets operator", () => {
    expect(new AddOperator().getOperator()).toEqual("+");
  });

  it("gets precedence", () => {
    expect(new AddOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceLow(),
    );
  });

  it("runs", () => {
    expect(new AddOperator().run(0, 0)).toEqual(0);
    expect(new AddOperator().run(1, 2)).toEqual(3);
    expect(new AddOperator().run(-1, 2)).toEqual(1);
    expect(
      _.round(new AddOperator().run(1.5, -1.3), Constants.getRoundDigits()),
    ).toEqual(0.2);
    expect(
      _.round(new AddOperator().run(-1.3, 1.5), Constants.getRoundDigits()),
    ).toEqual(0.2);
  });
});
