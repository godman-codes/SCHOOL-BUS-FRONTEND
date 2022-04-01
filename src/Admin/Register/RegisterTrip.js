import React from "react";
import RegisterTripForm from "./components/RegisterTripForm";
import AdminNavbar from "../components/AdminNavbar";
const RegisterTrip = () => {
   return (
      <>
         <AdminNavbar title="Godman Transport" />
         <RegisterTripForm />
      </>
   );
};
export default RegisterTrip;
