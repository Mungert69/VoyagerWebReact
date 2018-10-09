import { connect } from 'react-redux';
import { TripContainer} from '../components/TripContainer';

import {
    fetchPlaceCards, fetchHotelCards, fetchTripCards, fetchHotelMapStyleCards, fetchHotelStyleCards,
    fetchPlaceMapStyleCards,fetchPlaceStyleCards,fetchTripMapStyleCards,fetchTripStyleCards
} from '../actions/apiActions';
import {
  changeView,changeDetailLevel
} from '../actions/functionalActions';



const mapStateToProps = state => ({
    isListViewVisible: state.tripViewState.isListViewVisible,
    isTripViewVisible: state.tripViewState.isTripViewVisible,
    isDetailViewVisible: state.tripViewState.isDetailViewVisible,
    cardDetailLevel: state.cardState.cardDetailLevel,
    cardType: state.cardState.cardType,
    loading: state.apiState.loadingCards
});

const mapDispatchToProps = dispatch => {
    return {
       

        //fetch data
        fetchPlaceCards: () => {
            dispatch(fetchPlaceCards());
        },
        fetchHotelCards: () => {
            dispatch(fetchHotelCards());
        },
         fetchTripCards: (templateTypeId) => {
             dispatch(fetchTripCards(templateTypeId));
        },
        fetchPlaceStyleCards: (templateTypeId) => {
            dispatch(fetchPlaceStyleCards(templateTypeId));
        },
        fetchHotelStyleCards: (templateTypeId) => {
            dispatch(fetchHotelStyleCards(templateTypeId));
        },
        fetchTripStyleCards: (templateTypeId) => {
            dispatch(fetchTripStyleCards(templateTypeId));
        }
        ,
        fetchPlaceMapStyleCards: (templateTypeId) => {
            dispatch(fetchPlaceMapStyleCards(templateTypeId));
        },
        fetchHotelMapStyleCards: (templateTypeId) => {
            dispatch(fetchHotelMapStyleCards(templateTypeId));
        },
        fetchTripMapStyleCards: (templateTypeId) => {
            dispatch(fetchTripMapStyleCards(templateTypeId));
        },

       
        // local event handlers
        changeView: (cardVal) => {
            dispatch(changeView(cardVal));
        },
        changeDetailLevel: (e) => {
            dispatch(changeDetailLevel(e));
        },
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(TripContainer);


