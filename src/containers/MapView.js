import { connect } from 'react-redux';
import { MapView } from '../components/MapView';


import {
    filterMapStyleCard
} from '../actions/actions';

import {
    fetchStoredItinObj
} from '../actions/apiActions';

const mapStateToProps = state => ({
    builderMode: state.tripViewState.builderMode,
    filteredMapStyleCard: state.cardState.filteredMapStyleCard,
    cards: state.cardState.filteredCards,
    itinObj: state.apiState.itinObj, 
    cardType: state.cardState.cardType,
    item: state.tripViewState.item,
    jumpCounter: state.tripViewState.jumpCounter,
    userId : state.userState.userId
});


const mapDispatchToProps = dispatch => {
    return {
        
        filterMapStyleCard: () => {
            dispatch(filterMapStyleCard());
        },     
    };
};


export default connect(
    mapStateToProps,mapDispatchToProps
)(MapView);


