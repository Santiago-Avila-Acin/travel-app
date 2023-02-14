import React, { useState } from 'react';
import { NavLink } from "react-router-dom"

import add_favorite from "../../assets/icons/add_favorite--desactive.svg"
import add_favorite_active from "../../assets/icons/add_favorite--active2.svg"
import location__icon from "../../assets/icons/location__icon.svg"
import "./PopularPlaceCard.css"

const PopularPlaceCard = (props) => {
    const { placeImage, placeName, placeLocation, slug, handleFavorite, favorite } = props;
    const [favoriteState, setFavoriteState] = useState(favorite);
    const favoriteIcon = favoriteState ? add_favorite_active : add_favorite;

    const handleClick = () => {
        handleFavorite();
        setFavoriteState(!favoriteState);
    };
    
            
    return (
        <div className="popular__main__card">
            <NavLink to={`/place/${slug}`}>
                <img className="popular__main__card__image" src={placeImage} alt={placeName} />
            </NavLink>
                <div className="popular__main__card__info">
                    <NavLink className="nav__link__style" to={`/place/${slug}`}>
                        <p className="popular__main__card__place">
                            {placeName}
                        </p>
                    </NavLink>
                    <img 
                    onClick={handleClick}
                    src={favoriteIcon}
                    alt="add_favorite" 
                    />
                </div>
                <figure>
                    <img src={location__icon} alt="location__icon" className="popular__main__info__icon" />
                    <p className="popular__main__info__place">{placeLocation}</p>
                </figure>
        </div>
    );
}

export default PopularPlaceCard;