import { describe, it } from "vitest";
import _ from "lodash";
import FactorialOperator from "./FactorialOperator";
import Constants from "../Constants";

describe("FactorialOperator", () => {
  it("gets operator", () => {
    expect(new FactorialOperator().getOperator()).toEqual("!");
  });

  it("gets precedence", () => {
    expect(new FactorialOperator().getPrecedence()).toEqual(
      Constants.getPrecedenceHigh(),
    );
  });

  it("gets string no spacing", () => {
    expect(new FactorialOperator().getStringNoSpacing()).toBe(true);
  });

  it("runs", () => {
    expect(new FactorialOperator().run(0)).toEqual(1);
    expect(new FactorialOperator().run(1)).toEqual(1);
    expect(new FactorialOperator().run(5)).toEqual(120);
    expect(new FactorialOperator().run(-1)).toEqual(-1);
    expect(new FactorialOperator().run(-5)).toEqual(-120);

    // Float
    expect(new FactorialOperator().run(1.2)).toEqual(1);
    expect(new FactorialOperator().run(5.5)).toEqual(120);

    // NaN
    expect(new FactorialOperator().run("A")).toEqual(1);
  });
});
