
import { Navigate, Outlet } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { useContext } from "react";


export default function PrivateGuard() {
    const { isAuthenticated } = useContext(authContext);

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login" />
}