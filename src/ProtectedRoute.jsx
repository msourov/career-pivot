import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return <Outlet />;
  }
  return <Navigate to="/landing" />;
};
export default ProtectedRoute;
