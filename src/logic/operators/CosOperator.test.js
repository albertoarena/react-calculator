import chai from "chai";
import {describe, it} from "@jest/globals";
import CosOperator from "./CosOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("CosOperator", () => {

    it('gets operator', () => {
        assert.equal(new CosOperator().getOperator(), "cos");
    });

    it('gets precedence', () => {
        assert.equal(new CosOperator().getPrecedence(), Constants.getPrecedenceMedium());
    });

    it('gets string order', () => {
        assert.equal(new CosOperator().getStringOrder(), -1);
    });

    it('gets string brackets', () => {
        assert.isTrue(new CosOperator().getStringBrackets());
    });

    it('gets apply immediately', () => {
        assert.isTrue(new CosOperator().getApplyImmediately());
    });

    describe('runs', () => {

        it('runs with radians unit', () => {
            const value = Math.cos(1);
            assert.equal(new CosOperator().run(1), value);
            assert.equal(new CosOperator().run(0, 1), value);
            assert.equal(new CosOperator().run(-1), value);
            assert.equal(new CosOperator().run(0, -1), value);
        });

        it('runs with degrees unit', () => {
            const value = Math.cos(Math.PI / 180);
            assert.equal(new CosOperator(Constants.getUnitDegrees()).run(1), value);
            assert.equal(new CosOperator(Constants.getUnitDegrees()).run(0, 1), value);
            assert.equal(new CosOperator(Constants.getUnitDegrees()).run(-1), value);
            assert.equal(new CosOperator(Constants.getUnitDegrees()).run(0, -1), value);
        });

    });

});