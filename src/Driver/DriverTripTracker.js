import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DriverNavbar from "./components/DriverNavbar";
import API from "../API";

const DriverTripTracker = () => {
   const { id } = useParams();
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [trip, setTrips] = useState({});

   const getTrip = async (identifier) => {
      try {
         const access = sessionStorage.getItem("driverAccess");
         const key = JSON.parse(access);
         const fetchTrip = await API.getDriverCurrentTrip(key, identifier);
         console.log(fetchTrip);
         if (fetchTrip.message) {
            setTrips(fetchTrip.trip);
         } else {
            setError(true);
            setErrorMessage(fetchTrip.error);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   useEffect(() => {
      getTrip(id);
   }, [id]);

   return (
      <>
         <DriverNavbar title="Godman Transports" />
      </>
   );
};
export default DriverTripTracker;
