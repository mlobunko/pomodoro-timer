import { minToMs } from "../model";

describe("minToMs", () => {
  it("handle 6 min", () => {
    const min = 6;
    const expectedMs = 360000;
    expect(minToMs(min)).toEqual(expectedMs);
  });

  it("handle 1 min", () => {
    const min = 1;
    const expectedMs = 60000;
    expect(minToMs(min)).toEqual(expectedMs);
  });
});
