import * as t from "./actionTypes";

export const setTimerOnTrue = () => ({
  type: t.SET_TIMER_ON_TRUE
});

export const setTimerOnFalse = () => ({
  type: t.SET_TIMER_ON_FALSE
});

export const setWorkingTimeTrue = () => ({
  type: t.SET_WORKING_TIME_TRUE
});

export const setWorkingTimeFalse = () => ({
  type: t.SET_WORKING_TIME_FALSE
});

export const startTimer = () => ({
  type: t.START_TIMER
});

export const resetTimer = () => ({
  type: t.RESET_TIMER
});
