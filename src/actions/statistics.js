//set displayTimer
export const setDisplayTimer = displayTimer => ({
  type: "SET_DISPLAY_TIMER",
  displayTimer
});
//minus thousand ms from displayTimer
export const decreaseDisplayTimerBy100ms = () => ({
  type: "DECREASE_DISPLAY_TIMER_BY_100MS"
});

//change boolean timerOn to true
export const timerOnToTrue = () => ({
  type: "TIMER_ON_TRUE"
});

//change boolean timerOn to false
export const timerOnToFalse = () => ({
  type: "TIMER_ON_FALSE"
});

//change boolean isWorkingTime to true
export const isWorkingTimeToTrue = () => ({
  type: "IS_WORKING_TIME_TO_TRUE"
});

//change boolean isWorkingTime to false
export const isWorkingTimeToFalse = () => ({
  type: "IS_WORKING_TIME_TO_FALSE"
});

//add one to a number of periods or reser if it's 4 (max is 3 with 0)
export const addOnePeriod = () => ({
  type: "ADD_ONE_PERIOD"
});

//reset a number of periods that passed
export const resetPeriods = () => ({
  type: "RESET_PERIODS"
});

//change boolean isSettingsOpen to true
export const openSettings = () => ({
  type: "OPEN_SETTINGS"
});

//change boolean isSettingsOpen to false
export const closeSettings = () => ({
  type: "CLOSE_SETTINGS"
});
