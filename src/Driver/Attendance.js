import React, { useState, useEffect, useReducer } from "react";
import DriverNavbar from "./components/DriverNavbar";
import AttendanceForm from "./components/AttendanceForm";
import { Wrapper } from "./components/Attendance.styles";
// import { Context } from "../Context";
import API from "../API";
import AttendanceTable from "./components/AttendanceTable";

const reducer = (state, action) => {
   switch (action.type) {
      case "showPick":
         return { ...state, showPick: true, showDrop: false };
      case "showDrop":
         return { ...state, showPick: false, showDrop: true };
      default:
         return state;
   }
};
const Attendance = () => {
   const [att, setAtt] = useState([]);
   const [state, dispatch] = useReducer(reducer, {
      showPick: false,
      showDrop: false,
   });
   // const [showDiv, setShowDiv] = useState("show");
   const [error, setError] = useState(false);
   const [refresh, setRefresh] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const driverTrip = JSON.parse(sessionStorage.getItem("trip"));
   const key = JSON.parse(sessionStorage.getItem("driverAccess"));
   // const [user] = useContext(Context);

   // console.log(user);
   const getAttendance = async () => {
      try {
         const fetchAttendance = await API.getDriversAttendance(
            key,
            driverTrip.id
         );
         console.log(fetchAttendance);
         if (fetchAttendance.message) {
            setError(false);
            setAtt(fetchAttendance.attendance);
         } else {
            setAtt(fetchAttendance);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   const postPickedAtt = async (body) => {
      try {
         const postAtt = await API.postChildPickedAttendance(
            body,
            key,
            driverTrip.id
         );
         console.log(postAtt);
         if (postAtt.message) {
            setError(false);
            setRefresh(!refresh);
            console.log(postAtt.message);
         } else {
            setError(true);
            setErrorMessage(postAtt.error);
            console.log(postAtt.error);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   const postDroppedAtt = async (body) => {
      try {
         const postAtt = await API.postChildDroppedAttendance(
            body,
            key,
            driverTrip.id
         );
         console.log(postAtt);
         if (postAtt.message) {
            setError(false);
            setRefresh(!refresh);
            console.log(postAtt.message);
         } else {
            setError(true);
            setErrorMessage(postAtt.error);
            console.log(postAtt.error);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };

   useEffect(() => {
      getAttendance();
   }, [refresh]);
   console.table(att);

   return (
      <>
         <DriverNavbar title="Godman Transports" />
         <br />
         <Wrapper>
            <div id="action-btn">
               <button
                  id={state.showPick ? "active" : "pick"}
                  onClick={() => {
                     dispatch({ type: "showPick" });
                  }}
               >
                  Pick
               </button>
               <button
                  id={state.showDrop ? "active" : "drop"}
                  onClick={() => {
                     dispatch({ type: "showDrop" });
                  }}
               >
                  Drop
               </button>
            </div>
            {state.showPick && (
               <AttendanceForm text="Pick Child" handler={postPickedAtt} />
            )}
            {state.showDrop && (
               <AttendanceForm text="Drop Child" handler={postDroppedAtt} />
            )}
         </Wrapper>
         <AttendanceTable attendance={att} />
         <br />
         <br />
      </>
   );
};
export default Attendance;
