import { describe, expect, it } from "vitest";
import Constants from "./Constants";

describe("Constants", () => {
  it("checks constants", () => {
    expect(Constants.getCompactSpaceMarker()).toEqual(":::");
    expect(Constants.getNoSpaceMarker()).toEqual(":~:");

    expect(Constants.getPrecedenceHigh()).toEqual(3);
    expect(Constants.getPrecedenceMedium()).toEqual(2);
    expect(Constants.getPrecedenceLow()).toEqual(1);

    expect(Constants.getRoundDigits()).toEqual(10);

    expect(Constants.getUnitDefault()).toEqual("radians");
    expect(Constants.getUnitRadians()).toEqual("radians");
    expect(Constants.getUnitDegrees()).toEqual("degrees");
  });
});
