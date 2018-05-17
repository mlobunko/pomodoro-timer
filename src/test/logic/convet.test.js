import { minToMs, msToMmSs } from "../../logic/convert";

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
