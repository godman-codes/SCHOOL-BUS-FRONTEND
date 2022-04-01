import React from "react";

import AdminNavbar from "../components/AdminNavbar";
import RegisterDriverForm from "./components/RegisterDriverForm";
const RegisterDriver = () => {
   return (
      <>
         <AdminNavbar title="Godman Transport" />
         <RegisterDriverForm />
      </>
   );
};
export default RegisterDriver;
