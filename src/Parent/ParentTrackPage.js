import React, { useEffect, useState } from "react";
import DriverNavbar from "../Driver/components/DriverNavbar";
import { useParams, useNavigate } from "react-router-dom";
import Map from "../Driver/components/Maps/Maps";
import API from "../API";

const ParentTrackPage = () => {
   const key = JSON.parse(sessionStorage.getItem("parentAccess"));
   const [error, setError] = useState(false);
   // const [stop, setStop] = useState(false);
   const [location, setLocation] = useState({ lat: 0.0, lng: 0.0 });
   const { id } = useParams();
   const { child_id } = useParams();
   const navigate = useNavigate();

   const getChildLocation = async () => {
      try {
         const fetchLocation = await API.getChildTripLocation(
            key,
            id,
            child_id
         );
         console.log(fetchLocation);
         if (fetchLocation.message) {
            setLocation(JSON.parse(fetchLocation.location));
            console.log(fetchLocation.location);
         } else {
            setError(true);
            console.log(fetchLocation);
         }
      } catch (error) {
         setError(true);
         console.log(error);
      }
   };
   useEffect(() => {
      let interval = null;
      console.log("getlocation interval");
      console.log(`error is ${error}`);
      // console.log(stop);
      if (!error) {
         console.log("interval starting");
         interval = setInterval(() => {
            console.log("the interval is running");
            getChildLocation();
         }, 5000);
      } else {
         clearInterval(interval);
         navigate("/parent_dashboard");
         alert("This kid has completed their trip");
      }
      return () => clearInterval(interval);
   }, [error, location]);
   console.log(location);

   return (
      <>
         <DriverNavbar />
         <Map center={location} />
      </>
   );
};
export default ParentTrackPage;
