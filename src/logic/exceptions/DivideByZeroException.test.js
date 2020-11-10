import chai from "chai";
import {describe, it, expect} from "@jest/globals";
import DivideByZeroException from "./DivideByZeroException";

const assert = chai.assert;

describe("DivideByZeroException", () => {

    it('constructor', () => {
        const obj = new DivideByZeroException("message");
        assert.instanceOf(obj, DivideByZeroException);
        assert.equal(obj.getMessage(), "Divide by zero");
    });

});
