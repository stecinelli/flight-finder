import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Pages/Home'
import Bookings from './Pages/Bookings'

import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResult from './Pages/SearchResult';


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
        element: <SearchResult/>,
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

