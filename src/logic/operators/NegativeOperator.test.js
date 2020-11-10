import chai from "chai";
import {describe, it} from "@jest/globals";
import NegativeOperator from "./NegativeOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("NegativeOperator", () => {

    it('gets operator', () => {
        assert.equal(new NegativeOperator().getOperator(), "-");
    });

    it('gets precedence', () => {
        assert.equal(new NegativeOperator().getPrecedence(), Constants.getPrecedenceHigh());
    });

    it('gets string order', () => {
        assert.equal(new NegativeOperator().getStringOrder(), -1);
    });

    it('gets string no spacing', () => {
        assert.isTrue(new NegativeOperator().getStringNoSpacing());
    });

    it('gets apply immediately', () => {
        assert.isTrue(new NegativeOperator().getApplyImmediately());
    });

    it('runs', () => {
        assert.equal(new NegativeOperator().run(0), 0);
        assert.equal(new NegativeOperator().run(1), -1);
        assert.equal(new NegativeOperator().run(-1), 1);
        assert.equal(new NegativeOperator().run(0, 5), -5);
        assert.equal(new NegativeOperator().run(1, 5), -1);
        assert.equal(new NegativeOperator().run(-1, 5), 1);
        assert.equal(new NegativeOperator().run(0, 0), 0);
        assert.equal(new NegativeOperator().run(0, 1), -1);
        assert.equal(new NegativeOperator().run(0, -1), 1);
    });

    it('gets full string', () => {
        assert.equal(new NegativeOperator().toFullString(0), '-' + Constants.getNoSpaceMarker());
    });

});