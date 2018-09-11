import { connect } from "react-redux";

import settings from "app/settings";

import { resetTimer } from "../../main/actions";
import ButtonsComponent from "./ButtonsComponent";

const mapDispatchToProps = {
  openSettings: settings.main.actions.open,
  resetTimer: resetTimer
};

export default connect(
  undefined,
  mapDispatchToProps
)(ButtonsComponent);
