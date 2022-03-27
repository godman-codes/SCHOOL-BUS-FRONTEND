import styled from "styled-components";

export const Wrapper = styled.div`
   background: var(--darkGrey);
   padding: 0 20px;

   @media screen and (max-width: 500px) {
      height: 80px;
      font-size: var(--fontSmall);
   }
`;
export const Content = styled.div`
   align-items: center;
   justify-content: left;
   max-width: var(--maxWidth);
   padding: 10px 0;
   margin: 0 auto;
   color: var(--white);
   h1 {
      @media screen and (max-width: 500px) {
         font-size: var(--fontBig);
      }
   }
`;
