import React from "react";

import {
   Wrapper,
   Content,
} from "../../../components/RegisterForm/RegisterForm.styles";
import Button from "../../../../components/Button";

const RegisterBusForm = () => {
   return (
      <Wrapper>
         <div>
            <h1>Register Bus</h1>
            <Content>
               <div>
                  <label>Bus Make</label>
                  <input type="text" />
               </div>
               <div>
                  <label>Capacity</label>
                  <input type="text" />
               </div>
               <div>
                  <label>Driver</label>
                  <input type="text" />
               </div>
               <div>
                  <label>Plate Number</label>
                  <input type="text" />
               </div>
            </Content>
            <Button text="Register Bus" />
         </div>
      </Wrapper>
   );
};
export default RegisterBusForm;
