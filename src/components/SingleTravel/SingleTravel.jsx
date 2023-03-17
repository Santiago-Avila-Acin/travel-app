import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import ButtonBack from '../ButtonBack/ButtonBack';
import "./SingleTravel.css"

import airplane from "../../assets/icons/airplane.svg"
import line_airplane from "../../assets/icons/line_airplane.svg"
import people from "../../assets/icons/people.svg"
import eat_icon from "../../assets/icons/eat_icon.svg"
import barcode from "../../assets/icons/barcode.svg"

const SingleTravel = () => {
    const bookings = useSelector(state => state.bookingState);
    const { slug } = useParams ();
    const createNewFlight = bookings.filter((booking) => booking.slug === slug)

    const navigate = useNavigate();
    const downloadTicket = () => {
        navigate(`/Travels`)
    }

    return (
        <>

        <div className="ticket__container">
            <img className='ticket__image_of_place' src={createNewFlight[0].placeImage} alt="" />
            <div className="ticket_card__container">
                <div className="ticket__flight_info">
                    <div className="ticket__start_point">
                        <h2> ARG </h2>
                        <h3>Argentina</h3>
                    </div>
                    <div className="ticket__time_of_fly__container">
                        <h3>{createNewFlight[0].selectedDate}</h3>
                        <img className='line_airplane' src={line_airplane} alt="line_airplane"/>
                        <img className='airplane' src={airplane} alt="airplane"/>
                        <h3 className="ticket__time_of_fly">04h  30min</h3>
                    </div>
                    <div className="ticket__finish_point">
                        <h2>{createNewFlight[0].abbreviation}</h2>
                        <h3>{createNewFlight[0].location}</h3>
                    </div>
                </div>
                <div className="ticket__people_info">
                    <div className="ticket__people_info--adults">
                        <img src={people} alt="people icon"/>
                        <p>{createNewFlight[0].people} adult</p>
                    </div>
                    <div className="ticket__people_info--child">
                        <img src={people} alt="child icon"/>
                        <p>{createNewFlight[0].child} child</p>
                    </div>
                    <div className="ticket__people_info--meal">
                        <img src={eat_icon} alt="meal icon"/>
                        <p>meal</p>
                    </div>
                </div>
                <div className="ticket__main_info">
                    <div className="main_info--top">
                        <div className="passager_name">
                            <p>passager Name</p>
                            <h3>Shreya Kumar</h3>
                        </div>
                        <div className="flight_type">
                            <p>flight type</p>
                            <h3>Economy</h3>
                        </div>
                        <div className="flight_code">
                            <p>Flight Code</p>
                            <h3>IG-2105</h3>
                        </div>
                    </div>
                    <div className="main_info--bottom">
                        <div className="boarding_time">
                            <p>Boarding Time</p>
                            <h3>06:15</h3>
                        </div>
                        <div className="gate">
                            <p>Gate</p>
                            <h3>A5</h3>
                        </div>
                        <div className="terminal">
                            <p>Terminal</p>
                            <h3>T2</h3>
                        </div>
                        <div className="seat_number">
                            <p>Seat Number</p>
                            <h3>A5</h3>
                        </div>
                    </div>
                </div>
                <div className="barcode__container">
                    <img src={barcode} alt="" className="barcode" />
                    <p className='barcode__num'>1  2  5  8  4  6  2  4  2  7  5  3  1  3  5  0  6  7  5  9</p>
                </div>
            </div>

            <h3 className="terms__title">Terms & Condition</h3>
            <p className="terms__info">Curabitur ultrices nisi ac vulputate lacinia. Donec pharetra
                tincidunt velit, sed iaculis est sollicitudin ac.</p>
        </div>
        <div className="button__download">
            <button onClick={downloadTicket}>Download E-Ticket</button>
        </div>
        </>
    );
}

export default SingleTravel;