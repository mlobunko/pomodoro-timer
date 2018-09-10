import { connect } from "react-redux";

import settings from "app/settings";

import main from "../../main/";
import ButtonsComponent from "./ButtonsComponent";

const mapDispatchToProps = {
  openSettings: settings.main.actions.open,
  resetTimer: main.actions.resetTimer
};

export default connect(
  undefined,
  mapDispatchToProps
)(ButtonsComponent);
