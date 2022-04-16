import styled from "styled-components";

export const Wrapper = styled.div`
   align-items: center;
   justify-content: center;
   align-content: center;
   display: flex;
   flex-direction: column;
   h1 {
      color: black;
   }
`;
export const Content = styled.div`
   justify-content: center;
   align-content: center;
   width: 80%;
   display: flex;
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
   #start {
      background-color: green;
   }
   #end {
      background-color: red;
   }
   #track {
      width: 70%;
      background: lightgreen;
      font-weight: bolder;
      cursor: pointer;
      :hover {
         background: green;
      }
   }
   table {
      font-weight: bold;
      width: 100%;
      border-spacing: 0;
      thead {
         font-weight: bolder;
         tr {
            background-color: #ffffff;
            height: 50px;
            td {
               text-align: center;
            }
         }
      }
      tbody {
         tr {
            height: 40px;
            background-color: #baffc7;
            td {
               text-align: center;
            }
            border: 2px solid lightgreen;
         }
      }
   }
   @media screen and (max-width: 700px) {
      .hide {
         display: none;
      }
   }
`;
