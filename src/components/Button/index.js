import React from "react";
//styles
import { Wrapper } from "./Button.Styles";

const Button = ({ text, callback, type }) => (
   <Wrapper type={type} onClick={callback}>
      {text}
   </Wrapper>
);
export default Button;
