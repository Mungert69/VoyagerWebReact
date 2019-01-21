import { connect } from "react-redux";
import { DetailView } from "../components/DetailView";
import { setTripItem, setCard, setCardType } from "../actions/actions";

const mapStateToProps = state => ({
  cards: state.cardState.filteredCards,
  cardType: state.cardState.cardType,
  item: state.tripViewState.item,
  //jumpCounter: state.tripViewState.jumpCounter,
  stylePlaceCards: state.cardState.placeStyleCards,
  styleHotelCards: state.cardState.hotelStyleCards,
  styleTripCards: state.cardState.tripStyleCards,
  itinObj: state.apiState.itinObj
});

const mapDispatchToProps = dispatch => {
  return {
    setTripItem: item => {
      dispatch(setTripItem(item));
    },
    setCard: (cardVal) => {
      dispatch(setCard(cardVal));
    },
    setCardType: (cardType) => {
      dispatch(setCardType(cardType));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailView);
