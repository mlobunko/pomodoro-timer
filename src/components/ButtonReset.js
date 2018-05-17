import React from "react";
import { connect } from "react-redux";
import { resetTimer } from "../actions/saga";

export const ButtonReset = ({ resetTimer }) => (
  <div>
    <button onClick={resetTimer}>reset</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  resetTimer: () => dispatch(resetTimer())
});

export default connect(undefined, mapDispatchToProps)(ButtonReset);
