import { useLoaderData } from "react-router";



const Surveyresponsedetails = () => {
    const loader = useLoaderData()
    const {
        submitted_email,
        submitted_name,
        countyes,
        countno,
        email,
        title,
        description,
        serialNo,
     }=loader[0]
     
    return (
        <div>
            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>User Name</th>
              <th>User email</th>
              <th>Count Yes</th>
              <th>Count No</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                <td>{serialNo}</td>
                <td>{submitted_name}</td>
                <td>{submitted_email}</td>
                <td>{countyes}</td>
                <td>{countno}</td>
              </tr>
          
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Surveyresponsedetails;