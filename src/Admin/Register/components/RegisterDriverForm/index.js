import React from "react";

import {
   Wrapper,
   Content,
} from "../../../components/RegisterForm/RegisterForm.styles";
import Button from "../../../../components/Button";

const RegisterDriverForm = () => {
   return (
      <Wrapper>
         <div>
            <h1>Register Driver</h1>
            <Content>
               <div>
                  <label>First Name</label>
                  <input type="text" />
               </div>
               <div>
                  <label>last Name</label>
                  <input type="text" />
               </div>
               <div>
                  <label>Driver Email</label>
                  <input type="email" />
               </div>
               <div>
                  <label>Driver Phone</label>
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
            <Button text="Register Driver" />
         </div>
      </Wrapper>
   );
};
export default RegisterDriverForm;
