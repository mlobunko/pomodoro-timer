import React from "react";
import { connect } from "react-redux";
import { startTimer } from "../actions/saga";
import { timerOnToFalse } from "../actions/statistics";

export const ButtonStartPause = ({ timerOn, startTimer, timerOnToFalse }) => (
  <div>
    {timerOn ? (
      <button className="button" onClick={timerOnToFalse}>
        <i className="fa fa-pause" />
      </button>
    ) : (
      <button className="button" onClick={startTimer}>
        <i className="fa fa-play" />
      </button>
    )}
  </div>
);

const mapStateToProps = state => ({
  timerOn: state.statistics.timerOn
});

export default connect(mapStateToProps, { startTimer, timerOnToFalse })(
  ButtonStartPause
);
