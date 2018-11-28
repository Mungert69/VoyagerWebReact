import { connect } from "react-redux";
import MenuTripView from "../../components/control/Menus/MenuTripView";


import { changeView,changeViewPlaceWithFilterByNextHop } from "../../actions/functionalActions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    changeViewPlaceWithFilterByNextHop: () => {
      dispatch(changeViewPlaceWithFilterByNextHop());
    },
    changeView: cardVal => {
      dispatch(changeView(cardVal));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuTripView);
