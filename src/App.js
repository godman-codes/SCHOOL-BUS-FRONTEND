import React from "react";
import Home from "./components/Home";
import { GlobalStyle } from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
   <Router>
      <>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
         <GlobalStyle />
      </>
   </Router>
);

export default App;
