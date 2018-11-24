import React, { Component } from 'react';
import { Carousel } from 'antd';
import { MapStylePlace, MapStylePlaces, MapStyleHotel, MapStyleHotels, MapStyleTrip, MapStyleTrips } from './MapCode';
import { CardMapView } from './CardMapView';
import { CardTripMapView } from './CardTripMapView';


/*global google*/

export class MapView extends Component {

    constructor(props) {
        super(props);
        this.props.filterMapStyleCard();

        var itemCounted = 0;
        var prItemCounted = 0;
        var prItemShift = 0;
        // if a list of hotels no need to use jumpCOunter to display trip hotel then place map.
        itemCounted = props.item;
        if (props.jumpCounter === 3) {
            prItemCounted = props.item;
            if (props.cardType === 'place') prItemShift = 1;
            if (props.cardType === 'hotel') prItemShift = 2;
            itemCounted = prItemCounted * props.jumpCounter + prItemShift;
        }

        this.state = {
            item: itemCounted,
            prItem: prItemCounted,
            itemNumber: 0,
            inputDataType: '',
            markers: [],
            mapMarkers: [],
            styleMode: '',
            centerMarker : {},
            defaultCenter: { lat: 21.753351, lng: -79.339996 },
            defaultZoom : 7
        };




    }//constructor

    componentDidMount() {

        this.refreshPrSelections();
        //console.log("logger: In MapView.componentDidMount buiderMode =" + this.props.builderMode + " style mode is :" + this.state.styleMode);

    }

    componentWillReceiveProps(nextProps) {
        //console.log("logger: In MapView.componentWillReceiveProps value nextProp cardType = " + nextProps.cardType + " value of thisProp cardType = " + this.props.cardType);
        if (this.props.item !== nextProps.item || this.props.itinObj !== nextProps.itinObj || this.props.cardType !== nextProps.cardType) {
            this.refreshPrSelections();
            this.setParams();
        }
    }

    updateStyleMode = () => {
        var str = '';
        if (this.props.cardType === 'hotel') {
            str = 'MapStyleHotels';
        }
        if (this.props.cardType === 'place') {
            str = 'MapStylePlaces';
        }
        if (this.props.builderMode === true) {
            str = 'MapStyleTrips';
        }

        return str;
    }

    setParams = () => {
        var itemCounted = 0;
        var prItemCounted = 0;
        var prItemShift = 0;
        itemCounted = this.props.item;
        // if a list of hotels no need to use jumpCOunter to display trip hotel then place detail.
        if (this.props.jumpCounter === 3) {
            prItemCounted = this.props.item;
            if (this.props.cardType === 'place') prItemShift = 1;
            if (this.props.cardType === 'hotel') prItemShift = 2;
            itemCounted = prItemCounted * this.props.jumpCounter + this.props.prItemShift;
        }


        this.setState({ item: itemCounted, prItem: prItemCounted });

    }

    refreshPrSelections = () => {

        var styleString = this.updateStyleMode();
        if (this.props.builderMode) {

            var markers = [];
            let itemCount = this.props.itinObj.prSelections.length;
            var marker;
            this.props.itinObj.prSelections.map((selection) => {
                marker = { lat: parseFloat(selection.placeCard.latitude), lng: parseFloat(selection.placeCard.longitude) };
                markers.push(marker);
            }
            );
            this.setState({ itemNumber: itemCount, styleMode: styleString, markers: markers });
        }

        if (this.props.cardType === 'place' || this.props.cardType === 'hotel') {

            let itemCount = this.props.cards.length;
            var newCenter=this.state.defaultCenter;
            var newZoom = this.state.defaultZoom;

            var markers = [];
            var marker;
            this.props.cards.map((card) => {
                marker = { lat: parseFloat(card.latitude), lng: parseFloat(card.longitude) };
                markers.push(marker);
            });
            if (this.props.item!==0){
                newCenter=markers[this.props.item];
                newZoom=9;
            }
            this.setState({defaultZoom : newZoom ,defaultCenter : newCenter, mapMarkers: markers, itemNumber: itemCount, styleMode: styleString, markers: [] });
            console.log("logger: In MapView.refreshPrSelections value of styleString = " + styleString);


        }


    }

