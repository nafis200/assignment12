

import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiospublic";
import Latestcard from "./Latestcard";
const Latest = () => {
    const axiosSecure= useAxiospublic()
    const { data: survey = [], refetch } = useQuery({
        queryKey: ["survey"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/dates`);
          return res.data;
        }
      });
      
    return (
        <div>
            
        <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
        {survey.map((data) => (
          <Latestcard key={data._id} data={data}></Latestcard>
        ))}
      </div> 
        </div>
    );
};

export default Latest;