import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./DriverTable.styles";
const DriverTable = ({ trip }) => {
   return (
      <Wrapper>
         <h1>Active Trips</h1>
         <Content>
            <table>
               <thead>
                  <tr>
                     <td>Date/Time</td>
                     <td className="hide">Start Timestamp</td>
                     <td className="hide">Last Update</td>
                     <td className="hide">Location</td>
                     <td className="hide">Bus</td>
                     <td>Route</td>
                     <td className="hide">End Timestamp</td>
                     <td>Open</td>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>{trip.date}</td>
                     <td className="hide">{trip.start_timestamp}</td>
                     <td className="hide">{trip.last_update_timestamp}</td>
                     <td className="hide">{trip.latest_gps}</td>
                     <td className="hide">{trip.bus_id}</td>
                     <td>{trip.routes}</td>
                     <td className="hide">{trip.end_timestamp}</td>
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
