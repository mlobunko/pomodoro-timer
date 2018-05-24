import React from "react";
import { connect } from "react-redux";
import { openSettings } from "../actions/statistics";

export const ButtonSettings = ({ openSettings }) => (
  <div>
    <button className="button button-side" onClick={openSettings}>
      <i className="fa fa-cog" />
    </button>
  </div>
);

export default connect(undefined, { openSettings })(ButtonSettings);
