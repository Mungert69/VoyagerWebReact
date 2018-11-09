import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Control_Filter_Trip } from './Control_Filter_Trip';
import { Control_Filter_Place } from './Control_Filter_Place';
import { Control_Filter_Hotel } from './Control_Filter_Hotel';
import { Control_Filter_Info } from './Control_Filter_Info';

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
           <i className="fas fa-search Voyager_Trip_Filter_Search"></i>
                <input type="text" placeholder="SEARCH" value={this.props.queryTxt} className="Show Voyager_Search" onChange={this.handleChange} />
                    <a className="Show Voyager_Trip_Sort_Alpha" title="SORT ALPHABETICAL" onClick={this.props.toggleOrderBy}><i className="fas fa-sort-alpha-down Voyager_Trip_Sort_Alpha"></i>orderBy</a>
                    <a className="Show Voyager_Trip_Sort_Location" title="SORT NEXT NEAREST" onClick={this.props.filterByNearest}><i className="fas fa-map-marked Voyager_Trip_Sort_Location"></i></a>
                    <Control_Filter_Hotel/>
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
