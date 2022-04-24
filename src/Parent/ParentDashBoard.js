import React, { useState, useContext, useEffect } from "react";
import DriverNavbar from "../Driver/components/DriverNavbar";
import { Context } from "../Context";
import API from "../API";
import Grid from "../components/Grid.js/index.js";
import Thumb from "../components/Thumb";

const ParentDashboard = () => {
   const key = JSON.parse(sessionStorage.getItem("parentAccess"));
   const [children, setChildren] = useState([]);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);

   console.log(user);

   useEffect(() => {
      // getChildrenTripsLog(key);
   }, []);

   console.log(children);
   return (
      <>
         <DriverNavbar title="Godman Transports" />
         <br />
         {/* <Grid header="My Kids">
            {children.map((child) => (
               <Thumb entity={child} key={child.id} />
            ))}
         </Grid> */}
      </>
   );
};
export default ParentDashboard;
