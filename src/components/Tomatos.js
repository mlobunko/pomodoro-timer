import React from "react";
import { connect } from "react-redux";
export const Tomatos = ({
  timerOn,
  isWorkingTime,
  numberPeriodsThatPassed
}) => (
  <div className="tomatos">
    {timerOn && isWorkingTime && numberPeriodsThatPassed === 0 ? (
      <div className="tomato-anim" />
    ) : (
      numberPeriodsThatPassed > 0 && <div className="tomato" />
    )}
    {timerOn && isWorkingTime && numberPeriodsThatPassed === 1 ? (
      <div className="tomato-anim" />
    ) : (
      numberPeriodsThatPassed > 1 && <div className="tomato" />
    )}
    {timerOn && isWorkingTime && numberPeriodsThatPassed === 2 ? (
      <div className="tomato-anim" />
    ) : (
      numberPeriodsThatPassed > 2 && <div className="tomato" />
    )}
    {timerOn && isWorkingTime && numberPeriodsThatPassed === 3 ? (
      <div className="tomato-anim" />
    ) : (
      numberPeriodsThatPassed > 3 && <div className="tomato" />
    )}
  </div>
);

const mapStateToProps = state => ({
  timerOn: state.statistics.timerOn,
  isWorkingTime: state.statistics.isWorkingTime,
  numberPeriodsThatPassed: state.statistics.numberPeriodsThatPassed
});

export default connect(mapStateToProps)(Tomatos);
