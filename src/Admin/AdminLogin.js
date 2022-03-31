import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";

import HomeNavbar from "../components/HomeNavbar";
import LoginForm from "./components/LoginForm";
import NavErrors from "../components/NavErrors";

const AdminLogin = () => {
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const navigate = useNavigate();

   const handleLogin = async (body) => {
      const loginAdminToken = await API.loginAdmin(body);
      console.log(loginAdminToken);
      if (loginAdminToken.admin) {
         setError(false);
         navigate("/admin_workspace");
         console.log(loginAdminToken.admin);
      } else {
         setError(true);
         setErrorMessage(loginAdminToken.error);
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
