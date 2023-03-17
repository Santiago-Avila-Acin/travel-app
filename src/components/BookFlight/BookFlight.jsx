import React, { useRef, useState, useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createBooking } from "../../Redux/states/BookingState";
import "./BookFlight.css"

import date from "../../assets/icons/date.svg"

const BookFlight = ({ peopleData, location, price, offer, slug, placeImage, placeName, abbreviation}) => {
    const dispatcher = useDispatch()
    const [selectedDate, setSelectedDate] = useState(new Date());
    const dateInput = useRef(null);
    const navigate = useNavigate();

    const [totalPrice, setTotalPrice] = useState(price);

    const updateTotalPrice = () => {
        let discount = 0;
        if (!!offer) {
            discount = price * (offer / 100);
        }
        const newTotalPrice = people * price + child * (price / 2) - discount;
        setTotalPrice(newTotalPrice);
    };
    
    const [people, setPeople] = useState(peopleData);
    const handleAddBooking = (e) => {
        e.preventDefault();
        const bookingData = {
            location: location,
            selectedDate: selectedDate,
            people: people,
            child: child,
            slug: slug,
            placeImage: placeImage,
            placeName: placeName,
            totalPrice: totalPrice,
            abbreviation: abbreviation,
        }
        dispatcher(createBooking(bookingData));

        setSelectedDate(new Date());
        setTotalPrice(price);
        {selectedDate ?
        navigate(`/my-travels/${slug}`) : null;}
    };
    

    const handleClick = () => {
        dateInput.current.focus();
        dateInput.current.click();
    };
    
    
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
        };
    
    };
    useEffect(() => {
        updateTotalPrice();
    }, [people, child, price]);
    
    return (
        <div className="single_place__book_flight__container">
            <form
            className="single_place__book_flight"
            onSubmit={(e) => {
                e.preventDefault();
                if (selectedDate) {
                    handleAddBooking(e);
                }
                }}
            >
                <div className="single_place__book_flight__title">
                    <h1>Book your Flight</h1>
                </div>
                <div className="single_place__place_to_fly">
                    <p>to</p>
                    <input value={location} readOnly></input>
                </div>

                <div className="single_place__date_to_fly__container">
                    <p>Depature Date</p>
                    <div className="single_place__date_to_fly">
                        <input
                        className='date__input'
                        type="date" ref={dateInput}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        />
                        <div className="single_place__date_to_fly__icon">
                            <img
                            src={date}
                            onClick={handleClick}
                            alt="date_icon"
                            />
                        </div>
                    </div>
                </div>
                

                <div className="single_place__peapol_fly">
                    <div className="single_place__peapol_fly--adult">
                        <p>Adult (12+)</p>
                        <div className="single_place__counter_button--adult">
                            <button
                            className="button--decrease"
                            onClick={decreasePeople}>
                                -
                            </button>
                            <input
                            type="number"
                            value={people}
                            readOnly
                            />
                            <button
                            className="button--increase"
                            onClick={increasePeople}>
                                +
                            </button>
                        </div>
                    </div>

                    <div className="single_place__peapol_fly--Childs">
                        <p>Childs (2-12)</p>
                        <div className="single_place__counter_button--childs">
                            <button
                            className="button--decrease"
                            onClick={decreaseChild}>
                                -
                            </button>
                            <input
                            type="number"
                            value={child}
                            readOnly
                            />
                            <button
                            className="button--increase"
                            onClick={increaseChild}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="single_place__total_price__container">
                    <p className='single_place__total_price'>TOTAL: ${totalPrice}</p>
                    {!!offer ? (
                        <p className="single_place__discount">discount {offer}%</p>
                    ) : null}
                </div>

                    <button
                    className="button--confirm"
                    type="submit">
                        Confirm Flight
                    </button>
            </form>
        </div>
    );
}

export default BookFlight;