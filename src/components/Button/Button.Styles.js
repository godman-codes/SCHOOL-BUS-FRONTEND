import styled from "styled-components";

export const Wrapper = styled.button`
   display: block;
   font-size: var(--fontMed);
   color: var(--white);
   background: var(--darkGrey);
   border-radius: 30px;
   width: 25%;
   height: 60px;
   margin: 20px auto;
   outline: none;
   cursor: pointer;
   transition: all 0.3s;

   :hover {
      opacity: 0.8;
   }
   @media screen and (max-width: 500px) {
      border-radius: 20px;
      width: 20%;
      height: 40px;
      font-size: var(--fontSmall);
   }
`;
