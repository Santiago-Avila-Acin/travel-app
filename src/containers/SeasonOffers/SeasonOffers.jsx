import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { PlaceContext } from "../../Context/PlaceContext"
import "./SeasonOffers.css"
import SeasonCard from '../../components/SeasonCard/SeasonCard';

const SeasonOffers = () => {
    const [placeInfo, setPlaceInfo] = useContext(PlaceContext);
    const summerOffers = placeInfo.filter((season) => season.season === 'summer');

    return (
        <div className="season__packs__container">
            <div className="season__packs__header">
                <h2 className="season__packs__header--title">
                    Season Packs
                </h2>
                <NavLink to="/AllPlaces" className="popular_location__header--see_all">
                    See All
                </NavLink>
            </div>

            <div className="season__packs__main">
                {summerOffers.map((season) => {
                    return (
                        <SeasonCard
                        key={season.id}
                        slug={season.slug}
                        placeImage={season.placeImage}
                        placeName={season.placeName}
                        placeLocation={season.placeLocation}
                        people={season.people}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default SeasonOffers;