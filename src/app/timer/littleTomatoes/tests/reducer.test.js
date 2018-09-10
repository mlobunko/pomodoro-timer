import * as t from "../actionTypes";
import reducer, { initialState } from "../reducer";

describe("reducer", () => {
  it("return default state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`handle ${t.ADD}`, () => {
    const action = {
      type: t.ADD
    };
    const expectedState = initialState + 1;
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it(`handle ${t.RESET}`, () => {
    const action = {
      type: t.RESET
    };
    const state = 3;
    const expectedState = 0;
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
