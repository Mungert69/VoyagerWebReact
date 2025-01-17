﻿import { combineReducers } from 'redux';
import tripViewState from './tripViewState';
import cardState from './cardState';
import apiState from './apiState';
import userState from './userState';
import messagesState from './messagesState';

export default combineReducers({
    tripViewState,
    cardState,
    apiState,
    userState,
    messagesState
});