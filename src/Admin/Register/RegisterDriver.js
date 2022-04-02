import React, { useState, useContext } from "react";
import API from "../../API";
//components
import AdminNavbar from "../components/AdminNavbar";
import RegisterDriverForm from "./components/RegisterDriverForm";
import NavErrors from "../../components/NavErrors";
//context
import { Context } from "../../Context";

const RegisterDriver = () => {
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);
   const handleRegister = async (body) => {
      try {
         console.log(user.admin.access);
         const registerDriver = await API.registerDriver(
            body,
            user.admin.access
         );
         console.log(registerDriver);
         if (registerDriver.message) {
            console.log(registerDriver);
            setError(false);
         } else {
            setError(true);
            setErrorMessage(registerDriver.error);
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
         <RegisterDriverForm handler={handleRegister} />
      </>
   );
};
export default RegisterDriver;
