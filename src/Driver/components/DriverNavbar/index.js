import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
   Wrapper,
   Content,
} from "../../../Admin/components/AdminNavbar/AdminNavbar.styles";
import { ReactComponent as Logo } from "../../../images/logo.svg";

const DriverNavbar = ({ title }) => {
   const [active, setActive] = useState("nav_menu");
   const [icon, setIcon] = useState("nav_toggler");
   const navToggle = () => {
      if (active === "nav_menu") {
         setActive("nav_menu nav_active");
      } else setActive("nav_menu");
      //Icon Toggler
      if (icon === "nav_toggler") {
         setIcon("nav_toggler toggle");
      } else setIcon("nav_toggler");
   };
   return (
      <>
         <Wrapper>
            <Content>
               <Link to="/">
                  <Logo
                     alt={title}
                     style={{ maxWidth: "12rem", maxHeight: "4rem" }}
                     className="logo"
                  />
               </Link>

               <ul className={active}>
                  <li className="primary-nav">
                     <Link
                        to="/driver_workspace"
                        style={{ textDecoration: "none" }}
                     >
                        <p>WorkSpace</p>
                     </Link>
                  </li>
                  <li className="primary-nav">
                     <Link to="/" style={{ textDecoration: "none" }}>
                        <p>Attendance</p>
                     </Link>
                  </li>
                  <li className="primary-nav">
                     <Link to="/" style={{ textDecoration: "none" }}>
                        <p>Profile</p>
                     </Link>
                  </li>
                  <li className="primary-nav">
                     <Link to="/" style={{ textDecoration: "none" }}>
                        <p>Logout</p>
                     </Link>
                  </li>
               </ul>
               <div onClick={navToggle} className={icon}>
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
               </div>
            </Content>
         </Wrapper>
      </>
   );
};
export default DriverNavbar;
