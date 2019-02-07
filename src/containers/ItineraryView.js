import { connect } from 'react-redux';
import { ItineraryView } from '../components/ItineraryView';

import {
    setTripCardDetailLevel,setTripItem,setCard,setCardType,toggleBuilderMode
} from '../actions/actions';
import {
    fetchStoredItinObj
} from '../actions/apiActions';

const mapStateToProps = state => ({
  itinObj: state.apiState.itinObj, 
  userId : state.userState.userId 
});


const mapDispatchToProps = dispatch => {
    return {
       
        fetchStoredItinObj: (userId) => {
            dispatch(fetchStoredItinObj(userId));
        },
        setCard: (cardVal) => {
            dispatch(setCard(cardVal));
        },
        setTripItem: (item) => {
            dispatch(setTripItem(item));
        },
        setCardType: (cardType) => {
            dispatch(setCardType(cardType));
        },
       
        toggleBuilderMode: (flag) => {
            dispatch(toggleBuilderMode(flag));
        }
       
    };
};


export default connect(
    mapStateToProps,mapDispatchToProps
)(ItineraryView);


