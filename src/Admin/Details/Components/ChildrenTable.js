import React from "react";
import { Wrapper, Content } from "../../components/Table/Table.styles";
const ChildrenTable = ({ children }) => {
   return (
      <Wrapper>
         <Content>
            <table>
               <thead>
                  <tr>
                     <td>Id</td>
                     <td>First Name</td>
                     <td>Last Name</td>
                     <td>Class</td>
                     <td>Parent</td>
                     <td>Route</td>
                  </tr>
               </thead>
               <tbody>
                  {children.map((child, i) => (
                     <tr key={i}>
                        <td>{child.id}</td>
                        <td>{child.first_name}</td>
                        <td>{child.last_name}</td>
                        <td>{child.class}</td>
                        <td>{child.parent}</td>
                        <td>{child.route}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </Content>
      </Wrapper>
   );
};
export default ChildrenTable;
