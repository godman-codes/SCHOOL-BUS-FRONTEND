import React from "react";
import { Wrapper, Content } from "../../../Admin/components/Table/Table.styles";
import { useNavigate } from "react-router-dom";

const MorningActiveTrips = ({ morningActiveTrips }) => {
   const navigate = useNavigate();

   return (
      <Wrapper>
         <h1>Morning Trips</h1>
         <Content>
            <table>
               <thead>
                  <tr>
                     <td>ID</td>
                     <td>Date</td>
                     <td>Time</td>
                     <td>Route</td>
                     <td>Open</td>
                  </tr>
               </thead>
               <tbody>
                  {morningActiveTrips.error ? (
                     <tr>
                        <td colSpan="10">{morningActiveTrips.error}</td>
                     </tr>
                  ) : (
                     morningActiveTrips.map((trip, i) => (
                        <tr key={i}>
                           <td>{trip.id}</td>
                           <td>{trip.date.slice(0, 10)}</td>
                           <td>{trip.date.slice(11)}</td>
                           <td>{trip.route}</td>
                           <td>
                              <button
                                 onClick={() => {
                                    navigate(
                                       `/parent_track/${trip.id}/${null}`
                                    );
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

export default MorningActiveTrips;
