import React, {useState} from 'react';
import { NavLink } from "react-router-dom"
import "./ListCard.css"

import add_favorite from "../../assets/icons/add_favorite--desactive.svg"
import add_favorite_active from "../../assets/icons/add_favorite--active2.svg"
import location__icon from "../../assets/icons/location__icon.svg"
import Profile__icon from "../../assets/icons/Profile__icon.svg"

const FavoritesCard = (props) => {
    const { placeImage, placeName, placeLocation, slug, handleFavorite, favorite, price, people, offer } = props;

    const [favoriteState, setFavoriteState] = useState(favorite);
    const favoriteIcon = favoriteState ? add_favorite_active : add_favorite;

    const handleClick = () => {
        handleFavorite();
        setFavoriteState(!favoriteState);
    };

    const discount = price * (offer / 100);
    const discountedPrice = price - discount;

    return (
        <div className="single_place__card">
            <NavLink className="nav__link__style" to={`/place/${slug}`}>
                <img className="single_place__card__image" src={placeImage} alt="place image" />
            </NavLink>
            <div className="single_place__card__info">
                <NavLink className="nav__link__style nav__link__separate" to={`/place/${slug}`}>
                    <h2>{placeName}</h2>
                    <div className="single_place__card__info--place">
                        <img className="single_place__card__location__icon" src={location__icon} alt="location logo" />
                        <p className="single_place__card__place_name">
                            {placeLocation}
                        </p>
                    </div>
                </NavLink>
                <div className="single_place__card__info--price">
                    <NavLink className="nav__link__style" to={`/place/${slug}`}>
                    { offer ? (
                        <>
                            <p className="single_place__card_price--price_without_offer">${price}</p>
                            <p className="single_place__card_price--offer_price">${discountedPrice}</p>
                        </>
                    ): (
                        <p className="single_place__card_price">${price}</p>
                    )}
                    </NavLink>
                    <div className="single_place__card__people">
                    {people > 1 ? (
                        <div className="single_place__card__people">
                            <img src={Profile__icon} alt="" />
                            <p>{people}</p>
                        </div>
                    ) : null}

                    </div>
                    <img 
                    className="single_place__card__favorite_icon"
                    onClick={handleClick}
                    src={favoriteIcon}
                    alt="add_favorite" 
                    />
                </div>
            </div>
        </div>
    );
}

export default FavoritesCard;