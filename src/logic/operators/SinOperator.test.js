import chai from "chai";
import {describe, it} from "@jest/globals";
import SinOperator from "./SinOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("SinOperator", () => {

    it('gets operator', () => {
        assert.equal(new SinOperator().getOperator(), "sin");
    });

    it('gets precedence', () => {
        assert.equal(new SinOperator().getPrecedence(), Constants.getPrecedenceMedium());
    });

    it('gets string order', () => {
        assert.equal(new SinOperator().getStringOrder(), -1);
    });

    it('gets string brackets', () => {
        assert.isTrue(new SinOperator().getStringBrackets());
    });

    it('gets apply immediately', () => {
        assert.isTrue(new SinOperator().getApplyImmediately());
    });

    describe('runs', () => {

        it('runs with radians unit', () => {
            const value = Math.sin(1);
            assert.equal(new SinOperator().run(1), value);
            assert.equal(new SinOperator().run(0, 1), value);
            assert.equal(new SinOperator().run(-1), -value);
            assert.equal(new SinOperator().run(0, -1), -value);
        });

        it('runs with degrees unit', () => {
            const value = Math.sin(Math.PI / 180);
            assert.equal(new SinOperator(Constants.getUnitDegrees()).run(1), value);
            assert.equal(new SinOperator(Constants.getUnitDegrees()).run(0, 1), value);
            assert.equal(new SinOperator(Constants.getUnitDegrees()).run(-1), -value);
            assert.equal(new SinOperator(Constants.getUnitDegrees()).run(0, -1), -value);
        });

    });

});