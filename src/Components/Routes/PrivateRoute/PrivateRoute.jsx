import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import LargeSpinner from "../../Shear/LargeSpinner/LargeSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full h-[80.7vh] dark:bg-gray-900">
        <LargeSpinner />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
