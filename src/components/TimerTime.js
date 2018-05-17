import React from "react";
import { connect } from "react-redux";
import { msToMmSs } from "../logic/convert";

export const TimerTime = ({ displayTimer }) => (
  <div>{msToMmSs(displayTimer)}</div>
);

const mapStateToProps = ({ statistics }) => ({
  displayTimer: statistics.displayTimer
});

export default connect(mapStateToProps)(TimerTime);
