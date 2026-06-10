import { describe, expect, it } from "vitest";
import Constants from "./Constants";
import Calculator from "./Calculator";

describe("Calculator", () => {
  describe("instantiates calculator", () => {
    it("instantiates calculator with default settings", () => {
      const obj = new Calculator();
      expect(obj).toBeInstanceOf(Calculator);
      expect(obj.unit).toEqual(Constants.getUnitDefault());
      expect(obj.debug).toEqual(false);
    });

    it("instantiates calculator with custom settings", () => {
      const obj = new Calculator({
        unit: Constants.getUnitDegrees(),
        debug: true,
      });
      expect(obj).toBeInstanceOf(Calculator);
      expect(obj.unit).toEqual(Constants.getUnitDegrees());
      expect(obj.debug).toEqual(true);
    });
  });

  it("sets unit", () => {
    const obj = new Calculator();
    expect(obj.unit).toEqual(Constants.getUnitDefault());
    obj.setUnit(Constants.getUnitDegrees());
    expect(obj.unit).toEqual(Constants.getUnitDegrees());
  });

  it("clears calculator", () => {
    const obj = new Calculator();

    expect(obj.getResult().total).toBeNull();

    assert(
      obj.operation("1").operation("add").operation("2").result().total,
      "3",
    );

    obj.clear();

    expect(obj.getResult().total).toBeNull();
  });

  describe("getResult", () => {
    it("gets initial empty result", () => {
      const obj = new Calculator();
      const result = obj.getResult();
      expect(result.processed).toBe(false);
      expect(result.total).toBeNull();
      expect(result.next).toEqual("");
      expect(result.history).toEqual("");
      expect(result.exception).toEqual("");
    });

    it("gets result after calculation", () => {
      const obj = new Calculator();

      const result = obj
        .operation("1")
        .operation("add")
        .operation("2")
        .result();

      expect(result.processed).toBe(true);
      expect(result.total).toEqual("3");
      expect(result.next).toEqual("3");
      expect(result.history).toEqual("1 + 2 = 3");
      expect(result.exception).toEqual("");
    });
  });

  describe("calculates", () => {
    it("calculates addition", () => {
      const obj = new Calculator();

      const result = obj
        .operation("1")
        .operation("add")
        .operation("2.5")
        .result();

      expect(result.processed).toBe(true);
      expect(result.total).toEqual("3.5");
      expect(result.next).toEqual("3.5");
      expect(result.history).toEqual("1 + 2.5 = 3.5");
      expect(result.exception).toEqual("");
    });

    it("calculates addition with positive and negative values", () => {
      const obj = new Calculator();

      const result = obj
        .operation("1")
        .operation("add")
        .operation("2.5")
        .operation("negative")
        .result();

      expect(result.processed).toBe(true);
      expect(result.total).toEqual("-1.5");
      expect(result.next).toEqual("-1.5");
      expect(result.history).toEqual("1 + -2.5 = -1.5");
      expect(result.exception).toEqual("");
    });

    it("calculates reciprocal", () => {
      const obj = new Calculator();

      const result = obj.operation("4").operation("1/x").result();

      expect(result.processed).toBe(true);
      expect(result.total).toEqual("0.25");
      expect(result.exception).toEqual("");
    });

    it("reports divide-by-zero on reciprocal of 0", () => {
      const obj = new Calculator();

      const result = obj.operation("0").operation("1/x").result();

      expect(result.total).toEqual("Error");
      expect(result.exception).not.toEqual("");
    });
  });
});
