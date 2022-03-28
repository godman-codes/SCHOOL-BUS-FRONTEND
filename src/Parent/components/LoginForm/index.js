import React from "react";
import { Wrapper, Content } from "./LoginForm.styles";
import Button from "../../../components/Button";

const LoginForm = () => {
   return (
      <Wrapper>
         <div>
            <h1>Login</h1>
            <Content>
               <div>
                  <label>User Name</label>
                  <input type="text" />
               </div>
               <div>
                  <label>Password</label>
                  <input type="password" />
               </div>
            </Content>
            {/* <div className="action-handler-1">
               <p>
                  Don't have an account <a href="/admin_register">Register</a>
               </p>
            </div> */}
            <Button text="Login" />
         </div>
      </Wrapper>
   );
};
export default LoginForm;
