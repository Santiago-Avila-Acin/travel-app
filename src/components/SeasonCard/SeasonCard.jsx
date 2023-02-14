import React from 'react';
import { NavLink } from 'react-router-dom';
import "./SeasonCard.css"

const SeasonCard = (props) => {
    const { placeImage, placeName, slug } = props;

    return (
        <div className="season__packs__main__card">
            <NavLink to={`/place/${slug}`}>
                <img src={placeImage} alt={placeName} />
                <div className="season__pack__gradient"></div>
                <p className="season__pack__name">{placeName}</p>
            </NavLink>
        </div>
    );
}

export default SeasonCard;