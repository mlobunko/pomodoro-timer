import React from "react";
import { connect } from "react-redux";
import { resetTimer } from "../actions/saga";

export const ButtonReset = ({ resetTimer }) => (
  <div>
    <button className="button button-side" onClick={resetTimer}>
      <i className="fa fa-undo" />
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  resetTimer: () => dispatch(resetTimer())
});

export default connect(undefined, mapDispatchToProps)(ButtonReset);
