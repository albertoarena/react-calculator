import chai from "chai";
import {describe, it} from "@jest/globals";
import KeyboardInput from "./KeyboardInput";

const assert = chai.assert;

const mockup = {
    getLastKey() {
        return this.lastKey;
    },
    click(key) {
        this.lastKey = key;
    },
    clear() {
        this.lastKey = "clear";
    },
    copy() {
        this.lastKey = "copy";
    },
    paste() {
        this.lastKey = "paste";
    },
};

const handleKeyDown = (obj, key) => {
    delete mockup.lastKey;
    obj.handleKeyDown({
        preventDefault: () => {
        },
        key: key,
    });
    return mockup.lastKey;
};

const handleKeyDownWithControl = (obj, key) => {
    delete mockup.lastKey;
    obj.handleKeyDown({
        preventDefault: () => {
        },
        ctrlKey: true,
        keyCode: key,
    });
    return mockup.lastKey;
};

const handleKeyDownWithMeta = (obj, key) => {
    delete mockup.lastKey;
    obj.handleKeyDown({
        preventDefault: () => {
        },
        metaKey: true,
        keyCode: key,
    });
    return mockup.lastKey;
};

const handleKeyAltGr = (obj) => {
    delete mockup.lastKey;
    obj.handleKeyDown({
        preventDefault: () => {
        },
        ctrlKey: true,
        altKey: true,
    });
    return mockup.lastKey;
};

describe("KeyboardInput", () => {

    it('constructs', () => {
        assert.instanceOf(new KeyboardInput(), KeyboardInput);
    });

    describe('handles key down', function () {
        it('handles key down without shift keys', () => {
            const obj = new KeyboardInput(mockup);

            assert.equal(handleKeyDown(obj, 0), 0);
            assert.equal(handleKeyDown(obj, "Backspace"), "clear");
            assert.equal(handleKeyDown(obj, "Enter"), "equals");
            assert.equal(handleKeyDown(obj, "="), "equals");
            assert.equal(handleKeyDown(obj, "+"), "add");
            assert.equal(handleKeyDown(obj, "-"), "subtract");
            assert.equal(handleKeyDown(obj, "/"), "divide");
            assert.equal(handleKeyDown(obj, "*"), "multiply");
            assert.equal(handleKeyDown(obj, "%"), "percentage");
            assert.equal(handleKeyDown(obj, "^"), "pow2");
            assert.equal(handleKeyDown(obj, ","), ".");
            assert.equal(handleKeyDown(obj, "p"), "pi");
            assert.equal(handleKeyDown(obj, "e"), "euler");
        });

        it('handles Alt+Gr key', () => {
            const obj = new KeyboardInput(mockup);
            assert.isUndefined(handleKeyAltGr(obj));
        });

        it('handles key down with control key', () => {
            const obj = new KeyboardInput(mockup);

            assert.isUndefined(handleKeyDownWithControl(obj, 0));
            assert.equal(handleKeyDownWithControl(obj, 67), "copy");
            assert.equal(handleKeyDownWithControl(obj, 86), "paste");
            assert.equal(handleKeyDownWithControl(obj, 88), "clear");
        });

        it('handles key down with meta key', () => {
            const obj = new KeyboardInput(mockup);

            assert.isUndefined(handleKeyDownWithMeta(obj, 0));
            assert.equal(handleKeyDownWithMeta(obj, 67), "copy");
            assert.equal(handleKeyDownWithMeta(obj, 86), "paste");
            assert.equal(handleKeyDownWithMeta(obj, 88), "clear");
        });

    });

})
