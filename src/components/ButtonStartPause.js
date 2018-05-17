import React from "react";
import { connect } from "react-redux";
import { startTimer } from "../actions/saga";
import { timerOnToFalse } from "../actions/statistics";

export const ButtonStartPause = ({ timerOn, startTimer, timerOnToFalse }) => (
  <div>
    {timerOn ? (
      <button onClick={timerOnToFalse}>pause</button>
    ) : (
      <button onClick={startTimer}>start</button>
    )}
  </div>
);

const mapStateToProps = state => ({
  timerOn: state.statistics.timerOn
});

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer()),
  timerOnToFalse: () => dispatch(timerOnToFalse())
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonStartPause);
