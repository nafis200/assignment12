
import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../../hooks/useAxiospublic";
import Userparti from "./Userparti";

const Userservey = () => {
    const axiosSecure = useAxiospublic()
    let dynamically = "all";
    const { data: survey = [], refetch } = useQuery({
        queryKey: ["survey"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/surveyor/${dynamically}`);
          return res.data;
        }
      });
    return (
        <div>
           <h2 className="text-2xl">Userservey</h2> 
           <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
        {survey.map((data) => (
          <Userparti key={data._id} data={data}></Userparti>
        ))}
      </div>
        </div>
    );
};

export default Userservey;