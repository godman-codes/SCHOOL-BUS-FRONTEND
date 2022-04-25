import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   justify-content: center;
`;
export const Content = styled.div`
   width: 90%;
   #header {
      display: flex;
      justify-content: center;
      color: var(--darkGrey);
   }
   #kid-cards {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
   }
`;
