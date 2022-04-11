import React from "react";
import { Link } from "react-router-dom";
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
                     <td>Open</td>
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
                        <Link to={`/driver_trip_tracker/${trip.id}`}>
                           <button style={{ cursor: "pointer" }}>Open</button>
                        </Link>
                     </td>
                  </tr>
               </tbody>
            </table>
         </Content>
      </Wrapper>
   );
};
export default DriverTable;