    setItem(itemVal) {
        console.log("logger: In MapView.setItem  item = " + itemVal);
        this.setState({ item: itemVal, prItem: Math.floor(itemVal / this.props.jumpCounter) });
    }
    // return component body

    render() {
        console.log("logger: In MapView.refreshPrSelections value of builderMode = " + this.props.builderMode);

        const props = {
        };
        const { compose, withProps } = require("recompose");

        const {
            withScriptjs,
            withGoogleMap,
            GoogleMap,
            StreetViewPanorama,
            OverlayView,
            Polyline,
            Marker
        } = require("react-google-maps");

        const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

        const getPixelPositionOffset = (width, height) => ({
            x: -(width / 2),
            y: -(height / 2)
        });

        const StreetViewPanormaWithAnOverlayView = compose(
            withProps({
                googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAww7cMvMFsHfWR6m0eSbFsOltKyeKyzCk&v=3.exp&libraries=geometry,drawing,places",
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div style={{ height: `300px` }} />,
                mapElement: <div style={{ height: `100%`, width: `100%`, marginTop: `40px` }} />,
                center : this.state.defaultCenter

            }),

            withScriptjs,
            withGoogleMap
        )(props =>

            <div className="VoyagerMap">
                <GoogleMap
                    defaultZoom={this.state.defaultZoom}
                    defaultCenter={this.state.defaultCenter}

                    defaultOptions={{
                        styles: this.state.styleMode,
                        streetViewControl: true,
                        scaleControl: false,
                        scrollwheel: true,
                        disableDoubleClickZoom: false,
                        mapTypeControl: false,
                        panControl: false,
                        zoomControl: false,
                        rotateControl: false,
                        fullscreenControl: true
                    }}>


                    <StreetViewPanorama defaultPosition={props.center} hidden>
                        <OverlayView
                            position={{ lat: 49.28590291211115, lng: -123.11248166065218 }}
                            mapPaneName={OverlayView.OVERLAY_LAYER}
                            getPixelPositionOffset={getPixelPositionOffset} >

                            <div style={{ background: `#666`, color: `white`, padding: 5, borderRadius: `9%` }}>
                                <i className="fas fa-home Voyager_Icon_Base_1"></i>  HOTEL NAME
                        </div>

                        </OverlayView>
                    </StreetViewPanorama>




                    <Polyline
                        path={this.state.markers}
                        options={{
                            strokeColor: '#1565C0',
                            strokeOpacity: '1.0',
                            strokeWeight: 2,
                            offset: '0',
                            icons: [{
                                icon: {
                                    path: google.maps.SymbolPath.CIRCLE,
                                    strokeColor: '#1565C0',
                                    strokeOpacity: 0,
                                    strokeWeight: 0,
                                    fillOpacity: 0,
                                    scale: 0,
                                    fillColor: '#1565C0'
                                },


                            }]
                        }}

                    />


                    {this.props.builderMode ?
                        this.props.itinObj.prSelections !== undefined ?
                            this.props.itinObj.prSelections.map((selection, index) =>
                                <MarkerWithLabel
                                    key={index}
                                    position={{ lat: parseFloat(selection.placeCard.latitude), lng: parseFloat(selection.placeCard.longitude) }}
                                    labelAnchor={new google.maps.Point(14, 18)}
                                    labelClass={'Card_Map_Panel_1'}
                                    labelStyle={{}}
                                    icon={{ url: '' }}
                                >
                                    <CardTripMapView index={index + 1} styleCard={this.props.filteredMapStyleCard} key={index} selection={selection} />
                                </MarkerWithLabel>
                            )
                            :
                            null

                        :

                        this.props.cards.map((card, index) =>
                            <MarkerWithLabel
                                key={index}
                                position={{ lat: parseFloat(card.latitude), lng: parseFloat(card.longitude) }}
                                labelAnchor={new google.maps.Point(14, 18)}
                                labelClass={'Card_Map_Panel_1'}
                                labelStyle={{}}
                                icon={{ url: '' }}
                            >
                                <CardMapView index={index + 1} styleCard={this.props.filteredMapStyleCard} key={index} card={card} />
                            </MarkerWithLabel>
                        )

                    }




                </GoogleMap></div>
        );



        return (


            <div>

                <StreetViewPanormaWithAnOverlayView />


            </div>
        );
    }
}