import styled from "styled-components";

export const Wrapper = styled.div`
   #action-btn {
      display: flex;
      justify-content: center;
      button {
         width: 100px;
         height: 50px;
         font-size: 100%;
         font-weight: bold;
         background-color: var(--darkGrey);
         color: var(--white);
         border: 0;
         cursor: pointer;
      }
      #pick {
         border-right: 1px solid var(--white);
      }
      #drop {
         border-left: 1px solid var(--white);
      }
      #active {
         background-color: white;
         color: var(--darkGrey);
      }
   }
`;
