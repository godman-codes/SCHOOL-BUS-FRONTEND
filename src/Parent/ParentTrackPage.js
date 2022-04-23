import React from "react";
import DriverNavbar from "../Driver/components/DriverNavbar";
import { useParams } from "react-router-dom";
import Map from "../Driver/components/Maps/Maps";
import useGeoLocation from "../hooks/useGeoLocation";

const ParentTrackPage = () => {
   const { id } = useParams();

   return (
      <>
         <DriverNavbar />
         <Map />
      </>
   );
};
export default ParentTrackPage;
