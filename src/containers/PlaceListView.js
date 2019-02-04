import { connect } from 'react-redux';
import { PlaceListView } from '../components/PlaceListView';

import {
    setTripCardDetailLevel,setTripItem,setCard,setCardType
} from '../actions/actions';
import {
    setNodeCardEvent
} from '../actions/functionalActions';

const mapStateToProps = state => ({
    cards: state.cardState.filteredCards,
    hotelCards: state.cardState.hotelCards,
    placeCards: state.cardState.placeCards,
    cardType: state.cardState.cardType,
    stylePlaceCards: state.cardState.placeStyleCards,
    styleHotelCards: state.cardState.hotelStyleCards
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
    };
};

export default connect(
    mapStateToProps,mapDispatchToProps
)(PlaceListView);