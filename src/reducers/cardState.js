import { ActionTypes } from '../actions/types';
import _ from 'lodash';
import CardFilter from '../Objects/CardFilter';

const defaultState = {
    placeCards: [],
    hotelCards: [],
    tripCards: [],
    filteredCards: [],
    filteredPlaceCards: [],
    filteredStyleCards: [],
    filteredStyleCard: {},
    filteredMapStyleCards: [],
    filteredMapStyleCard: {},
    orderBy: false,
    queryTxt: '',
    cardType: 'trip',
    placeStyleCards: [],
    hotelStyleCards: [],
    tripStyleCards: [],
    placeMapStyleCards: [],
    hotelMapStyleCards: [],
    tripMapStyleCards: [],
    cardDetailLevel: 0
};

const cardState = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_PLACE_CARDS:
            return Object.assign({}, state, { placeCards: action.payload });
        case ActionTypes.UPDATE_PLACE_CARDS_WITH_PLACE_STATE:
            return Object.assign({}, state, { placeCards: updatePlaceCardsWithPlaceState(state.placeCards, action.payload) });
        case ActionTypes.UPDATE_HOTEL_CARDS:
            return Object.assign({}, state, { hotelCards: action.payload });
        case ActionTypes.UPDATE_TRIP_CARDS:
            return Object.assign({}, state, { tripCards: action.payload });

        case ActionTypes.UPDATE_PLACE_STYLE_CARDS:
            return Object.assign({}, state, { placeStyleCards: action.payload });
        case ActionTypes.UPDATE_HOTEL_STYLE_CARDS:
            return Object.assign({}, state, { hotelStyleCards: action.payload });
        case ActionTypes.UPDATE_TRIP_STYLE_CARDS:
            return Object.assign({}, state, { tripStyleCards: action.payload });

        case ActionTypes.UPDATE_PLACE_MAPSTYLE_CARDS:
            return Object.assign({}, state, { placeMapStyleCards: action.payload });
        case ActionTypes.UPDATE_HOTEL_MAPSTYLE_CARDS:
            return Object.assign({}, state, { hotelMapStyleCards: action.payload });
        case ActionTypes.UPDATE_TRIP_MAPSTYLE_CARDS:
            return Object.assign({}, state, { tripMapStyleCards: action.payload });

        case ActionTypes.FILTER_CARDS:
            return Object.assign({}, state, { filteredCards: filterCards(state, state.orderBy, state.queryTxt, state.cardType) });
           
        case ActionTypes.FILTER_PLACE_CARDS:
            return Object.assign({}, state, { filteredPlaceCards: filterPlaceCards(state, state.orderBy, state.queryTxt) });
      
        case ActionTypes.FILTER_PLACE_CARDS_BY_NEXT_HOP:
            return Object.assign({}, state, { filteredCards: filterPlaceCardsByNextHop(state) });
        case ActionTypes.FILTER_HOTEL_CARDS_BY_PLACENAME:
            return Object.assign({}, state, { filteredCards: filterHotelCardsByPlace(state, action.payload) });

        case ActionTypes.FILTER_STYLE_CARDS:
            return Object.assign({}, state, { filteredStyleCards: filterStyleCards(state, false, state.cardType) });

        case ActionTypes.FILTER_STYLE_CARD:
            return Object.assign({}, state, { filteredStyleCard: filterStyleCard(state, false, state.cardType, state.cardDetailLevel) });

        case ActionTypes.FILTER_MAPSTYLE_CARDS:
            return Object.assign({}, state, { filteredMapStyleCards: filterStyleCards(state, true, state.cardType) });

        case ActionTypes.FILTER_MAPSTYLE_CARD:
            return Object.assign({}, state, { filteredMapStyleCard: filterStyleCard(state, true, state.cardType, state.cardDetailLevel) });

        // Note we must also update the individual style card with a card detail update
        case ActionTypes.SET_CARD_DETAIL_LEVEL:
            return Object.assign({}, state, { cardDetailLevel: action.payload, filteredMapStyleCard: filterStyleCard(state, true, state.cardType, action.payload) });

        case ActionTypes.TOGGLE_ORDERBY_FILTER:
            return Object.assign({}, state, { orderBy: !state.orderBy }, { filteredCards: filterCards(state, !state.orderBy, state.queryTxt, state.cardType) });
        case ActionTypes.SET_QUERYTXT_FILTER:
            return Object.assign({}, state, { queryTxt: action.payload }, { filteredCards: filterCards(state, state.orderBy, action.payload, state.cardType) });
        case ActionTypes.SET_CARD_TYPE:
            return Object.assign({}, state, { cardType: action.payload }, { filteredCards: filterCards(state, state.orderBy, state.queryTxt, action.payload) });

        default:
            return state;
    }
};

const updatePlaceCardsWithPlaceState = (placeCards, placeStates) => {

    placeStates.forEach(function (item, index) {
        placeCards[index].placeState = item;
    }//function
    );//forEach
    return placeCards;
};


const filterCards = (state, orderBy, queryTxt, cardType) => {
    var cardFilter = new CardFilter(cardType, state);
    var test = cardFilter.filterByTitle(orderBy, queryTxt);
    return cardFilter.cards;
}



const filterPlaceCards = (state, orderBy, queryTxt) => {
    var cardFilter = new CardFilter('place', state);
    var test = cardFilter.filterPlaceCardsHopsFirst(orderBy, queryTxt);
    return cardFilter.cards;
}

const filterPlaceCardsByNextHop = (state) => {
    var titleList = [];
    state.placeCards.forEach((item) => {
        if (item.placeState.isHop) titleList.push(item);
    }

    );
    var cardFilter = new CardFilter('place', state);
    cardFilter.filterByList(titleList, 'title');
    return cardFilter.cards;
};

const filterHotelCardsByPlace = (state, placeName) => {
    var titleList = [{ title: placeName }];

    var cardFilter = new CardFilter('hotel', state);
    cardFilter.filterByListDiffFields(titleList, 'subtitle', 'title');
    return cardFilter.cards;
};



const filterStyleCards = (state, isMap, cardType) => {

    var cards = [];
    if (isMap) {
        if (cardType === 'trip') {
            cards = state.tripMapStyleCards;
        }
        if (cardType === 'hotel') {
            cards = state.hotelMapStyleCards;
        }
        if (cardType === 'place') {
            cards = state.placeMapStyleCards;
        }
    }
    else {
        if (cardType === 'trip') {
            cards = state.tripStyleCards;
        }
        if (cardType === 'hotel') {
            cards = state.hotelStyleCards;
        }
        if (cardType === 'place') {
            cards = state.placeStyleCards;
        }
    }

    return cards;
};

const filterStyleCard = (state, isMap, cardType, cardDetailLevel) => {

    var card = {};
    if (isMap) {
        if (cardType === 'trip') {
            card = state.tripMapStyleCards[cardDetailLevel];
        }
        if (cardType === 'hotel') {
            card = state.hotelMapStyleCards[cardDetailLevel];
        }
        if (cardType === 'place') {
            card = state.placeMapStyleCards[cardDetailLevel];
        }
    }
    else {
        if (cardType === 'trip') {
            card = state.tripStyleCards[cardDetailLevel];
        }
        if (cardType === 'hotel') {
            card = state.hotelStyleCards[cardDetailLevel];
        }
        if (cardType === 'place') {
            card = state.placeStyleCards[cardDetailLevel];
        }
    }

    return card;
};



export default cardState;