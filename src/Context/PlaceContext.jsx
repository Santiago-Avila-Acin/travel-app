import React, { createContext, useState } from 'react';
import PlaceData from '../components/PlaceData';

export const PlaceContext = createContext();

const PlaceContextProvider = ({ children }) => {
    const placeData = PlaceData();
    const [placeInfo, setPlaceInfo] = useState(placeData);

    const handleFavorite = (id) => {
        const updatedPlaces = placeInfo.map(place => {
            if (place.id === id) {
                return { ...place, favorite: !place.favorite };
            }
        return place;
        });
        setPlaceInfo(updatedPlaces);
        };

    return (
        <PlaceContext.Provider value={[placeInfo, setPlaceInfo, handleFavorite]}>
            {children}
        </PlaceContext.Provider>
    );
};

export default PlaceContextProvider;

