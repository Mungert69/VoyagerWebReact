
import { ApiActionTypes } from '../actions/types';
import {v4} from 'node-uuid';


const defaultState = {
    userId: v4()
}; 

const userState = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export default userState;
