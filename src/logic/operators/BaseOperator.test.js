import { describe, it, expect } from "vitest";
import BaseOperator from "./BaseOperator";

describe("BaseOperator", () => {
  it("does not construct", () => {
    expect(() => {
      new BaseOperator();
    }).toThrow(Error);
  });
});
