import React, { useState, useContext } from "react";
//Api
import API from "../../API";
//components
import RegisterTripForm from "./components/RegisterTripForm";
import AdminNavbar from "../components/AdminNavbar";
import NavErrors from "../../components/NavErrors";
//context
import { Context } from "../../Context";

const RegisterTrip = () => {
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);
   const handleRegister = async (body) => {
      try {
         console.log(user.admin.access);
         const registerTrip = await API.registerTrip(body, user.admin.access);
         console.log(registerTrip);
         if (registerTrip.message) {
            console.log(registerTrip);
            setError(false);
         } else {
            setError(true);
            setErrorMessage(registerTrip.error);
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
         <RegisterTripForm handler={handleRegister} />
      </>
   );
};
export default RegisterTrip;
