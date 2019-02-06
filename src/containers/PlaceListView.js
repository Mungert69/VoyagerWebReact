import { connect } from 'react-redux';
import { PlaceListView } from '../components/PlaceListView';

import {
    setTripCardDetailLevel,setTripItem,setCard,setCardType,filterPlaceCards
} from '../actions/actions';
import {
    setNodeCardEvent
} from '../actions/functionalActions';

const mapStateToProps = state => ({
    filteredPlaceCards: state.cardState.filteredPlaceCards,
    hotelCards: state.cardState.hotelCards,
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
        filterPlaceCards: () => {
            dispatch(filterPlaceCards());
        }
    };
};

export default connect(
    mapStateToProps,mapDispatchToProps
)(PlaceListView);