import React, { Component } from 'react';
import { Select, Button } from 'antd';
import TripListView from '../containers/TripListView';
import TripView from '../containers/TripView';
import MapView from '../containers/MapView';
import TripDetailView from '../containers/TripDetailView';
import NodeListView from '../containers/NodeListView';
import  SearchBar  from './control/SearchBarCom';
import { Control_1 } from './development_parts/Control_1';
import { Control_2 } from './development_parts/Control_2';
import { Control_2_1_Trip } from './development_parts/Control_2_1_Trip';
import { Control_2_2_Trip } from './development_parts/Control_2_2_Trip';
import { Control_2_3_Trip } from './development_parts/Control_2_3_Trip';
import { Control_2_Place } from './development_parts/Control_2_Place';
import { Control_2_Hotel } from './development_parts/Control_2_Hotel';
import { Control_2_Info } from './development_parts/Control_2_Info';
import { Control_3 } from './development_parts/Control_3';
import { Control_3_1_Trip } from './development_parts/Control_3_1_Trip';
import { Control_3_2_Trip } from './development_parts/Control_3_2_Trip';
import { Control_Share } from './development_parts/Control_Share';
import { Control_Filter_Trip } from './development_parts/Control_Filter_Trip';
import { Control_Filter_Place } from './development_parts/Control_Filter_Place';
import { Control_Filter_Hotel } from './development_parts/Control_Filter_Hotel';
import { Control_Filter_Info } from './development_parts/Control_Filter_Info';
import { Control_Trip_Flights } from './development_parts/Control_Trip_Flights';
import { Control_Trip_Dates } from './development_parts/Control_Trip_Dates';
import { Control_Trip_Stages } from './development_parts/Control_Trip_Stages';
import _ from 'lodash';

const itinTemplateTypeID = 1;
const placeTemplateTypeID = 43;
const hotelTemplateTypeID = 44;
const itinMapTemplateTypeID = 1;
const placeMapTemplateTypeID = 48;
const hotelMapTemplateTypeID = 49;

const Option = Select.Option;

export class TripContainer extends Component {
    displayName = "Trip Container";


    constructor(props) {

        super(props);

        this.state = {countryId: 1};

        this.props.fetchTripMapStyleCards(itinMapTemplateTypeID);
        this.props.fetchPlaceMapStyleCards(placeMapTemplateTypeID);
        this.props.fetchHotelMapStyleCards(hotelMapTemplateTypeID);

        this.props.fetchTripStyleCards(itinTemplateTypeID);
        this.props.fetchPlaceStyleCards(placeTemplateTypeID);
        this.props.fetchHotelStyleCards(hotelTemplateTypeID);

        this.props.fetchTripCards(itinTemplateTypeID);
        this.props.fetchPlaceCards();
        this.props.fetchHotelCards();

    }//Constructor
  
