import React, { useRef, useState, useContext } from 'react';
import "./BookFlight.css"
import { BookingContext } from '../../Context/BookingContext';

import date from "../../assets/icons/date.svg"

const BookFlight = ({ peopleData, placeLocation }) => {
    const { bookings, addBooking } = useContext(BookingContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const dateInput = useRef(null);

    const handleAddBooking = (e) => {
        e.preventDefault();
        addBooking({ placeLocation, selectedDate, people, child });
    };

    const handleClick = () => {
        dateInput.current.focus();
        dateInput.current.click();
    };

    const [people, setPeople] = useState(peopleData);

    const increasePeople = (e) => {
        setPeople(people + 1);
        e.preventDefault();
    };

    const decreasePeople = (e) => {
        if(people>1){
            e.preventDefault();
            setPeople(people - 1);
        }
        else{
            e.preventDefault();
            setPeople(1)
        }
    };
    
    const [child, setChild] = useState(0);

    const increaseChild = (e) => {
        e.preventDefault()
        setChild(child + 1);
    };

    const decreaseChild = (e) => {
        if(child>0){
            setChild(child - 1);
            e.preventDefault();
        }
        else {
            e.preventDefault()
            setChild(0);
        }
    };

    return (
        <div className="single_place__book_flight__container">
            <form className="single_place__book_flight" onSubmit={handleAddBooking}>
                <div className="single_place__book_flight__title">
                    <h1>Book your Flight</h1>
                </div>
                <div className="single_place__place_to_fly">
                    <p>to</p>
                    <input value={placeLocation} readOnly></input>
                </div>

                <div className="single_place__date_to_fly__container">
                    <p>Depature Date</p>
                    <div className="single_place__date_to_fly">
                        <input className='date__input' type="date" ref={dateInput} onChange={(e) => setSelectedDate(e.target.value)}/>
                        <div className="single_place__date_to_fly__icon">
                            <img src={date} onClick={handleClick} alt="date_icon"/>
                        </div>
                    </div>
                </div>
                

                <div className="single_place__peapol_fly">
                    <div className="single_place__peapol_fly--adult">
                        <p>Adult (12+)</p>
                        <button className="button--decrease" onClick={decreasePeople}>-</button>
                        <input type="number" value={people} readOnly/>
                        <button className="button--increase" onClick={increasePeople}>+</button>
                    </div>

                    <div className="single_place__peapol_fly--Childs">
                        <p>Childs (2-12)</p>
                        <button className="button--decrease" onClick={decreaseChild}>-</button>
                        <input type="number" value={child} readOnly/>
                        <button className="button--increase" onClick={increaseChild}>+</button>
                    </div>
                </div>

                <button className="button--confirm" type="submit">Confirm Flight</button>

            </form>
        </div>
    );
}

export default BookFlight;