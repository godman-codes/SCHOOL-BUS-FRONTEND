import { useEffect, useState } from "react";
import API from "../API";

const useGeoLocationStream = (id) => {
   const [trackState, setTrackState] = useState(false);
   const [location, setLocation] = useState(
      JSON.parse(sessionStorage.getItem("driverLocation"))
   );
   const options = {
      enableHighAccuracy: true,
   };
   const streamLocation = async (body) => {
      try {
         const access = sessionStorage.getItem("driverAccess");
         const key = JSON.parse(access);
         console.log(key);
         console.log(id);
         const streamLocation = await API.streamDriversLocation(body, key, id);
         console.log(streamLocation);
         if (streamLocation.message) {
            console.log(streamLocation.message);
         } else {
            console.log(streamLocation.error);
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
      const body = {
         location: JSON.stringify({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
         }),
      };
      streamLocation(body);
   };

   const onError = (error) => {
      setLocation({
         loaded: true,
         error,
      });
   };
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
            // const body = {
            //    location: JSON.stringify(location.coordinates),
            // };
            // streamLocation(body);
         }, 5000);
      } else {
         console.log("the interval is not running");
         clearInterval(interval);
      }
      return () => clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [trackState]);
   console.log(location);
   return { location, setTrackState };
};
export default useGeoLocationStream;
