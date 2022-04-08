import React from "react";
import { Wrapper, Content } from "./Thumb.styles";

const Thumb = ({ entity }) => {
   return (
      <Wrapper>
         <Content>
            <h2>{entity.first_name}</h2>
            <div>
               <h2>Trips</h2>
               {entity.trip.map((trips, i) => (
                  <div key={i}>
                     <p>Date: {trips.date}</p>
                     <p>Route: {trips.routes}</p>
                     {entity.driver.map((drivers, i) =>
                        drivers.trip_id === trips.id ? (
                           <p key={i}>Driver: {drivers.first_name}</p>
                        ) : null
                     )}
                     {entity.bus.map((buss, i) =>
                        buss.trip_id === trips.id ? (
                           <div key={i}>
                              <p>bus: {buss.plate_number}</p>
                              <p>Make: {buss.bus_name}</p>
                              <p>
                                 Active:{"   "}
                                 <button
                                    id={buss.active ? "active" : "notActive"}
                                 ></button>
                              </p>
                           </div>
                        ) : null
                     )}
                     <button>Track</button>
                  </div>
               ))}
            </div>
         </Content>
      </Wrapper>
   );
};
export default Thumb;
