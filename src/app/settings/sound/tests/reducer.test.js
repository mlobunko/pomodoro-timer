import * as t from "../actionTypes";
import reducer, { initialState } from "../reducer";

describe("reducer", () => {
  it("return default state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it(`handle ${t.CHANGE}`, () => {
    const expectedState = !initialState;
    const action = {
      type: t.CHANGE
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
