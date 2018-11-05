import { connect } from 'react-redux';
import { MapView } from '../components/MapView';


import {
    filterMapStyleCard
} from '../actions/actions';

const mapStateToProps = state => ({
    builderMode: state.tripViewState.builderMode,
    detailLevel: state.cardState.cardDetailLevel,
    filteredMapStyleCard: state.cardState.filteredMapStyleCard,
    cards: state.cardState.filteredCards,
    cardType: state.cardState.cardType,
    item: state.tripViewState.item,
    jumpCounter: state.tripViewState.jumpCounter
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


