import { connect } from 'react-redux';
import { TripListView } from '../components/TripListView';

import {
    setTripCardDetailLevel
} from '../actions/actions';
import {
     setTripCardEvent
} from '../actions/functionalActions';

const mapStateToProps = state => ({
    cards: state.cardState.filteredCards,
    stylePlaceCard: state.cardState.placeStyleCards[state.cardState.cardDetailLevel],
    styleHotelCard: state.cardState.hotelStyleCards[state.cardState.cardDetailLevel]
});


const mapDispatchToProps = dispatch => {
    return {
       
        setTripCardEvent: (cardVal) => {
            dispatch(setTripCardEvent(cardVal));
        }
    };
};

export default connect(
    mapStateToProps,mapDispatchToProps
)(TripListView);