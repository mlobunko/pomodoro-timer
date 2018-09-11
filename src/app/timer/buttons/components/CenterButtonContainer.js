import { connect } from "react-redux";

import { setTimerOnFalse, startTimer } from "../../main/actions";
import { getTimerOn } from "../../main/selectors";
import CenterButtonComponent from "./CenterButtonComponent";

const mapStateToProps = state => ({
  timerOn: getTimerOn(state)
});

const mapDispatchToProps = {
  pauseTimer: setTimerOnFalse,
  startTimer: startTimer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterButtonComponent);
