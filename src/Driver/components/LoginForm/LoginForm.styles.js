import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   div {
      background: var(--lightGrey);
      margin: 30px 20px;
      padding-left: 40px;
      h1 {
         margin: 10px 10px -10px 10px;
         color: var(--darkGrey);
         text-align: center;
      }
      .action-handler-1 {
         height: 20px;
         display: flex;
         justify-content: center;
         align-items: center;
         p {
            color: var(--darkGrey);
         }
      }
   }
   @media screen and (max-width: 500px) {
      div {
         width: 90%;
         padding-left: 20px;
      }
      .action-handler-1 {
         height: 15px;
         p {
            font-size: small;
         }
      }
   }
   @media screen and (max-width: 400px) {
      width: 100%;
      div {
         margin: 0;
         width: 100%;
         padding-left: 0;
      }
   }
`;
export const Content = styled.div`
   width: 600px;
   display: table;
   div {
      height: 40px;
      display: table-row;
      margin: 5px 0px;
      align-items: center;
      label {
         display: table-cell;
         margin: 10px 8px;
      }
      input {
         margin: 10px 8px;
         width: 250px;
         height: 30px;
         display: table-cell;
         border-radius: 5px;
         border: 1px solid var(--darkGrey);
      }
   }
   @media screen and (max-width: 550px) {
      width: 80%;
      display: block;
      h1 {
         margin: 10px 0;
         color: var(--darkGrey);
      }
      div {
         justify-items: center;
         justify-content: center;
         align-items: center;
         display: flex;
         label {
            margin: 5px 4px;
            font-size: 15px;
         }
      }
   }
   @media screen and (max-width: 420px) {
      margin: 3px;
      padding: 4px;
      div {
         justify-items: center;
         justify-content: center;
         align-items: center;
         display: flex;
         width: 100%;
         input {
            width: auto;
         }
      }
   }
`;
