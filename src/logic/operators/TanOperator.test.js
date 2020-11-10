import chai from "chai";
import {describe, it} from "@jest/globals";
import TanOperator from "./TanOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("TanOperator", () => {

    it('gets operator', () => {
        assert.equal(new TanOperator().getOperator(), "tan");
    });

    it('gets precedence', () => {
        assert.equal(new TanOperator().getPrecedence(), Constants.getPrecedenceMedium());
    });

    it('gets string order', () => {
        assert.equal(new TanOperator().getStringOrder(), -1);
    });

    it('gets string brackets', () => {
        assert.isTrue(new TanOperator().getStringBrackets());
    });

    it('gets apply immediately', () => {
        assert.isTrue(new TanOperator().getApplyImmediately());
    });

    describe('runs', () => {

        it('runs with radians unit', () => {
            const value = Math.tan(1);
            assert.equal(new TanOperator().run(1), value);
            assert.equal(new TanOperator().run(0, 1), value);
            assert.equal(new TanOperator().run(-1), -value);
            assert.equal(new TanOperator().run(0, -1), -value);
        });

        it('runs with degrees unit', () => {
            const value = Math.tan(Math.PI / 180);
            assert.equal(new TanOperator(Constants.getUnitDegrees()).run(1), value);
            assert.equal(new TanOperator(Constants.getUnitDegrees()).run(0, 1), value);
            assert.equal(new TanOperator(Constants.getUnitDegrees()).run(-1), -value);
            assert.equal(new TanOperator(Constants.getUnitDegrees()).run(0, -1), -value);
        });

    });

});