import { connect } from "react-redux";

import * as actions from "../actions";
import MainComponent from "./MainComponent";

const mapDispatchToProps = {
  closeSettings: actions.close
};

export default connect(
  undefined,
  mapDispatchToProps
)(MainComponent);
