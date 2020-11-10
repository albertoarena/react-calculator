import BaseOperator from "./operators/BaseOperator";
import AddOperator from "./operators/AddOperator";
import SubtractOperator from "./operators/SubtractOperator";
import MultiplyOperator from "./operators/MultiplyOperator";
import DivideOperator from "./operators/DivideOperator";
import NegativeOperator from "./operators/NegativeOperator";
import SquareRootOperator from "./operators/SquareRootOperator";
import PercentageOperator from "./operators/PercentageOperator";
import Pow2Operator from "./operators/Pow2Operator";
import PowYOperator from "./operators/PowYOperator";
import SinOperator from "./operators/SinOperator";
import CosOperator from "./operators/CosOperator";
import TanOperator from "./operators/TanOperator";
import PiOperator from "./operators/PiOperator";
import EulerOperator from "./operators/EulerOperator";
import NaturalLogarithmOperator from "./operators/NaturalLogarithmOperator";
import PowEulerOperator from "./operators/PowEulerOperator";
import FactorialOperator from "./operators/FactorialOperator";
import LogarithmOperator from "./operators/LogarithmOperator";

const operators = {
    "add": AddOperator,
    "subtract": SubtractOperator,
    "multiply": MultiplyOperator,
    "divide": DivideOperator,
    "negative": NegativeOperator,
    "sqr2": SquareRootOperator,
    "percentage": PercentageOperator,
    "pow2": Pow2Operator,
    "powy": PowYOperator,
    "pow_euler": PowEulerOperator,
    "sin": SinOperator,
    "cos": CosOperator,
    "tan": TanOperator,
    "pi": PiOperator,
    "euler": EulerOperator,
    "natural_logarithm": NaturalLogarithmOperator,
    "log": LogarithmOperator,
    "factorial": FactorialOperator,
};

export default class OperatorsFactory {

    /**
     * Get operator
     *
     * @param v
     * @param unit
     * @return {BaseOperator}
     */
    getOperator(v, unit) {
        let constructor = operators[v] || BaseOperator;
        return new constructor(unit);
    }

    isOperator(v) {
        return !!operators[v];
    }
}