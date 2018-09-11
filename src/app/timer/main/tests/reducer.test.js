import * as t from "../actionTypes";
import reducer, { initialState } from "../reducer";

describe("reducer", () => {
  const mockState = {
    timerOn: true,
    isWorkingTime: true
  };

  it("return default state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`handle ${t.SET_TIMER_ON_FALSE}`, () => {
    const action = {
      type: t.SET_TIMER_ON_FALSE
    };
    const state = {
      ...mockState
    };
    const expectedState = {
      ...mockState,
      timerOn: false
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it(`handle ${t.SET_TIMER_ON_TRUE}`, () => {
    const action = {
      type: t.SET_TIMER_ON_TRUE
    };
    const state = {
      ...mockState,
      timerOn: false
    };
    const expectedState = {
      ...mockState
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it(`handle ${t.SET_WORKING_TIME_FALSE}`, () => {
    const action = {
      type: t.SET_WORKING_TIME_FALSE
    };
    const state = {
      ...mockState
    };
    const expectedState = {
      ...mockState,
      isWorkingTime: false
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it(`handle ${t.SET_WORKING_TIME_TRUE}`, () => {
    const action = {
      type: t.SET_WORKING_TIME_TRUE
    };
    const state = {
      ...mockState,
      isWorkingTime: false
    };
    const expectedState = {
      ...mockState
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
