import chai from "chai";
import {describe, it, expect} from "@jest/globals";
import NaturalLogarithmOperator from "./NaturalLogarithmOperator";
import Constants from "../Constants";
import InvalidException from "../exceptions/InvalidException";

const assert = chai.assert;

describe("NaturalLogarithmOperator", () => {

    it('gets operator', () => {
        assert.equal(new NaturalLogarithmOperator().getOperator(), "ln");
    });

    it('gets precedence', () => {
        assert.equal(new NaturalLogarithmOperator().getPrecedence(), Constants.getPrecedenceMedium());
    });

    it('gets string brackets', () => {
        assert.isTrue(new NaturalLogarithmOperator().getStringBrackets());
    });

    it('gets string order', () => {
        assert.equal(new NaturalLogarithmOperator().getStringOrder(), -1);
    });

    it('gets apply immediately', () => {
        assert.isTrue(new NaturalLogarithmOperator().getApplyImmediately());
    });

    describe("runs", () => {

        it('runs', () => {
            const calc = (v) => {
                return Math.log(v);
            }

            assert.equal(new NaturalLogarithmOperator().run(0), calc(0));
            assert.equal(new NaturalLogarithmOperator().run(1), calc(1));
            assert.equal(new NaturalLogarithmOperator().run(5), calc(5));

            // Float
            assert.equal(new NaturalLogarithmOperator().run(1.2), calc(1.2));
            assert.equal(new NaturalLogarithmOperator().run(5.5), calc(5.5));
        });

        it('runs and triggers exception', () => {
            expect(() => {
                new NaturalLogarithmOperator().run(-5);
            }).toThrow(InvalidException);

            expect(() => {
                new NaturalLogarithmOperator().run("A");
            }).toThrow(InvalidException);

        });

    });

});