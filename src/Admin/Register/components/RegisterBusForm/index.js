import React, { useState } from "react";
//styled components
import {
   Wrapper,
   Content,
} from "../../../components/RegisterForm/RegisterForm.styles";
import Button from "../../../../components/Button";

const RegisterBusForm = ({ handler }) => {
   const [model, setModel] = useState("");
   const [capacity, setCapacity] = useState("");
   const [driver, setDriver] = useState("");
   const [plateNumber, setPlateNumber] = useState("");

   const handleRegister = async (e) => {
      if (
         model === "" ||
         capacity === "" ||
         driver === "" ||
         plateNumber === ""
      ) {
         alert("please fill all fields");
      } else {
         const data = {
            bus_name: model,
            plate_number: plateNumber,
            capacity: capacity,
            driver: driver,
         };
         e.preventDefault();
         try {
            handler(data);
         } catch {}
      }
   };

   const handleInput = (e) => {
      const name = e.currentTarget.name;
      const value = e.currentTarget.value;

      if (name === "model") setModel(value);
      if (name === "capacity") setCapacity(value);
      if (name === "driver") setDriver(value);
      if (name === "plateNumber") setPlateNumber(value);
   };
   return (
      <Wrapper>
         <div>
            <h1>Register Bus</h1>
            <Content>
               <div>
                  <label>Bus Model</label>
                  <input
                     type="text"
                     name="model"
                     value={model}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Capacity</label>
                  <input
                     type="text"
                     name="capacity"
                     value={capacity}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Driver</label>
                  <input
                     type="text"
                     name="driver"
                     value={driver}
                     onChange={handleInput}
                  />
               </div>
               <div>
                  <label>Plate Number</label>
                  <input
                     type="text"
                     name="plateNumber"
                     value={plateNumber}
                     onChange={handleInput}
                  />
               </div>
            </Content>
            <Button text="Register Bus" callback={handleRegister} />
         </div>
      </Wrapper>
   );
};
export default RegisterBusForm;
