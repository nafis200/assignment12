import { useQuery } from "@tanstack/react-query";
import useAxiosSexure from "../../hooks/useAxiosSexure";

const Adminpayment = () => {
  const axiosSecure = useAxiosSexure();
  const { data: survey = [] } = useQuery({
    queryKey: ["survey"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    }
  });

  const fil = survey.filter((it) => it.role === "pro-user");
 

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>email</th>
              <th>role</th>
              <th>pay User</th>
            </tr>
          </thead>
          <tbody>
            {fil.map((it) => (
              <tr key={it._id}>
                <td>{it.name}</td>
                <td>{it.email}</td>
                <td>{it.role}</td>
                <td>10$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminpayment;
