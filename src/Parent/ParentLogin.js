import React, { useState } from "react";
import NavErrors from "../components/NavErrors";
import HomeNavbar from "../components/HomeNavbar";
import LoginForm from "./components/LoginForm";
import { useNavigate } from "react-router-dom";
import API from "../API";

const ParentLogin = () => {
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const navigate = useNavigate();

   const handleLogin = async (body) => {
      try {
         const loginParentToken = await API.loginParent(body);
         console.log(loginParentToken);
         if (loginParentToken.parent) {
            setError(false);
            navigate("/parent_dashboard");
            console.log(loginParentToken.parent);
         } else {
            setError(true);
            setErrorMessage(loginParentToken.error);
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

         <LoginForm handler={handleLogin} />
      </>
   );
};
export default ParentLogin;
