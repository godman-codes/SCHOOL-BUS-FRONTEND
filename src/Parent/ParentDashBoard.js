import React, { useState, useContext, useEffect } from "react";
import DriverNavbar from "../Driver/components/DriverNavbar";
import ScheduledTable from "./components/ScheduleTable";
import MorningActiveTrips from "./components/MorningActiveTrips";
import ChildrenComponent from "./components/ChildrenComponent";
// import { Context } from "../Context";
import API from "../API";
import Thumb from "../components/Thumb";

const ParentDashboard = () => {
   const key = JSON.parse(sessionStorage.getItem("parentAccess"));
   const myKids = JSON.parse(sessionStorage.getItem("myKids"));
   const [scheduledTrips, setScheduledTrips] = useState([]);
   const [morningActiveTrips, setMorningActiveTrips] = useState([]);
   const [refresh, setRefresh] = useState(false);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");

   const getChildrenScheduledTrip = async () => {
      try {
         const fetchTrips = await API.getParentScheduledChildrenTrips(key);
         console.log(fetchTrips);
         if (fetchTrips.message) {
            setScheduledTrips(fetchTrips.children_scheduled_trips);
            console.log(fetchTrips.children_scheduled_trips);
         } else {
            setScheduledTrips(fetchTrips);
            console.log(fetchTrips);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   const getMorningTrips = async () => {
      try {
         const fetchTrips = await API.getMorningTrips(key);
         console.log(fetchTrips);
         if (fetchTrips.message) {
            setMorningActiveTrips(fetchTrips.morning_trips);
            console.log(fetchTrips.morning_trips);
         } else {
            setMorningActiveTrips(fetchTrips);
            console.log(fetchTrips);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };

   useEffect(() => {
      getChildrenScheduledTrip();
      getMorningTrips();
      console.log(myKids);
   }, [refresh]);

   console.log(scheduledTrips);
   return (
      <>
         <DriverNavbar title="Godman Transports" />
         <br />
         <ChildrenComponent kids={myKids} />
         <br />
         <MorningActiveTrips morningActiveTrips={morningActiveTrips} />
         <br />
         <ScheduledTable scheduledTrips={scheduledTrips} />
         <br />
      </>
   );
};
export default ParentDashboard;
