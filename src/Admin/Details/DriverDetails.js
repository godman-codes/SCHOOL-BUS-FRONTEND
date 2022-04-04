import React, { useState, useContext, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import DriverTable from "./Components/DriverTable";
import { Context } from "../../Context";
import API from "../../API";

const DriverDetails = () => {
   const [drivers, setDrivers] = useState([]);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);

   const getDrivers = async (access) => {
      try {
         const fetchDriverLog = await API.getDriverLog(access);
         console.log(fetchDriverLog);
         if (fetchDriverLog.message) {
            setDrivers(fetchDriverLog.drivers);
         } else {
            console.log(fetchDriverLog.error);
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
      console.table(drivers);
      getDrivers(key);
   }, []);
   return (
      <>
         <AdminNavbar title="Godman Transports" />
         <br />
         <DriverTable drivers={drivers} />
      </>
   );
};
export default DriverDetails;
