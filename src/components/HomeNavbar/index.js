import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";

//styles
import { Wrapper, Content } from "./HomeNavbar.styles";

const HomeNavbar = ({ title }) => {
   return (
      <Wrapper>
         <Content>
            <Logo
               alt={title}
               style={{ maxWidth: "12rem", maxHeight: "4rem" }}
            />
         </Content>
      </Wrapper>
   );
};

export default HomeNavbar;
