
import { ApiActionTypes } from '../actions/types';

const defaultState = {
    loadingCards: false,
    loadingItinObj : false,
    itinObj: {}
}; 

const apiState = (state = defaultState, action) => {
    switch (action.type) {
        case ApiActionTypes.REQUEST_CARDS :
            return Object.assign({}, state, { loadingCards: true });
        case ApiActionTypes.RECEIVE_CARDS :
            return Object.assign({}, state, { loadingCards: false });
        case ApiActionTypes.REQUEST_ITIN_OBJ:
            return Object.assign({}, state, { loadingItinObj: true });
        case ApiActionTypes.RECEIVE_ITIN_OBJ:
            return Object.assign({}, state, { loadingItinObj: false });
        case ApiActionTypes.UPDATE_ITIN_OBJ:
            return Object.assign({}, state, { itinObj: action.payload });
        default:
            return state;
    }
};


export default apiState;
