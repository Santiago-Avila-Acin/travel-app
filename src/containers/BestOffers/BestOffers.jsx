import React from 'react';
import "./BestOffers.css"
import OffersCard from '../../components/OffersCard/OffersCard';

const BestOffers = ({ PlaceInfo }) => {
        const filteredOffers = PlaceInfo.filter((offer) => offer.offer >= 1);

        return (
        <div className="offers__container">
            <div className="offers__main__header">
                <h2 className="offers__main__header--title">
                    Best Offers
                </h2>
                <a className="offers__main__header--see_all" href="">See All</a>
            </div>
            
            <div className="offers__main">
                {filteredOffers.map((offer) => {
                return (
                    <OffersCard
                    key={offer.id}
                    placeImage={offer.placeImage}
                    placeName={offer.placeName}
                    offer={offer.offer}
                    people={offer.people}
                    />
                );})}
            </div>
        </div>
    );
}

export default BestOffers;