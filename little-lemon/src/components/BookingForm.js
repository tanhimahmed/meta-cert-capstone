import '../App.css';
import { useState, useContext } from 'react';
import { BookingFormContext, BookingFormDispatchContext } from './../contexts/BookingFormContext.js';

function BookingForm () {
    const times = useContext(BookingFormContext);
    const dispatch = useContext(BookingFormDispatchContext);

    const [bookingDate, setBookingDate] = useState(new Date().toLocaleDateString('en-CA'));
    const [bookingTime, setBookingTime] = useState(times[0]);
    const [numGuests, setNumGuests] = useState(2);
    const [type, setType] = useState('Dining');
    let timeslotOptions = times.map(timeslot => <option>{timeslot}</option>);
    const types = [ 'Dining', 'Takeout', 'Delivery', 'Private Event' ];
    const typesOptions = types.map(type => <option> {type} </option>);

    const clearForm = () => {
        setBookingDate("");
        setBookingTime("");
        setNumGuests(0);
        setType("");
    }


    //TODO: fix bug with multiple submits on the 0 index timeslot
    const handleSubmit = (e) => {
        e.preventDefault();
        timeslotOptions = dispatch({
            type: 'submit',
            time: bookingTime
        });

        alert(
            `Booking date: `  + bookingDate + "\n" +
            `Booking time: `  + bookingTime + "\n" +
            `Number of guests: `  + numGuests + "\n" +
            `Reservation type: `  + type
        );
        setBookingTime("");
    }

    return (
        <form className='bookingForm' onSubmit={handleSubmit}>
            <label htmlFor='res-date'>Choose date</label>
            <input type='date' id='res-date' value={bookingDate} onChange={(e) => {setBookingDate(e.target.valueAsDate)}}/>
            <br/><br/>

            <label htmlFor='res-time'>Choose time</label>
            <select id='res-time' value={bookingTime} onChange={(e) => {setBookingTime(e.target.value)}}>
                {timeslotOptions}
            </select>
            <br/><br/>

            <label htmlFor='numGuests'>Number of guests</label>
            <input type='number' placeholder='1' min='1' max='20' id='guests' value={numGuests} onChange={(e) => {setNumGuests(e.target.value)}}/>
            <br/><br/>

            <label htmlFor='type'>Type</label>
            <select id='type' value={type} onChange={(e) => {setType(e.target.value)}}>
                {typesOptions}
            </select>
            <br/><br/><br/><br/><br/>


            <button onClick={clearForm}> clear </button>
            <input type='submit' value='Submit reservation' />
        </form>
    )
}

export default BookingForm;