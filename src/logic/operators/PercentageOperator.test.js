import chai from "chai";
import {describe, it} from "@jest/globals";
import PercentageOperator from "./PercentageOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("PercentageOperator", () => {

    it('gets operator', () => {
        assert.equal(new PercentageOperator().getOperator(), "%");
    });

    it('gets precedence', () => {
        assert.equal(new PercentageOperator().getPrecedence(), Constants.getPrecedenceHigh());
    });

    it('gets apply immediately', () => {
        assert.isTrue(new PercentageOperator().getApplyImmediately());
    });

    it('runs', () => {
        assert.equal(new PercentageOperator().run(0), 0);
        assert.equal(new PercentageOperator().run(1), 0.01);
        assert.equal(new PercentageOperator().run(-1), -0.01);
        assert.equal(new PercentageOperator().run(100), 1.0);
        assert.equal(new PercentageOperator().run(10000), 100.0);
        assert.equal(new PercentageOperator().run(0, 0), 0);
        assert.equal(new PercentageOperator().run(0, 1), 0.01);
        assert.equal(new PercentageOperator().run(0, -1), -0.01);
        assert.equal(new PercentageOperator().run(0, 100), 1.0);
        assert.equal(new PercentageOperator().run(0, 10000), 100.0);
    });

    it('gets full string', () => {
        assert.equal(new PercentageOperator().toFullString(), Constants.getNoSpaceMarker() + '%');
    });

});