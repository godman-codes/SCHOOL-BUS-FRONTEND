import React from "react";

import AdminNavbar from "../components/AdminNavbar";
import RegisterBusForm from "./components/RegisterBusForm";

const RegisterBus = () => {
   return (
      <>
         <AdminNavbar title="Godman Transport" />
         <RegisterBusForm />
      </>
   );
};
export default RegisterBus;
