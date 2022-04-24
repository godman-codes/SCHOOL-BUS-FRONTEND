import React from "react";
import { Wrapper, Content } from "../../../Admin/components/Table/Table.styles";
import { useNavigate } from "react-router-dom";

const DriverScheduleTable = ({ scheduledTrips }) => {
   const navigate = useNavigate();

   return (
      <Wrapper>
         <h1>Scheduled Trips</h1>
         <Content>
            <table>
               <thead>
                  <tr>
                     <td>ID</td>
                     <td>Date</td>
                     <td>Time</td>
                     <td>Bus</td>
                     <td>Route</td>
                     <td>Open</td>
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
                           <td>{trip.id}</td>
                           <td>{trip.date.slice(0, 10)}</td>
                           <td>{trip.date.slice(11)}</td>
                           <td>{trip.bus_id}</td>
                           <td>{trip.routes}</td>
                           <td>
                              <button
                                 onClick={() => {
                                    navigate(`/driver_trip_tracker/${trip.id}`);
                                 }}
                              >
                                 Open
                              </button>
                           </td>
                        </tr>
                     ))
                  )}
               </tbody>
            </table>
         </Content>
      </Wrapper>
   );
};
export default DriverScheduleTable;