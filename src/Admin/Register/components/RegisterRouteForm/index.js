import React, { useState } from "react";
//styled components
import {
   Wrapper,
   Content,
} from "../../../components/RegisterForm/RegisterForm.styles";
import Button from "../../../../components/Button";

const RegisterRouteForm = ({ handler }) => {
   const [routes, setRoutes] = useState("");
   const [time, setTime] = useState("");

   const handleRegister = async (e) => {
      if (routes === "" || time === "") {
         alert("please fill all fields");
      } else {
         const data = {
            routes_path: routes,
            expected_time: time,
         };
         e.preventDefault();
         try {
            handler(data);
         } catch (error) {
            console.log(error);
         }
      }
   };

   const handleInput = (e) => {
      const name = e.currentTarget.name;
      const value = e.currentTarget.value;

      if (name === "routes") setRoutes(value);
      if (name === "time") setTime(value);
   };
   return (
      <Wrapper>
         <div>
            <h1>Register Route</h1>
            <Content>
               <div>
                  <label>Routes</label>
                  <input
                     type="text"
                     name="routes"
                     value={routes}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Expected Time</label>
                  <input
                     type="text"
                     name="time"
                     value={time}
                     onChange={handleInput}
                  />
               </div>
            </Content>
            <Button text="Register Route" callback={handleRegister} />
         </div>
      </Wrapper>
   );
};
export default RegisterRouteForm;
