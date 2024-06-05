
import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiospublic";
import Mostcard from "./Mostcard";
const Mostvote = () => {
    const axiosSecure= useAxiospublic()
    const { data: survey = [], refetch } = useQuery({
        queryKey: ["survey"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/totalvotes`);
          return res.data;
        }
      });
      
    return (
        <div>
            
            <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
        {survey.map((data) => (
          <Mostcard key={data._id} data={data}></Mostcard>
        ))}
      </div> 

        </div>
    );
};

export default Mostvote;