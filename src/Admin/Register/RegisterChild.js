import React from "react";

import AdminNavbar from "../components/AdminNavbar";
import RegisterChildForm from "./components/RegisterChildForm";

const RegisterChild = () => {
   return (
      <>
         <AdminNavbar title="Godman Transport" />
         <RegisterChildForm />
      </>
   );
};
export default RegisterChild;
