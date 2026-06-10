import { describe, it, expect } from "vitest";
import DivideByZeroException from "./DivideByZeroException";

describe("DivideByZeroException", () => {
  it("constructor", () => {
    const obj = new DivideByZeroException("message");
    expect(obj).toBeInstanceOf(DivideByZeroException);
    expect(obj.getMessage()).toEqual("Divide by zero");
  });
});
