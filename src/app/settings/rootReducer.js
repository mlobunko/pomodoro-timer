import { combineReducers } from "redux";
import bigRest from "./bigRest";
import main from "./main";
import rest from "./rest";
import sound from "./sound";
import work from "./work";

export default combineReducers({
  [bigRest.constants.NAME]: bigRest.reducer,
  [main.constants.NAME]: main.reducer,
  [rest.constants.NAME]: rest.reducer,
  [sound.constants.NAME]: sound.reducer,
  [work.constants.NAME]: work.reducer
});
