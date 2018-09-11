import { delay } from "redux-saga";
import { put, call, select, take } from "redux-saga/effects";
import { testSaga } from "redux-saga-test-plan";

import { play } from "app/settings/sound/model";
import settings from "app/settings";

import * as t from "../actionTypes";
import * as actions from "../actions";
import * as selectors from "../selectors";
import littleTomatoes from "../../littleTomatoes";
import tomato from "../../tomato";
import { minToMs } from "../model";

import { startTimer, watchResetTimer, watchStartTimer } from "../saga";

const timePeriodWork = 25;
const timePeriodRest = 5;
const timePeriodBigRest = 25;

describe("startTimer", () => {
  it("runs correctly", () => {
    testSaga(startTimer, timePeriodWork, timePeriodRest, timePeriodBigRest)
      .next()
      .call(delay, 100)

      .next()
      .select(selectors.getTimerOn)

      .next(false)
      .isDone()

      .back()
      .next(true)
      .select(tomato.selectors.getAll)

      .next(100)
      .put(tomato.actions.decreaseTimeBy100Ms())

      .finish()
      .next()
      .isDone()

      .back(3)
      .next(1)
      .select(settings.sound.selectors.getAll)

      .next(true)
      .call(play)

      .back()
      .next(false)
      .select(selectors.getIsWorkingTime)

      .next(false)
      .select(littleTomatoes.selectors.getAll)

      .next(2)
      .put(actions.setWorkingTimeTrue())

      .next()
      .put(tomato.actions.setTime(minToMs(timePeriodWork)))

      .finish()
      .next()
      .isDone()

      .back(4)
      .next(4)
      .put(actions.setWorkingTimeTrue())

      .next()
      .put(littleTomatoes.actions.add())

      .finish()
      .next()
      .isDone()

      .back(5)
      .next(true)
      .select(littleTomatoes.selectors.getAll)

      .next(2)
      .put(actions.setWorkingTimeFalse())

      .next()
      .put(tomato.actions.setTime(minToMs(timePeriodRest)))

      .finish()
      .next()
      .isDone()

      .back(4)
      .next(3)
      .put(actions.setWorkingTimeFalse())

      .next()
      .put(tomato.actions.setTime(minToMs(timePeriodBigRest)))

      .finish()
      .next()
      .isDone();
  });
});

describe("watchResetTimer", () => {
  it("runs correctly", () => {
    testSaga(watchResetTimer)
      .next()
      .take([
        t.RESET_TIMER,
        settings.bigRest.actionTypes.INCREASE,
        settings.bigRest.actionTypes.DECREASE,
        settings.rest.actionTypes.INCREASE,
        settings.rest.actionTypes.DECREASE,
        settings.work.actionTypes.INCREASE,
        settings.work.actionTypes.DECREASE
      ])

      .next()
      .select(settings.work.selectors.getAll)

      .next(timePeriodWork)
      .put(actions.setTimerOnFalse())

      .next()
      .put(tomato.actions.setTime(minToMs(timePeriodWork)))

      .next()
      .put(actions.setWorkingTimeTrue())

      .next()
      .put(littleTomatoes.actions.reset())

      .finish()
      .next()
      .isDone();
  });
});

describe("watchStartTimer", () => {
  it("runs correctly", () => {
    testSaga(watchStartTimer)
      .next()
      .take(t.START_TIMER)

      .next()
      .select(settings.bigRest.selectors.getAll)

      .next(timePeriodBigRest)
      .select(settings.rest.selectors.getAll)

      .next(timePeriodRest)
      .select(settings.work.selectors.getAll)

      .next(timePeriodWork)
      .put(actions.setTimerOnTrue())

      .next()
      .call(startTimer, timePeriodBigRest, timePeriodRest, timePeriodWork)

      .next()
      .finish()
      .isDone();
  });
});
