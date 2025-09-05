import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-infinity loading-xl"></span>;
  }
  if (!user) {
    return (
      <Navigate
        to="/signin"
        state={{ from: location?.path }}
        replace
      ></Navigate>
    );
  }
  return children;
};

export default PrivateRoutes;
