import styled from "styled-components";

export const Wrapper = styled.div`
   max-width: var(--maxWidth);
   margin: 0 auto;
   padding: 0 30%;
`;
export const Content = styled.div`
   div {
      width: 250px;
      height: 250px;
      border-radius: 20px;
      background-color: var(--medGrey);
      text-align: center;
      justify-items: center;
      animation: animateModules 1s;

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
      h1 {
         padding-top: 100px;
      }
      @media screen and (max-width: 500px) {
         height: 200px;
         width: 200px;
         font-size: var(--fontSmall);
         h1 {
            padding-top: 80px;
         }
      }
   }
`;
