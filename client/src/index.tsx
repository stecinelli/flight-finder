import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './Pages/Home'
import Bookings from './Pages/Bookings'
import SearchResult from './Pages/SearchResult';
import BookPage from './Pages/BookPage';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    /* errorElement: <ErrorPage />, */
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/bookings',
        element: <Bookings />,
      },
      {
        path: '/searchResult',
        element: <SearchResult />,
      },
      {
        path: '/bookFlight',
        element: <BookPage />,
      },
    ]
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

