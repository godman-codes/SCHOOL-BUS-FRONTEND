import React from "react";
//styles
import {
   Wrapper,
   Content,
} from "../../../components/RegisterForm/RegisterForm.styles";
import Button from "../../../../components/Button";

const RegisterChildForm = () => {
   return (
      <Wrapper>
         <div>
            <h1>Register Child</h1>
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
                  <label>Child Parent</label>
                  <input type="text" />
               </div>
               <div>
                  <label>Child Class</label>
                  <input type="text" />
               </div>
               <div>
                  <label>Child Route</label>
                  <input type="text" />
               </div>
            </Content>
            <Button text="Register Child" />
         </div>
      </Wrapper>
   );
};
export default RegisterChildForm;
