import React, { useContext } from "react";
import AdminNavbar from "./components/AdminNavbar";
import { Context } from "../Context";
const AdminWorkspace = () => {
   const [user] = useContext(Context);
   console.log(user);
   return <AdminNavbar title="Godman Transports" />;
};
export default AdminWorkspace;
