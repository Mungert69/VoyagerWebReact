import { connect } from 'react-redux';
import { TripDetailView } from '../components/TripDetailView';


const mapStateToProps = state => ({
    builderMode: state.tripViewState.builderMode,
    detailLevel: state.cardState.cardDetailLevel,
    cards: state.cardState.filteredCards,
    cardType: state.cardState.cardType,
    item: state.tripViewState.item,
    jumpCounter: state.tripViewState.jumpCounter,
    stylePlaceCard: state.cardState.placeStyleCards[2],
    styleHotelCard: state.cardState.hotelStyleCards[2],
    styleTripCard: state.cardState.tripStyleCards[2]

});



export default connect(
    mapStateToProps
)(TripDetailView);