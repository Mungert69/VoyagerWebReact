import { connect } from "react-redux";
import MenuTripView from "../../components/control/Menus/MenuTripView";


import { changeView, changeViewPlaceWithFilterByNextHop } from "../../actions/functionalActions";
import { deleteHotel } from '../../actions/apiActions';

const mapStateToProps = state => ({
  userId : state.userState.userId 
});

const mapDispatchToProps = dispatch => {
  return {
    changeViewPlaceWithFilterByNextHop: () => {
      dispatch(changeViewPlaceWithFilterByNextHop());
    },
    deleteHotel: (userId) => {
      dispatch(deleteHotel(userId))
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
