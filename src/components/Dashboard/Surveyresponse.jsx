
import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiospublic";
import useAuth from "../useAuth";
import { Link } from "react-router-dom";
const Surveyresponse = () => {
    const axiosSecure = useAxiospublic()
    const {users} = useAuth()
    const { data: survey = [], refetch } = useQuery({
        queryKey: ["survey"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/surveyresponse/${users?.email}`);
          return res.data;
        }
      });
      console.log(survey)
    return (
        <div>
               <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Details button</th>
              
            </tr>
          </thead>
          <tbody>
            {survey.map((it) => (
              <tr key={it._id}>
                <td>{it.title}</td>
                <td><Link to={`/dashboard/uniqueresponse/${it._id}`}><button className="btn">Details</button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Surveyresponse;