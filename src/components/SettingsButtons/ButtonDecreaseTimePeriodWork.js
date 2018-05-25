import React from "react";
import { connect } from "react-redux";
import { decreaseTimePeriodWork } from "../../actions/settings";

export const ButtonDecreaseTimePeriodWork = ({ decreaseTimePeriodWork }) => (
  <button onClick={decreaseTimePeriodWork} className="button-plus-minus">
    <i className="fa fa-minus" />
  </button>
);

export default connect(undefined, { decreaseTimePeriodWork })(
  ButtonDecreaseTimePeriodWork
);
