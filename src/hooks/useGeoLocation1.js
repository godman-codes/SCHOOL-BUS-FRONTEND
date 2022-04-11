import React, { useState } from "react";

const useGeoLocation = () => {
   const [lat, setLat] = useState(0);
   const [lng, setLng] = useState(0);

   const getLocation = () => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               setLat(position.coords.latitude);
               setLng(position.coords.longitude);
            },
            (error) => {
               console.log(error);
            }
         );
      } else {
         alert("Geolocation is not supported by this browser.");
      }
   };

   return { lat, lng, getLocation };
};
