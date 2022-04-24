import React from "react";
import { Wrapper, Content } from "../Table/Table.styles";

const ScheduleTable = ({ scheduledTrips }) => {
   return (
      <Wrapper>
         <h1>Scheduled Trips</h1>
         <Content>
            <table>
               <thead>
                  <tr>
                     <td>Date</td>
                     <td>Time</td>
                     <td>Bus</td>
                     <td>route</td>
                  </tr>
               </thead>
               <tbody>
                  {scheduledTrips.error ? (
                     <tr>
                        <td colSpan="4">{scheduledTrips.error}</td>
                     </tr>
                  ) : (
                     scheduledTrips.map((trip, i) => (
                        <tr key={i}>
                           <td>{trip.date.slice(0, 10)}</td>
                           <td>{trip.date.slice(11)}</td>
                           <td>{trip.bus_id}</td>
                           <td>{trip.routes}</td>
                        </tr>
                     ))
                  )}
               </tbody>
            </table>
         </Content>
      </Wrapper>
   );
};
export default ScheduleTable;
