import { connect } from "react-redux";

import TomatoComponent from "./TomatoComponent";
import { msToMinSec } from "../model";
import * as selectors from "../selectors";
import main from "../../main";

const mapStateToProps = state => ({
  time: selectors.getAll(state),
  isWorkingTime: main.selectors.getIsWorkingTime(state),
  msToMinSec: msToMinSec
});

export default connect(mapStateToProps)(TomatoComponent);
