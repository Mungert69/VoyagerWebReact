import { ApiActionTypes } from './types';
import {
    updatePlaceCards, updateHotelCards, updateTripCards, updateHotelMapStyleCards, updateHotelStyleCards,
    updatePlaceMapStyleCards,updatePlaceStyleCards,updateTripMapStyleCards, updateTripStyleCards

} from './actions';


import {apiBaseUrl} from '../components/Constants';

export function requestCards() {
    return {
        type: ApiActionTypes.REQUEST_CARDS
    };
}

export function receiveCards() {
    return {
        type: ApiActionTypes.RECEIVE_CARDS
    };
}

export function requestItinObj() {
    return {
        type: ApiActionTypes.REQUEST_ITIN_OBJ
    };
}

export function receiveItinObj() {
    return {
        type: ApiActionTypes.RECEIVE_ITIN_OBJ
    };
}

export function updateItinObj(itinObj) {
    return {
        type: ApiActionTypes.UPDATE_ITIN_OBJ,
        payload: itinObj
    };
}


export function fetchPlaceCards() {
    return function (dispatch) {
        dispatch(requestCards());
        return fetch(apiBaseUrl+`api/Places/Cards/`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(data => {
                dispatch(updatePlaceCards(data));
                dispatch(receiveCards());
            }
            );
    };
}



export function fetchHotelCards() {
    return function (dispatch) {
        dispatch(requestCards());
        return fetch(apiBaseUrl+`api/Hotels/Cards/`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(data => {
                dispatch(updateHotelCards(data));
                dispatch(receiveCards());
            }
            );
    };
}

export function fetchTripCards(templateTypeID) {
    return function (dispatch) {
        dispatch(requestCards());
        return fetch(apiBaseUrl+`api/Itinerary/Cards/` + templateTypeID)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(data => {
                dispatch(updateTripCards(data));
                dispatch(receiveCards());
            }
            );
    };
}



export function fetchPlaceStyleCards(templateTypeId) {
    return function (dispatch) {
        dispatch(requestCards());
        return fetch(apiBaseUrl+`api/Places/StyleCards/`+templateTypeId)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(data => {
                dispatch(updatePlaceStyleCards(data));
                dispatch(receiveCards());
            }
            );
    };
}



export function fetchHotelStyleCards(templateTypeId) {
    return function (dispatch) {
        dispatch(requestCards());
        return fetch(apiBaseUrl+`api/Hotels/StyleCards/` + templateTypeId)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(data => {
                dispatch(updateHotelStyleCards(data));
                dispatch(receiveCards());
            }
            );
    };
}

export function fetchTripStyleCards(templateTypeId) {
    return function (dispatch) {
        dispatch(requestCards());
        return fetch(apiBaseUrl+`api/Itinerary/StyleCards/` + templateTypeId)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(data => {
                dispatch(updateTripStyleCards(data));
                dispatch(receiveCards());
            }
            );
    };
}

export function fetchPlaceMapStyleCards(templateTypeId) {
    return function (dispatch) {
        dispatch(requestCards());
        return fetch(apiBaseUrl+`api/Places/StyleCards/` + templateTypeId)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(data => {
                dispatch(updatePlaceMapStyleCards(data));
                dispatch(receiveCards());
            }
            );
    };
}



export function fetchHotelMapStyleCards(templateTypeId) {
    return function (dispatch) {
        dispatch(requestCards());
        return fetch(apiBaseUrl+`api/Hotels/StyleCards/` + templateTypeId)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(data => {
                dispatch(updateHotelMapStyleCards(data));
                dispatch(receiveCards());
            }
            );
    };
}

export function fetchTripMapStyleCards(templateTypeId) {
    return function (dispatch) {
        dispatch(requestCards());
        return fetch(apiBaseUrl+`api/Itinerary/StyleCards/` + templateTypeId)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(data => {
                dispatch(updateTripMapStyleCards(data));
                dispatch(receiveCards());
            }
            );
    };
}

export const fetchItinObj = (cardVal) => {

    return function (dispatch) {
        dispatch(requestItinObj());
        return fetch(apiBaseUrl+'api/Itinerary/ItinObj/' + cardVal.id + '/' + cardVal.typeId + '/')
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(data => {
                dispatch(updateItinObj(data));
                dispatch(receiveItinObj());
            }
            );
    };

};


