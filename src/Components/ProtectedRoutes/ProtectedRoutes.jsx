/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children, currentUser }) {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
}
