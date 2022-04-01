import React from "react";

import HomeNavbar from "../components/HomeNavbar";
import RegisterForm from "./components/RegisterForm";

const AdminRegister = () => {
   return (
      <>
         <HomeNavbar title="Godman Transport" />
         <RegisterForm />
      </>
   );
};
export default AdminRegister;
