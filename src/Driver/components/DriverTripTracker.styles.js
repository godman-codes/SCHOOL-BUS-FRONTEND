import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   button {
      width: 120px;
      height: 40px;
      margin: 5px;
      font-weight: bold;
      font-size: 100%;
      border-radius: 5px;
      border-color: lightgray;
   }
   #end {
      background-color: red;
   }
   #start {
      background-color: green;
   }
`;
