import React, { useState, useEffect } from "react";
import { Wrapper, Content } from "./KidCard.styles";
import API from "../../../../API";
import { useNavigate } from "react-router-dom";

const KidCard = ({ kid }) => {
   const navigate = useNavigate();
   const [activeKidTrip, setActiveKidTrip] = useState({});
   const key = JSON.parse(sessionStorage.getItem("parentAccess"));

   const getKidScheduledTrip = async () => {
      try {
         const fetchTrips = await API.getCurrentChildActiveTrip(key, kid.id);
         console.log(fetchTrips);
         if (fetchTrips.message) {
            setActiveKidTrip(fetchTrips.active_trip);
            console.log(fetchTrips.active_trip);
         } else {
            setActiveKidTrip(fetchTrips);
            console.log(fetchTrips);
         }
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      getKidScheduledTrip();
   }, []);

   return (
      <Wrapper
      // onClick={() => {
      //    if (activeKidTrip.error) {
      //       navigate(`/parent_track/${activeKidTrip.id}`);
      //    }
      // }}
      >
         <Content
            id={activeKidTrip.is_active ? "active" : null}
            onClick={() => {
               if (activeKidTrip.error) {
                  alert("This kid is not on a trip");
               }
               navigate(`/parent_track/${activeKidTrip.id}/${kid.id}`);
            }}
         >
            <h1>{kid.first_name}</h1>
            <hr />
            {activeKidTrip.error ? (
               <div>
                  <p id="error-p">{activeKidTrip.error}</p>
               </div>
            ) : (
               <div>
                  <h3>{activeKidTrip.bus_name}</h3>
                  <h3>{activeKidTrip.plate_number}</h3>
                  <h3>{activeKidTrip.driver}</h3>
                  <h3>{activeKidTrip.driver_phone}</h3>
               </div>
            )}
         </Content>
      </Wrapper>
   );
};

export default KidCard;
