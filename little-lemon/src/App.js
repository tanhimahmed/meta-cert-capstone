import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useState, createContext, useCallback, useMemo } from 'react';

export const BookingTimesContext = createContext(null);

function App() {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    'bogus time'
  ]);

  // const timeContextValue = useMemo(() => ({
  //   availableTimes,
  //   setAvailableTimes
  // }), [availableTimes]);

  return (
    <>
      <BookingTimesContext.Provider value={{availableTimes, setAvailableTimes}}>
        <div className="container">
          <Header/>
          <Outlet />
          <Footer />
        </div>
      </BookingTimesContext.Provider>
    </>
  );
}

export default App;
