import { describe, expect, it } from "vitest";
import Entity from "./Entity";

describe("Entity", () => {
  it("does not construct", () => {
    expect(() => {
      new Entity();
    }).toThrow(Error);
  });
});
