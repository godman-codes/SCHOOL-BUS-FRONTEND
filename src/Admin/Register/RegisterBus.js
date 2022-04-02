import React, { useContext, useState } from "react";
import API from "../../API";
//components
import AdminNavbar from "../components/AdminNavbar";
import RegisterBusForm from "./components/RegisterBusForm";
import NavErrors from "../../components/NavErrors";
//context
import { Context } from "../../Context";

const RegisterBus = () => {
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);

   const handleRegister = async (body) => {
      try {
         console.log(user.admin.access);
         const registerBus = await API.registerBus(body, user.admin.access);
         console.log(registerBus);
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
         <RegisterBusForm handler={handleRegister} />
      </>
   );
};
export default RegisterBus;
