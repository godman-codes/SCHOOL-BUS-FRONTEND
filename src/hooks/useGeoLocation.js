import React, { useEffect, useState } from "react";

const useGeoLocation = () => {
   const [trackState, setTrackState] = useState(false);
   const [location, setLocation] = useState({
      loaded: false,
      coordinates: { lat: "", lng: "" },
      accuracy: "",
   });
   const options = {
      enableHighAccuracy: true,
   };

   const onSuccess = (location) => {
      setLocation({
         loaded: true,
         coordinates: {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
         },
         accuracy: location.coords.accuracy,
      });
   };

   const onError = (error) => {
      setLocation({
         loaded: true,
         error,
      });
   };

   useEffect(() => {
      if (!("geolocation" in navigator)) {
         onError({
            code: 0,
            message: "Browser does not support geolocation",
         });
      }
      navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
      fetch(`http://ip-api.com/json`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   useEffect(() => {
      if (trackState) {
         console.log("track useeffect");
         navigator.geolocation.watchPosition(onSuccess, onError);
      }
   }, [trackState]);
   console.log(location);
   return location;
};
export default useGeoLocation;
