import styled from "styled-components";

export const Wrapper = styled.div`
   /* max-width: var(--maxWidth); */
   display: inline;

   @media screen and (max-width: 700px) {
      margin: 0 auto;
      padding: 0 auto;
      display: block;
   }
`;
export const Content = styled.div`
   display: flex;
   justify-content: center;
   @media screen and (max-width: 700px) {
      display: block;
      align-items: center;
      padding: 0 24%;
   }

   div {
      width: 250px;
      height: 250px;
      border-radius: 40px;
      background-color: var(--medGrey);
      display: flex;
      justify-content: center;
      align-items: center;
      animation: animateModules 1s;
      margin: 40px 30px;
      float: left;
      :hover {
         opacity: 0.8;
      }

      @keyframes animateModules {
         from {
            opacity: 0;
         }
         to {
            opacity: 1;
         }
      }

      @media screen and (max-width: 600px) {
         height: 200px;
         width: 200px;
         display: flex;
         justify-content: center;
         align-items: center;
         margin: 20px 20px;
         font-size: var(--fontSmall);
      }
   }
`;
