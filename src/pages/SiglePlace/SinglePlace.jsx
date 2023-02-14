import React from 'react';
import { useParams } from 'react-router-dom'
import BookFlight from '../../components/BookFlight/BookFlight';
import PlaceData from '../../components/PlaceData';
import PlaceHeader from '../../components/PlaceHeader/PlaceHeader';
import "./SinglePlace.css"

const SinglePlace = () => {
    const { slug } = useParams ();
    const placedata = PlaceData();
    const singleplace = placedata.find(place => place.slug === slug);
    
    return (
        <div className="single_place__container">
            <img src={singleplace.placeImage} alt={singleplace.placeLocation} className="single_place__image"/>
            <PlaceHeader 
            placeImage={singleplace.placeImage}
            placeName={singleplace.placeName}
            placeLocation={singleplace.placeLocation}
            />
        
            <BookFlight 
            peopleData={singleplace.people}
            placeLocation={singleplace.placeLocation}
            />

        </div>
    );
}

export default SinglePlace;