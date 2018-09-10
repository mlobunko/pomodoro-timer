import * as t from "../actionTypes";
import reducer, { initialState } from "../reducer";

describe("reducer", () => {
  it("return default state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${t.CLOSE}`, () => {
    const action = {
      type: t.CLOSE
    };
    const expectedState = false;
    const state = true;
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it(`should handle ${t.OPEN}`, () => {
    const action = {
      type: t.OPEN
    };
    const expectedState = true;
    const state = false;
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
