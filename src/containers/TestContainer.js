import { connect } from 'react-redux';
import { TestContainer} from '../components/ComponentTests/TestContainer';

import { setCard } from '../actions/actions';
import {
    fetchPlaceCards, fetchHotelCards, fetchAllTripCards, fetchHotelMapStyleCards, fetchHotelStyleCards,
    fetchPlaceMapStyleCards,fetchPlaceStyleCards,fetchTripMapStyleCards,fetchTripStyleCards
} from '../actions/apiActions';
import {
  changeView,changeDetailLevel,changeViewPlaceWithFilterByNextHop
} from '../actions/functionalActions';



const mapStateToProps = state => ({
    isListViewVisible: state.tripViewState.isListViewVisible,
    isTripViewVisible: state.tripViewState.isTripViewVisible,
    isDetailViewVisible: state.tripViewState.isDetailViewVisible,
    cardDetailLevel: state.cardState.cardDetailLevel,
    cardType: state.cardState.cardType,
    loading: state.apiState.loadingCards,
    userId : state.userState.userId,
    hotelCards : state.cardState.hotelCards,
    placeCards : state.cardState.placeCards,
    tripCards : state.cardState.tripCards
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
         fetchAllTripCards: (userId) => {
             dispatch(fetchAllTripCards(userId));
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
        changeViewPlaceWithFilterByNextHop : () => {
            dispatch(changeViewPlaceWithFilterByNextHop());
        },
        changeView: (cardVal) => {
            dispatch(changeView(cardVal));
        },
        changeDetailLevel: (e) => {
            dispatch(changeDetailLevel(e));
        },

        setCard : (card) => {
            dispatch(setCard(card));
        },


    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(TestContainer);


