import React from 'react';
import "./PopularLocation.css"

import add_favorite from "../../assets/icons/add_favorite--desactive.svg"
import location__icon from "../../assets/icons/location__icon.svg"
import torre_eifiel from "../../assets/images/torre eifiel.jpg"

const PopularLocation = () => {
    return (
        <div class="popular__container">  
            <div class="popular_location__header">
                <h2 class="popular_location__header--title">
                    Popular Location
                </h2>
                <a class="popular_location__header--see_all" href="">See All</a>
            </div>

            <div class="popular__main">
                <div class="popular__main__card">
                    <img class="popular__main__card__image" src={torre_eifiel} alt="popular__main__card__image" />
                    <div class="popular__main__card__info">
                        <p class="popular__main__card__place">
                            Eifiel Tower
                        </p>
                        <img src={add_favorite} alt="popular__main__card__add_favorite" />
                    </div>
                    <figure>
                        <img src={location__icon} alt="location__icon" class="popular__main__info__icon" />
                        <p class="popular__main__info__place"> Paris Eyfel Kulesi</p>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default PopularLocation;