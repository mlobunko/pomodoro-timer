import React from "react";
import { connect } from "react-redux";
import { resetTimer } from "../actions/saga";

export const ButtonReset = ({ resetTimer }) => (
  <div>
    <button className="button button-side" onClick={resetTimer}>
      <i className="fa fa-refresh" aria-hidden="true" />
    </button>
  </div>
);

export default connect(undefined, { resetTimer })(ButtonReset);
