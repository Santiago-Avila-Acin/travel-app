import React from 'react'
import "./SeasonOffers.css"
import SeasonCard from '../../components/SeasonCard/SeasonCard';

const SeasonOffers = ({ PlaceInfo }) => {
        const summerOffers = PlaceInfo.filter((season) => season.season === 'summer');

    return (
        // <div className="season__packs__container">
        //     <div className="season__packs__header">
        //         <h2 className="season__packs__header--title">
        //             Season Packs
        //         </h2>
        //         <a className="season__packs__header--see_all" href="">See All</a>
        //     </div>

        //     <div className="season__packs__main">
        //         <div className="season__packs__main__card">
        //             <img src={season__packs__photo} alt="season__packs__photo" />
        //             <p className="season__pack__name">Maldives best Kept secret</p>
        //         </div>
        //     </div>
        // </div>
        <div className="season__packs__container">
            <div className="season__packs__header">
                <h2 className="season__packs__header--title">
                    Season Packs
                </h2>
                <a className="season__packs__header--see_all" href="">See All</a>
            </div>

            <div className="season__packs__main">
                {summerOffers.map((season) => {
                    return (
                        <SeasonCard
                        key={season.id}
                        placeImage={season.placeImage}
                        placeName={season.placeName}
                        season={season.season}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default SeasonOffers;