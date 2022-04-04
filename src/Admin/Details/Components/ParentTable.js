import React from "react";
import { Wrapper, Content } from "../../components/Table/Table.styles";
const ParentTable = ({ parents }) => {
   return (
      <Wrapper>
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
                  </tr>
               </thead>
               <tbody>
                  {parents.map((parent, i) => (
                     <tr key={i}>
                        <td>{parent.id}</td>
                        <td>{parent.first_name}</td>
                        <td>{parent.last_name}</td>
                        <td>{parent.email}</td>
                        <td>{parent.phone}</td>
                        <td>{parent.username}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </Content>
      </Wrapper>
   );
};
export default ParentTable;
