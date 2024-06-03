

import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "./useAxiospublic";

const useSurvey = () => {
    const axiosSecure = useAxiospublic()
    const {data: survey=[],refetch} = useQuery({
        queryKey:['survey'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/surveyor`)
            return res.data
        }
    })
    return (
        [survey,refetch]
    );
    
};

export default useSurvey;