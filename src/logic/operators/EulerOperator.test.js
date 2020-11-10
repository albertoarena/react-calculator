import chai from "chai";
import {describe, it} from "@jest/globals";
import EulerOperator from "./EulerOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("EulerOperator", () => {

    it('gets operator', () => {
        assert.equal(new EulerOperator().getOperator(), "e");
    });

    it('gets apply immediately', () => {
        assert.isTrue(new EulerOperator().getApplyImmediately());
    });

    it('is constant', () => {
        assert.isTrue(new EulerOperator().isConstant());
    });

    it('gets precedence', () => {
        assert.equal(new EulerOperator().getPrecedence(), Constants.getPrecedenceLow());
    });

    it('runs', () => {
        assert.equal(new EulerOperator().run(0, 0), Math.E);
        assert.equal(new EulerOperator().run(1, 2), Math.E);
        assert.equal(new EulerOperator().run(1.23, 4.56), Math.E);
        assert.equal(new EulerOperator().run("A", "B"), Math.E);
    });

});