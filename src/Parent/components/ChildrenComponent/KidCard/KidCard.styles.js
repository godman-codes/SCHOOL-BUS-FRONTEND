import styled from "styled-components";
export const Wrapper = styled.div`
   background-color: var(--darkGrey);
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   width: 250px;
   height: 300px;
   border-radius: 20px;
   margin: 20px;

   #active {
      background-color: green;
      box-shadow: 2px grey;
      animation: blink 0.5s linear infinite;

      @keyframes blink {
         0% {
            opacity: 0.5;
         }
         50% {
            opacity: 1;
         }
      }
   }
`;

export const Content = styled.div`
   width: 100%;
   padding: 5px;
   border-radius: 20px;
   h1 {
      display: flex;
      justify-content: center;
      color: #eee;
   }
   #error-p {
      display: flex;
      justify-content: center;
   }
`;
