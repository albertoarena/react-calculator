import { describe, it } from "vitest";
import _ from "lodash";
import BaseNumber from "./BaseNumber";
import Constants from "../Constants";

describe("BaseNumber", () => {
  it("gets type", () => {
    expect(new BaseNumber(0).getType()).toEqual("number");
    expect(new BaseNumber(1).getType()).toEqual("number");
    expect(new BaseNumber("A").getType()).toEqual("number");
  });

  describe("gets value", () => {
    it("gets value", () => {
      expect(new BaseNumber(0).getValue()).toEqual(0);
      expect(new BaseNumber(1).getValue()).toEqual(1);
      expect(new BaseNumber(-123).getValue()).toEqual(-123);
    });

    it("gets value even if stored as string", () => {
      expect(new BaseNumber(0, "~0").getValue()).toEqual(0);
      expect(new BaseNumber(1, "+1").getValue()).toEqual(1);
    });

    it("gets float value", () => {
      expect(new BaseNumber(0.0).getValue()).toEqual(0.0);
      expect(new BaseNumber(1.23).getValue()).toEqual(1.23);
      expect(new BaseNumber(-1.23).getValue()).toEqual(-1.23);
    });

    it("gets rounded float value", () => {
      expect(new BaseNumber(0.123456789012345).getValue()).toEqual(0.123456789);
      expect(new BaseNumber(0.123456789999999).getValue()).toEqual(0.12345679);
      expect(new BaseNumber(Math.PI).getValue()).toEqual(
        _.round(Math.PI, Constants.getRoundDigits()),
      );
    });

    it("gets NaN", () => {
      const instance = new BaseNumber("ABC");
      expect(instance.getValue()).toBeNaN();
    });
  });

  describe("to string", function () {
    it("gets as as string", () => {
      expect(new BaseNumber(0).toString()).toEqual("0");
      expect(new BaseNumber(1).toString()).toEqual("1");
      expect(new BaseNumber(1.23).toString()).toEqual("1.23");
      expect(new BaseNumber(-1.23).toString()).toEqual("-1.23");
      expect(new BaseNumber(0.123456789012345).toString()).toEqual(
        "0.123456789012345",
      );
      expect(new BaseNumber(0.123456789999999).toString()).toEqual(
        "0.123456789999999",
      );
      expect(new BaseNumber(Math.PI).toString()).toEqual(String(Math.PI));
      expect(new BaseNumber("A").toString()).toBeNaN();
    });

    it("gets as as string with custom string", () => {
      expect(new BaseNumber(0, "+0").toString()).toEqual("+0");
      expect(new BaseNumber(1, "~1").toString()).toEqual("~1");
      expect(new BaseNumber(1.23, "-1.23").toString()).toEqual("-1.23");
      expect(new BaseNumber(-1.23, "+1.23").toString()).toEqual("+1.23");
      expect(new BaseNumber(0.123456789012345, "0,1234").toString()).toEqual(
        "0,1234",
      );
      expect(new BaseNumber(0.123456789999999, "0.123").toString()).toEqual(
        "0.123",
      );
      expect(new BaseNumber(Math.PI, "pi").toString()).toEqual("pi");
      expect(new BaseNumber("A", "B").toString()).toEqual("B");
    });
  });
});
