import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;
export const Content = styled.div`
   background-color: white;
   width: 450px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-right: 30px;
   #header {
      padding: 20px 0;
      display: flex;
      justify-content: center;
      h1 {
         color: var(--darkGrey);
      }
   }
   #form {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      div {
         height: 30px;
         margin: 10px 0;
         display: flex;
         label {
            padding-left: 10%;
            display: flex;
            align-items: center;
            height: 100%;
            width: 50%;
            font-weight: bold;
         }
         input {
            display: flex;
            align-items: center;
            height: 100%;
            width: 50%;
            border: 1px solid;
            border-radius: 3px;
            border-style: outset;
            border-color: var(--darkGrey);
         }
      }
   }
   #action-handler {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
         display: flex;
         justify-content: center;
         color: var(--darkGrey);
         a {
            margin: 0 10px;
            color: green;
            text-decoration: none;
         }
      }
   }
   @media screen and (max-width: 768px) {
      width: 350px;
      background-color: inherit;
      #form {
         div {
            height: 25px;
         }
      }
   }
`;
