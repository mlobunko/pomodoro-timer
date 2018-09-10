import { delay } from "redux-saga";
import { put, call, select, take } from "redux-saga/effects";

import { play } from "app/settings/sound/model";
import settings from "app/settings";

import * as t from "./actionTypes";
import * as actions from "./actions";
import * as selectors from "./selectors";
import littleTomatoes from "../littleTomatoes";
import tomato from "../tomato";
import { minToMs } from "./model";

export function* startTimer(timePeriodWork, timePeriodRest, timePeriodBigRest) {
  while (true) {
    yield call(delay, 100);

    const timerOn = yield select(selectors.getTimerOn);

    if (timerOn) {
      const time = yield select(tomato.selectors.getAll);

      if (time < 100) {
        const isSound = yield select(settings.sound.selectors.getAll);
        if (isSound) yield call(play);
        const isWorkingTime = yield select(selectors.getIsWorkingTime);
        const numberOfLittleTomatoes = yield select(
          littleTomatoes.selectors.getAll
        );
        if (isWorkingTime) {
          yield put(actions.setWorkingTimeFalse());

          if (numberOfLittleTomatoes === 3) {
            yield put(tomato.actions.setTime(minToMs(timePeriodBigRest)));
          } else yield put(tomato.actions.setTime(minToMs(timePeriodRest)));
          yield put(littleTomatoes.actions.add());
        } else {
          yield put(actions.setWorkingTimeTrue());
          if (numberOfLittleTomatoes === 4)
            yield put(littleTomatoes.actions.add());
          yield put(tomato.actions.setTime(minToMs(timePeriodWork)));
        }
      } else {
        yield put(tomato.actions.decreaseTimeBy100Ms());
      }
    } else break;
  }
}

export function* watchStartTimer() {
  while (true) {
    yield take(t.START_TIMER);
    const timePeriodBigRest = yield select(settings.bigRest.selectors.getAll);
    const timePeriodRest = yield select(settings.rest.selectors.getAll);
    const timePeriodWork = yield select(settings.work.selectors.getAll);
    yield put(actions.setTimerOnTrue());
    yield call(startTimer, timePeriodBigRest, timePeriodRest, timePeriodWork);
  }
}

export function* watchResetTimer() {
  while (true) {
    yield take([
      t.RESET_TIMER,
      settings.bigRest.actionTypes.INCREASE,
      settings.bigRest.actionTypes.DECREASE,
      settings.rest.actionTypes.INCREASE,
      settings.rest.actionTypes.DECREASE,
      settings.work.actionTypes.INCREASE,
      settings.work.actionTypes.DECREASE
    ]);
    const timePeriodWork = yield select(settings.work.selectors.getAll);
    yield put(actions.setTimerOnFalse());
    yield put(tomato.actions.setTime(minToMs(timePeriodWork)));
    yield put(actions.setWorkingTimeTrue());
    yield put(littleTomatoes.actions.reset());
  }
}
