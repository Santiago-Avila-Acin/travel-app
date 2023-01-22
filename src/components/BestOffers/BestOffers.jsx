import React from 'react';
import "./BestOffers.css"

import place_image from "../../assets/images/venecia.jpg"

const BestOffers = () => {
    return (
        <div class="offers__container">
            <div class="offers__main__header">
                <h2 class="offers__main__header--title">
                    Best Offers
                </h2>
                <a class="offers__main__header--see_all" href="">See All</a>
            </div>
            
            <div class="offers__main">
                <div class="offers__main__card">
                    <img src={place_image} alt="place_image" />
                    <div class="detail__container">
                        <div class="detail__offers">
                            <span class="offers__main__name__place">
                                Venice for 2 people
                            </span>
                            <span class="offers__main__discount">
                                Up to 30% OFF*
                            </span>
                        </div>
                        <div class="view_more__button">
                            <a class="offers__main__details" href="">View Detail</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default BestOffers;