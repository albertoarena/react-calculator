import chai from "chai";
import {describe, it} from "@jest/globals";
import PowYOperator from "./PowYOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("PowYOperator", () => {

    it('gets operator', () => {
        assert.equal(new PowYOperator().getOperator(), "^");
    });

    it('gets precedence', () => {
        assert.equal(new PowYOperator().getPrecedence(), Constants.getPrecedenceHigh());
    });

    it('runs', () => {
        const calc = (x, y) => {
            return Math.pow(x, y);
        }

        assert.equal(new PowYOperator().run(0, 0), calc(0, 0));
        assert.equal(new PowYOperator().run(0, 1), calc(0, 1));
        assert.equal(new PowYOperator().run(1, 0), calc(1, 0));
        assert.equal(new PowYOperator().run(1, 1), calc(1, 1));
        assert.equal(new PowYOperator().run(2, 4), calc(2, 4));
        assert.equal(new PowYOperator().run(2, 300), calc(2, 300));
        assert.equal(new PowYOperator().run(2, 300000), Infinity);
    });

});