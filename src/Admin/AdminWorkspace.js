import React, { useContext, useState, useEffect } from "react";
import AdminNavbar from "./components/AdminNavbar";
import { Context } from "../Context";
import API from "../API";
import Table from "./components/Table";
import ScheduleTable from "./components/ScheduleTable";
const AdminWorkspace = () => {
   const [activeTrips, setActiveTrips] = useState([]);
   const [scheduledTrips, setScheduledTrips] = useState([]);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);

   console.log(user);
   const getActiveTrips = async () => {
      try {
         const access = sessionStorage.getItem("access");
         const key = JSON.parse(access);
         const fetchTrips = await API.getActiveTrips(key);
         console.log(fetchTrips);
         if (fetchTrips.message) {
            setActiveTrips(fetchTrips.active_trips);
         } else {
            setActiveTrips(fetchTrips);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   const getScheduledTrips = async () => {
      try {
         const access = sessionStorage.getItem("access");
         const key = JSON.parse(access);
         const fetchTrips = await API.getScheduledTrips(key);
         console.log(fetchTrips);
         if (fetchTrips.message) {
            setScheduledTrips(fetchTrips.scheduled_trips);
         } else {
            setScheduledTrips(fetchTrips);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   useEffect(() => {
      getActiveTrips();
      getScheduledTrips();
   }, []);
   console.table(activeTrips);
   console.table(scheduledTrips);
   return (
      <>
         <AdminNavbar title="Godman Transports" />
         <br />
         <Table activeTrips={activeTrips} />
         <br />
         <ScheduleTable scheduledTrips={scheduledTrips} />
      </>
   );
};
export default AdminWorkspace;
