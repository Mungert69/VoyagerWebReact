import { ApiActionTypes } from './types';
import {
    updatePlaceCards, updateHotelCards, updateTripCards, updateHotelMapStyleCards, updateHotelStyleCards,
    updatePlaceMapStyleCards, updatePlaceStyleCards, updateTripMapStyleCards, updateTripStyleCards,
     updatePlaceCardsWithPlaceState,setTripViewState

} from './actions';

import  {addHotelMessage} from './messagesActions';

import { apiBaseUrl } from '../components/Constants';

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
        return fetch(apiBaseUrl + `api/Places/Cards/`)
            .then(
                response => response.json(),
                error => console.log('An error occurred in  apiActions.fetchPlaceCards : ', error)
            )
            .then(data => {
                dispatch(updatePlaceCards(data));
                dispatch(receiveCards());
            }
            );
    };
}

export function fetchPlaceStates() {
    return function (dispatch) {
        dispatch(requestCards());
        return fetch(apiBaseUrl + `api/Places/PlaceStates/`)
            .then(
                response => response.json(),
                error => console.log('An error occurred in  apiActions.fetchPlaceStates : ', error)
            )
            .then(data => {
                dispatch(updatePlaceCardsWithPlaceState(data));
                dispatch(receiveCards());
            }
            );
    };
}



export function fetchHotelCards() {
    return function (dispatch) {
        dispatch(requestCards());
        return fetch(apiBaseUrl + `api/Hotels/Cards/`)
            .then(
                response => response.json(),
                error => console.log('An error occurred in  apiActions.fetchHotelCards : ', error)
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
        return fetch(apiBaseUrl + `api/Itinerary/Cards/` + templateTypeID)
            .then(
                response => response.json(),
                error => console.log('An error occurred in  apiActions.fetchTripCards : ', error)
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
        return fetch(apiBaseUrl + `api/Places/StyleCards/` + templateTypeId)
            .then(
                response => response.json(),
                error => console.log('An error occurred in  apiActions.fetchPlaceStyleCards : ', error)
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
        return fetch(apiBaseUrl + `api/Hotels/StyleCards/` + templateTypeId)
            .then(
                response => response.json(),
                error => console.log('An error occurred in  apiActions.fetchHotelStyleCards : ', error)
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
        return fetch(apiBaseUrl + `api/Itinerary/StyleCards/` + templateTypeId)
            .then(
                response => response.json(),
                error => console.log('An error occurred in  apiActions.fetchTripStyleCards : ', error)
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
        return fetch(apiBaseUrl + `api/Places/StyleCards/` + templateTypeId)
            .then(
                response => response.json(),
                error => console.log('An error occurred in  apiActions.fetchPlaceMapStyleCards : ', error)
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
        return fetch(apiBaseUrl + `api/Hotels/StyleCards/` + templateTypeId)
            .then(
                response => response.json(),
                error => console.log('An error occurred in  apiActions.fetchHotelMapStyleCards : ', error)
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
        return fetch(apiBaseUrl + `api/Itinerary/StyleCards/` + templateTypeId)
            .then(
                response => response.json(),
                error => console.log('An error occurred in  apiActions.fetchTripMapStyleCards : ', error)
            )
            .then(data => {
                dispatch(updateTripMapStyleCards(data));
                dispatch(receiveCards());
            }
            );
    };
}

export function deleteHotel(userId) {
    return function (dispatch) {
        // Del Hotel api call
        let str = apiBaseUrl + "api/Itinerary/DelHotel/" + userId + "/";
        fetch(str)
            .then(response => response.json(),
            error => console.log('An error occurred in apiActions.deleteHotel : ', error))
            .then(result => {
                dispatch(fetchStoredItinObj(userId));
            })
            ; //fetch
    };
  };

export function addHotel(hotelId, placeNameId, userId) {
    return function (dispatch) {
        // Add Hotel api call
        let str = apiBaseUrl + 'api/Itinerary/AddHotel/' + placeNameId + '/' + hotelId + '/' + userId + '/';
        fetch(str)
            .then(
                response => response.json(),
                error => console.log('An error occurred in apiActions.addHotel : ', error)
            )
            .then(result => {
                dispatch(addHotelMessage(result));
                dispatch(fetchStoredItinObj(userId));
                dispatch(setTripViewState(true, false, true, false));  
               
            });

        // call the parent component to update other components on that level

    };//addHotel
};

export const fetchItinObj = (cardVal, userId) => {

    return function (dispatch) {
        dispatch(requestItinObj());
        return fetch(apiBaseUrl + 'api/Itinerary/ItinObj/' + cardVal.id + '/' + cardVal.typeId + '/' + userId + '/')
            .then(
                response => response.json(),
                error => console.log('An error occurred in apiActions.fetchItinObj : ', error)
            )
            .then(data => {
                dispatch(updateItinObj(data));
                dispatch(receiveItinObj());
            }
            );
    };

};

export const fetchStoredItinObj = (userId) => {

    return function (dispatch) {
        dispatch(requestItinObj());
        return fetch(apiBaseUrl + 'api/Itinerary/StoredItinObj/' + userId + '/')
            .then(
                response => response.json(),
                error => console.log('An error occurred in apiActions.fetchStoredItinObj :', error)
            )
            .then(data => {
                dispatch(updateItinObj(data));
                dispatch(updatePlaceCardsWithPlaceState(data.placeStates))
                dispatch(receiveItinObj());
            }
            );
    };



};


