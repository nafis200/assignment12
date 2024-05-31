import useAxiospublic from "../hooks/useAxiospublic";
import { useQuery } from "@tanstack/react-query";


const useCart = () => {
    const axiosSecure = useAxiospublic()
    const {data: mobile = [], refetch} = useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/mobile'
            
            // ,{
            //   headers:{
            //      authorization: `bearer${localStorage.getItem('access-token')}`
            //   }
            // }
          )
            return res.data
        } 
    })

    return (
        [mobile,refetch]
    );
};

export default useCart;