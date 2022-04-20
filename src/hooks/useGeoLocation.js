import { useEffect, useState } from "react";
import API from "../API";

const useGeoLocation = () => {
   const [trackState, setTrackState] = useState(false);
   const [location, setLocation] = useState({
      loaded: false,
      coordinates: { lat: 0.0, lng: 0.0 },
      accuracy: "",
   });
   const options = {
      enableHighAccuracy: true,
   };

   const handlePostLocation = async (body) => {
      try {
         const access = sessionStorage.getItem("driverAccess");
         const key = JSON.parse(access);
         const postLocation = await API.postDriverLocation(body, key);
         console.log(postLocation);
         if (postLocation.message) {
            console.log(postLocation.message);
         } else {
            console.log(postLocation.error);
         }
      } catch (error) {
         console.log(error);
      }
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
   }, []);

   useEffect(() => {
      let interval = null;
      console.log("track useEffect");
      console.log(`trackState is ${trackState}`);
      if (trackState) {
         interval = setInterval(() => {
            console.log("the interval is running");
            navigator.geolocation.getCurrentPosition(
               onSuccess,
               onError,
               options
            );
            const body = {
               location: JSON.stringify(location.coordinates),
            };
            handlePostLocation(body);
         }, 5000);
      } else {
         console.log("the interval is not running");
         clearInterval(interval);
      }
      return () => clearInterval(interval);
   }, [trackState]);

   console.log(location);

   return { location, setTrackState };
};
export default useGeoLocation;
