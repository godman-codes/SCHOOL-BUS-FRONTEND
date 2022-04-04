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
   const getParents = async () => {
      try {
         const fetchParentLog = await API.getParentLog(user.admin.access);
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
      console.table(parents);
      getParents();
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
