import * as t from "../actionTypes";
import {
  resetTimer,
  setTimerOnFalse,
  setTimerOnTrue,
  setWorkingTimeFalse,
  setWorkingTimeTrue,
  startTimer
} from "../actions";

describe("resetTimer", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.RESET_TIMER
    };
    expect(resetTimer()).toEqual(expectedAction);
  });
});

describe("setTimerOnFalse", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.SET_TIMER_ON_FALSE
    };
    expect(setTimerOnFalse()).toEqual(expectedAction);
  });
});

describe("setTimerOnTrue", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.SET_TIMER_ON_TRUE
    };
    expect(setTimerOnTrue()).toEqual(expectedAction);
  });
});

describe("setWorkingTimeFalse", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.SET_WORKING_TIME_FALSE
    };
    expect(setWorkingTimeFalse()).toEqual(expectedAction);
  });
});

describe("setWorkingTimeTrue", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.SET_WORKING_TIME_TRUE
    };
    expect(setWorkingTimeTrue()).toEqual(expectedAction);
  });
});

describe("startTimer", () => {
  it("return action", () => {
    const expectedAction = {
      type: t.START_TIMER
    };
    expect(startTimer()).toEqual(expectedAction);
  });
});
