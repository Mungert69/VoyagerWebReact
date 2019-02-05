import React, { Component } from "react";
import { Select, Button } from "antd";

import VisualView from "../../containers/VisualView";
import NodeListView from "../../containers/NodeListView";
import PlaceListView from "../../containers/PlaceListView";
import TripListView from "../../containers/TripListView";
import TripView from "../../containers/TripView";
import DetailView from "../../containers/DetailView";
import ImageView from "../../containers/ImageView";
import MapView from "../../containers/MapView";

import MenuDetailView from "../../containers/Menus/MenuDetailView";
import MenuTripView from "../../containers/Menus/MenuTripView";

import MenuMain from '../control/Menus/MenuMain';
import MenuListView from '../control/Menus/MenuListView';
import {CardDynView} from '../CardDynView';
import {CheckBox} from '../control/CheckBox';



import _ from "lodash";





const itinTemplateTypeID = 1;
const placeTemplateTypeID = 43;
const hotelTemplateTypeID = 44;
const itinMapTemplateTypeID = 49;
const placeMapTemplateTypeID = 49;
const hotelMapTemplateTypeID = 49;

const userId = 'ffffffff-ffff-ffff-ffff-ffffffffffff';
export class TestContainer extends Component {
    displayName = "Trip Container";

    constructor(props) {
        super(props);

    /*
        this.props.fetchTripMapStyleCards(itinMapTemplateTypeID);
        this.props.fetchPlaceMapStyleCards(placeMapTemplateTypeID);
        this.props.fetchHotelMapStyleCards(hotelMapTemplateTypeID);

        this.props.fetchTripStyleCards(itinTemplateTypeID);
        this.props.fetchPlaceStyleCards(placeTemplateTypeID);
        this.props.fetchHotelStyleCards(hotelTemplateTypeID);

        this.props.fetchAllTripCards(userId);
        this.props.fetchPlaceCards();
        this.props.fetchHotelCards();
         
*/
         this.state = {
            countryId: 1,
            showComponents: [

              {id: 1, value: "showMenuMain", isChecked: false},
              {id: 2, value: "showImageView", isChecked: false},
              {id: 3, value: "showMapView", isChecked: false},
              {id: 4, value: "showVisualView", isChecked: false},
              {id: 5, value: "showNodeListView", isChecked: false},
              {id: 6, value: "showTripListView", isChecked: false},
              {id: 7, value: "showTripView", isChecked: true},
              {id: 8, value: "showDetailView", isChecked: false},
              {id: 9, value: "showMenuListView", isChecked: false},
              {id: 10, value: "showCardDynView", isChecked: false},
              {id: 11, value: "showPlaceListView", isChecked: false},
              {id: 12, value: "placeHolder", isChecked: false},
              {id: 13, value: "placeHolder", isChecked: false}
            ]
          }
    } //Constructor

    handleCheckChieldElement = (event) => {
        let showComponents = this.state.showComponents;
        showComponents.forEach(showComponent => {
           if (showComponent.value === event.target.value)
              showComponent.isChecked =  event.target.checked
        });
        this.setState({showComponents: showComponents});
      }

      handleAllChecked = (event) => {
        let showComponents = this.state.showComponents;
        showComponents.forEach(showComponent => showComponent.isChecked = event.target.checked) ;
        this.setState({showComponents: showComponents});
      }

       isChecked = (name) =>{
        
        let showComponents = this.state.showComponents;
        var returnBool = false;
          for (let showComponent of  showComponents){
 
                if (showComponent.value === name){                          
                   returnBool= showComponent.isChecked;
                   break;}
             };

       
       
         return returnBool;
      }

    render() {
       
        var test=this.isChecked('showCardDynView');
        const hotelCard=this.props.state.cardState.hotelCards[0];
        const hotelStyleCard=this.props.state.cardState.hotelStyleCards[0];
        const itinObj=this.props.state.apiState.itinObj;
        const index=0;
        

        return (
            <span>
                {this.props.loading ? (
                    <span>LOADING...</span>
                ) : (
                        <div>
<div >
      <h1> Check and Uncheck All Example </h1>
      <input type="checkbox" onClick={this.handleAllChecked}  value="checkedall" /> Check / Uncheck All
        <ul>
        {
          this.state.showComponents.map((showComponent) => {
            return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...showComponent} />)
          })
        }
        </ul>
      </div>
                            {this.isChecked('showMenuMain') ? <MenuMain changeView={this.props.changeView}
                                changeDetailLevel={this.props.changeDetailLevel}
                                cardDetailLevel={this.props.cardDetailLevel} /> : null}



                            {this.isChecked('showVisualView') ?
                                <VisualView />
                                : null}

                            {this.isChecked('showImageView') ? <ImageView/> : null}
                            {this.isChecked('showMapView') ? <MapView/> : null}

                            {this.isChecked('showNodeListView') ?
                                <NodeListView />
                                : null}

                            {this.isChecked('showPlaceListView') ?
                                <PlaceListView />
                                : null}

                            {this.isChecked('showTripListView') ? (
                                <TripListView />
                            ) : null}

                            {this.isChecked('showTripView') ? <div><TripView /> <MenuTripView /></div> : null}

                            {this.isChecked('showDetailView') ? <div><DetailView /> <MenuDetailView /></div> : null}


                            {this.isChecked('showMenuListView') ? 
                                 <MenuListView changeView={this.props.changeView} /> : null}

                            {this.isChecked('showCardDynView') ?
                                <CardDynView index={index} itinObj={itinObj} card={hotelCard} styleCard={hotelStyleCard}/>
                                : null}
                            


                        </div>
                    )}
            </span>
        );
    }
}
