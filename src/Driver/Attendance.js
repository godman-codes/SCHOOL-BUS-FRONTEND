import React, { useState, useContext, useEffect } from "react";
import DriverNavbar from "./components/DriverNavbar";
import AttendanceForm from "./components/AttendanceForm";
import { Context } from "../Context";
import API from "../API";
import AttendanceTable from "./components/AttendanceTable";

const Attendance = () => {
   const [att, setAtt] = useState([]);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [user] = useContext(Context);

   console.log(user);
   const getAttendance = async () => {
      try {
         const access = sessionStorage.getItem("driverAccess");
         const key = JSON.parse(access);
         const fetchAttendance = await API.getDriversAttendance(key);
         console.log(fetchAttendance);
         if (fetchAttendance.message) {
            setError(false);
            setAtt(fetchAttendance.attendance);
         } else {
            setError(true);
            setErrorMessage(fetchAttendance.error);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   useEffect(() => {
      getAttendance();
   }, []);
   console.table(att);

   return (
      <>
         <DriverNavbar title="Godman Transports" />
         <br />
         <AttendanceForm text="Picked Att" />
         <AttendanceForm text="Dropped Att" />
         <AttendanceTable attendance={att} />
      </>
   );
};
export default Attendance;
