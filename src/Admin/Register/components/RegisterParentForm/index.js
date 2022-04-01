import React from "react";
//styles
import {
   Wrapper,
   Content,
} from "../../../components/RegisterForm/RegisterForm.styles";
import Button from "../../../../components/Button";

const RegisterParentForm = () => {
   return (
      <Wrapper>
         <div>
            <h1>Register Parent</h1>
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
                  <label>Parent Email</label>
                  <input type="email" />
               </div>
               <div>
                  <label>Parent Phone</label>
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
            <Button text="Register Parent" />
         </div>
      </Wrapper>
   );
};
export default RegisterParentForm;
