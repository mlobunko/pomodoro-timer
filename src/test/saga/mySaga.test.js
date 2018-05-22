import { delay } from "redux-saga";
import { put, call, select, take, all, fork } from "redux-saga/effects";
import {
  setDisplayTimer,
  decreaseDisplayTimerBy100ms,
  timerOnToTrue,
  timerOnToFalse,
  isWorkingTimeToTrue,
  isWorkingTimeToFalse,
  addOnePeriod,
  resetPeriods
} from "../../actions/statistics";
import { minToMs } from "../../logic/convert";
import play from "../../logic/sound";
import rootSaga, {
  startTimer,
  watchStartTimer,
  watchResetTimer
} from "../../saga/mySaga";

const defaultState = {
  statistics: {
    displayTimer: 1500000,
    timerOn: false,
    isWorkingTime: true,
    numberPeriodsThatPassed: 0
  },
  settings: {
    timePeriodWork: 25,
    timePeriodRest: 5,
    timePeriodBigRest: 25,
    isSound: false
  }
};

it("rootSaga should call all", () => {
  const gen = rootSaga();
  expect(gen.next().value).toEqual(
    all([fork(watchStartTimer), fork(watchResetTimer)])
  );
});

it("watchStartTimer should call a startTimer, after take and put effects", () => {
  const gen = watchStartTimer();
  expect(gen.next().value).toEqual(take("START_TIMER"));
  expect(gen.next({ type: "START_TIMER" }).value).toEqual(put(timerOnToTrue()));
  expect(gen.next().done).toEqual(false);
});

describe("watchResetTimer", () => {
  const state = {
    ...defaultState
  };

  it("should take RESET_TIMER", () => {
    const gen = watchResetTimer();
    expect(gen.next().value).toEqual(
      take([
        "RESET_TIMER",
        "INCREASE_TIME_PERIOD_WORK",
        "DECREASE_TIME_PERIOD_WORK",
        "INCREASE_TIME_PERIOD_REST",
        "DECREASE_TIME_PERIOD_REST",
        "INCREASE_TIME_PERIOD_BIG_REST",
        "DECREASE_TIME_PERIOD_BIG_REST"
      ])
    );
  });

  it("should use select to get state", () => {
    const gen = watchResetTimer();
    gen.next();
    expect(gen.next().value).toEqual(select());
  });

  it("should put timerOnToFalse", () => {
    const gen = watchResetTimer();
    gen.next();
    gen.next();
    expect(gen.next(state).value).toEqual(put(timerOnToFalse()));
  });

  it("should put setDisplayTimer(timePeriodWork)", () => {
    const gen = watchResetTimer();
    gen.next();
    gen.next();
    gen.next(state);
    expect(gen.next().value).toEqual(
      put(setDisplayTimer(minToMs(state.settings.timePeriodWork)))
    );
  });

  it("should put isWorkingTimeToTrue()", () => {
    const gen = watchResetTimer();
    gen.next();
    gen.next();
    gen.next(state);
    gen.next();
    expect(gen.next().value).toEqual(put(isWorkingTimeToTrue()));
  });

  it("should put resetPeriods()", () => {
    const gen = watchResetTimer();
    gen.next();
    gen.next();
    gen.next(state);
    gen.next();
    gen.next();
    expect(gen.next().value).toEqual(put(resetPeriods()));
  });
});

