import chai from "chai";
import {describe, expect, it} from "@jest/globals";
import Entity from "./Entity";

describe("Entity", () => {

    it('does not construct', () => {
        expect(() => {
            new Entity();
        }).toThrow(Error);
    });

});