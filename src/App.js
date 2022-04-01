import React from "react";
import Home from "./components/Home";
import AdminRegister from "./Admin/AdminRegister";
import AdminLogin from "./Admin/AdminLogin";
import ParentLogin from "./Parent/ParentLogin";
import DriverLogin from "./Driver/DriverLogin";
import AdminWorkspace from "./Admin/AdminWorkspace";
import DriverWorkspace from "./Driver/DriverWorkspace";
import ParentDashboard from "./Parent/ParentDashBoard";
import ParentRegister from "./Admin/Register/RegisterParent";
import RegisterDriver from "./Admin/Register/RegisterDriver";
import RegisterChild from "./Admin/Register/RegisterChild";
import RegisterBus from "./Admin/Register/RegisterBus";
import RegisterRoute from "./Admin/Register/RegisterRoute";
import RegisterTrip from "./Admin/Register/RegisterTrip";
import UserProvider from "./Context";
import { GlobalStyle } from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
   <Router>
      <>
         <UserProvider>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/admin_register" element={<AdminRegister />} />
               <Route path="/admin_login" element={<AdminLogin />} />
               <Route path="/parent_login" element={<ParentLogin />} />
               <Route path="/driver_login" element={<DriverLogin />} />
               <Route path="/admin_workspace" element={<AdminWorkspace />} />
               <Route path="/driver_workspace" element={<DriverWorkspace />} />
               <Route path="/parent_dashboard" element={<ParentDashboard />} />
               <Route path="/register_parent" element={<ParentRegister />} />
               <Route path="/register_driver" element={<RegisterDriver />} />
               <Route path="/register_child" element={<RegisterChild />} />
               <Route path="/register_bus" element={<RegisterBus />} />
               <Route path="/register_route" element={<RegisterRoute />} />
               <Route path="/register_trip" element={<RegisterTrip />} />
            </Routes>
            <GlobalStyle />
         </UserProvider>
      </>
   </Router>
);

export default App;
