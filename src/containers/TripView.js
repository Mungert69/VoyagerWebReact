import { connect } from 'react-redux';
import { TripView } from '../components/TripView';

import {
    setTripCardDetailLevel
} from '../actions/actions';
import {
     setBuilderCardEvent
} from '../actions/functionalActions';

const mapStateToProps = state => ({
    detailLevel: state.cardState.cardDetailLevel,
    cards: state.cardState.filteredCards,
    stylePlaceCard: state.cardState.placeStyleCards[state.cardState.cardDetailLevel],
    styleHotelCard: state.cardState.hotelStyleCards[state.cardState.cardDetailLevel],
    userId :  state.userState.userId
});


const mapDispatchToProps = dispatch => {
    return {
        setTripCardDetailLevel: (cardDetailLevel) => {
            dispatch(setTripCardDetailLevel(cardDetailLevel));
        },
        setBuilderCardEvent : (cardVal, item, cardType) => {
            dispatch(setBuilderCardEvent(cardVal, item, cardType));
        }
    };
};
export default connect(
    mapStateToProps,mapDispatchToProps
)(TripView);