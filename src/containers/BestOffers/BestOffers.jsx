import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { PlaceContext } from "../../Context/PlaceContext"
import "./BestOffers.css"
import OffersCard from '../../components/OffersCard/OffersCard';

const BestOffers = () => {
    const [placeInfo, setPlaceInfo] = useContext(PlaceContext);
    const filteredOffers = placeInfo.filter((offer) => offer.offer >= 1);

    return (
        <div className="offers__container">
            <div className="offers__main__header">
                <h2 className="offers__main__header--title">
                    Best Offers
                </h2>
                <NavLink to="/AllPlaces" className="popular_location__header--see_all">
                    See All
                </NavLink>
            </div>
            
            <div className="offers__main">
                {filteredOffers.map((offer) => {
                return (
                    <OffersCard
                    key={offer.id}
                    slug={offer.slug}
                    offer={offer.offer}
                    placeImage={offer.placeImage}
                    placeName={offer.placeName}
                    placeLocation={offer.placeLocation}
                    people={offer.people}
                    />
                );})}
            </div>
        </div>
    );
}

export default BestOffers;