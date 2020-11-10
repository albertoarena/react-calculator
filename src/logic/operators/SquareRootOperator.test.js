import chai from "chai";
import {describe, it} from "@jest/globals";
import SquareRootOperator from "./SquareRootOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("SquareRootOperator", () => {

    it('gets operator', () => {
        assert.equal(new SquareRootOperator().getOperator(), "√");
    });

    it('gets precedence', () => {
        assert.equal(new SquareRootOperator().getPrecedence(), Constants.getPrecedenceHigh());
    });

    it('gets string brackets', () => {
        assert.isTrue(new SquareRootOperator().getStringBrackets());
    });

    it('gets string order', () => {
        assert.equal(new SquareRootOperator().getStringOrder(), -1);
    });

    it('runs', () => {
        const calc = (x) => {
            return Math.sqrt(x);
        }

        assert.equal(new SquareRootOperator().run(0), calc(0));
        assert.equal(new SquareRootOperator().run(1), calc(1));
        assert.equal(new SquareRootOperator().run(2), calc(2));
        assert.equal(new SquareRootOperator().run(8), calc(8));
        assert.equal(new SquareRootOperator().run(0, 0), calc(0));
        assert.equal(new SquareRootOperator().run(0, 1), calc(1));
        assert.equal(new SquareRootOperator().run(0, 2), calc(2));
        assert.equal(new SquareRootOperator().run(0, 8), calc(8));
    });

});