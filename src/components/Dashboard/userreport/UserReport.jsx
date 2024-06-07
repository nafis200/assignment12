



import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../../hooks/useAxiospublic";
import UserReportparti from "./UserReportparti";

const UserReport = () => {
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
            <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
        {survey.map((data) => (
          <UserReportparti key={data._id} data={data}></UserReportparti>
        ))}
      </div>
        </div>
    );
};

export default UserReport;