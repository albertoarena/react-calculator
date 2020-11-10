import {describe, it, expect} from "@jest/globals";
import BaseOperator from "./BaseOperator";

describe("BaseOperator", () => {

    it('does not construct', () => {
        expect(() => {
            new BaseOperator();
        }).toThrow(Error);
    });

});