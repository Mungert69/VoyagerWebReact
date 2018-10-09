import { ActionTypes} from './types';
import { Card } from 'antd';


export const setTripViewState = (builderMode, isListViewVisible, isTripViewVisible, isDetailViewVisible) => ({
    type: ActionTypes.SET_TRIP_VIEW_STATE,
    payload: {
        builderMode: builderMode,
        isListViewVisible: isListViewVisible,      
        isTripViewVisible: isTripViewVisible,
        isDetailViewVisible: isDetailViewVisible
    }

});

export const toggleBuilderMode = (flag) => ({
    type: ActionTypes.TOGGLE_BUILDER_MODE,
    payload: flag

});

export const toggleDetailViewVisible = (flag) => ({
    type: ActionTypes.TOGGLE_DETAILVIEW_VISIBLE,
    payload: flag

});

export const toggleListViewVisible = (flag) => ({
    type: ActionTypes.TOGGLE_LISTVIEW_VISIBLE,
    payload: flag

});

export const toggleTripViewVisible = (flag) => ({
    type: ActionTypes.TOGGLE_TRIPVIEW_VISIBLE,
    payload: flag

});


export function updatePlaceCards(cards) {
    return {
        type: ActionTypes.UPDATE_PLACE_CARDS,
        payload: cards
    };
}
export function updateHotelCards(cards) {
    return {
        type: ActionTypes.UPDATE_HOTEL_CARDS,
        payload: cards
    };
}
export function updateTripCards(cards) {
    return {
        type: ActionTypes.UPDATE_TRIP_CARDS,
        payload: cards
    };
}


export function updatePlaceStyleCards(cards) {
    return {
        type: ActionTypes.UPDATE_PLACE_STYLE_CARDS,
        payload: cards
    };
}
export function updateHotelStyleCards(cards) {
    return {
        type: ActionTypes.UPDATE_HOTEL_STYLE_CARDS,
        payload: cards
    };
}
export function updateTripStyleCards(cards) {
    return {
        type: ActionTypes.UPDATE_TRIP_STYLE_CARDS,
        payload: cards
    };
}


export function updatePlaceMapStyleCards(cards) {
    return {
        type: ActionTypes.UPDATE_PLACE_MAPSTYLE_CARDS,
        payload: cards
    };
}
export function updateHotelMapStyleCards(cards) {
    return {
        type: ActionTypes.UPDATE_HOTEL_MAPSTYLE_CARDS,
        payload: cards
    };
}
export function updateTripMapStyleCards(cards) {
    return {
        type: ActionTypes.UPDATE_TRIP_MAPSTYLE_CARDS,
        payload: cards
    };
}


export function filterStyleCards() {
    return {
        type: ActionTypes.FILTER_STYLE_CARDS
    };
}

export function filterStyleCard() {
    return {
        type: ActionTypes.FILTER_STYLE_CARD
    };
}

export function filterMapStyleCards() {
    return {
        type: ActionTypes.FILTER_MAPSTYLE_CARDS
    };
}

export function filterMapStyleCard() {
    return {
        type: ActionTypes.FILTER_MAPSTYLE_CARD
    };
}

export function filterCards() {
    return {
        type: ActionTypes.FILTER_CARDS
    };
}


export function toggleOrderBy() {
    return {
        type: ActionTypes.TOGGLE_ORDERBY_FILTER
    };
}

export function setQueryTxt(queryTxt) {
    return {
        type: ActionTypes.SET_QUERYTXT_FILTER,
        payload: queryTxt
    };
}

export function setCardType(cardType) {
    return {
        type: ActionTypes.SET_CARD_TYPE,
        payload: cardType
    };
}


export function setTripCard(card) {
    return {
        type: ActionTypes.SET_TRIP_CARD,
        payload: card
    };
}
export function setTripItem(item) {
    return {
        type: ActionTypes.SET_TRIP_ITEM,
        payload: item
    };
}
export function setTripJumpCounter(jumpCounter) {
    return {
        type: ActionTypes.SET_TRIP_JUMPCOUNTER,
        payload: jumpCounter
    };
}

export function setTripCardDetailLevel(cardDetailLevel) {
    return {
        type: ActionTypes.SET_TRIP_CARD_DETAIL_LEVEL,
        payload: cardDetailLevel
    };
}

