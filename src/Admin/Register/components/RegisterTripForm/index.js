import React, { useState } from "react";
//styled components
import {
   Wrapper,
   Content,
} from "../../../components/RegisterForm/RegisterForm.styles";
import Button from "../../../../components/Button";

const RegisterTripForm = ({ handler }) => {
   const [route, setRoute] = useState("");
   const [time, setTime] = useState("");
   const [bus, setBus] = useState("");

   const handleRegister = async (e) => {
      if (route === "" || time === "" || bus === "") {
         alert("please fill all fields");
      } else {
         const data = {
            routes: route,
            bus_id: bus,
            schedule_date: time,
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

      if (name === "route") setRoute(value);
      if (name === "time") setTime(value);
      if (name === "bus") setBus(value);
   };

   return (
      <Wrapper>
         <div>
            <h1>Register Trip</h1>
            <Content>
               <div>
                  <label>Route</label>
                  <input
                     type="text"
                     name="route"
                     value={route}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Date</label>
                  <input
                     type="datetime-local"
                     name="time"
                     value={time}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Bus</label>
                  <input
                     type="Text"
                     name="bus"
                     value={bus}
                     onChange={handleInput}
                  />
               </div>
            </Content>
            <Button text="Register Trip" callback={handleRegister} />
         </div>
      </Wrapper>
   );
};
export default RegisterTripForm;
