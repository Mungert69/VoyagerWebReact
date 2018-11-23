import { connect } from 'react-redux';
import MenuPlaceListView from '../../components/control/Menus/MenuPlaceListView';


import {
  changeView, changeViewHotelWithFilterByPlace
} from '../../actions/functionalActions';



const mapStateToProps = state => ({
   
});
const mapDispatchToProps = dispatch => {
    return {
        changeView: (cardVal) => {
            dispatch(changeView(cardVal));
        },
        changeViewHotelWithFilterByPlace: (placeName) => {
            dispatch(changeViewHotelWithFilterByPlace(placeName));
        },
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(MenuPlaceListView);


