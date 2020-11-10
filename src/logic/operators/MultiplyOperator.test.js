import chai from "chai";
import {describe, it} from "@jest/globals";
import _ from "lodash";
import MultiplyOperator from "./MultiplyOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("MultiplyOperator", () => {

    it('gets operator', () => {
        assert.equal(new MultiplyOperator().getOperator(), "x");
    });

    it('gets precedence', () => {
        assert.equal(new MultiplyOperator().getPrecedence(), Constants.getPrecedenceMedium());
    });

    it('runs', () => {
        assert.equal(new MultiplyOperator().run(0, 0), 0);
        assert.equal(new MultiplyOperator().run(0, 1), 0);
        assert.equal(new MultiplyOperator().run(1, 2), 2);
        assert.equal(new MultiplyOperator().run(-1, 2), -2);
        assert.equal(_.round(new MultiplyOperator().run(1.5, -1.3), Constants.getRoundDigits()), -1.95);
        assert.equal(_.round(new MultiplyOperator().run(-1.3, 1.5), Constants.getRoundDigits()), -1.95);
    });

});