import chai from "chai";
import {describe, it, expect} from "@jest/globals";
import InvalidException from "./InvalidException";

const assert = chai.assert;

describe("InvalidException", () => {

    it('constructor', () => {
        const obj = new InvalidException("message");
        assert.instanceOf(obj, InvalidException);
        assert.equal(obj.getMessage(), "Invalid");
    });

});
