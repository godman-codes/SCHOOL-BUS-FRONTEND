import React, { useState, useContext } from "react";
import API from "../../API";
//components
import AdminNavbar from "../components/AdminNavbar";
import RegisterRouteForm from "./components/RegisterRouteForm";

import NavErrors from "../../components/NavErrors";
//context
import { Context } from "../../Context";

const RegisterRoute = () => {
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);
   const handleRegister = async (body) => {
      try {
         console.log(user.admin.access);
         const registerRoute = await API.registerRoute(body, user.admin.access);
         console.table(registerRoute);
         if (registerRoute.message) {
            console.log(registerRoute);
            setError(false);
         } else {
            setError(true);
            setErrorMessage(registerRoute.error);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   return (
      <>
         <AdminNavbar title="Godman Transports" />
         {error && (
            <NavErrors errorMessage={errorMessage} setError={setError} />
         )}
         <RegisterRouteForm handler={handleRegister} />
      </>
   );
};
export default RegisterRoute;
