import chai from "chai";
import {describe, it, expect} from "@jest/globals";
import BaseException from "./BaseException";

const assert = chai.assert;

describe("BaseException", () => {

    describe("instantiates an exception", () => {

        it('instantiates with empty message', () => {
            const obj = new BaseException();
            assert.instanceOf(obj, BaseException);
            assert.equal(obj.getMessage(), "");
        });

        it('instantiates with a message', () => {
            const obj = new BaseException("message");
            assert.instanceOf(obj, BaseException);
            assert.equal(obj.getMessage(), "message");
        });

    });

});
