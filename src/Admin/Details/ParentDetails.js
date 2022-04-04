import React, { useState, useContext, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Context } from "../../Context";
import API from "../../API";
import ParentTable from "./Components/ParentTable";

const ParentDetails = () => {
   const [parents, setParents] = useState([]);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);

   console.log(user);
   const getParents = async (access) => {
      try {
         const fetchParentLog = await API.getParentLog(access);
         console.log(fetchParentLog);
         if (fetchParentLog.message) {
            setParents(fetchParentLog.parents);
         } else {
            console.log(fetchParentLog.error);
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
      console.table(parents);
      getParents(key);
   }, []);

   return (
      <>
         <AdminNavbar title="Godman Trasports" />
         <br />
         <ParentTable parents={parents} />
      </>
   );
};
export default ParentDetails;
