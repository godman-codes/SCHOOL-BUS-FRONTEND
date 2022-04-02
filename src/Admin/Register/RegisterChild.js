import React, { useState, useContext } from "react";
import API from "../../API";

//components
import AdminNavbar from "../components/AdminNavbar";
import RegisterChildForm from "./components/RegisterChildForm";
import NavErrors from "../../components/NavErrors";
import { Context } from "../../Context";

const RegisterChild = () => {
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);
   const handleRegister = async (body) => {
      try {
         console.log(user.admin.access);
         const registerBus = await API.registerChild(body, user.admin.access);
         console.table(registerBus);
         if (registerBus.message) {
            console.log(registerBus);
            setError(false);
         } else {
            setError(true);
            setErrorMessage(registerBus.error);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   return (
      <>
         <AdminNavbar title="Godman Transport" />
         {error && (
            <NavErrors errorMessage={errorMessage} setError={setError} />
         )}
         <RegisterChildForm handler={handleRegister} />
      </>
   );
};
export default RegisterChild;
