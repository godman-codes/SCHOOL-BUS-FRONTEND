import React from "react";
import { Wrapper } from "./NavErrors.styles";

const NavErrors = ({ errorMessage, setError }) => {
   const clearError = () => setError(false);
   return (
      <Wrapper>
         <h1>{errorMessage}</h1>
         <button onClick={clearError}>x</button>
      </Wrapper>
   );
};
export default NavErrors;
