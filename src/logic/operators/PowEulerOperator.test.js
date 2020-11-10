import chai from "chai";
import {describe, it} from "@jest/globals";
import PowEulerOperator from "./PowEulerOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("PowEulerOperator", () => {

    it('gets operator', () => {
        assert.equal(new PowEulerOperator().getOperator(), "e^");
    });

    it('gets precedence', () => {
        assert.equal(new PowEulerOperator().getPrecedence(), Constants.getPrecedenceHigh());
    });

    it('gets apply immediately', () => {
        assert.isTrue(new PowEulerOperator().getApplyImmediately());
    });

    it('runs', () => {
        const calc = (v) => {
            return Math.pow(Math.E, v);
        }

        assert.equal(new PowEulerOperator().run(0), calc(0));
        assert.equal(new PowEulerOperator().run(1), calc(1));
        assert.equal(new PowEulerOperator().run(-1), calc(-1));
        assert.equal(new PowEulerOperator().run(0, 0), calc(0));
        assert.equal(new PowEulerOperator().run(0, 1), calc(1));
        assert.equal(new PowEulerOperator().run(0, -1), calc(-1));
    });

});