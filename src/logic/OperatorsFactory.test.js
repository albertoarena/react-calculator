import { describe, expect, it } from "vitest";
import OperatorsFactory from "./OperatorsFactory";
import AddOperator from "./operators/AddOperator";
import SubtractOperator from "./operators/SubtractOperator";
import MultiplyOperator from "./operators/MultiplyOperator";
import DivideOperator from "./operators/DivideOperator";
import NegativeOperator from "./operators/NegativeOperator";
import SquareRootOperator from "./operators/SquareRootOperator";
import PercentageOperator from "./operators/PercentageOperator";
import Pow2Operator from "./operators/Pow2Operator";
import PowYOperator from "./operators/PowYOperator";
import PowEulerOperator from "./operators/PowEulerOperator";
import SinOperator from "./operators/SinOperator";
import CosOperator from "./operators/CosOperator";
import TanOperator from "./operators/TanOperator";
import PiOperator from "./operators/PiOperator";
import EulerOperator from "./operators/EulerOperator";
import NaturalLogarithmOperator from "./operators/NaturalLogarithmOperator";
import LogarithmOperator from "./operators/LogarithmOperator";
import FactorialOperator from "./operators/FactorialOperator";
import ReciprocalOperator from "./operators/ReciprocalOperator";

describe("OperatorsFactory", () => {
  it("instantiates operators factory", () => {
    expect(new OperatorsFactory()).toBeInstanceOf(OperatorsFactory);
  });

  describe("gets operator", () => {
    it("gets valid operator", () => {
      const obj = new OperatorsFactory();
      expect(obj.getOperator("add")).toBeInstanceOf(AddOperator);
      expect(obj.getOperator("subtract")).toBeInstanceOf(SubtractOperator);
      expect(obj.getOperator("multiply")).toBeInstanceOf(MultiplyOperator);
      expect(obj.getOperator("divide")).toBeInstanceOf(DivideOperator);
      expect(obj.getOperator("negative")).toBeInstanceOf(NegativeOperator);
      expect(obj.getOperator("sqr2")).toBeInstanceOf(SquareRootOperator);
      expect(obj.getOperator("percentage")).toBeInstanceOf(PercentageOperator);
      expect(obj.getOperator("pow2")).toBeInstanceOf(Pow2Operator);
      expect(obj.getOperator("powy")).toBeInstanceOf(PowYOperator);
      expect(obj.getOperator("pow_euler")).toBeInstanceOf(PowEulerOperator);
      expect(obj.getOperator("sin")).toBeInstanceOf(SinOperator);
      expect(obj.getOperator("cos")).toBeInstanceOf(CosOperator);
      expect(obj.getOperator("tan")).toBeInstanceOf(TanOperator);
      expect(obj.getOperator("pi")).toBeInstanceOf(PiOperator);
      expect(obj.getOperator("euler")).toBeInstanceOf(EulerOperator);
      expect(obj.getOperator("natural_logarithm")).toBeInstanceOf(
        NaturalLogarithmOperator,
      );
      expect(obj.getOperator("log")).toBeInstanceOf(LogarithmOperator);
      expect(obj.getOperator("factorial")).toBeInstanceOf(FactorialOperator);
      expect(obj.getOperator("1/x")).toBeInstanceOf(ReciprocalOperator);
    });

    it("does not get an invalid operator", () => {
      const obj = new OperatorsFactory();

      expect(() => {
        obj.getOperator();
      }).toThrow(Error);

      expect(() => {
        obj.getOperator("invalid_not_existing");
      }).toThrow(Error);
    });
  });

  it("checks if it is an operator", () => {
    const obj = new OperatorsFactory();
    expect(obj.isOperator("add")).toBe(true);
    expect(obj.isOperator("subtract")).toBe(true);
    expect(obj.isOperator("multiply")).toBe(true);
    expect(obj.isOperator("divide")).toBe(true);
    expect(obj.isOperator("negative")).toBe(true);
    expect(obj.isOperator("sqr2")).toBe(true);
    expect(obj.isOperator("percentage")).toBe(true);
    expect(obj.isOperator("pow2")).toBe(true);
    expect(obj.isOperator("powy")).toBe(true);
    expect(obj.isOperator("pow_euler")).toBe(true);
    expect(obj.isOperator("sin")).toBe(true);
    expect(obj.isOperator("cos")).toBe(true);
    expect(obj.isOperator("tan")).toBe(true);
    expect(obj.isOperator("pi")).toBe(true);
    expect(obj.isOperator("euler")).toBe(true);
    expect(obj.isOperator("natural_logarithm")).toBe(true);
    expect(obj.isOperator("log")).toBe(true);
    expect(obj.isOperator("factorial")).toBe(true);
    expect(obj.isOperator("1/x")).toBe(true);

    expect(obj.isOperator()).toBe(false);
    expect(obj.isOperator("invalid")).toBe(false);
  });
});
