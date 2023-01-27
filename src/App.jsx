import React from 'react'
import BestOffers from './containers/BestOffers/BestOffers'
import Footer from './containers/Footer/Footer'
import Navbar from "./containers/Navbar/Navbar"
import PopularLocation from './containers/PopularLocation/PopularLocation'
import SeasonOffers from './containers/SeasonOffers/SeasonOffers'
import "./App.css"

function App() {
  const PlaceInfo = [
    {
      "id":1,
      "placeName": "Eifiel Tower",
      "placeLocation":"Paris Eyfel Kulesi",
      "placeImage":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSzAvVctb9kAX2BRKwpSN_Swm9LxfjH80LGg5nT5RCXPlw0PAa7",
      "offer":0,
      "people":1,
      "season":"summer",
      "favorite":true,
      "popularLocation":true,
    },

    {
      "id":2,
      "placeName": "venice",
      "placeLocation":"italian",
      "placeImage":"https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "offer":30,
      "people":2,
      "season":"summer",
      "favorite":false,
      "popularLocation":false,
    },

    {
      "id":3,
      "placeName": "Maldives",
      "placeLocation":"Malé, Maldives",
      "placeImage":"https://images.unsplash.com/photo-1470214203634-e436a8848e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
      "offer":0,
      "people":1,
      "season":"summer",
      "favorite":false,
      "popularLocation":false,
    },
  ]

  return (
    <React.Fragment>

      <header>
        <Navbar />
      </header>

      <PopularLocation
      PlaceInfo={PlaceInfo}
      />

      < BestOffers
      PlaceInfo={PlaceInfo}
      />
      <SeasonOffers
      PlaceInfo={PlaceInfo}
      />

      <Footer />

    </React.Fragment>
  )
}

export default App
