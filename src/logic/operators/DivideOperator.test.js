import chai from "chai";
import {describe, it, expect} from "@jest/globals";
import _ from "lodash";
import DivideOperator from "./DivideOperator";
import Constants from "../Constants";
import DivideByZeroException from "../exceptions/DivideByZeroException";

const assert = chai.assert;

describe("DivideOperator", () => {

    it('gets operator', () => {
        assert.equal(new DivideOperator().getOperator(), "/");
    });

    it('gets precedence', () => {
        assert.equal(new DivideOperator().getPrecedence(), Constants.getPrecedenceMedium());
    });

    describe("runs", () => {

        it('runs', () => {
            assert.equal(new DivideOperator().run(0, 1), 0);
            assert.equal(new DivideOperator().run(1, 2), 0.5);
            assert.equal(new DivideOperator().run(-1, 2), -0.5);
            assert.equal(_.round(new DivideOperator().run(1.5, -1.3), Constants.getRoundDigits()), -1.1538461538);
            assert.equal(_.round(new DivideOperator().run(-1.3, 1.5), Constants.getRoundDigits()), -0.8666666667);
        });

        it('triggers divide by zero error', () => {
            expect(() => {
                new DivideOperator().run(0, 0);
            }).toThrow(DivideByZeroException);
            expect(() => {
                new DivideOperator().run(1.23, 0);
            }).toThrow(DivideByZeroException);
            expect(() => {
                new DivideOperator().run(100, 0.0);
            }).toThrow(DivideByZeroException);
        });


    });

});