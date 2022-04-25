import React from "react";
import KidCard from "./KidCard";
import { Wrapper, Content } from "./ChildrenComponents.styles";

const ChildrenComponent = ({ kids }) => {
   return (
      <Wrapper>
         <Content>
            <h1 id="header">My Kids</h1>
            <hr />
            <div id="kid-cards">
               {kids.map((kid, i) => (
                  <KidCard key={i} kid={kid} />
               ))}
            </div>
         </Content>
      </Wrapper>
   );
};

export default ChildrenComponent;
