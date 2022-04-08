import styled from "styled-components";

export const Wrapper = styled.div`
   background-color: var(--medGrey);
   border-radius: 5px;
   padding: 10px;
   @media screen and (max-width: 600px) {
      width: 200px;
   }
`;
export const Content = styled.div`
   h2 {
      color: white;
   }
   #active {
      background-color: green;
      width: 20px;
      height: 20px;
      box-shadow: 2px grey;
      animation: blink 0.3s linear infinite;

      @keyframes blink {
         0% {
            opacity: 0.5;
         }
         50% {
            opacity: 1;
         }
      }
   }
   #notActive {
      background-color: red;
      width: 20px;
      height: 20px;
      box-shadow: 2px grey;
   }
`;
