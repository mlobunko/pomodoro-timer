import React from "react";
import { connect } from "react-redux";
import { decreaseTimePeriodRest } from "../../actions/settings";

export const ButtonDecreaseTimePeriodRest = ({ decreaseTimePeriodRest }) => (
  <button onClick={decreaseTimePeriodRest} className="button-plus-minus">
    <i class="fa fa-minus" />
  </button>
);

export default connect(undefined, { decreaseTimePeriodRest })(
  ButtonDecreaseTimePeriodRest
);
