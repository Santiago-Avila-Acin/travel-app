import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PopularPlaceCard from "../../components/PopularPlaceCard/PopularPlaceCard"
import { PlaceContext } from "../../Context/PlaceContext"
import "./PopularLocation.css"

const PopularLocation = () => {
    const [placeInfo, setPlaceInfo, handleFavorite] = useContext(PlaceContext);
    const popularLocations = placeInfo.filter((place) => place.popularLocation === true);

    return (
        <div className="popular__container">  
            <div className="popular_location__header">
                <h2 className="popular_location__header--title">
                    Popular Location
                </h2>
                <NavLink to="/AllPlaces" className="popular_location__header--see_all">
                    See All
                </NavLink>
            </div>
            
            <div className="popular__main">
                {popularLocations.map((place) => {
                return (
                    <PopularPlaceCard
                    key={place.id}
                    slug={place.slug}
                    placeImage={place.placeImage}
                    placeName={place.placeName}
                    placeLocation={place.placeLocation}
                    favorite={place.favorite}
                    handleFavorite={() => handleFavorite(place.id)}
                    people={place.people}
                    />
                );})}
            </div>
        </div>
    );
}

export default PopularLocation;