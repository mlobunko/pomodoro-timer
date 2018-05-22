import { minToMs, msToMmSs, displaySettings } from "../../logic/convert";

it("should convert min to ms", () => {
  const min = 10;
  const resultMs = 600000;
  expect(minToMs(min)).toEqual(resultMs);
});

it("should convert ms to mm:ss format", () => {
  const ms = 1229900;
  const expectResult = "20:30";
  expect(msToMmSs(ms)).toEqual(expectResult);
});

it("should add 0 if less than 10", () => {
  const mn = 4;
  const result = "04";
  expect(displaySettings(mn)).toEqual(result);
});
