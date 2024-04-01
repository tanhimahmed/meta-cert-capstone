import '../App.css';
import { useState } from 'react';

function BookingForm ({ availableTimes, setAvailableTimes }) {
    const {bookingDate,setBookingDate} = useState(new Date().toLocaleDateString('en-CA'));
    const {bookingTime,setBookingTime} = useState('17:00');
    const {numGuests, setNumGuests} = useState(2);
    const {type, setType} = useState('Dining');
    let timeslotOptions = availableTimes.map(timeslot => <option>{timeslot}</option>);
    const types = [ 'Dining', 'Takeout', 'Delivery', 'Private Event' ];
    const typesOptions = types.map(type => <option> {type} </option>);

    const clearForm = () => {
        setBookingDate("");
        setBookingTime("");
        setNumGuests(0);
        setType("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(availableTimes);

        let tempModified = availableTimes.filter(time => time !== bookingTime);
        console.log(tempModified);
        timeslotOptions = tempModified.map(timeslot => <option>{timeslot}</option>);
        setAvailableTimes(tempModified);

        alert(
            `Booking date: `  + bookingDate +
            `Booking time: `  + bookingTime +
            `Number of guests: `  + numGuests +
            `Reservation type: `  + type
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='res-date'>Choose date</label>
            <input type='date' id='res-date' value={bookingDate} onChange={(e) => {setBookingDate(e.target.valueAsDate)}}/>

            <label htmlFor='res-time'>Choose time</label>
            <select id='res-time' value={bookingTime} onChange={(e) => {setBookingTime(e.target.value)}}>
                {timeslotOptions}
            </select>

            <label htmlFor='numGuests'>Number of guests</label>
            <input type='number' placeholder='1' min='1' max='20' id='guests' value={numGuests} onChange={(e) => {setNumGuests(e.target.value)}}/>

            <label htmlFor='type'>Type</label>
            <select id='type' value={type} onChange={(e) => {setType(e.target.value)}}>
                {typesOptions}
            </select>

            <input type='submit' value='Submit reservation' />
        </form>
    )
}

export default BookingForm;