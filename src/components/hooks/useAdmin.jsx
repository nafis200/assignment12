import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth";
import useAxiosSexure from "./useAxiosSexure";




const useAdmin = () => {
    const {users} = useAuth();
    const axiosSecure = useAxiosSexure()
    const {data: isAdmin=[],loading:isAdminLoading} = useQuery({
        queryKey:[users?.email,'isadmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${users?.email}`)
            return res.data?.admin
        }
    })
    return (
        [isAdmin,isAdminLoading]
    );
};

export default useAdmin;