import { createContext } from 'react';

export const initTimes = [
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
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
  }

export const BookingFormContext = createContext(initTimes);
export const BookingFormDispatchContext = createContext(null);