import { connect } from 'react-redux';
import MenuHotelListView from '../../components/control/Menus/MenuHotelListView';


import {
  changeView, changeViewHotelWithFilterByPlace
} from '../../actions/functionalActions';

import {addHotel} from '../../actions/apiActions';

const mapStateToProps = state => ({
  addHotelMsg : state.messagesState.addHotelMsg,
  userId : state.userState.userId 
   
});
const mapDispatchToProps = dispatch => {
    return {
        addHotel: (hotelId,placeNameId,userId) => {
            dispatch(addHotel(hotelId,placeNameId,userId))
        },
        changeView: (cardVal) => {
            dispatch(changeView(cardVal));
        }
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(MenuHotelListView);


