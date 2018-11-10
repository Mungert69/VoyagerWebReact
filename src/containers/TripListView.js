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
    styleHotelCard: state.cardState.hotelStyleCards[state.cardState.cardDetailLevel],
    userId : state.userState.userId
});


const mapDispatchToProps = (dispatch) => {
    return {
       
        setTripCardEvent: (cardVal,userId) => {
            dispatch(setTripCardEvent(cardVal,userId));
        }
    };
};

export default connect(
    mapStateToProps,mapDispatchToProps
)(TripListView);