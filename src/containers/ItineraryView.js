import { connect } from 'react-redux';
import { ItineraryView } from '../components/ItineraryView';


import {
    fetchStoredItinObj
} from '../actions/apiActions';

const mapStateToProps = state => ({
  itinObj: state.apiState.itinObj,  
});


const mapDispatchToProps = dispatch => {
    return {
       
        fetchStoredItinObj: () => {
            dispatch(fetchStoredItinObj());
        }
       
    };
};


export default connect(
    mapStateToProps,mapDispatchToProps
)(ItineraryView);


