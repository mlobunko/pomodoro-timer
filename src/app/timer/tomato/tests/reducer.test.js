import * as t from "../actionTypes";
import reducer, { initialState } from "../reducer";

describe("reducer", () => {
  it("return default state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`handle ${t.DECREASE_TIME_BY_100MS}`, () => {
    const action = {
      type: t.DECREASE_TIME_BY_100MS
    };
    const state = 200;
    const expectedState = state - 100;
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
