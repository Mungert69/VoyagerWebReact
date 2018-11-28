import { connect } from 'react-redux';
import MenuVisualView from '../../components/control/Menus/MenuVisualView';

import {
    toggleShowMap
} from '../../actions/actions';

const mapStateToProps = state => ({
    showMap : state.tripViewState.showMap
});


const mapDispatchToProps = dispatch => {
    return {
        toggleShowMap: () => {
            dispatch(toggleShowMap());
        }
       
    };
};


export default connect(
    mapStateToProps,mapDispatchToProps
)(MenuVisualView);


