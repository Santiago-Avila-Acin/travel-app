import React from 'react';
import add_favorite from "../../assets/icons/add_favorite--desactive.svg"
import location__icon from "../../assets/icons/location__icon.svg"
import "./PopularPlaceCard.css"

const PopularPlaceCard = (props) => {
    const { placeImage, placeName, placeLocation } = props;

    return (
        <div className="popular__main__card">
            <img className="popular__main__card__image" src={placeImage} alt={placeName} />
            <div className="popular__main__card__info">
                <p className="popular__main__card__place">
                    {placeName}
                </p>
                <img src={add_favorite} alt="add_favorite" />
            </div>
            <figure>
                <img src={location__icon} alt="location__icon" className="popular__main__info__icon" />
                <p className="popular__main__info__place">{placeLocation}</p>
            </figure>
        </div>
    );
}

export default PopularPlaceCard;