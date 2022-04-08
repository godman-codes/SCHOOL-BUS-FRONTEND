import React, { useContext, useState, useEffect } from "react";
import DriverNavbar from "./components/DriverNavbar";
import { Context } from "../Context";
import API from "../API";

const DriverWorkspace = () => {
   const [trips, setTrips] = useState([]);
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
   console.log(trips);

   return (
      <>
         <DriverNavbar title="Godman Transports" />
         <br />
      </>
   );
};
export default DriverWorkspace;
