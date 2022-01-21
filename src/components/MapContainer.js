import React from 'react';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat:11.258753,
    lng:75.780411
  }
  
  return (
    <>
    <h1>google map Integration </h1>
    <div style={{width:"50%",float:"right",}}>
     <LoadScript
       googleMapsApiKey='AIzaSyDRl23P_v_xKeqkjglM8f0bIDbqs0T9QRE'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
        
        />
        <Marker  position={
          {
            lat:11.258753,
            lng:75.780411
          }
        }/>
     </LoadScript>
     </div>
     </>
  )
}

export default MapContainer;