import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const token = localStorage.getItem("token");
  return <div>{token ? <Outlet /> : <Navigate to={"/login"} />}</div>;
}

export default ProtectedRoute;
