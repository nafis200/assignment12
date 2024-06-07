

import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../../hooks/useAxiospublic";

const Adminresponse = () => {
    const axiosSecure = useAxiospublic()
    let dynamically = "all";
    const { data: survey = []} = useQuery({
        queryKey: ["survey"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/surveyor/${dynamically}`);
          return res.data;
        }
      });   
      return (
        <div>
            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Total Votes</th>
              <th>Count Yes</th>
              <th>Count No</th>
            </tr>
          </thead>
          <tbody>
            {survey.map((it) => (
              <tr key={it._id}>
                <td>{it.title}</td>
                <td>{it.totalVotes}</td>
                <td>{it.countyes}</td>
                <td>{it.countno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Adminresponse;