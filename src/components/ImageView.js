import { Carousel } from "antd";
import React, { Component } from "react";
export const ImageView = props => {
  if (props.card.picFileNames === undefined || props.card.picFileNames === null)
    return <p>No Images</p>;
  let url = "http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/";
  let urlMapStart =
    "http://maps.googleapis.com/maps/api/staticmap?zoom=9&size=300x180&maptype=roadmap&markers=icon:http://voyagercuba.co.uk:10205/images/Images-Maps-Icon/map-marker-static.png|";
  let urlMapEnd = "&key=AIzaSyAww7cMvMFsHfWR6m0eSbFsOltKyeKyzCk";
  let urlMap =
    urlMapStart + props.card.latitude + "," + props.card.longitude + urlMapEnd;

  return (
    <div>
      <Carousel
        className="Voyager_Card_Image_Carousel"
        effect="fade"
        easing="linear"
        infinite="true"
        arrows="true"
        swipeToSlide="true"
      >
        {props.card.picFileNames.map(fileName => {
          <div>
            <img className="Voyager_Card_Image_Rounded" src={url + fileName} />
          </div>;
        })}
        <div>
          <img className="Voyager_Card_Map" src={urlMap} />
        </div>
      </Carousel>
    </div>
  );
};
