import React from "react";
import { Wrapper, Content } from "../../components/Table/Table.styles";
const BusTable = ({ buses }) => {
   return (
      <Wrapper>
         <Content>
            <table>
               <thead>
                  <tr>
                     <td>Id</td>
                     <td>Make</td>
                     <td>Capacity</td>
                     <td>initial Att</td>
                     <td>Location</td>
                     <td>Active</td>
                     <td>Driver</td>
                  </tr>
               </thead>
               <tbody>
                  {buses.map((bus, i) => (
                     <tr key={i}>
                        <td>{bus.id}</td>
                        <td>{bus.make}</td>
                        <td>{bus.capacity}</td>
                        <td>{bus.initial_attendance}</td>
                        <td>{bus.current_location}</td>
                        <td>
                           <button
                              id={bus.active ? "active" : "notActive"}
                           ></button>
                        </td>
                        <td>{bus.driver}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </Content>
      </Wrapper>
   );
};
export default BusTable;
