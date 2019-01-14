import { connect } from 'react-redux';
import { ImageView } from '../components/ImageView';


import {
    filterMapStyleCard
} from '../actions/actions';

import {
    fetchStoredItinObj
} from '../actions/apiActions';

const mapStateToProps = state => ({
    card: state.tripViewState.card
});


const mapDispatchToProps = dispatch => {
    return {
        
        
    };
};

export default connect(
    mapStateToProps,mapDispatchToProps
)(ImageView);


