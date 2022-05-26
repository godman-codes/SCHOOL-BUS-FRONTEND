import React from "react";
//styles
import { Wrapper, Content } from "./RegisterForm.styles";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
   return (
      <Wrapper>
         <Content>
            <div id="header">
               <h1>Register</h1>
            </div>
            <div id="form">
               <div>
                  <label>School Name</label>
                  <input type="text" />
               </div>
               <div>
                  <label>School Location</label>
                  <input type="text" />
               </div>
               <div>
                  <label>Website</label>
                  <input type="url" />
               </div>
               <div>
                  <label>School Email</label>
                  <input type="email" />
               </div>
               <div>
                  <label>Admin ID</label>
                  <input type="text" />
               </div>
               <div>
                  <label>Password</label>
                  <input type="password" />
               </div>
               <div>
                  <label>Confirm Password</label>
                  <input type="password" />
               </div>
            </div>
            <div id="action-handler">
               <small>
                  Already registered <Link to="/admin_login">Login</Link>
               </small>
               <Button id="btn" text="Register" />
            </div>
         </Content>
      </Wrapper>
   );
};
export default RegisterForm;
