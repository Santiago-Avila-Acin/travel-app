import React, { useState } from 'react'
import BestOffers from './components/BestOffers/BestOffers'
import Footer from './components/Footer/Footer'
import Navbar from "./components/Navbar/Navbar"
import PopularLocation from './components/PopularLocation/PopularLocation'
import SeasonOffers from './components/SeasonOffers/SeasonOffers'
import "./App.css"

function App() {

  return (
    <React.Fragment>

      <header>
        <Navbar />
      </header>

      <PopularLocation />
      < BestOffers/>
      <SeasonOffers />

      <Footer />

    </React.Fragment>
  )
}

export default App
