import { createContext } from 'react';

// function initializeTimes() {

// }

// function availableTimes() {

// }

export const initTimes = [
    'select a time',
    '4:00',
    '5:00',
    '6:00',
    '7:00',
    '8:00',
    '9:00',
    '10:00'
]

export function timesReducer(times, action) {
    switch (action.type) {
        case 'submit': {
            times = times.filter(time => time !== action.time);
            return times;
        }
        case 'date': {
            times = initTimes;
            return times;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export const BookingFormContext = createContext(initTimes);
export const BookingFormDispatchContext = createContext(null);