import { ActionTypes} from './types';

export const addHotelMessage = (addHotelMsg) => ({
    type: ActionTypes.ADD_HOTEL_MESSAGE,
    payload: addHotelMsg

});