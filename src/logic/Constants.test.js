import chai from "chai";
import {describe, expect, it} from "@jest/globals";
import Constants from "./Constants";

const assert = chai.assert;

describe("Constants", () => {

    it('checks constants', () => {
        assert.equal(Constants.getCompactSpaceMarker(), ':::');
        assert.equal(Constants.getNoSpaceMarker(), ':~:');

        assert.equal(Constants.getPrecedenceHigh(), 3);
        assert.equal(Constants.getPrecedenceMedium(), 2);
        assert.equal(Constants.getPrecedenceLow(), 1);

        assert.equal(Constants.getRoundDigits(), 10);

        assert.equal(Constants.getUnitDefault(), 'radians');
        assert.equal(Constants.getUnitRadians(), 'radians');
        assert.equal(Constants.getUnitDegrees(), 'degrees');
    });

});