import { useEffect, useState } from "react";
import API from "../API";

const useGeoLocation = () => {
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
      const body = {
         location: JSON.stringify({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
         }),
      };
      handlePostLocation(body);
      sessionStorage.setItem(
         "driverLocation",
         JSON.stringify({
            loaded: false,
            coordinates: {
               lat: location.coords.latitude,
               lng: location.coords.longitude,
            },
            accuracy: location.coords.accuracy,
         })
      );
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
      // const body = {
      //    location: JSON.stringify(location.coordinates),
      // };
      // handlePostLocation(body);
   }, []);

   console.log(location);

   return location;
};
export default useGeoLocation;
