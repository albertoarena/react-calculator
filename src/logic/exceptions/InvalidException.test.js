import { describe, it, expect } from "vitest";
import InvalidException from "./InvalidException";

describe("InvalidException", () => {
  it("constructor", () => {
    const obj = new InvalidException("message");
    expect(obj).toBeInstanceOf(InvalidException);
    expect(obj.getMessage()).toEqual("Invalid");
  });
});
