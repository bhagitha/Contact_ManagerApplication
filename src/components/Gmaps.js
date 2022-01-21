import React, { useState } from 'react'
import Geocode from 'react-geocode'
import MapContainer from './MapContainer';
 // Get latitude & longitude from address.
function Gmaps() {
   
Geocode.fromAddress("kozhikdoe").then(
  (response) => {
    const { lat, lng } = response.results[0].geometry.location;

    console.log(lat, lng);
  },
  (error) => {
    console.error(error);
  }
);
 return (
        <div>
            <MapContainer/>
        </div>
    )
}

export default Gmaps
