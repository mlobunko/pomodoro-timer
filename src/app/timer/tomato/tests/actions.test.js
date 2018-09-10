import * as t from "../actionTypes";
import { decreaseTimeBy100Ms, setTime } from "../actions";

describe("decreaseTimeBy100Ms", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.DECREASE_TIME_BY_100MS
    };
    expect(decreaseTimeBy100Ms()).toEqual(expectedAction);
  });
});

describe("setTime", () => {
  it("return action", () => {
    const time = 100;
    const expectedAction = {
      type: t.SET_TIME,
      time
    };
    expect(setTime(time)).toEqual(expectedAction);
  });
});
