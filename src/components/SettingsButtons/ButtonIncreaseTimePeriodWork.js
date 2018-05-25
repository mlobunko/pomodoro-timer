import React from "react";
import { connect } from "react-redux";
import { increaseTimePeriodWork } from "../../actions/settings";

export const ButtonIncreaseTimePeriodWork = ({ increaseTimePeriodWork }) => (
  <button onClick={increaseTimePeriodWork} className="button-plus-minus">
    <i className="fa fa-plus" />
  </button>
);

export default connect(undefined, { increaseTimePeriodWork })(
  ButtonIncreaseTimePeriodWork
);
