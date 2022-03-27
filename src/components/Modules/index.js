import React from "react";
//styles
import { Wrapper, Content } from "./Modules.style";

const Modules = () => (
   <Wrapper>
      <Content>
         <div className="Admin">
            <h1>Admin</h1>
         </div>
         <div className="Driver">
            <h1>Driver</h1>
         </div>
         <div className="Parent">
            <h1>Parent</h1>
         </div>
      </Content>
   </Wrapper>
);

export default Modules;
