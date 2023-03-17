import React, { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PlaceContext from "../Context/PlaceContext"
import store from '../Redux/store';
import PlaceData from "../components/PlaceData"
import AllPlaces from '../pages/AllPlaces/AllPlaces';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/Notfound';
import Header from '../containers/Header/Header';
import Travels from "../pages/Travels/Travels"
import Favorites from "../pages/Favorites/Favorites"
import Profile from "../pages/Profile/Profile"
import SinglePlace from '../pages/SiglePlace/SinglePlace';
import Footer from '../containers/Footer/Footer';
import SingleTravel from '../components/SingleTravel/SingleTravel';
import "./App.css";

function App() {

  const placeData = PlaceData();
  const [placeInfo, setPlaceInfo, handleFavorite] = useState(placeData);

  const [bookings, addBooking] = useState([]);

  return (
			<HashRouter>
        <PlaceContext value={[placeInfo, setPlaceInfo, handleFavorite]}>
        <Provider store={store}>
          
        <header>
          <Header />
        </header>

					<Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/AllPlaces" element={<AllPlaces />} />
            <Route exact path="/Travels" element={<Travels />} />
            <Route exact path="/Favorites" element={<Favorites />} />
            <Route exact path="/Profile" element={<Profile />} />
            <Route exact path="/place/:slug" element={<SinglePlace />} />
            <Route exact path="/my-travels/:slug" element={<SingleTravel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          <Footer />

          </Provider>
          </PlaceContext>
			</HashRouter>

  )
}

export default App
