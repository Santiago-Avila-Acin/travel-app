import React from 'react';
import "./SectionsHeader.css"

import carousel__photo from "../../assets/images/portada app viajes.jpg"

const SectionsHeader = ({ section }) => {
    return (
        <div className="section__header__container">
            <img src={carousel__photo} alt="photo" className="carousel__photo"></img>

            <figure>
                <div className="section__header__info">
                    <div className="section__header__info__title">
                        <h1>{section}</h1>
                    </div>
                </div>
            </figure>
        </div>
    );
}

export default SectionsHeader;