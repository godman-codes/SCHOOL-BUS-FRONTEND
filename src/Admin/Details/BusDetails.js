import React, { useState, useContext, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Context } from "../../Context";
import API from "../../API";
import BusTable from "./Components/BusTable";

const BusDetails = () => {
   const [buses, setBuses] = useState([]);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);

   console.log(user);
   const getBuses = async (access) => {
      try {
         const fetchBusLog = await API.getBusLog(access);
         console.log(fetchBusLog);
         if (fetchBusLog.message) {
            setBuses(fetchBusLog.buses);
         } else {
            console.log(fetchBusLog.error);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
         console.log(errorMessage);
      }
   };
   useEffect(() => {
      const access = sessionStorage.getItem("access");
      const key = JSON.parse(access);
      console.table(buses);
      getBuses(key);
   }, []);

   return (
      <>
         <AdminNavbar title="Godman Trasports" />
         <br />
         <BusTable buses={buses} />
      </>
   );
};
export default BusDetails;
