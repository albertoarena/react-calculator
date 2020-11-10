import chai from "chai";
import {describe, it} from "@jest/globals";
import PiOperator from "./PiOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("PiOperator", () => {

    it('gets operator', () => {
        assert.equal(new PiOperator().getOperator(), "π");
    });

    it('gets apply immediately', () => {
        assert.isTrue(new PiOperator().getApplyImmediately());
    });

    it('is constant', () => {
        assert.isTrue(new PiOperator().isConstant());
    });

    it('gets precedence', () => {
        assert.equal(new PiOperator().getPrecedence(), Constants.getPrecedenceLow());
    });

    it('runs', () => {
        assert.equal(new PiOperator().run(0, 0), Math.PI);
        assert.equal(new PiOperator().run(1, 2), Math.PI);
        assert.equal(new PiOperator().run(1.23, 4.56), Math.PI);
        assert.equal(new PiOperator().run("A", "B"), Math.PI);
    });

});