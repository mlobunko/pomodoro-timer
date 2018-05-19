import statistics from "../../reducers/statistics";

const statisticsReducerDefaultState = {
  displayTimer: 1500000, //25mins
  timerOn: false,
  isWorkingTime: true,
  numberPeriodsThatPassed: 0, //max is 4 including 0
  isSettingsOpen: false
};

it("should set default state", () => {
  const state = statistics(undefined, { type: "@@INIT" });
  expect(state).toEqual(statisticsReducerDefaultState);
});

it("should set displayTimer", () => {
  const displayTimer = 5000;
  const action = {
    type: "SET_DISPLAY_TIMER",
    displayTimer
  };
  const state = statistics(undefined, action);
  expect(state).toEqual({
    ...statisticsReducerDefaultState,
    displayTimer: displayTimer
  });
});

it("should decrease displayTimer by 100ms", () => {
  const action = {
    type: "DECREASE_DISPLAY_TIMER_BY_100MS"
  };
  const state = statistics(undefined, action);
  expect(state).toEqual({
    ...statisticsReducerDefaultState,
    displayTimer: statisticsReducerDefaultState.displayTimer - 100
  });
});

it("should change boolean timerOn to true", () => {
  const action = {
    type: "TIMER_ON_TRUE"
  };
  const state = statistics(undefined, action);
  expect(state).toEqual({
    ...statisticsReducerDefaultState,
    timerOn: true
  });
});

it("should change boolean timerOn to false", () => {
  const action = {
    type: "TIMER_ON_FALSE"
  };
  const state = statistics(undefined, action);
  expect(state).toEqual({
    ...statisticsReducerDefaultState,
    timerOn: false
  });
});

it("should change boolean isWorkingTime to true", () => {
  const action = {
    type: "IS_WORKING_TIME_TO_TRUE"
  };
  const state = statistics(undefined, action);
  expect(state).toEqual({
    ...statisticsReducerDefaultState,
    isWorkingTime: true
  });
});

it("should change boolean isWorkingTime to false", () => {
  const action = {
    type: "IS_WORKING_TIME_TO_FALSE"
  };
  const state = statistics(undefined, action);
  expect(state).toEqual({
    ...statisticsReducerDefaultState,
    isWorkingTime: false
  });
});

it("should add one to a number of periods and reset if it's 5", () => {
  const action = {
    type: "ADD_ONE_PERIOD"
  };
  const defaultState = {
    displayTimer: 1500000, //25mins
    timerOn: false,
    isWorkingTime: true,
    numberPeriodsThatPassed: 4,
    isSettingsOpen: false
  };
  const numberPeriodsThatPassed = 4;
  const state = statistics(defaultState, action);
  expect(state).toEqual({
    ...statisticsReducerDefaultState,
    numberPeriodsThatPassed: (numberPeriodsThatPassed + 1) % 5
  });
});

it("should reset a number periods to a zero", () => {
  const action = {
    type: "RESET_PERIODS"
  };
  const state = statistics(undefined, action);
  expect(state).toEqual({
    ...statisticsReducerDefaultState,
    numberPeriodsThatPassed: 0
  });
});

it("should set boolean isSettingsOpen to true", () => {
  const action = {
    type: "OPEN_SETTINGS"
  };
  const state = statistics(undefined, action);
  expect(state).toEqual({
    ...statisticsReducerDefaultState,
    isSettingsOpen: true
  });
});

it("should set boolean isSettingsOpen to false", () => {
  const action = {
    type: "CLOSE_SETTINGS"
  };
  const defaultState = {
    ...statisticsReducerDefaultState,
    isSettingsOpen: true
  };
  const state = statistics(defaultState, action);
  expect(state).toEqual({
    ...statisticsReducerDefaultState,
    isSettingsOpen: false
  });
});
