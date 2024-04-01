import '../App.css';
import { useContext, useReducer } from 'react';
import BookingForm from './BookingForm';
import { BookingTimesContext } from '../App';

function reducer(state, action) {
}

function BookingPage() {
    const { availableTimes , setTimes } = useContext(BookingTimesContext);
    const { reservationTimes , dispatch } = useReducer(reducer, availableTimes);

    const updateTimes = (selectedDate) => {
        let availableTimesOnDate = [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00'
        ];
        return availableTimesOnDate;
    };

    const initializeTimes = () => {
        let standardTimes = [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00'
        ];
        setTimes(standardTimes);
    };

    return (
        <div className="reservations">
            <BookingForm availableTimes={reservationTimes} setAvailableTimes={setTimes} />
        </div>
    );
}

export default BookingPage;