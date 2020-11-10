import chai from "chai";
import {describe, it} from "@jest/globals";
import ResultNumber from "./ResultNumber";

const assert = chai.assert;

describe("ResultNumber", () => {

    it('gets type', () => {
        assert.equal(new ResultNumber(0).getType(), "result");
        assert.equal(new ResultNumber(1).getType(), "result");
        assert.equal(new ResultNumber("A").getType(), "result");
    });

    describe('to string', function () {
        it('gets as as string', () => {
            assert.equal(new ResultNumber(0).toString(), "= 0");
            assert.equal(new ResultNumber(1).toString(), "= 1");
            assert.equal(new ResultNumber(1.23).toString(), "= 1.23");
            assert.equal(new ResultNumber(-1.23).toString(), "= -1.23");
            assert.equal(new ResultNumber(0.123456789012345).toString(), "= 0.123456789012345");
            assert.equal(new ResultNumber(0.123456789999999).toString(), "= 0.123456789999999");
            assert.equal(new ResultNumber(Math.PI).toString(), "= " + String(Math.PI));
            assert.equal(new ResultNumber("A").toString(), "= NaN");
        });

        it('gets as as string with custom string', () => {
            assert.equal(new ResultNumber(0, "+0").toString(), "= +0");
            assert.equal(new ResultNumber(1, "~1").toString(), "= ~1");
            assert.equal(new ResultNumber(1.23, "-1.23").toString(), "= -1.23");
            assert.equal(new ResultNumber(-1.23, "+1.23").toString(), "= +1.23");
            assert.equal(new ResultNumber(0.123456789012345, "0,1234").toString(), "= 0,1234");
            assert.equal(new ResultNumber(0.123456789999999, "0.123").toString(), "= 0.123");
            assert.equal(new ResultNumber(Math.PI, "pi").toString(), "= pi");
            assert.equal(new ResultNumber("A", "B").toString(), "= B");
        });

    });

})
