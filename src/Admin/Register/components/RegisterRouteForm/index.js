import React from "react";
import {
   Wrapper,
   Content,
} from "../../../components/RegisterForm/RegisterForm.styles";
import Button from "../../../../components/Button";

const RegisterRouteForm = () => {
   return (
      <Wrapper>
         <div>
            <h1>Register Route</h1>
            <Content>
               <div>
                  <label>Routes</label>
                  <input type="text" />
               </div>
               <div>
                  <label>Expected Time</label>
                  <input type="text" />
               </div>
            </Content>
            <Button text="Register Route" />
         </div>
      </Wrapper>
   );
};
export default RegisterRouteForm;
