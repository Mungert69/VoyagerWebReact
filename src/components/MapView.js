import React, { Component } from 'react';

import { CardMapView } from './CardMapView';
import { CardTripMapView } from './CardTripMapView';
import { Control_Item_Map_Style } from './control/Control_Item/Control_Item_Map_Style';
import {debugMode} from './Constants';
/*global google*/
const cubaDefaultCenter = { lat: 21.753351, lng: -79.339996 };
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
            if (props.cardType === 'place') prItemShift = 0;
            if (props.cardType === 'hotel') prItemShift = 1;
            itemCounted = prItemCounted * 2 + prItemShift;
        }

        this.state = {
            item: itemCounted,
            prItem: prItemCounted,
            itemNumber: 0,
            inputDataType: '',
            markers: [],

            styleMode: '',
            centerMarker: {},
            defaultCenter: cubaDefaultCenter,
            defaultZoom: 7
        };
    }//constructor

    componentDidMount() {

        this.refreshPrSelections(this.props);
        //console.log("logger: In MapView.componentDidMount buiderMode =" + this.props.builderMode + " style mode is :" + this.state.styleMode);

    }

    shouldComponentUpdate(nextProps) {
        if (debugMode) return true;
        if (this.props.item !== nextProps.item || this.props.itinObj !== nextProps.itinObj || this.props.cardType !== nextProps.cardType) {
            return true;
        }
        return false;
    }
    componentWillReceiveProps(nextProps) {
        //console.log("logger: In MapView.componentWillReceiveProps value nextProp cardType = " + nextProps.cardType + " value of thisProp cardType = " + this.props.cardType);
        if (debugMode) this.refreshPrSelections(nextProps);
        if (this.props.item !== nextProps.item || this.props.itinObj !== nextProps.itinObj || this.props.cardType !== nextProps.cardType) {
            this.refreshPrSelections(nextProps);
        }
    }

    updateStyleMode = (props) => {
        var str = '';
        if (props.cardType === 'hotel') {
            str = 'MapStyleHotels';
        }
        if (props.cardType === 'place') {
            str = 'MapStylePlaces';
        }
        if (props.builderMode === true) {
            str = 'MapStyleTrips';
        }

        return str;
    }

    setParams = (props) => {
        var itemCounted = 0;
        var prItemCounted = 0;
        var prItemShift = 0;
        itemCounted = props.item;
        // if a list of hotels no need to use jumpCOunter to display trip hotel then place detail.
        if (props.jumpCounter === 3) {
            prItemCounted = props.item;
            if (props.cardType === 'place') prItemShift = 0;
            if (props.cardType === 'hotel') prItemShift = 1;
            itemCounted = prItemCounted * 2 + prItemShift;
        }


        return ({ item: itemCounted, prItem: prItemCounted });

    }

    zoomLevelCalc = (cardType) => {

        switch (cardType) {
            case 'trip':
                return 7;

            case 'hotel':
                return 13;

            case 'place':
                return 9;
            default:
                return 7;
        }
    }

    refreshPrSelections = (props) => {

        var styleString = this.updateStyleMode(props);
        if (props.builderMode) {

            var params = this.setParams(props);
            var markers = [];
            let itemCount = props.itinObj.prSelections.length * 2;
            var marker;

            var newCenter = this.state.defaultCenter;
            var newZoom = this.state.defaultZoom;

            props.itinObj.prSelections.map((selection) => {
                marker = { lat: parseFloat(selection.hotelCard.latitude), lng: parseFloat(selection.hotelCard.longitude) };
                markers.push(marker);                          }
            );
            if (props.item !== 0) {
                newCenter = cubaDefaultCenter;
                if (props.cardType === 'place') {
                     newCenter = { lat: parseFloat(props.itinObj.prSelections[props.item].placeCard.latitude), lng: parseFloat(props.itinObj.prSelections[props.item].placeCard.longitude) }; }
                if (props.cardType === 'hotel') {
                     newCenter = { lat: parseFloat(props.itinObj.prSelections[props.item].hotelCard.latitude), lng: parseFloat(props.itinObj.prSelections[props.item].hotelCard.longitude) }; }
                newZoom = this.zoomLevelCalc(props.cardType);
            }
            this.setState({ item: params.item, prItem: params.prItem, defaultZoom: newZoom, defaultCenter: newCenter, itemNumber: itemCount, styleMode: styleString, markers: markers });
        } else {
            if (props.cardType === 'place' || props.cardType === 'hotel') {

                let itemCount = props.cards.length;
                var newCenter = this.state.defaultCenter;
                var newZoom = this.state.defaultZoom;

                if (props.item !== 0) {
                    newCenter = { lat: parseFloat(props.cards[props.item].latitude), lng: parseFloat(props.cards[props.item].longitude) };
                    newZoom = this.zoomLevelCalc(props.cardType);
                }
                this.setState({ defaultZoom: newZoom, defaultCenter: newCenter, itemNumber: itemCount, styleMode: styleString, markers: [] });
                console.log("logger: In MapView.refreshPrSelections value of styleString = " + styleString);


            }
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
                containerElement: <div style={{ height: `175px`, marginTop: `36px`, position: `fixed`, left: `0px`, right: `0px`, top: `0px`, zIndex: `2` }} />,
                mapElement: <div style={{ height: `100%`, width: `100%` }} />,
                center: this.state.defaultCenter

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
                        streetViewControl: false,
                        scaleControl: false,
                        scrollwheel: true,
                        disableDoubleClickZoom: false,
                        mapTypeControl: false,
                        panControl: false,
                        zoomControl: true,
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
    <Control_Item_Map_Style className="Control_Item_Map_Style" changeDetailLevel={props.changeDetailLevel}
                cardDetailLevel={props.cardDetailLevel}/>
                </GoogleMap>
                

                </div>
        );

        return (
            <div>
                <StreetViewPanormaWithAnOverlayView />
            </div>
        );
    }
}