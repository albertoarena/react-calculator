import chai from "chai";
import {describe, it} from "@jest/globals";
import Pow2Operator from "./Pow2Operator";
import Constants from "../Constants";

const assert = chai.assert;

describe("Pow2Operator", () => {

    it('gets operator', () => {
        assert.equal(new Pow2Operator().getOperator(), "^2");
    });

    it('gets precedence', () => {
        assert.equal(new Pow2Operator().getPrecedence(), Constants.getPrecedenceHigh());
    });

    it('runs', () => {
        const calc = (v) => {
            return Math.pow(v, 2);
        }

        assert.equal(new Pow2Operator().run(0), calc(0));
        assert.equal(new Pow2Operator().run(1), calc(1));
        assert.equal(new Pow2Operator().run(2), calc(2));
        assert.equal(new Pow2Operator().run(-2), calc(-2));
        assert.equal(new Pow2Operator().run(0, 0), calc(0));
        assert.equal(new Pow2Operator().run(0, 1), calc(1));
        assert.equal(new Pow2Operator().run(0, 2), calc(2));
        assert.equal(new Pow2Operator().run(0, -2), calc(-2));
    });

});