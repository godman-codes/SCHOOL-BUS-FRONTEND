import React, { useState } from "react";
import { Wrapper, Content } from "../RegisterForm/RegisterForm.styles";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const LoginForm = ({ handler }) => {
   const [username, setUserName] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = async (e) => {
      const data = { admin_id: username, password: password };
      e.preventDefault();
      try {
         handler(data);
      } catch {}
   };

   const handleInput = (e) => {
      const name = e.currentTarget.name;
      const value = e.currentTarget.value;

      if (name === "username") setUserName(value);
      if (name === "password") setPassword(value);
   };
   return (
      <Wrapper>
         <Content>
            <div id="header">
               <h1>Login</h1>
            </div>
            <div id="form">
               <div>
                  <label>Admin ID</label>
                  <input
                     type="text"
                     onChange={handleInput}
                     value={username}
                     name="username"
                  />
               </div>
               <div>
                  <label>Password</label>
                  <input
                     type="password"
                     onChange={handleInput}
                     value={password}
                     name="password"
                  />
               </div>
            </div>
            <div id="action-handler">
               <small>
                  Don't have an account
                  <Link to="/admin_register">Register</Link>
               </small>
               <Button text="Login" callback={handleLogin} />
            </div>
         </Content>
      </Wrapper>
   );
};
export default LoginForm;
