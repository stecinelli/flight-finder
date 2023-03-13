import React, { useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom'
import { MainContext } from './Context';
import './App.css';
import Navegation from './Components/Navegation';
import Footer from './Components/Footer';

function App() {
  const [flightsList, setflightsList] = useState([{}])

  const contextValue = useMemo(() => ({
    flightsList,
    setflightsList,

  }), [
    flightsList,
    setflightsList,

  ]);

  return (
    <MainContext.Provider value={contextValue}>
      <Navegation/>
      <Outlet/>
      <Footer/>
    </MainContext.Provider>
  );
}

export default App;
