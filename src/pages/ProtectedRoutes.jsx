import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

function ProtectedRoutes() {
  const { authUser } = useAuth();

  return authUser ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
