import React from 'react'
import "./OffersCard.css"

const OffersCard = (props) => {
    const { placeImage, placeName, offer, people } = props;

    return (
        <div className="offers__main__card">
            <img src={placeImage} alt={placeName} />
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
                    <a className="offers__main__details" href="">View Detail</a>
                </div>
            </div>
        </div>
    );
}

export default OffersCard;