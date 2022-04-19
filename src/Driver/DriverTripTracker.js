import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DriverNavbar from "./components/DriverNavbar";
import Map from "./components/Maps/Maps";
import API from "../API";
import useGeoLocation from "../hooks/useGeoLocation";
import { Wrapper } from "./components/DriverTripTracker.styles";

const DriverTripTracker = () => {
   const { id } = useParams();
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [trip, setTrips] = useState({});
   const { location, setTrackState } = useGeoLocation();

   const getTrip = async (identifier) => {
      try {
         const access = sessionStorage.getItem("driverAccess");
         const key = JSON.parse(access);
         const fetchTrip = await API.getDriverCurrentTrip(key, identifier);
         console.log(fetchTrip);
         if (fetchTrip.message) {
            setTrips(fetchTrip.trip);
         } else {
            setError(true);
            setErrorMessage(fetchTrip.error);
         }
      } catch (error) {
         setError(true);
         setErrorMessage("server error");
      }
   };
   useEffect(() => {
      getTrip(id);
   }, [id]);

   return (
      <>
         <DriverNavbar title="Godman Transports" />
         <Map center={location.coordinates}></Map>
         <Wrapper>
            <button id="start" onClick={() => setTrackState(true)}>
               Start
            </button>
            <button id="end" onClick={() => setTrackState(false)}>
               End
            </button>
         </Wrapper>
         {/* <Map center={{ lat: 6.4474, lng: 3.3903 }}></Map> */}
      </>
   );
};
export default DriverTripTracker;
