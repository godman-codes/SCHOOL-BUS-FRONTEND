import React from "react";
import { Wrapper, Content } from "../../../Admin/components/Table/Table.styles";

const AttendanceTable = ({ attendance }) => {
   return (
      <Wrapper>
         <h1>Attendance</h1>
         <Content>
            <table>
               <thead>
                  <tr>
                     <td>Id</td>
                     <td>Child Id</td>
                     <td>Last Name</td>
                     <td>Picked</td>
                     <td>Dropped</td>
                  </tr>
               </thead>
               <tbody>
                  {attendance.error ? (
                     <tr>
                        <td colSpan={5}>{attendance.error}</td>
                     </tr>
                  ) : (
                     attendance.map((att, i) => (
                        <tr key={i}>
                           <td>{att.id}</td>
                           <td>{att.child_id}</td>
                           <td>{att.child_name}</td>
                           <td>{att.is_picked ? "True" : "False"}</td>
                           <td>{att.is_dropped ? "True" : "False"}</td>
                        </tr>
                     ))
                  )}
               </tbody>
            </table>
         </Content>
      </Wrapper>
   );
};
export default AttendanceTable;
