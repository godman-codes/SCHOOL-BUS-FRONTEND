import React from "react";
//styles
import { Wrapper, Content } from "./RegisterForm.styles";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
   return (
      <Wrapper>
         <div>
            <h1>Register</h1>
            <Content>
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
            </Content>
            <div className="action-handler-1">
               <p>
                  Already registered <Link to="/admin_login">Login</Link>
               </p>
            </div>
            <Button text="Register" />
         </div>
      </Wrapper>
   );
};
export default RegisterForm;