    render() {

        return (
        <span>
            {
                this.props.loading ? <span>LOADING...</span> :

             
                        <div>                         
                        <div className="Hide"><Control_1/></div>
                        <div className="Hide"><Control_2/></div>
                        <div className="Hide"><Control_2_Place/></div>
                        <div className="Hide"><Control_2_Hotel/></div>
                        <div className="Hide"><Control_2_1_Trip/></div>
                        <div className="hide"><Control_2_2_Trip/></div>
                        <div className="Hide"><Control_2_3_Trip/></div>
                        <div className="Hide"><Control_2_Info/></div>
                        <div className="Hide"><Control_Share/></div>
                        <div className="Hide"><Control_3/></div>
                        <div className="hide"><Control_3_1_Trip/></div>
                        <div className="Hide"><Control_3_2_Trip/></div>
                        <div className="show"><Control_Filter_Hotel/></div>
                        <div className="hide"><Control_Trip_Flights/></div>
                        <div className="Hide"><Control_Trip_Dates/></div>
                        <div className="hide"><Control_Trip_Stages/></div>
                        
                        
                        

                        <div className="Hide Control1">
                               
                            <div key="" className="flex-container">
                                  
                                <div  className="Show" >
                                    <a className="Voyager_Control_Item_A AnimationRipple"  >
                                        <i className="fas fa-bars Voyager_Control_Icon_Size_2"></i>
                                    </a>
                                </div>
                                <div className="Show" >
                                    <a className="Voyager_Control_Item_A AnimationRipple"  >
                                        <i className="fas fa-user Voyager_Control_Icon_Size_2"></i>
                                    </a>
                                </div>

                                     <div className="Show">
                        <a className="Voyager_Control_Item_A" >
                            <i className="Voyager_Control_Icon_Layer_Stack_Small">12</i>
                            <i className="fas fa-heart Voyager_Control_Icon_Layer_Stack_Large"></i>
                        </a>
                    </div>

                    <div  className="Show" >
                        <a className="Voyager_Control_Item_A" >
                            <i className="Voyager_Control_Icon_Layer_Stack_Small">12</i>
                            <i className="fas fa-comment Voyager_Control_Icon_Layer_Stack_Large"></i>
                        </a>
                    </div>

                                <div className="Show" >
                                    <a className="Voyager_Control_Item_A AnimationRipple"  >
                                        <i className="fas fa-filter Voyager_Control_Icon_Size_2"></i>
                                    </a>
                                </div>
                                <div  className="Show"   >
                                    <a className="Voyager_Control_Item_A AnimationRipple" >
                                        <i className="fas fa-sort Voyager_Control_Icon_Size_2"></i>
                                    </a>
                                </div>
                                <div  className="Hide"  >
                                    <span><input className="Voyager_Control_Search_Text" type="text" placeholder="SEARCH" ></input>
                                        <a className="Voyager_Control_Search_Item" >
                                            <i className="far fa-search Voyager_Control_Icon_Size_2" ></i>  </a>
                                    </span>
                                </div>


                                <div  className="Show" >

                                    <select  onChange={this.props.changeDetailLevel.bind(this)} value={this.props.cardDetailLevel} className="Voyager_Control_Select_Detail_Level">
                                        <option value="0" >detail low</option>
                                        <option value="1">detail medium</option>
                                        <option value="2">detail high</option>
                                    </select>
                                </div>

                            </div>


                        </div>

                        <div className="Hide Control_3_1">

                            <div  className="flex-container">

                                <div  className="Show" >
                                    <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('trip')}>
                                        <i className="fas fa-map-marked Voyager_Control_Icon_Size_2"></i>
                                        <span className="Voyager_Control_Text_Size_1_Link" >trip</span>
                                    </a>
                                </div>

                                <div  className="Show">
                                    <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('place')}>
                                        <i className="fas fa-map-marker Voyager_Control_Icon_Size_2"></i>
                                        <span className="Voyager_Control_Text_Size_1_Link" >places</span>
                                    </a>
                                </div>

                                <div className="Show" >
                                    <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('hotel')}>
                                        <i className="fas fa-home Voyager_Control_Icon_Size_2"></i>
                                        <span className="Voyager_Control_Text_Size_1_Link" >hotels</span>
                                    </a>
                                </div>

                            </div>
                        </div>


















                            <span>
                         
                    
                            {this.props.isDetailViewVisible || this.props.isTripViewVisible ? <MapView  /> : null}

                            {this.props.isDetailViewVisible ? <TripDetailView   /> : null}

                            {(this.props.cardType === 'place' || this.props.cardType === 'hotel') && this.props.isListViewVisible ?
                                <NodeListView   />
                                : null
                            }
                            {this.props.cardType === 'trip' && this.props.isListViewVisible ?
                                <TripListView   />
                                : null
                            }

                            {this.props.isTripViewVisible ? <TripView   /> : null}
                              
                        </span>

                    </div>
                }
            </span>
        );
    }
}
