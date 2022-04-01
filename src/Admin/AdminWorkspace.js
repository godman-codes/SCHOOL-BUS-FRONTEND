import React, { useContext } from "react";
import AdminNavbar from "./components/AdminNavbar";
import { Context } from "../Context";
const AdminWorkspace = () => {
   const [admin] = useContext(Context);
   console.log(admin);
   return <AdminNavbar title="Godman Transports" />;
};
export default AdminWorkspace;
