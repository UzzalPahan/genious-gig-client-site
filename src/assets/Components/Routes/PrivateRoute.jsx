import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";

const PrivateRoutes = ({ children }) => {
  const { authUser, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className="w-full flex justify-center items-center h-[80vh]">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }
  if (authUser) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoutes;
