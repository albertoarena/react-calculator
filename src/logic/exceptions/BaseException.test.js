import { describe, it, expect } from "vitest";
import BaseException from "./BaseException";

describe("BaseException", () => {
  describe("instantiates an exception", () => {
    it("instantiates with empty message", () => {
      const obj = new BaseException();
      expect(obj).toBeInstanceOf(BaseException);
      expect(obj.getMessage()).toEqual("");
    });

    it("instantiates with a message", () => {
      const obj = new BaseException("message");
      expect(obj).toBeInstanceOf(BaseException);
      expect(obj.getMessage()).toEqual("message");
    });
  });
});
