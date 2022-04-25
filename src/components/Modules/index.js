import React from "react";
//styles
import { Wrapper, Content } from "./Modules.style";
import { useNavigate } from "react-router-dom";

const Modules = () => {
   const navigate = useNavigate();
   return (
      <Wrapper>
         <Content>
            <div onClick={() => navigate("/admin_login")} className="Admin">
               <h1>Admin</h1>
            </div>
            <div onClick={() => navigate("/driver_login")} className="Driver">
               <h1>Driver</h1>
            </div>
            <div onClick={() => navigate("/parent_login")} className="Parent">
               <h1>Parent</h1>
            </div>
         </Content>
      </Wrapper>
   );
};

export default Modules;
