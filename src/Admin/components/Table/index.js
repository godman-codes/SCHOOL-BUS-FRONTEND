import React from "react";
import { Wrapper, Content } from "./Table.styles";
const Table = ({ activeTrips }) => {
   return (
      <Wrapper>
         <Content>
            <table>
               <thead>
                  <tr>
                     <td>Date</td>
                     <td>Start Timestamp</td>
                     <td>Last Update</td>
                     <td>Location</td>
                     <td>Bus</td>
                     <td>active</td>
                     <td>track</td>
                  </tr>
               </thead>
               <tbody>
                  {activeTrips.map((trip, i) => (
                     <tr key={i}>
                        <td>{trip.date}</td>
                        <td>{trip.start_timestamp}</td>
                        <td>{trip.last_update_timestamp}</td>
                        <td>{trip.latest_gps}</td>
                        <td>{trip.bus_id}</td>
                        <td>
                           <button id="active"></button>
                        </td>
                        <td>
                           <button id="track">Track</button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </Content>
      </Wrapper>
   );
};
export default Table;
