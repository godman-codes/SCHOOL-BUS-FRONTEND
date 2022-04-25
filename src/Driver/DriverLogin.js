import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";

import HomeNavbar from "../components/HomeNavbar";
import LoginForm from "./components/LoginForm";
import NavErrors from "../components/NavErrors";

const DriverLogin = () => {
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const navigate = useNavigate();

   const handleLogin = async (body) => {
      try {
         const loginDriverToken = await API.loginDriver(body);
         console.log(loginDriverToken);
         if (loginDriverToken.driver) {
            sessionStorage.setItem(
               "driverAccess",
               JSON.stringify(loginDriverToken.driver.access)
            );
            setError(false);
            navigate("/driver_workspace");
            console.log(loginDriverToken.driver);
         } else {
            setError(true);
            setErrorMessage((loginDriverToken.error = "Invalid Credentials"));
            console.log(loginDriverToken.error);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   return (
      <>
         <HomeNavbar title="Godman Transports" />
         {error && (
            <NavErrors errorMessage={errorMessage} setError={setError} />
         )}
         <br />
         <br />
         <LoginForm handler={handleLogin} />
      </>
   );
};
export default DriverLogin;
