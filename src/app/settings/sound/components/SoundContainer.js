import { connect } from "react-redux";

import * as actions from "../actions";
import * as selectors from "../selectors";

import SoundComponent from "./SoundComponent";

const mapStateToProps = state => ({
  isSound: selectors.getAll(state)
});

const mapDispatchToProps = {
  change: actions.change
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoundComponent);
