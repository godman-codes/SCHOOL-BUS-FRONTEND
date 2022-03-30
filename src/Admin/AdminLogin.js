import React, { useState } from "react";
import API from "../API";

import HomeNavbar from "../components/HomeNavbar";
import LoginForm from "./components/LoginForm";

const AdminLogin = () => {
   // const [body, setBody] = useState({});
   // const [error, setError] = useState(false);
   // const handleLogin = async (body) => {
   //    console.log("man");
   //    setError(false);
   //    try {
   //       const LoginD = await API.LoginAdmin(body);
   //    } catch (error) {
   //       setError(true);
   //    }
   // };
   return (
      <>
         <HomeNavbar />
         <LoginForm />
      </>
   );
};
export default AdminLogin;
