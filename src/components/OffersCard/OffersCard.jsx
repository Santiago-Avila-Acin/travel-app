import React from 'react'
import { NavLink } from 'react-router-dom';
import "./OffersCard.css"

const OffersCard = (props) => {
    const { placeImage, placeName, offer, slug, people } = props;

    return (
        <div className="offers__main__card">
            <NavLink to={`/place/${slug}`}> 
                <img src={placeImage} alt={placeName} />
            </NavLink>
            <div className="detail__container">
                <div className="detail__offers">
                    <span className="offers__main__name__place">
                    {placeName} for {people} people
                    </span>
                    <span className="offers__main__discount">
                        Up to {offer}% OFF*
                    </span>
                </div>
                <div className="view_more__button">
                <NavLink className="offers__main__details" to={`/place/${slug}`}> 
                    View Detail
                </NavLink>
                </div>
            </div>
        </div>
    );
}

export default OffersCard;