import { NAME as PARENT_NAME } from "../constants";
import { NAME } from "./constants";

export const getIsWorkingTime = state =>
  state[PARENT_NAME][NAME]["isWorkingTime"];
export const getTimerOn = state => state[PARENT_NAME][NAME]["timerOn"];
