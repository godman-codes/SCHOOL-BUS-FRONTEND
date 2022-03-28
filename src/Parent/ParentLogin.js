import React from "react";

import HomeNavbar from "../components/HomeNavbar";
import LoginForm from "./components/LoginForm";

const ParentLogin = () => {
   return (
      <>
         <HomeNavbar title="Godman Transports" />
         <LoginForm />
      </>
   );
};
export default ParentLogin;
