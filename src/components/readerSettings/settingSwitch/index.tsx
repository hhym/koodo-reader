import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import SettingSwitch from "./component";
import { stateType } from "../../../store";

const mapStateToProps = (state: stateType) => {
  return {
    currentBook: state.book.currentBook,
    locations: state.progressPanel.locations,
    isReading: state.book.isReading,
    renderFunc: state.book.renderFunc,
  };
};
const actionCreator = {};
export default connect(
  mapStateToProps,
  actionCreator
)(withTranslation()(SettingSwitch as any));
