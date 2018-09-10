import { connect } from "react-redux";

import { pauseTimer, startTimer } from "../../main/actions";
import CenterButtonComponent from "./CenterButtonComponent";

const mapStateToProps = state => ({
  timerOn: main.selectors.getTimerOn(state)
});

const mapDispatchToProps = {
  pauseTimer: pauseTimer,
  startTimer: startTimer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterButtonComponent);
