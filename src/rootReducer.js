import { combineReducers } from "redux";
import settings from "app/settings";
import timer from "app/timer";

export default combineReducers({
  [settings.constants.NAME]: settings.rootReducer,
  [timer.constants.NAME]: timer.rootReducer
});
