import React from "react";
import { connect } from "react-redux";
import { closeSettings } from "../../actions/statistics";

export const ButtonCloseSettings = ({ closeSettings }) => (
  <button onClick={closeSettings} className="button">
    OK
  </button>
);

export default connect(undefined, { closeSettings })(ButtonCloseSettings);
