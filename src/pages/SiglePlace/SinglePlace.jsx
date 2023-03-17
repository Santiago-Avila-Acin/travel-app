import React from 'react';
import { useParams } from 'react-router-dom'
import BookFlight from '../../components/BookFlight/BookFlight';
import PlaceData from '../../components/PlaceData';
import PlaceHeader from '../../components/PlaceHeader/PlaceHeader';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import "./SinglePlace.css"

const SinglePlace = () => {
    const { slug } = useParams ();
    const placedata = PlaceData();
    const singleplace = placedata.find(place => place.slug === slug);

    return (
        <div className="single_place__container">
            <ButtonBack />

            <img src={singleplace.placeImage} alt={singleplace.placeLocation} className="single_place__image"/>
            <PlaceHeader 
            placeImage={singleplace.placeImage}
            placeName={singleplace.placeName}
            placeLocation={singleplace.placeLocation}
            />
        
            <BookFlight 
            key={singleplace.key}
            peopleData={singleplace.people}
            location={singleplace.placeLocation}
            price={singleplace.price}
            offer={singleplace.offer}
            slug={singleplace.slug}
            placeImage={singleplace.placeImage}
            placeName={singleplace.placeName}
            abbreviation={singleplace.abbreviation}
            />

        </div>
    );
}

export default SinglePlace;