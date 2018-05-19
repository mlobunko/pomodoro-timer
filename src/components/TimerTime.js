import React from "react";
import { connect } from "react-redux";
import { msToMmSs } from "../logic/convert";

export const TimerTime = ({ isWorkingTime, displayTimer }) => (
  <div className={isWorkingTime ? "timerTime" : "timerTime timerTime--rest"}>
    {msToMmSs(displayTimer)}
  </div>
);

const mapStateToProps = ({ statistics }) => ({
  isWorkingTime: statistics.isWorkingTime,
  displayTimer: statistics.displayTimer
});

export default connect(mapStateToProps)(TimerTime);
