import React from "react";
import { Wrapper, Content } from "./KidCard.styles";

const KidCard = ({ kid }) => {
   return (
      <Wrapper>
         <Content>
            <h1>{kid.first_name}</h1>
         </Content>
      </Wrapper>
   );
};

export default KidCard;
