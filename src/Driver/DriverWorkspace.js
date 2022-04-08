import React, { useContext, useState, useEffect } from "react";
import DriverNavbar from "./components/DriverNavbar";
import { Context } from "../Context";
import API from "../API";
import DriverTable from "./components/DriverTable";

const DriverWorkspace = () => {
   const [trip, setTrips] = useState({});
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);

   console.log(user);

   const getDriverTrips = async () => {
      try {
         const access = sessionStorage.getItem("driverAccess");
         const key = JSON.parse(access);
         const fetchTrips = await API.getDriverTrips(key);
         console.log(fetchTrips);
         if (fetchTrips.message) {
            setTrips(fetchTrips.trip);
         } else {
            setError(true);
            setErrorMessage(fetchTrips.error);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   useEffect(() => {
      getDriverTrips();
   }, []);
   console.log(trip.date);

   return (
      <>
         <DriverNavbar title="Godman Transports" />
         <br />
         <DriverTable trip={trip} />
      </>
   );
};
export default DriverWorkspace;
