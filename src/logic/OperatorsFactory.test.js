import chai from "chai";
import {describe, expect, it} from "@jest/globals";
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

const assert = chai.assert;

describe("OperatorsFactory", () => {

    it('instantiates operators factory', () => {
        assert.instanceOf(new OperatorsFactory(), OperatorsFactory);
    });

    describe('gets operator', () => {

        it('gets valid operator', () => {
            const obj = new OperatorsFactory();
            assert.instanceOf(obj.getOperator("add"), AddOperator);
            assert.instanceOf(obj.getOperator("subtract"), SubtractOperator);
            assert.instanceOf(obj.getOperator("multiply"), MultiplyOperator);
            assert.instanceOf(obj.getOperator("divide"), DivideOperator);
            assert.instanceOf(obj.getOperator("negative"), NegativeOperator);
            assert.instanceOf(obj.getOperator("sqr2"), SquareRootOperator);
            assert.instanceOf(obj.getOperator("percentage"), PercentageOperator);
            assert.instanceOf(obj.getOperator("pow2"), Pow2Operator);
            assert.instanceOf(obj.getOperator("powy"), PowYOperator);
            assert.instanceOf(obj.getOperator("pow_euler"), PowEulerOperator);
            assert.instanceOf(obj.getOperator("sin"), SinOperator);
            assert.instanceOf(obj.getOperator("cos"), CosOperator);
            assert.instanceOf(obj.getOperator("tan"), TanOperator);
            assert.instanceOf(obj.getOperator("pi"), PiOperator);
            assert.instanceOf(obj.getOperator("euler"), EulerOperator);
            assert.instanceOf(obj.getOperator("natural_logarithm"), NaturalLogarithmOperator);
            assert.instanceOf(obj.getOperator("log"), LogarithmOperator);
            assert.instanceOf(obj.getOperator("factorial"), FactorialOperator);
        });

        it('does not get an invalid operator', () => {
            const obj = new OperatorsFactory();

            expect(() => {
                obj.getOperator()
            }).toThrow(Error);

            expect(() => {
                obj.getOperator("invalid_not_existing")
            }).toThrow(Error);
        });
    });

    it('checks if it is an operator', () => {
        const obj = new OperatorsFactory();
        assert.isTrue(obj.isOperator("add"));
        assert.isTrue(obj.isOperator("subtract"));
        assert.isTrue(obj.isOperator("multiply"));
        assert.isTrue(obj.isOperator("divide"));
        assert.isTrue(obj.isOperator("negative"));
        assert.isTrue(obj.isOperator("sqr2"));
        assert.isTrue(obj.isOperator("percentage"));
        assert.isTrue(obj.isOperator("pow2"));
        assert.isTrue(obj.isOperator("powy"));
        assert.isTrue(obj.isOperator("pow_euler"));
        assert.isTrue(obj.isOperator("sin"));
        assert.isTrue(obj.isOperator("cos"));
        assert.isTrue(obj.isOperator("tan"));
        assert.isTrue(obj.isOperator("pi"));
        assert.isTrue(obj.isOperator("euler"));
        assert.isTrue(obj.isOperator("natural_logarithm"));
        assert.isTrue(obj.isOperator("log"));
        assert.isTrue(obj.isOperator("factorial"));

        assert.isFalse(obj.isOperator());
        assert.isFalse(obj.isOperator("invalid"));
    });

});