import React, { useState } from "react";
import Button from "../../../components/Button";
import {
   Wrapper,
   Content,
} from "../../../Admin/components/RegisterForm/RegisterForm.styles";

const AttendanceForm = ({ text, handler }) => {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [parent, setParent] = useState("");

   const handleSubmit = (e) => {
      if (firstName === "" || lastName === "" || parent === "") {
         alert("please fill all fields");
      } else {
         const data = {
            firstName: firstName,
            lastName: lastName,
            parent: parent,
         };
         e.preventDefault();
         try {
            handler(data);
         } catch {}
      }
   };

   const handleInput = (e) => {
      const name = e.currentTarget.name;
      const value = e.currentTarget.value;

      if (name === "firstName") setFirstName(value);
      if (name === "lastName") setLastName(value);
      if (name === "parent") setParent(value);
   };
   return (
      <Wrapper>
         <Content>
            <div id="header">
               <h1>{text}</h1>
            </div>
            <div id="form">
               <div>
                  <label>First Name</label>
                  <input
                     type="text"
                     name="firstName"
                     value={firstName}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Last Name</label>
                  <input
                     type="text"
                     name="lastName"
                     value={lastName}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Parent</label>
                  <input
                     type="text"
                     name="parent"
                     value={parent}
                     onChange={handleInput}
                  />
               </div>
            </div>
            <div id="action-handler">
               <Button text="Take" callback={handleSubmit} />
            </div>
         </Content>
      </Wrapper>
   );
};
export default AttendanceForm;
