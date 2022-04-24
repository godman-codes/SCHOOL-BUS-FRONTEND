import React, { useContext, useState, useEffect } from "react";
import DriverNavbar from "./components/DriverNavbar";
import { Context } from "../Context";
import API from "../API";
import DriverTable from "./components/DriverTable";
import DriverScheduleTable from "./components/DriverScheduleTable";
import useGeoLocation from "../hooks/useGeoLocation";

const DriverWorkspace = () => {
   const [trip, setTrips] = useState({});
   const [scheduleTrips, setScheduleTrips] = useState([]);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);
   const location = useGeoLocation();

   console.log("outside the effect");

   const getActiveDriverTrips = async () => {
      try {
         const access = sessionStorage.getItem("driverAccess");
         const key = JSON.parse(access);
         const fetchTrips = await API.getDriverActiveTrips(key);
         console.log(fetchTrips);
         if (fetchTrips.message) {
            setTrips(fetchTrips.trip);
         } else {
            setTrips(fetchTrips);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   const getDriverScheduleTrips = async () => {
      try {
         const access = sessionStorage.getItem("driverAccess");
         const key = JSON.parse(access);
         const fetchTrips = await API.getDriverScheduledTrips(key);
         console.log(fetchTrips);
         if (fetchTrips.message) {
            setScheduleTrips(fetchTrips.scheduled_trips);
         } else {
            setScheduleTrips(fetchTrips);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };

   useEffect(() => {
      getActiveDriverTrips();
   }, []);
   useEffect(() => {
      getDriverScheduleTrips();
   }, []);
   console.log(location);
   console.log(scheduleTrips);

   return (
      <>
         <DriverNavbar title="Godman Transports" />
         <br />
         <DriverTable trip={trip} />
         <br />
         <DriverScheduleTable scheduledTrips={scheduleTrips} />
      </>
   );
};
export default DriverWorkspace;
