import React, { useContext } from 'react';
import ListCard from '../../components/ListCard/ListCard';
import { PlaceContext } from "../../Context/PlaceContext"
import SectionsHeader from '../../components/SectionsHeader/SectionsHeader';
import "./Favorites.css"


const Favorites = () => {

    const [placeInfo, setPlaceInfo, handleFavorite] = useContext(PlaceContext);
    const favorites = placeInfo.filter((place) => place.favorite === true);

    return (

        <div className="favorites__main">
            <SectionsHeader
            section="Favorites"

            />

            {favorites.length > 0 ?
                favorites.map((place) => {
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
                        );})
                : <h2 className='add__travels'>Add new favorites to appear here!</h2>}
                    
        </div>
    );
}

export default Favorites;