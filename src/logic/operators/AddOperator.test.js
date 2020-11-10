import chai from "chai";
import {describe, it} from "@jest/globals";
import _ from "lodash";
import AddOperator from "./AddOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("AddOperator", () => {

    it('gets operator', () => {
        assert.equal(new AddOperator().getOperator(), "+");
    });

    it('gets precedence', () => {
        assert.equal(new AddOperator().getPrecedence(), Constants.getPrecedenceLow());
    });

    it('runs', () => {
        assert.equal(new AddOperator().run(0, 0), 0);
        assert.equal(new AddOperator().run(1, 2), 3);
        assert.equal(new AddOperator().run(-1, 2), 1);
        assert.equal(_.round(new AddOperator().run(1.5, -1.3), Constants.getRoundDigits()), 0.2);
        assert.equal(_.round(new AddOperator().run(-1.3, 1.5), Constants.getRoundDigits()), 0.2);
    });

});