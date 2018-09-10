import { msToMinSec } from "../model";

describe("msToMinSec", () => {
  it("should handle 65000 ms", () => {
    const ms = 65000;
    const expectedTime = "01:05";
    expect(msToMinSec(ms)).toEqual(expectedTime);
  });

  it("should handle 650000 ms", () => {
    const ms = 650000;
    const expectedTime = "10:50";
    expect(msToMinSec(ms)).toEqual(expectedTime);
  });
});
