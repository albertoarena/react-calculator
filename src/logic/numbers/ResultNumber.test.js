import { describe, it } from "vitest";
import ResultNumber from "./ResultNumber";

describe("ResultNumber", () => {
  it("gets type", () => {
    expect(new ResultNumber(0).getType()).toEqual("result");
    expect(new ResultNumber(1).getType()).toEqual("result");
    expect(new ResultNumber("A").getType()).toEqual("result");
  });

  describe("to string", function () {
    it("gets as as string", () => {
      expect(new ResultNumber(0).toString()).toEqual("= 0");
      expect(new ResultNumber(1).toString()).toEqual("= 1");
      expect(new ResultNumber(1.23).toString()).toEqual("= 1.23");
      expect(new ResultNumber(-1.23).toString()).toEqual("= -1.23");
      expect(new ResultNumber(0.123456789012345).toString()).toEqual(
        "= 0.123456789012345",
      );
      expect(new ResultNumber(0.123456789999999).toString()).toEqual(
        "= 0.123456789999999",
      );
      expect(new ResultNumber(Math.PI).toString()).toEqual(
        "= " + String(Math.PI),
      );
      expect(new ResultNumber("A").toString()).toEqual("= NaN");
    });

    it("gets as as string with custom string", () => {
      expect(new ResultNumber(0, "+0").toString()).toEqual("= +0");
      expect(new ResultNumber(1, "~1").toString()).toEqual("= ~1");
      expect(new ResultNumber(1.23, "-1.23").toString()).toEqual("= -1.23");
      expect(new ResultNumber(-1.23, "+1.23").toString()).toEqual("= +1.23");
      expect(new ResultNumber(0.123456789012345, "0,1234").toString()).toEqual(
        "= 0,1234",
      );
      expect(new ResultNumber(0.123456789999999, "0.123").toString()).toEqual(
        "= 0.123",
      );
      expect(new ResultNumber(Math.PI, "pi").toString()).toEqual("= pi");
      expect(new ResultNumber("A", "B").toString()).toEqual("= B");
    });
  });
});
