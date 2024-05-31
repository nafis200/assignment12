import { useLocation,Navigate, useNavigate } from "react-router";
import useAuth from "./useAuth";
import useAdmin from "./hooks/useAdmin";




const AdminRoute = ({children}) => {
    const location = useLocation()
    const {users,loading} = useAuth()
    const [isAdmin,isAdminLoading] = useAdmin()
    if(loading || isAdminLoading){
        return <span className="loading loading-spinner text-error lg:text-4xl md:text-3xl text-2xl lg:ml-[700px] md:ml-[400px] ml-[200px] mt-10"></span>
    }

    if (users && isAdmin) {
        return children;
    }

    

    return (
        <Navigate state={location.pathname} to="/login" replace></Navigate>
    );
};

export default AdminRoute;