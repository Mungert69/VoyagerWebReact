import { connect } from "react-redux";
import MenuDetailView from "../../components/control/Menus/MenuDetailView";

import { setTripItem } from "../../actions/actions";
import { changeView } from "../../actions/functionalActions";

const mapStateToProps = state => ({
  item: state.tripViewState.item,
  prSelections: state.apiState.itinObj.prSelections
});

const mapDispatchToProps = dispatch => {
  return {
    setTripItem: item => {
      dispatch(setTripItem(item));
    },
    changeView: cardVal => {
      dispatch(changeView(cardVal));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuDetailView);
