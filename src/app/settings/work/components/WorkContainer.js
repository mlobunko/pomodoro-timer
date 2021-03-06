import { connect } from "react-redux";

import * as actions from "../actions";
import * as selectors from "../selectors";

import WorkComponent from "./WorkComponent";

const mapStateToProps = state => ({
  time: selectors.getAll(state)
});

const mapDispatchToProps = {
  increaseTime: actions.increase,
  decreaseTime: actions.decrease
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkComponent);
