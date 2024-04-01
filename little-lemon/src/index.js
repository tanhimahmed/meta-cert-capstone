import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Main from './components/Main';
import HeroSection from './components/HeroSection';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import About from './components/About';
import BookingPage from './components/BookingPage';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main />,
        errorElement: <ErrorPage />
      },
      {
        path: "/home",
        element: <Main />,
        errorElement: <ErrorPage />
      },
      {
        path: "/hero",
        element: <HeroSection />,
        errorElement: <ErrorPage />
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <ErrorPage />
      },
      {
        path: "/reviews",
        element: <Reviews />,
        errorElement: <ErrorPage />
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
      },
      {
        path: "/reservations",
        element: <BookingPage />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
