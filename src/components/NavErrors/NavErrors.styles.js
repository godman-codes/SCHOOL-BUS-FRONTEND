import styled from "styled-components";

export const Wrapper = styled.div`
   background-color: red;
   height: 40px;
   justify-content: center;
   text-align: center;
   display: flex;
   width: 100%;
   h1 {
      font-size: var(--fontBig);
      font-weight: lighter;
      height: auto;
      padding-top: 5px;
      margin: 0;
   }
   button {
      background-color: red;
      font-weight: bolder;
      margin: 9px;
      width: 20px;
      height: 50%;
      padding: 0;
      border: none;
      font-size: 100%;
   }
`;
