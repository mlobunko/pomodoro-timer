import { displayTime } from "../model";

describe("displayTime", () => {
  it("should handle 10", () => {
    const num = 10;
    expect(displayTime(num)).toEqual(num);
  });
  it("should handle 9", () => {
    const num = 9;
    const expectedReturn = "09";
    expect(displayTime(num)).toEqual(expectedReturn);
  });
});
