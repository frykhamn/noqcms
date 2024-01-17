
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { auth } from "../services/firebase.config";

const PrivateRoute = () => {
    const location = useLocation();

    return auth.currentUser ? (<Outlet />) : (
        <Navigate to="/loginCms" state={{ from: location}} replace />
    )
}
export default PrivateRoute;
