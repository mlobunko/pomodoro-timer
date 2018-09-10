import { connect } from "react-redux";

import settings from "app/settings";

import MainComponent from "./MainComponent";

const mapStateToProps = state => ({
  isSettingsOpen: settings.main.selectors.getAll(state)
});

export default connect(mapStateToProps)(MainComponent);
