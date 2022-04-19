import { useEffect, useState } from "react";

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
