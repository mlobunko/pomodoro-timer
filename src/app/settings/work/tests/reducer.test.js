import * as t from "../actionTypes";
import reducer, { initialState } from "../reducer";

describe("reducer", () => {
  it("return default state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`handle ${t.DECREASE}`, () => {
    const expectedState = initialState - 1;
    const action = {
      type: t.DECREASE
    };

    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it(`handle ${t.INCREASE}`, () => {
    const expectedState = initialState + 1;
    const action = {
      type: t.INCREASE
    };

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
