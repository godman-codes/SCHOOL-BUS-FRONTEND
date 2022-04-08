import React from "react";
import { Wrapper, Content } from "../../../Admin/components/Table/Table.styles";

const DriverTable = ({ trip }) => {
   return (
      <Wrapper>
         <h1>Active Trips</h1>
         <Content>
            <table>
               <thead>
                  <tr>
                     <td>Date/Time</td>
                     <td>Start Timestamp</td>
                     <td>Last Update</td>
                     <td>Location</td>
                     <td>Bus</td>
                     <td>Route</td>
                     <td>End Timestamp</td>
                     <td>Start</td>
                     <td>End</td>
                     <td>Track</td>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>{trip.date}</td>
                     <td>{trip.start_timestamp}</td>
                     <td>{trip.last_update_timestamp}</td>
                     <td>{trip.latest_gps}</td>
                     <td>{trip.bus_id}</td>
                     <td>{trip.routes}</td>
                     <td>{trip.end_timestamp}</td>
                     <td>
                        <button id="start">Start</button>
                     </td>
                     <td>
                        <button id="end">End</button>
                     </td>
                     <td>
                        <button>Track</button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </Content>
      </Wrapper>
   );
};
export default DriverTable;
