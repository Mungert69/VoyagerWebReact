import { connect } from 'react-redux';
import { VisualView } from '../components/VisualView';

const mapStateToProps = state => ({
    showMap : state.tripViewState.showMap
});


const mapDispatchToProps = dispatch => {
    return {
       
        
    };
};


export default connect(
    mapStateToProps,mapDispatchToProps
)(VisualView);


