import { connect } from "react-redux";
import { DetailView } from "../components/DetailView";
import { setTripItem } from "../actions/actions";

const mapStateToProps = state => ({
  cards: state.cardState.filteredCards,
  cardType: state.cardState.cardType,
  //item: state.tripViewState.item,
  jumpCounter: state.tripViewState.jumpCounter,
  stylePlaceCards: state.cardState.placeStyleCards,
  styleHotelCards: state.cardState.hotelStyleCards,
  styleTripCards: state.cardState.tripStyleCards,
  itinObj: state.apiState.itinObj
});

const mapDispatchToProps = dispatch => {
  return {
    setTripItem: item => {
      dispatch(setTripItem(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailView);
