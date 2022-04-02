import React, { useState, useContext } from "react";
import API from "../../API";

import AdminNavbar from "../components/AdminNavbar";
import RegisterParentForm from "./components/RegisterParentForm";
import { Context } from "../../Context";
import NavErrors from "../../components/NavErrors";
const ParentRegister = () => {
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);
   const handleRegister = async (body) => {
      try {
         console.log(user.admin.access);
         const registerParents = await API.registerParent(
            body,
            user.admin.access
         );
         console.log(registerParents);
         if (registerParents.message) {
            console.log(registerParents);
            setError(false);
         } else {
            setError(true);
            setErrorMessage(registerParents.error);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   return (
      <>
         <AdminNavbar title="Godman Transports" />
         {error && (
            <NavErrors errorMessage={errorMessage} setError={setError} />
         )}
         <RegisterParentForm handler={handleRegister} />
      </>
   );
};
export default ParentRegister;
