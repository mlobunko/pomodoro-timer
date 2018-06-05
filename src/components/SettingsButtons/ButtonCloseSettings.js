import React from "react";
import { connect } from "react-redux";
import { closeSettings } from "../../actions/statistics";

export const ButtonCloseSettings = ({ closeSettings }) => (
  <button
    onClick={closeSettings}
    className="button"
    aria-label="button close settings window"
  >
    OK
  </button>
);

export default connect(undefined, { closeSettings })(ButtonCloseSettings);
