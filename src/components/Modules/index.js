import React from "react";
import { Link } from "react-router-dom";
//styles
import { Wrapper, Content } from "./Modules.style";

const Modules = () => (
   <Wrapper>
      <Content>
         <Link to="/admin_login">
            <div className="Admin">
               <h1>Admin</h1>
            </div>
         </Link>
         <Link to="/driver_login">
            <div className="Driver">
               <h1>Driver</h1>
            </div>
         </Link>
         <Link to="/parent_login">
            <div className="Parent">
               <h1>Parent</h1>
            </div>
         </Link>
      </Content>
   </Wrapper>
);

export default Modules;
