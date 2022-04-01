import styled from "styled-components";

export const Wrapper = styled.div`
   background: var(--darkGrey);
   height: 80px;
   @media screen and (max-width: 900px) {
      height: 70px;
   }
`;
export const Content = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 80px;
   .nav_menu {
      padding: 0;
      margin: 0;
      height: 70px;
   }
   .primary-nav {
      float: left;
      display: block;
   }
   a {
      cursor: pointer;
   }
   ul li {
      display: block;
   }
   ul li p {
      text-decoration: none;
      width: 150px;
      font-size: 20px;
      text-align: center;
      padding: 5px;
      border-radius: 10px;
      font-weight: medium;
      :hover {
         background: var(--lightGrey);
         color: black;
      }
   }
   ul li ul li p {
      width: auto;
   }
   ul li ul {
      display: none;
   }
   ul li:hover ul {
      padding: 2px;
      display: block;
      height: auto;
      width: 150px;
      background-color: var(--darkGrey);
      border-radius: 0 0 10px 10px;
   }
   .nav_toggler {
      display: none;
   }
   .nav_toggler div {
      width: 2rem;
      height: 0.2rem;
      margin: 0.4rem;
      background: var(--white);
      transition: 0.3s ease-in;
   }
   @media screen and (max-width: 900px) {
      justify-content: space-between;
      .nav_toggler {
         padding: 15px;
         display: block;
         cursor: pointer;
      }
      .nav_menu {
         position: fixed;
         top: 7vh;
         right: 0;
         height: 93vh;
         width: 50vw;
         background: var(--darkGrey);
         flex-direction: column;
         transform: translateX(100%);
         transition: 0.5s ease-in;
      }
      .logo {
         padding: 15px;
      }
      ul li:hover ul {
         border-radius: 10px;
         background: white;
      }
      ul li:hover ul li:hover {
         background: var(--darkGrey);
         height: auto;
         margin: 0;
         padding: 0;
      }
      ul li:hover ul li p {
         color: var(--darkGrey);
      }
      ul li:hover ul li p:hover {
         background: var(--darkGrey);
         color: var(--white);
      }
   }
   .nav_active {
      transform: translate(0%);
      padding-left: 15px;
      width: 200px;
   }
   .toggle .line1 {
      transform: rotate(-45deg) translate(-4px, 5px);
   }
   .toggle .line2 {
      opacity: 0;
   }
   .toggle .line3 {
      transform: rotate(45deg) translate(-4px, -5px);
   }
`;
