import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider"; 

function ProtectedRoutes() {
  const { authUser } = useContext(AuthProvider);

  return authUser ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
