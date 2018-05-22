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
} from "../actions/statistics";
import { minToMs } from "../logic/convert";
import play from "../logic/sound";

export function* startTimer() {
  while (true) {
    yield call(delay, 100);
    const {
      statistics: {
        displayTimer,
        timerOn,
        isWorkingTime,
        numberPeriodsThatPassed
      },
      settings: { timePeriodWork, timePeriodRest, timePeriodBigRest, isSound }
    } = yield select();
    if (timerOn) {
      if (displayTimer < 100) {
        if (isSound) yield fork(play);
        if (isWorkingTime) {
          yield put(isWorkingTimeToFalse());
          if (numberPeriodsThatPassed === 3) {
            yield put(setDisplayTimer(minToMs(timePeriodBigRest)));
          } else yield put(setDisplayTimer(minToMs(timePeriodRest)));
          yield put(addOnePeriod());
        } else {
          yield put(isWorkingTimeToTrue());
          if (numberPeriodsThatPassed === 4) yield put(addOnePeriod());
          yield put(setDisplayTimer(minToMs(timePeriodWork)));
        }
      } else {
        yield put(decreaseDisplayTimerBy100ms());
      }
    } else break;
  }
}

export function* watchStartTimer() {
  while (true) {
    yield take("START_TIMER");
    yield put(timerOnToTrue());
    yield call(startTimer);
  }
}

export function* watchResetTimer() {
  while (true) {
    yield take([
      "RESET_TIMER",
      "INCREASE_TIME_PERIOD_WORK",
      "DECREASE_TIME_PERIOD_WORK",
      "INCREASE_TIME_PERIOD_REST",
      "DECREASE_TIME_PERIOD_REST",
      "INCREASE_TIME_PERIOD_BIG_REST",
      "DECREASE_TIME_PERIOD_BIG_REST"
    ]);
    const {
      settings: { timePeriodWork }
    } = yield select();
    yield put(timerOnToFalse());
    yield put(setDisplayTimer(minToMs(timePeriodWork)));
    yield put(isWorkingTimeToTrue());
    yield put(resetPeriods());
  }
}

export default function* rootSaga() {
  yield all([fork(watchStartTimer), fork(watchResetTimer)]);
}
