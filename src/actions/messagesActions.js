import { ActionTypes} from './types';

export const addHotelMessage = (addHotelMsg) => ({
    type: ActionTypes.ADD_HOTEL_MESSAGE,
    payload: addHotelMsg

});

export const changeItineraryMessage = (changeItineraryMsg) => ({
    type: ActionTypes.CHANGE_ITINERARY_MESSAGE,
    payload: changeItineraryMsg

});