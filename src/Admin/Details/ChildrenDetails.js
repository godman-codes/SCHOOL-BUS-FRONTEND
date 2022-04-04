import React, { useState, useContext, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Context } from "../../Context";
import API from "../../API";
import ChildrenTable from "./Components/ChildrenTable";

const ChildrenDetails = () => {
   const [children, setChildren] = useState([]);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);

   console.log(user);
   const getChildren = async (access) => {
      try {
         const fetchChildrenLog = await API.getChildrenLog(access);
         console.log(fetchChildrenLog);
         if (fetchChildrenLog.message) {
            setChildren(fetchChildrenLog.children);
         } else {
            console.log(fetchChildrenLog.error);
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
      console.table(children);
      getChildren(key);
   }, []);

   return (
      <>
         <AdminNavbar title="Godman Trasports" />
         <br />
         <ChildrenTable children={children} />
      </>
   );
};
export default ChildrenDetails;
