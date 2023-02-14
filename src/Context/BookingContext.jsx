import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

const BookingContextProvider = (props) => {
    const [bookings, setBookings] = useState([]);

    const addBooking = (placeLocation, selectedDate, people, child) => {
        setBookings([...bookings, { placeLocation, selectedDate, people, child }]);
    };


    console.log(bookings)
    return (
        <BookingContext.Provider value={{ bookings, addBooking }}>
            {props.children}
        </BookingContext.Provider>
    );
};

export default BookingContextProvider;
