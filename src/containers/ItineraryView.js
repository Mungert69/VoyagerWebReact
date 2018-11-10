import { connect } from 'react-redux';
import { ItineraryView } from '../components/ItineraryView';


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
        }
       
    };
};


export default connect(
    mapStateToProps,mapDispatchToProps
)(ItineraryView);


