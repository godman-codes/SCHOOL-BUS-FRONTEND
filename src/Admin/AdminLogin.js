import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";

import { Context } from "../Context";
import HomeNavbar from "../components/HomeNavbar";
import LoginForm from "./components/LoginForm";
import NavErrors from "../components/NavErrors";

const AdminLogin = () => {
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const navigate = useNavigate();
   const [user, setUser] = useContext(Context);
   const handleLogin = async (body) => {
      try {
         const loginAdminToken = await API.loginAdmin(body);
         console.log(loginAdminToken);
         if (loginAdminToken.admin) {
            setError(false);
            setUser({ admin: loginAdminToken.admin });
            navigate("/admin_workspace");
            console.log(loginAdminToken.admin);
         } else {
            setError(true);
            setErrorMessage(loginAdminToken.error);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   return (
      <>
         <HomeNavbar />
         {error && (
            <NavErrors errorMessage={errorMessage} setError={setError} />
         )}
         <LoginForm handler={handleLogin} />
      </>
   );
};
export default AdminLogin;
