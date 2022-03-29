import React from "react";
import Home from "./components/Home";
import AdminRegister from "./Admin/AdminRegister";
import AdminLogin from "./Admin/AdminLogin";
import ParentLogin from "./Parent/ParentLogin";
import DriverLogin from "./Driver/DriverLogin";
import AdminWorkspace from "./Admin/AdminWorkspace";
import { GlobalStyle } from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
   <Router>
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin_register" element={<AdminRegister />} />
            <Route path="/admin_login" element={<AdminLogin />} />
            <Route path="/parent_login" element={<ParentLogin />} />
            <Route path="/driver_login" element={<DriverLogin />} />
            <Route path="/admin_workspace" element={<AdminWorkspace />} />
         </Routes>
         <GlobalStyle />
      </>
   </Router>
);

export default App;
