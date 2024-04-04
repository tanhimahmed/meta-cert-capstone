import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { initTimes, timesReducer, BookingFormContext, BookingFormDispatchContext } from './contexts/BookingFormContext';
import { useReducer } from 'react';

function App() {
  const [times, dispatch] = useReducer(timesReducer, initTimes)

  return (
    <>
      <BookingFormContext.Provider value={times}>
        <BookingFormDispatchContext.Provider value={dispatch}>
          <div className="container">
            <Header/>
            <Outlet />
            <Footer />
          </div>
        </BookingFormDispatchContext.Provider>
      </BookingFormContext.Provider>
    </>
  );
}

export default App;
