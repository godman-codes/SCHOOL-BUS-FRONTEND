import React, { useState } from "react";
//styled components
import {
   Wrapper,
   Content,
} from "../../../components/RegisterForm/RegisterForm.styles";
import Button from "../../../../components/Button";

const RegisterDriverForm = ({ handler }) => {
   const [firstname, setFirstName] = useState("");
   const [lastname, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [tel, setTel] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const handleRegister = async (e) => {
      if (password !== confirmPassword) {
         alert("password don't match");
      } else if (
         firstname === "" ||
         lastname === "" ||
         email === "" ||
         tel === "" ||
         password === "" ||
         confirmPassword === ""
      ) {
         alert("please fill all fields");
      } else {
         const data = {
            first_name: firstname,
            last_name: lastname,
            password: password,
            driver_email: email,
            driver_phone: tel,
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
      if (name === "email") setEmail(value);
      if (name === "tel") setTel(value);
      if (name === "password") setPassword(value);
      if (name === "confirmPassword") setConfirmPassword(value);
   };

   return (
      <Wrapper>
         <div>
            <h1>Register Driver</h1>
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
                  <label>Driver Email</label>
                  <input
                     type="email"
                     name="email"
                     value={email}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Driver Phone</label>
                  <input
                     type="tel"
                     name="tel"
                     value={tel}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Password</label>
                  <input
                     type="password"
                     name="password"
                     value={password}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Confirm Password</label>
                  <input
                     type="password"
                     name="confirmPassword"
                     value={confirmPassword}
                     onChange={handleInput}
                  />
               </div>
            </Content>
            <Button text="Register Driver" callback={handleRegister} />
         </div>
      </Wrapper>
   );
};
export default RegisterDriverForm;
