import React from 'react';
import "./SeasonCard.css"

const SeasonCard = (props) => {
    const { placeImage, placeName } = props;

    return (
        <div className="season__packs__main__card">
            <img src={placeImage} alt={placeName} />
            <div className="season__pack__gradient"></div>
            <p className="season__pack__name">{placeName}</p>
        </div>
    );
}

export default SeasonCard;