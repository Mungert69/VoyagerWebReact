import React, { Component } from 'react';
import { HotelList } from '../components/HotelList';
import { CardView } from '../components/CardView';
import '../voyager.css';
import { Select, Button } from 'antd';
import {apiBaseUrl} from './Constants';

export class ItineraryView extends Component {


    constructor(props) {
        super(props);
        this.state = {
            places: [],
            loading: true,
            changeCard: false,
            nights: 0,
            placeCount: 0
        };
        this.refreshPrSelections();

    }// constructor
    componentWillReceiveProps(nextProps) {
        console.log("In ItineraryView.componentWillReceiveProps value nextProp changeItin = " + nextProps.changeItin + " value of thisProp changeItin = " + this.props.changeItin);
        if (this.props.changeItin !== nextProps.changeItin) {
            this.setState({ loading: true });
            this.refreshPrSelections();
        }
    }

    refreshPrSelections = () => {
       
            this.props.fetchStoredItinObj(this.props.userId);
    }

    passBackClick() {
        //ToDo pass this back to MapView
        this.setState({ changeCard: !this.state.changeCard });
    }


    deleteHotel = () => {
        // Add Hotel api call
        let str = apiBaseUrl+'api/Itinerary/DelHotel/'+ this.props.userId + '/';
        fetch(str)
            .then(response => response.json())
            .then(result => {
                this.setState({ addResult: result });
            }).then(end => {
                this.refreshPrSelections();
                this.changingFlight();
            });//fetch

    }

    addNight = (index) => {
        // Add Hotel api call
        let str = apiBaseUrl+'api/Itinerary/AddNight/' + index + '/'+ this.props.userId + '/';
        fetch(str)
            .then(response => response.json())
            .then(result => {
                this.setState({ addResult: result });
            }).then(end => {
                this.refreshPrSelections();
                this.changingFlight();
            });//fetch

    }

    removeNight = (index) => {
        // Add Hotel api call
        let str =apiBaseUrl+ 'api/Itinerary/RemoveNight/' + index + '/'+ this.props.userId + '/';
        fetch(str)
            .then(response => response.json())
            .then(result => {
                this.setState({ addResult: result });
            }).then(end => {
                this.refreshPrSelections();
                this.changingFlight();
            });//fetch

    }

    changingFlight = () => {
        this.props.changingFlight();
    }


    renderPRSelections = (itinObj) => {
        if (itinObj===undefined) return;
        // Only render if there are items in the itinerary.
        if (itinObj.prSelections !== undefined && itinObj.prSelections !== null && itinObj.prSelections.length) {
            return (





                <div className="Control_Trip_Stages">
                    <p className="Voyager_Trip_Transfer" > {itinObj.transferItems[0]}</p>
                    {itinObj.prSelections.map((prSelection, index) =>
                        <div key={index}>
                            <div className="Voyager_Trip_Stages_Inline">

                                <span>
                                    <div className="Voyager_Trip_Control_Panel" >
                                        <div key="" className="flex-container">
                                            <div key="Control_Trip" className="Show">
                                                <span className="Voyager_Control_Item_A">
                                                    <Button onClick={() => this.props.setBuilderCardEvent(null, index, 'place')}>View Builder Place</Button>
                                                    <CardView styleCard={this.props.stylePlaceCard} key={index + prSelection.place} card={prSelection.placeCard} />
                                                </span>
                                            </div>
                                            <div key="Control_Places" className="Show" >
                                                <span className="Voyager_Control_Item_A">
                                                    <Button onClick={() => this.props.setBuilderCardEvent(null, index, 'hotel')}>View Builder Hotel</Button>
                                                    <CardView styleCard={this.props.styleHotelCard} key={index + prSelection.hotel} card={prSelection.hotelCard} />

                                                </span>
                                            </div>

                                        </div>

                                    </div>







                                    <div className="Show">

                                        <a className="Voyager_Trip_Control_Nights_remove" title="SUBTRACT NIGHTS" onClick={() => this.removeNight(index)} ><i className="fas fa-angle-down Voyager_Trip_Nights_Subtract"></i></a>
                                        {prSelection.nights}
                                        <a className="Voyager_Trip_Control_Nights_add" title="ADD NIGHTS" onClick={() => this.addNight(index)} ><i className="fas fa-angle-up Voyager_Trip_Nights_Add"></i></a>
                                        <a className="Voyager_Trip_Control_Delete" title="DELETE STAGE" onClick={() => this.deleteHotel()} ><i className="fas fa-times Voyager_Trip_Hotel_Remove"></i></a> <i className="fas fa-bus Voyager_Trip_Transport_Icon"></i>
                                   
                                        <p className="Voyager_Trip_Transfer" > {itinObj.transferItems[index+1]}</p>

                                    </div>
                                </span>

                            </div>
                        </div>

                    )}
                    <p className="Voyager_Trip_Transfer" > {itinObj.transferItems[itinObj.transferItems.length+1]}</p>





                </div>







            );//return
        }//if
    }//renderPRSelections

    render() {

        let contents = this.props.loading
            ? <p><em>Loading...</em></p>
            : this.renderPRSelections(this.props.itinObj);
        return (
            <div className="Voyager_Trip_Panel">
                <l className="Voyager_Trip_Control_Places_Total"> </l>
                <l className="Voyager_Title_3">{this.props.builderMode && 'MY TRIP '}</l>
                <l className="Voyager_Trip_Control_Nights_Total"> </l>

                {contents}

<div className="Control_Trip_Stages AnimationRipple">
<a className="Control_Trip_Stages_Item_Group ">
<div class="Control_Trip_Stages_Position_outer_wrapper">
<div className="Control_Trip_Stages_Position_left Control_Trip_Stages_Position_inner_wrapper">
<i className="show fas fa-circle Control_Trip_Stages_Stage_Icon"><l className="Control_Trip_Stages_Stage_Icon_Number">1</l></i>
                       
<span className="Control_Trip_Stages_Stage_PlaceName">Havana</span>
</div>

<div className="Control_Trip_Stages_Position_right Control_Trip_Stages_Position_inner_wrapper">
<span className="Control_Trip_Stages_Stage_HotelName">Palacio Marques Felipe</span>
</div>
</div>
<div class="Control_Trip_Stages_Position_outer_wrapper">
<div className="Control_Trip_Dates_Position_left Control_Trip_Stages_Position_inner_wrapper">
<i className="show far fa-car Control_Trip_Stages_Stage_Transport_Icon"></i>
<i className="hide far fa-bus Control_Trip_Stages_Stage_Transport_Icon"></i>
</div>

<div className="Control_Trip_Stages_Position_right Control_Trip_Stages_Position_inner_wrapper">
<span className="Control_Trip_Stages_Stage_HotelFeatures">CITY CENTRE - SMALL HOTEL - HERITAGE - £££</span>
<i className="show fas fa-moon Control_Trip_Stages_Stage_Nights_Icon">3</i>
</div>
</div>
</a><div>
</div>
<a><i className="show fas fa-caret-right Control_Trip_Stages_Stage_Detail_Icon"></i></a>
</div>

            </div>
        );//return
    }//render
}


