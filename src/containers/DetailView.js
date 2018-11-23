import { connect } from 'react-redux';
import { DetailView } from '../components/DetailView';


const mapStateToProps = state => ({
    cards: state.cardState.filteredCards,
    cardType: state.cardState.cardType,
    item: state.tripViewState.item,
    jumpCounter: state.tripViewState.jumpCounter,
    stylePlaceCard: state.cardState.placeStyleCards[2],
    styleHotelCard: state.cardState.hotelStyleCards[2],
    styleTripCard: state.cardState.tripStyleCards[2],
    itinObj: state.apiState.itinObj

});

export default connect(
    mapStateToProps
)(DetailView);