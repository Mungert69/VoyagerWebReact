import { connect } from 'react-redux';
import { NodeListView } from '../components/NodeListView';

import {
    setTripCardDetailLevel
} from '../actions/actions';
import {
    setNodeCardEvent
} from '../actions/functionalActions';

const mapStateToProps = state => ({
    cards: state.cardState.filteredCards,
    cardType: state.cardState.cardType,
    stylePlaceCards: state.cardState.placeStyleCards,
    styleHotelCards: state.cardState.hotelStyleCards
});

const mapDispatchToProps = dispatch => {
    return {
        setTripCardDetailLevel: (cardDetailLevel) => {
            dispatch(setTripCardDetailLevel(cardDetailLevel));
        },
        setCardEvent: (cardVal, item) => {
            dispatch(setNodeCardEvent(cardVal, item));
        }
    };
};

export default connect(
    mapStateToProps,mapDispatchToProps
)(NodeListView);