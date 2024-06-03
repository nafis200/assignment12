

import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth";
import useAxiosSexure from "./useAxiosSexure";
const useSurvey = () => {
    const {users} = useAuth();
    const axiosSecure = useAxiosSexure()
    const {data: survey=[],loading:isSurvey} = useQuery({
        queryKey:[users?.email,'isadmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/surveyor`)
            return res.data
        }
    })
    return (
        [survey,isSurvey]
    );
    
};

export default useSurvey;