import {
  setDisplayTimer,
  decreaseDisplayTimerBy100ms,
  timerOnToTrue,
  timerOnToFalse,
  isWorkingTimeToTrue,
  isWorkingTimeToFalse,
  addOnePeriod,
  resetPeriods,
  openSettings,
  closeSettings
} from "../../actions/statistics";

it("should set displayTimer", () => {
  const displayTimer = 1000;
  const expectedAction = {
    type: "SET_DISPLAY_TIMER",
    displayTimer
  };
  expect(setDisplayTimer(displayTimer)).toEqual(expectedAction);
});

it("should create an action to decrease displayTimer by 100ms", () => {
  const expectedAction = {
    type: "DECREASE_DISPLAY_TIMER_BY_100MS"
  };
  expect(decreaseDisplayTimerBy100ms()).toEqual(expectedAction);
});

it("should create an action to change boolean timerOn to true", () => {
  const expectedAction = {
    type: "TIMER_ON_TRUE"
  };
  expect(timerOnToTrue()).toEqual(expectedAction);
});

it("should create an action to change boolean timerOn to false", () => {
  const expectedAction = {
    type: "TIMER_ON_FALSE"
  };
  expect(timerOnToFalse()).toEqual(expectedAction);
});

it("should create an action to change boolean isWorkingTime to true", () => {
  const expectedAction = {
    type: "IS_WORKING_TIME_TO_TRUE"
  };
  expect(isWorkingTimeToTrue()).toEqual(expectedAction);
});

it("should create an action to change boolean isWorkingTime to false", () => {
  const expectedAction = {
    type: "IS_WORKING_TIME_TO_FALSE"
  };
  expect(isWorkingTimeToFalse()).toEqual(expectedAction);
});

it("should create an action to add one to a number of periods that passed", () => {
  const expectedAction = {
    type: "ADD_ONE_PERIOD"
  };
  expect(addOnePeriod()).toEqual(expectedAction);
});

it("should create an action to reset a number of periods that passed", () => {
  const expectedAction = {
    type: "RESET_PERIODS"
  };
  expect(resetPeriods()).toEqual(expectedAction);
});

it("should create an action to set boolean value isSettingsOpen to true", () => {
  const expectedAction = {
    type: "OPEN_SETTINGS"
  };
  expect(openSettings()).toEqual(expectedAction);
});

it("should create an action to set boolean valuse isSettings to false", () => {
  const expectedAction = {
    type: "CLOSE_SETTINGS"
  };
  expect(closeSettings()).toEqual(expectedAction);
});
