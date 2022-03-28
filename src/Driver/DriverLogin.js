import React from "react";

import HomeNavbar from "../components/HomeNavbar";
import LoginForm from "./components/ParentLoginForm";

const DriverLogin = () => {
   return (
      <>
         <HomeNavbar title="Godman Transports" />
         <LoginForm />
      </>
   );
};
export default DriverLogin;
