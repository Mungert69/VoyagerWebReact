import { connect } from 'react-redux';
import { PlaceListView } from '../components/PlaceListView';

import {
    setTripCardDetailLevel,setTripItem,setCard,setCardType,toggleBuilderMode
} from '../actions/actions';

const mapStateToProps = state => ({
    filteredPlaceCards: state.cardState.filteredPlaceCards,
    hotelCards: state.cardState.hotelCards,
    stylePlaceCards: state.cardState.placeStyleCards,
    styleHotelCards: state.cardState.hotelStyleCards,
    cardType: state.cardState.cardType,
    card: state.tripViewState.card
});

const mapDispatchToProps = dispatch => {
    return {
        setTripCardDetailLevel: (cardDetailLevel) => {
            dispatch(setTripCardDetailLevel(cardDetailLevel));
        },
        setCard: (cardVal) => {
            dispatch(setCard(cardVal));
        },
        setTripItem: (item) => {
            dispatch(setTripItem(item));
        },
        setCardType: (cardType) => {
            dispatch(setCardType(cardType));
        },
       
        toggleBuilderMode: (flag) => {
            dispatch(toggleBuilderMode(flag));
        }
    };
};

export default connect(
    mapStateToProps,mapDispatchToProps
)(PlaceListView);