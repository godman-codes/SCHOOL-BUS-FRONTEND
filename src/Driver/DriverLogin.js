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
      const loginDriverToken = await API.loginDriver(body);
      console.log(loginDriverToken);
      if (loginDriverToken.driver) {
         setError(false);
         navigate("/driver_workspace");
         console.log(loginDriverToken.driver);
      } else {
         setError(true);
         setErrorMessage((loginDriverToken.error = "Invalid Credentials"));
         console.log(loginDriverToken.error);
      }
   };
   return (
      <>
         <HomeNavbar title="Godman Transports" />
         {error && (
            <NavErrors errorMessage={errorMessage} setError={setError} />
         )}
         <LoginForm handler={handleLogin} />
      </>
   );
};
export default DriverLogin;
