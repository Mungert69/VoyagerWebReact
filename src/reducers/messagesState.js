import { ActionTypes } from '../actions/types';

const defaultState = {
    addHotelMsg : '',
    changeItineraryMsg : ''
};

const messagesState= (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_HOTEL_MESSAGE:
            return Object.assign({}, state, { addHotelMsg: action.payload });
            case ActionTypes.CHANGE_ITINERARY_MESSAGE:
            return Object.assign({}, state, { changeItineraryMsg: action.payload });
       
            default:
            return state;
    }
};

export default messagesState;