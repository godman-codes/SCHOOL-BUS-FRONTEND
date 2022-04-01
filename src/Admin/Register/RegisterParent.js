import React from "react";

import AdminNavbar from "../components/AdminNavbar";
import RegisterParentForm from "./components/RegisterParentForm";

const ParentRegister = () => {
   return (
      <>
         <AdminNavbar title="Godman Transports" />
         <RegisterParentForm />
      </>
   );
};
export default ParentRegister;
