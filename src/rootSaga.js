import { all, call, spawn } from "redux-saga/effects";

import timer from "app/timer";

export default function* rootSaga() {
  const sagas = [
    timer.main.saga.watchStartTimer,
    timer.main.saga.watchResetTimer
  ];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
