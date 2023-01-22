import React from 'react'
import "./SeasonOffers.css"

import season__packs__photo from "../../assets/images/maldives.jpg"

const SeasonOffers = () => {
    return (
        <div class="season__packs__container">
            <div class="season__packs__header">
                <h2 class="season__packs__header--title">
                    Season Packs
                </h2>
                <a class="season__packs__header--see_all" href="">See All</a>
            </div>

            <div class="season__packs__main">
                <div class="season__packs__main__card">
                    <img src={season__packs__photo} alt="season__packs__photo" />
                    <p class="season__pack__name">Maldives best Kept secret</p>
                </div>
            </div>
        </div>
    );
}

export default SeasonOffers;