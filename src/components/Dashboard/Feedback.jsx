

import { useQuery } from "@tanstack/react-query";
import useAxiosSexure from "../hooks/useAxiosSexure";

const Feedback = () => {
    const axiosSecure = useAxiosSexure()
    const { data: survey = [] } = useQuery({
        queryKey: ["survey"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/feedbacksurvey`);
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
              <th>Feedbacks</th>
              
            </tr>
          </thead>
          <tbody>
            {survey.map((it) => (
              <tr key={it._id}>
                <td>{it.title}</td>
                <td>{it.feed}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Feedback;