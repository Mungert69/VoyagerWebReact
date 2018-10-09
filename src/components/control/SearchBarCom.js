import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect} from 'react-redux';

import { toggleOrderBy,setQueryTxt } from '../../actions/actions';

import {
    filterByNearest
} from '../../actions/functionalActions';


class _SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.setQueryTxt(event.target.value);
      
    }



    render() {
        return (
           <span>
                <FontAwesomeIcon className="Show Voyager_Trip_Filter_Search" icon="search" />
                <input type="text" placeholder="SEARCH" value={this.props.queryTxt} className="Show Voyager_Search" onChange={this.handleChange} />
                    <a className="Show Voyager_Trip_Sort_Alpha" title="SORT ALPHABETICAL" onClick={this.props.toggleOrderBy}><FontAwesomeIcon className="Voyager_Trip_Sort_Alpha" icon="sort-alpha-down" />orderBy</a>
                    <a className="Show Voyager_Trip_Sort_Location" title="SORT NEXT NEAREST" onClick={this.props.filterByNearest}><FontAwesomeIcon className="Voyager_Trip_Sort_Location" icon="map-marked" /></a>
          </span>  
        );
    }
}

const mapStateToProps = state => ({
    queryTxt: state.tripViewState.queryTxt
   
});



const mapDispatchToProps = dispatch => {
    return {

        toggleOrderBy: () => {
            dispatch(toggleOrderBy());
        },
        setQueryTxt: (txt) => {
            dispatch(setQueryTxt(txt));
        },
        filterByNearest: () => {
            dispatch(filterByNearest());
        }
    };
};


const SearchBar = connect(
    mapStateToProps,mapDispatchToProps
)(_SearchBar);

export default SearchBar;
