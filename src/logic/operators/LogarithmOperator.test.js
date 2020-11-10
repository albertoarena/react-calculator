import chai from "chai";
import {describe, it, expect} from "@jest/globals";
import LogarithmOperator from "./LogarithmOperator";
import Constants from "../Constants";
import InvalidException from "../exceptions/InvalidException";

const assert = chai.assert;

describe("LogarithmOperator", () => {

    it('gets operator', () => {
        assert.equal(new LogarithmOperator().getOperator(), "log");
    });

    it('gets precedence', () => {
        assert.equal(new LogarithmOperator().getPrecedence(), Constants.getPrecedenceMedium());
    });

    it('gets string order', () => {
        assert.equal(new LogarithmOperator().getStringOrder(), -1);
    });

    it('gets apply immediately', () => {
        assert.isTrue(new LogarithmOperator().getApplyImmediately());
    });

    describe("runs", () => {

        it('runs', () => {
            const calc = (v) => {
                return Math.log10(v);
            }

            assert.equal(new LogarithmOperator().run(0), calc(0));
            assert.equal(new LogarithmOperator().run(1), calc(1));
            assert.equal(new LogarithmOperator().run(5), calc(5));

            // Float
            assert.equal(new LogarithmOperator().run(1.2), calc(1.2));
            assert.equal(new LogarithmOperator().run(5.5), calc(5.5));
        });

        it('runs and triggers exception', () => {
            expect(() => {
                new LogarithmOperator().run(-5);
            }).toThrow(InvalidException);

            expect(() => {
                new LogarithmOperator().run("A");
            }).toThrow(InvalidException);

        });

    });

});