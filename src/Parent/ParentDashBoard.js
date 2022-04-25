import React, { useState, useContext, useEffect } from "react";
import DriverNavbar from "../Driver/components/DriverNavbar";
import ScheduledTable from "./components/Scheduletable";
import ChildrenComponent from "./components/ChildrenComponent";
// import { Context } from "../Context";
import API from "../API";
import Thumb from "../components/Thumb";

const ParentDashboard = () => {
   const key = JSON.parse(sessionStorage.getItem("parentAccess"));
   const myKids = JSON.parse(localStorage.getItem("myKids"));
   const [scheduledTrips, setScheduledTrips] = useState([]);
   const [refresh, setRefresh] = useState(false);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");

   const getChildrenScheduledTrip = async () => {
      try {
         const fetchTrips = await API.getParentScheduledChildrenTrips(key);
         console.log(fetchTrips);
         if (fetchTrips.message) {
            setScheduledTrips(fetchTrips.children);
            console.log(fetchTrips.children);
         } else {
            setScheduledTrips(fetchTrips);
            console.log(fetchTrips);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   useEffect(() => {
      getChildrenScheduledTrip();
      console.log(myKids);
   }, [refresh]);

   console.log(scheduledTrips);
   return (
      <>
         <DriverNavbar title="Godman Transports" />
         <br />
         <ChildrenComponent kids={myKids} />
         <br />
         <ScheduledTable scheduledTrips={scheduledTrips} />
      </>
   );
};
export default ParentDashboard;
