import { useContext } from "react";
import { AuthContect } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContect);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;