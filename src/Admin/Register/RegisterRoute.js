import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import RegisterRouteForm from "./components/RegisterRouteForm";

const RegisterRoute = () => {
   return (
      <>
         <AdminNavbar title="Godman Transports" />
         <RegisterRouteForm />
      </>
   );
};
export default RegisterRoute;
