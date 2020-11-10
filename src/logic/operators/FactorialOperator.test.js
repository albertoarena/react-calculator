import chai from "chai";
import {describe, it} from "@jest/globals";
import _ from "lodash";
import FactorialOperator from "./FactorialOperator";
import Constants from "../Constants";

const assert = chai.assert;

describe("FactorialOperator", () => {

    it('gets operator', () => {
        assert.equal(new FactorialOperator().getOperator(), "!");
    });

    it('gets precedence', () => {
        assert.equal(new FactorialOperator().getPrecedence(), Constants.getPrecedenceHigh());
    });

    it('gets string no spacing', () => {
        assert.isTrue(new FactorialOperator().getStringNoSpacing());
    });

    it('runs', () => {
        assert.equal(new FactorialOperator().run(0), 1);
        assert.equal(new FactorialOperator().run(1), 1);
        assert.equal(new FactorialOperator().run(5), 120);
        assert.equal(new FactorialOperator().run(-1), -1);
        assert.equal(new FactorialOperator().run(-5), -120);

        // Float
        assert.equal(new FactorialOperator().run(1.2), 1);
        assert.equal(new FactorialOperator().run(5.5), 120);

        // NaN
        assert.equal(new FactorialOperator().run("A"), 1);
    });

});