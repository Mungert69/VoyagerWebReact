import {
    setTripViewState, setTripItem, setTripJumpCounter, setTripCard,
     setCardType,setQueryTxt,setTripCardDetailLevel, filterPlaceCardsByNextHop, filterHotelCardsByPlace
} from './actions';
import { fetchItinObj } from './apiActions';


export const setNodeCardEvent = (cardVal, item) => {

    return function (dispatch) {
        dispatch(setTripViewState(null, false, false, true));
        dispatch(setTripCard(cardVal));
        dispatch(setTripItem(item));
        dispatch(setTripJumpCounter(1));
    };
};

export const setBuilderCardEvent = (cardVal, item, cardType) => {
    return function (dispatch) {
        dispatch(setCardType(cardType));
        dispatch(setTripCard(cardVal));
        dispatch(setTripItem(item));
        dispatch(setTripJumpCounter(3));
        dispatch(setTripViewState(true, false, false, true));
       
    };
};


// Gets card from api call usnig cardVal. Sets TripViewState so TripView is visible and sets card state. 
export const setTripCardEvent = (cardVal,userId) => {
    return function (dispatch) {
        dispatch(fetchItinObj(cardVal,userId)).then(() => {         
            dispatch(setTripViewState(true, false, true, false));  
            dispatch(setTripCard(cardVal));
        });
    };

};

export const changeViewPlaceWithFilterByNextHop = () => {
    return function (dispatch) {
        dispatch(setCardType('place'));
        dispatch(setQueryTxt(''));
        dispatch(filterPlaceCardsByNextHop());
        dispatch(setTripViewState(false, true, false, false));
        };
}

export const changeViewHotelWithFilterByPlace = (placeName) => {
    return function (dispatch) {
        dispatch(setCardType('hotel'));
        dispatch(setQueryTxt(''));
        dispatch(filterHotelCardsByPlace(placeName));
        dispatch(setTripViewState(false, true, false, false));
        };
}

export const changeView = (cardType) => {

    return function (dispatch) {
        dispatch(setCardType(cardType));
        dispatch(setQueryTxt(''));
        dispatch(setTripViewState(false, true, false, false));
       
    };
  
};

export const changeDetailLevel = (e) => {
    return function (dispatch) {
        dispatch(setTripCardDetailLevel(e.target.value));

    };

};



export const filterByNearest = () => { };





