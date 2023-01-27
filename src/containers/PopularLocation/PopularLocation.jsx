import React from 'react';
import PopularPlaceCard from "../../components/PopularPlaceCard/PopularPlaceCard"
import "./PopularLocation.css"

const PopularLocation = ( {PlaceInfo} ) => {
    const popularLocations = PlaceInfo.filter((place) => place.popularLocation === true);

    return (
        <div className="popular__container">  
            <div className="popular_location__header">
                <h2 className="popular_location__header--title">
                    Popular Location
                </h2>
                <a className="popular_location__header--see_all" href="">See All</a>
            </div>
            
            <div className="popular__main">
                {popularLocations.map((place) => {
                return (
                    <PopularPlaceCard
                    key={place.id}
                    placeImage={place.placeImage}
                    placeName={place.placeName}
                    placeLocation={place.placeLocation}
                    />
                );})}
            </div>
        </div>
    );
}

export default PopularLocation;