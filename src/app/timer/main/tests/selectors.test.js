import { NAME as PARENT_NAME } from "../../constants";
import { NAME } from "../constants";

import { getIsWorkingTime, getTimerOn } from "../selectors";

const state = {
  [PARENT_NAME]: {
    [NAME]: {
      isWorkingTime: true,
      timerOn: true
    }
  }
};

describe("getIsWorkingTime", () => {
  it("return part of state", () => {
    expect(getIsWorkingTime(state)).toEqual(true);
  });
});

describe("getTimerOn", () => {
  it("return part of state", () => {
    expect(getTimerOn(state)).toEqual(true);
  });
});
