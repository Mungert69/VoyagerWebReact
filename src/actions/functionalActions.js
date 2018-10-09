import {
    setTripViewState, setTripItem, setTripJumpCounter, setTripCard, setCardType,setQueryTxt,setTripCardDetailLevel
} from '../actions/actions';
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

export const setTripCardEvent = (cardVal) => {
    return function (dispatch) {
        dispatch(fetchItinObj(cardVal)).then(() => {         
            dispatch(setTripViewState(true, false, true, false));  
            dispatch(setTripCard(cardVal));
        });
    };

};

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





