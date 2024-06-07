

import { useLoaderData } from "react-router";
import Swal from 'sweetalert2'
import useAuth from "../../useAuth";
import useAxiospublic from "../../hooks/useAxiospublic";


const UserReprotdetails = () => {
    const {users} = useAuth()
    const axiosSecure = useAxiospublic()
    const loader = useLoaderData();
    const {
        _id,
        title,
        description,
        name,
        Timestamp,
        totalVotes,
        options,
        countyes,
        countno,
        email,
      
      } = loader;
      const handleSubmit1 = e=>{
        e.preventDefault()
        if(!users?.email){
          Swal.fire({
            title: `please login`,
            text: "not added",
            icon: "error",
            showConfirmButton: false,
            timer: 3000
          });
        }
        const form = e.target
        const report = form.report.value 
        const totalValue = {
           email, 
           report,
           title,
           description,
           name,
           Timestamp,
           totalVotes,
           options,
           countyes,
           countno,
        }
  
        axiosSecure.post('/report',totalValue)
        .then(res=>{
          Swal.fire({
            title: `your report taken`,
            text: "Successfully added",
            icon: "success",
            showConfirmButton: false,
            timer: 3000
          });
        })
        .catch()
  
    }
    return (
        <div>
            <h2 className="text-2xl text-center">{title}</h2> 
            <p className="text-center font-extralight mt-4 mb-4">{description}</p>
            <p className="text-2xl font-bold text-center mt-2 mb-2">Total votes: {totalVotes} </p>
            <form onSubmit={handleSubmit1} className="lg:ml-80 ml-20 " action="">
          <h2 className="font-bold flex items-center gap-2">
            {" "}
            <span className="flex items-center gap-2">
              {" "}
              <span className="">Report:</span>{" "}
            </span>{" "}
          </h2>
          <div>
           <input type="radio" name="report" value="inappropiate"/>inappropiate
           <br />
             <input type="radio" name="report" value="violence" />violence
             <br />
             <input type="radio" name="report" value="abuse" />abuse
          </div>
           <input className="btn mt-2 mb-5 btn-primary" type="submit" value="Submit" />
          </form>
        </div>
    );
};

export default UserReprotdetails;