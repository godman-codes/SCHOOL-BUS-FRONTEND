import React, { useState } from "react";
import { Wrapper, Content } from "./LoginForm.styles";
import Button from "../../../components/Button";
import { LOGIN_ADMIN } from "../../../config";
const LoginForm = () => {
   const [username, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(false);

   const handleLogin = (e) => {
      console.log("man");
      const data = { admin_id: username, password: password };
      setError(false);
      e.preventDefault();
      fetch(`${LOGIN_ADMIN}`, {
         method: "POST",
         header: { "Content-Type": "application/json" },
         body: JSON.stringify(data),
      })
         .then((res) => {
            // console.log(res.json());
            return res.json();
         })
         .then((data) => {
            console.log(data);
            return data;
         })
         .catch((err) => {
            setError(true);
            console.log(err);
         });
   };

   const handleInput = (e) => {
      console.log("man");
      const name = e.currentTarget.name;
      const value = e.currentTarget.value;

      if (name === "username") setUserName(value);
      if (name === "password") setPassword(value);
   };
   return (
      <Wrapper>
         <div>
            <h1>Login</h1>
            <Content>
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
            </Content>
            <div className="action-handler-1">
               <p>
                  Don't have an account <a href="/admin_register">Register</a>
               </p>
            </div>
            <Button text="Login" callback={handleLogin} />
         </div>
      </Wrapper>
   );
};
export default LoginForm;
