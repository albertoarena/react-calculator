import { describe, it } from "vitest";
import KeyboardInput from "./KeyboardInput";

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
    preventDefault: () => {},
    key: key,
  });
  return mockup.lastKey;
};

const handleKeyDownWithControl = (obj, key) => {
  delete mockup.lastKey;
  obj.handleKeyDown({
    preventDefault: () => {},
    ctrlKey: true,
    keyCode: key,
  });
  return mockup.lastKey;
};

const handleKeyDownWithMeta = (obj, key) => {
  delete mockup.lastKey;
  obj.handleKeyDown({
    preventDefault: () => {},
    metaKey: true,
    keyCode: key,
  });
  return mockup.lastKey;
};

const handleKeyAltGr = (obj) => {
  delete mockup.lastKey;
  obj.handleKeyDown({
    preventDefault: () => {},
    ctrlKey: true,
    altKey: true,
  });
  return mockup.lastKey;
};

describe("KeyboardInput", () => {
  it("constructs", () => {
    expect(new KeyboardInput()).toBeInstanceOf(KeyboardInput);
  });

  describe("handles key down", function () {
    it("handles key down without shift keys", () => {
      const obj = new KeyboardInput(mockup);

      expect(handleKeyDown(obj, 0)).toEqual(0);
      expect(handleKeyDown(obj, "Backspace")).toEqual("clear");
      expect(handleKeyDown(obj, "Enter")).toEqual("equals");
      expect(handleKeyDown(obj, "=")).toEqual("equals");
      expect(handleKeyDown(obj, "+")).toEqual("add");
      expect(handleKeyDown(obj, "-")).toEqual("subtract");
      expect(handleKeyDown(obj, "/")).toEqual("divide");
      expect(handleKeyDown(obj, "*")).toEqual("multiply");
      expect(handleKeyDown(obj, "%")).toEqual("percentage");
      expect(handleKeyDown(obj, "^")).toEqual("pow2");
      expect(handleKeyDown(obj, ",")).toEqual(".");
      expect(handleKeyDown(obj, "p")).toEqual("pi");
      expect(handleKeyDown(obj, "e")).toEqual("euler");
    });

    it("handles Alt+Gr key", () => {
      const obj = new KeyboardInput(mockup);
      expect(handleKeyAltGr(obj)).toBeUndefined();
    });

    it("handles key down with control key", () => {
      const obj = new KeyboardInput(mockup);

      expect(handleKeyDownWithControl(obj, 0)).toBeUndefined();
      expect(handleKeyDownWithControl(obj, 67)).toEqual("copy");
      expect(handleKeyDownWithControl(obj, 86)).toEqual("paste");
      expect(handleKeyDownWithControl(obj, 88)).toEqual("clear");
    });

    it("handles key down with meta key", () => {
      const obj = new KeyboardInput(mockup);

      expect(handleKeyDownWithMeta(obj, 0)).toBeUndefined();
      expect(handleKeyDownWithMeta(obj, 67)).toEqual("copy");
      expect(handleKeyDownWithMeta(obj, 86)).toEqual("paste");
      expect(handleKeyDownWithMeta(obj, 88)).toEqual("clear");
    });
  });
});
