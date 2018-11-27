import { connect } from 'react-redux';
import MenuVisualView from '../../components/control/Menus/MenuVisualView';

import {
    toggleShowMap
} from '../../actions/actions';

const mapStateToProps = state => ({
    
});


const mapDispatchToProps = dispatch => {
    return {
        toggleShowMap: (flag) => {
            dispatch(toggleShowMap(flag));
        }
       
    };
};


export default connect(
    mapStateToProps,mapDispatchToProps
)(MenuVisualView);


