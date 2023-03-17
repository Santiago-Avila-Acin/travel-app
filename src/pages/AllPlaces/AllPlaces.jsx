import React, { useContext } from 'react';
import ListCard from '../../components/ListCard/ListCard';
import { PlaceContext } from "../../Context/PlaceContext"
import SectionsHeader from '../../components/SectionsHeader/SectionsHeader';
import "./AllPlaces.css"


const Favorites = () => {

    const [placeInfo, setPlaceInfo, handleFavorite] = useContext(PlaceContext);

    return (

        <div className="all_places__main">
            <SectionsHeader
            section="All Places"

            />
            {placeInfo.map((place) => {
                return (
                    <div className="list_card__container">
                        <ListCard
                        key={place.id}
                        slug={place.slug}
                        placeImage={place.placeImage}
                        placeName={place.placeName}
                        placeLocation={place.placeLocation}
                        favorite={place.favorite}
                        handleFavorite={() => handleFavorite(place.id)}
                        people={place.people}
                        price={place.price}
                        offer={place.offer}
                        />
                    </div>
                );})}
        </div>
    );
}

export default Favorites;