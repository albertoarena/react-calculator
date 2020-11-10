import chai from "chai";
import {describe, expect, it} from "@jest/globals";
import Constants from "./Constants";
import Calculator from "./Calculator";

const assert = chai.assert;

describe("Calculator", () => {

    describe('instantiates calculator', () => {

        it('instantiates calculator with default settings', () => {
            const obj = new Calculator();
            assert.instanceOf(obj, Calculator);
            assert.equal(obj.unit, Constants.getUnitDefault());
            assert.equal(obj.debug, false);
        });

        it('instantiates calculator with custom settings', () => {
            const obj = new Calculator({
                unit: Constants.getUnitDegrees(),
                debug: true,
            });
            assert.instanceOf(obj, Calculator);
            assert.equal(obj.unit, Constants.getUnitDegrees());
            assert.equal(obj.debug, true);
        });

    });

    it('sets unit', () => {
        const obj = new Calculator();
        assert.equal(obj.unit, Constants.getUnitDefault());
        obj.setUnit(Constants.getUnitDegrees());
        assert.equal(obj.unit, Constants.getUnitDegrees());
    });

    it('clears calculator', () => {
        const obj = new Calculator();

        assert.isNull(obj.getResult().total);

        assert(obj.operation("1")
            .operation("add")
            .operation("2")
            .result()
            .total, "3"
        );

        obj.clear();

        assert.isNull(obj.getResult().total);
    });

    describe('getResult', () => {

        it('gets initial empty result', () => {
            const obj = new Calculator();
            const result = obj.getResult();
            assert.isFalse(result.processed);
            assert.isNull(result.total);
            assert.equal(result.next, "");
            assert.equal(result.history, "");
            assert.equal(result.exception, "");
        });

        it('gets result after calculation', () => {
            const obj = new Calculator();

            const result = obj.operation("1")
                .operation("add")
                .operation("2")
                .result();

            assert.isTrue(result.processed);
            assert.equal(result.total, "3");
            assert.equal(result.next, "3");
            assert.equal(result.history, "1 + 2 = 3");
            assert.equal(result.exception, "");
        });

    });

    describe('calculates', () => {

        it('calculates addition', () => {
            const obj = new Calculator();

            const result = obj.operation("1")
                .operation("add")
                .operation("2.5")
                .result();

            assert.isTrue(result.processed);
            assert.equal(result.total, "3.5");
            assert.equal(result.next, "3.5");
            assert.equal(result.history, "1 + 2.5 = 3.5");
            assert.equal(result.exception, "");
        });

        it('calculates addition with positive and negative values', () => {
            const obj = new Calculator();

            const result = obj.operation("1")
                .operation("add")
                .operation("2.5")
                .operation("negative")
                .result();

            assert.isTrue(result.processed);
            assert.equal(result.total, "-1.5");
            assert.equal(result.next, "-1.5");
            assert.equal(result.history, "1 + -2.5 = -1.5");
            assert.equal(result.exception, "");
        });

    });

});