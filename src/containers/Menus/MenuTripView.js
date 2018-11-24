import { connect } from "react-redux";
import MenuDetailView from "../../components/control/Menus/MenuDetailView";


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
)(MenuDetailView);
