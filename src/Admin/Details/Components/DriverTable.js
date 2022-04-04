import React from "react";
import { Wrapper, Content } from "../../components/Table/Table.styles";
const DriverTable = ({ drivers }) => {
   return (
      <Wrapper>
         <h1>Drivers</h1>
         <Content>
            <table>
               <thead>
                  <tr>
                     <td>Id</td>
                     <td>First Name</td>
                     <td>Last Name</td>
                     <td>Email</td>
                     <td>Phone</td>
                     <td>UserName</td>
                     <td>Bus</td>
                  </tr>
               </thead>
               <tbody>
                  {drivers.map((driver, i) => (
                     <tr key={i}>
                        <td>{driver.id}</td>
                        <td>{driver.first_name}</td>
                        <td>{driver.last_name}</td>
                        <td>{driver.email}</td>
                        <td>{driver.phone}</td>
                        <td>{driver.username}</td>
                        <td>{driver.bus}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </Content>
      </Wrapper>
   );
};
export default DriverTable;
