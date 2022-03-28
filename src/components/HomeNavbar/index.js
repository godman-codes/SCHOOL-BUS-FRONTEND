import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";

//styles
import { Wrapper, Content } from "./HomeNavbar.styles";

const HomeNavbar = ({ title }) => {
   return (
      <Wrapper>
         <Content>
            <Link to="/">
               <Logo
                  alt={title}
                  style={{ maxWidth: "12rem", maxHeight: "4rem" }}
               />
            </Link>
         </Content>
      </Wrapper>
   );
};

export default HomeNavbar;
