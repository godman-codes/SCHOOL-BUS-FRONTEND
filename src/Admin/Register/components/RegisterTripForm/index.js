import React from "react";
import {
   Wrapper,
   Content,
} from "../../../components/RegisterForm/RegisterForm.styles";
import Button from "../../../../components/Button";

const RegisterTripForm = () => {
   return (
      <Wrapper>
         <div>
            <h1>Register Trip</h1>
            <Content>
               <div>
                  <label>Route</label>
                  <input type="text" />
               </div>
               <div>
                  <label>Date</label>
                  <input type="datetime-local" />
               </div>
               <div>
                  <label>Bus</label>
                  <input type="Text" />
               </div>
            </Content>
            <Button text="Register Trip" />
         </div>
      </Wrapper>
   );
};
export default RegisterTripForm;
