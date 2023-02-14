import React from 'react';
import "./PlaceHeader.css"

import location__icon from "../../assets/icons/location__icon.svg"

const PlaceHeader = ( {placeName, placeLocation }) => {
    return (
        <figure>
            <div className="single_place__info">
                <div className="single_place__info__title">
                    <h1>{placeName}</h1>
                </div>
                <div className="single_place__info__location">
                    <img src={location__icon} alt="pin_icon"/>
                    <h2>{placeLocation}</h2>
                </div>
            </div>
        </figure>
    );
}

export default PlaceHeader;