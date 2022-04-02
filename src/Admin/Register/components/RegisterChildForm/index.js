import React, { useState } from "react";
//styles
import {
   Wrapper,
   Content,
} from "../../../components/RegisterForm/RegisterForm.styles";
import Button from "../../../../components/Button";

const RegisterChildForm = ({ handler }) => {
   const [firstname, setFirstName] = useState("");
   const [lastname, setLastName] = useState("");
   const [parent, setParent] = useState("");
   const [childClass, setChildClass] = useState("");
   const [route, setRoute] = useState("");

   const handleRegister = async (e) => {
      if (
         firstname === "" ||
         lastname === "" ||
         parent === "" ||
         childClass === "" ||
         route === ""
      ) {
         alert("please fill all fields");
      } else {
         const data = {
            first_name: firstname,
            last_name: lastname,
            child_class: childClass,
            child_parent: parent,
            child_routes: route,
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

      if (name === "firstname") setFirstName(value);
      if (name === "lastname") setLastName(value);
      if (name === "parent") setParent(value);
      if (name === "childClass") setChildClass(value);
      if (name === "route") setRoute(value);
   };

   return (
      <Wrapper>
         <div>
            <h1>Register Child</h1>
            <Content>
               <div>
                  <label>First Name</label>
                  <input
                     type="text"
                     name="firstname"
                     value={firstname}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>last Name</label>
                  <input
                     type="text"
                     name="lastname"
                     value={lastname}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Child Parent</label>
                  <input
                     type="text"
                     name="parent"
                     value={parent}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Child Class</label>
                  <input
                     type="text"
                     name="childClass"
                     value={childClass}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Child Route</label>
                  <input
                     type="text"
                     name="route"
                     value={route}
                     onChange={handleInput}
                  />
               </div>
            </Content>
            <Button text="Register" callback={handleRegister} />
         </div>
      </Wrapper>
   );
};
export default RegisterChildForm;