describe("startTimer generator", () => {
  it("should call delay", () => {
    const gen = startTimer();
    expect(gen.next().value).toEqual(call(delay, 100));
  });

  it("should select state", () => {
    const gen = startTimer();
    gen.next();
    expect(gen.next().value).toEqual(select());
  });

  it("should finish loop in case timerOn is falsy", () => {
    const state = {
      ...defaultState
    };
    const gen = startTimer();
    gen.next();
    gen.next();
    expect(gen.next(state).done).toEqual(true);
  });

  it("should put decreaseDisplayTimerBy100ms when displayTimer is bigger or equal 100", () => {
    const state = {
      ...defaultState,
      statistics: {
        timerOn: true
      }
    };
    const gen = startTimer();
    gen.next();
    gen.next();
    expect(gen.next(state).value).toEqual(put(decreaseDisplayTimerBy100ms()));
  });

  it("should fork(play) if isSound is true", () => {
    const state = {
      ...defaultState,
      statistics: {
        timerOn: true,
        displayTimer: 0,
        isWorkingTime: false
      },
      settings: {
        isSound: true
      }
    };
    const gen = startTimer();
    gen.next();
    gen.next();
    expect(gen.next(state).value).toEqual(fork(play));
  });

  it("should put isWorkingTimeToTrue when displayTimer < 100 and isWorkingTime false", () => {
    const state = {
      ...defaultState,
      statistics: {
        timerOn: true,
        displayTimer: 0,
        isWorkingTime: false
      }
    };
    const gen = startTimer();
    gen.next();
    gen.next();
    expect(gen.next(state).value).toEqual(put(isWorkingTimeToTrue()));
  });

  it("should put setDisplayTimer(minToMs(timePeriodWork)) and skip put(addOnePeriod() when displayTimer < 100 and isWorkingTime false", () => {
    const state = {
      ...defaultState,
      statistics: {
        timerOn: true,
        displayTimer: 0,
        isWorkingTime: false
      }
    };
    const gen = startTimer();
    gen.next();
    gen.next();
    gen.next(state);
    expect(gen.next().value).toEqual(
      put(setDisplayTimer(minToMs(state.settings.timePeriodWork)))
    );
  });

  it("should put addOnePeriod() when number or periods === 4, when displayTimer < 100 and isWorkingTime false", () => {
    const state = {
      ...defaultState,
      statistics: {
        timerOn: true,
        displayTimer: 0,
        isWorkingTime: false,
        numberPeriodsThatPassed: 4
      }
    };
    const gen = startTimer();
    gen.next();
    gen.next();
    gen.next(state);
    expect(gen.next().value).toEqual(put(addOnePeriod()));
  });

  it("should put isWorkingTimeToFalse, when displayTimer < 100 and isWorkingTime is true", () => {
    const state = {
      ...defaultState,
      statistics: {
        timerOn: true,
        displayTimer: 0,
        isWorkingTime: true
      }
    };
    const gen = startTimer();
    gen.next();
    gen.next();
    expect(gen.next(state).value).toEqual(put(isWorkingTimeToFalse()));
  });

  it("should put setDisplayTimer(minToMs(timePeriodBigRest)) when number of periods === 3, displayTimer < 100 and isWorkingTime is true", () => {
    const state = {
      ...defaultState,
      statistics: {
        timerOn: true,
        displayTimer: 0,
        isWorkingTime: true,
        numberPeriodsThatPassed: 3
      }
    };
    const gen = startTimer();
    gen.next();
    gen.next();
    gen.next(state);
    expect(gen.next().value).toEqual(
      put(setDisplayTimer(minToMs(state.settings.timePeriodBigRest)))
    );
  });

  it("should put setDisplayTimer(minToMs(timePeriodRest) when number of periods !== 3, displayTimer < 100 and isWorkingTime is true", () => {
    const state = {
      ...defaultState,
      statistics: {
        timerOn: true,
        displayTimer: 0,
        isWorkingTime: true
      }
    };
    const gen = startTimer();
    gen.next();
    gen.next();
    gen.next(state);
    expect(gen.next().value).toEqual(
      put(setDisplayTimer(minToMs(state.settings.timePeriodRest)))
    );
  });

  it("should in the end put addOnePeriod() when displayTimer < 100 and isWorkingTime is true", () => {
    const state = {
      ...defaultState,
      statistics: {
        timerOn: true,
        displayTimer: 0,
        isWorkingTime: true
      }
    };
    const gen = startTimer();
    gen.next();
    gen.next();
    gen.next(state);
    gen.next();
    expect(gen.next().value).toEqual(put(addOnePeriod()));
  });
});
