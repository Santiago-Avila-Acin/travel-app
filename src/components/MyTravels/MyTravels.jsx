import { useSelector } from 'react-redux';
import React from 'react';
import MyTravelsCard from '../MyTravelsCard/MyTravelsCard';
import "./MyTravels.css"

const MyTravels = () => {
    const bookings = useSelector(state => state.bookingState);

    return (
    <div className='single_place__card__container'>
        {bookings.length > 0 ? 
            bookings.map(booking => (
                <MyTravelsCard
                    key={booking.slug}
                    placeImage={booking.placeImage}
                    placeName={booking.placeName}
                    location={booking.location}
                    people={booking.people}
                    child={booking.child}
                    date={booking.selectedDate}
                    slug={booking.slug}
                />
            ))
        : <h2 className='add__travels'>Add new trips to appear here!</h2>}
    </div>
    );
}

export default MyTravels;