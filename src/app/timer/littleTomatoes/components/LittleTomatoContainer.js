import { connect } from "react-redux";

import LittleTomatoComponent from "./LittleTomatoComponent";
import * as selectors from "../selectors";
import { getIsWorkingTime, getTimerOn } from "../../main/selectors";

const mapStateToProps = (state, props) => ({
  isWorkingTime: getIsWorkingTime(state),
  numberOfLittleTomatoes: selectors.getAll(state),
  order: props.order,
  timerOn: getTimerOn(state)
});

export default connect(mapStateToProps)(LittleTomatoComponent);
