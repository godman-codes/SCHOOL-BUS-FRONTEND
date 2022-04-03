import React, { useContext, useState, useEffect } from "react";
import AdminNavbar from "./components/AdminNavbar";
import { Context } from "../Context";
import API from "../API";
import Table from "./components/Table";
const AdminWorkspace = () => {
   const [trips, setTrips] = useState([]);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);

   console.log(user);
   const getActiveTrips = async () => {
      try {
         const fetchTrips = await API.getActiveTrips(user.admin.access);
         console.log(fetchTrips);
         if (fetchTrips.message) {
            setTrips(fetchTrips.active_trips);
         } else {
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   useEffect(() => {
      getActiveTrips();
   }, []);
   console.table(trips);
   return (
      <>
         <AdminNavbar title="Godman Transports" />
         <br />
         <Table activeTrips={trips} />
      </>
   );
};
export default AdminWorkspace;
