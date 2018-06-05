import React from "react";
import { connect } from "react-redux";
import { increaseTimePeriodRest } from "../../actions/settings";

export const ButtonIncreaseTimePeriodRest = ({ increaseTimePeriodRest }) => (
  <button
    onClick={increaseTimePeriodRest}
    className="button-plus-minus"
    aria-label="button increase time for rest"
  >
    <i className="fa fa-plus" />
  </button>
);

export default connect(undefined, { increaseTimePeriodRest })(
  ButtonIncreaseTimePeriodRest
);
