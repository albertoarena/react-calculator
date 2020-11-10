import chai from "chai";
import {describe, it} from "@jest/globals";
import _ from "lodash";
import SubtractOperator from "./SubtractOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("SubstractOperator", () => {

    it('gets operator', () => {
        assert.equal(new SubtractOperator().getOperator(), "-");
    });

    it('gets precedence', () => {
        assert.equal(new SubtractOperator().getPrecedence(), Constants.getPrecedenceLow());
    });

    it('runs', () => {
        assert.equal(new SubtractOperator().run(0, 0), 0);
        assert.equal(new SubtractOperator().run(1, 2), -1);
        assert.equal(new SubtractOperator().run(2, 1), 1);
        assert.equal(_.round(new SubtractOperator().run(1.5, 1.3), Constants.getRoundDigits()), 0.2);
        assert.equal(_.round(new SubtractOperator().run(1.5, -1.3), Constants.getRoundDigits()), 2.8);
    });

});