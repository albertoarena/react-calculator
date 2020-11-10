import chai from "chai";
import {describe, it} from "@jest/globals";
import _ from "lodash";
import BaseNumber from "./BaseNumber";
import Constants from "../Constants";

const assert = chai.assert;

describe("BaseNumber", () => {

    it('gets type', () => {
        assert.equal(new BaseNumber(0).getType(), "number");
        assert.equal(new BaseNumber(1).getType(), "number");
        assert.equal(new BaseNumber("A").getType(), "number");
    });

    describe('gets value', () => {
        it('gets value', () => {
            assert.equal(new BaseNumber(0).getValue(), 0);
            assert.equal(new BaseNumber(1).getValue(), 1);
            assert.equal(new BaseNumber(-123).getValue(), -123);
        });

        it('gets value even if stored as string', () => {
            assert.equal(new BaseNumber(0, "~0").getValue(), 0);
            assert.equal(new BaseNumber(1, "+1").getValue(), 1);
        });

        it('gets float value', () => {
            assert.equal(new BaseNumber(0.0).getValue(), 0.0);
            assert.equal(new BaseNumber(1.23).getValue(), 1.23);
            assert.equal(new BaseNumber(-1.23).getValue(), -1.23);
        });

        it('gets rounded float value', () => {
            assert.equal(new BaseNumber(0.123456789012345).getValue(), 0.123456789);
            assert.equal(new BaseNumber(0.123456789999999).getValue(), 0.123456790);
            assert.equal(new BaseNumber(Math.PI).getValue(), _.round(Math.PI, Constants.getRoundDigits()));
        });

        it('gets NaN', () => {
            const instance = new BaseNumber("ABC");
            assert.isNaN(instance.getValue());
        });
    });

    describe('to string', function () {
        it('gets as as string', () => {
            assert.equal(new BaseNumber(0).toString(), "0");
            assert.equal(new BaseNumber(1).toString(), "1");
            assert.equal(new BaseNumber(1.23).toString(), "1.23");
            assert.equal(new BaseNumber(-1.23).toString(), "-1.23");
            assert.equal(new BaseNumber(0.123456789012345).toString(), "0.123456789012345");
            assert.equal(new BaseNumber(0.123456789999999).toString(), "0.123456789999999");
            assert.equal(new BaseNumber(Math.PI).toString(), String(Math.PI));
            assert.isNaN(new BaseNumber("A").toString());
        });

        it('gets as as string with custom string', () => {
            assert.equal(new BaseNumber(0, "+0").toString(), "+0");
            assert.equal(new BaseNumber(1, "~1").toString(), "~1");
            assert.equal(new BaseNumber(1.23, "-1.23").toString(), "-1.23");
            assert.equal(new BaseNumber(-1.23, "+1.23").toString(), "+1.23");
            assert.equal(new BaseNumber(0.123456789012345, "0,1234").toString(), "0,1234");
            assert.equal(new BaseNumber(0.123456789999999, "0.123").toString(), "0.123");
            assert.equal(new BaseNumber(Math.PI, "pi").toString(), "pi");
            assert.equal(new BaseNumber("A", "B").toString(), "B");
        });
    });

});
