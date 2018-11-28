import { ActionTypes } from '../actions/types';


const defaultState = {
    builderMode: false,
    isListViewVisible: true,
    isTripViewVisible: false,
    isDetailViewVisible: false,
    item: 0,
    card: {},
    jumpCounter: 1,
    showMap : false

};

const tripViewState = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_BUILDER_MODE:
            return Object.assign({}, state, { builderMode: action.payload });
            case ActionTypes.TOGGLE_SHOW_MAP:
            return Object.assign({}, state, { showMap: !state.showMap });

        case ActionTypes.TOGGLE_DETAILVIEW_VISIBLE:
            return Object.assign({}, state, { isDetailViewVisible: action.payload });

        case ActionTypes.TOGGLE_LISTVIEW_VISIBLE:
            return Object.assign({}, state, { isListViewVisible: action.payload });

        case ActionTypes.TOGGLE_TRIPVIEW_VISIBLE:
            return Object.assign({}, state, { isTripViewVisible: action.payload });
        case ActionTypes.SET_TRIP_CARD:
            return Object.assign({}, state, { card: action.payload });
        case ActionTypes.SET_TRIP_ITEM:
            return Object.assign({}, state, { item: action.payload });
        case ActionTypes.SET_TRIP_JUMPCOUNTER:
            return Object.assign({}, state, { jumpCounter: action.payload });


        case ActionTypes.SET_TRIP_VIEW_STATE:
            return Object.assign({}, state, stateFillNulls(state,action.payload)
            );
        default:
            return state;
    }
};

const stateFillNulls = (state,actionPayload) => {
    let copyState = {
        builderMode: state.builderMode,
        isDetailViewVisible: state.isDetailViewVisible,
        isListViewVisible: state.isListViewVisible,
        isTripViewVisible: state.isTripViewVisible
    };
    if (actionPayload.builderMode !== null) {
        copyState.builderMode = actionPayload.builderMode;
    }
    if (actionPayload.isDetailViewVisible !== null) {
        copyState.isDetailViewVisible = actionPayload.isDetailViewVisible;
    }
    if (actionPayload.isListViewVisible !== null) {
        copyState.isListViewVisible = actionPayload.isListViewVisible;
    }
    if (actionPayload.isTripViewVisible !== null) {
        copyState.isTripViewVisible = actionPayload.isTripViewVisible;;
    }

    return copyState;
};

export default tripViewState;