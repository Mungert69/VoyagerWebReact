import { connect } from 'react-redux';
import { ItineraryView } from '../components/ItineraryView';


import {
    addHotel
} from '../actions/apiActions';

const mapStateToProps = state => ({
  addHotelMsg : state.messagesState.addHotelMsg,
  userId : state.userState.userId 
});


const mapDispatchToProps = dispatch => {
    return {
       
        addHotel: (hotelId,placeNameId,userId) => {
            dispatch(addHotel(hotelId,placeNameId,userId));
        }
       
    };
};


export default connect(
    mapStateToProps,mapDispatchToProps
)(HotelList);


