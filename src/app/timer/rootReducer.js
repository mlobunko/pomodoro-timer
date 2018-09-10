import { combineReducers } from "redux";
import littleTomatoes from "./littleTomatoes";
import main from "./main";
import tomato from "./tomato";

export default combineReducers({
  [littleTomatoes.constants.NAME]: littleTomatoes.reducer,
  [main.constants.NAME]: main.reducer,
  [tomato.constants.NAME]: tomato.reducer
});
