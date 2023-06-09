import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoutes = ({ children }) => {
    const { users, loading } = useContext(AuthContext);
    console.log(users)
    if (loading) {
        return <div className="mt-12 text-center"><progress className="progress w-56"></progress></div>
    }
    if (users?.email) {
        return children;
    }
    return <Navigate to='/login' replace ></Navigate>
};

export default PrivateRoutes;