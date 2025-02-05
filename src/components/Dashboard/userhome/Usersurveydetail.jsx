
import { useLoaderData } from "react-router";
import Swal from 'sweetalert2'
import useAuth from "../../useAuth";
import useAxiospublic from "../../hooks/useAxiospublic";


const Usersurveydetail = () => {
    const loader = useLoaderData();
    const {users} = useAuth()
    const axiosSecure = useAxiospublic()
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
        serialNo,
      
      } = loader;
      const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target
        const value = form.options.value 
        if(!value){
          Swal.fire({
            title: `please select option`,
            text: "Not submitted",
            icon: "error",
            showConfirmButton: false,
            timer: 3000
          });
          return
        }
        const ans = {value}
        if(!users?.email){
            Swal.fire({
                title: `please login`,
                text: "Not submitted",
                icon: "error",
                showConfirmButton: false,
                timer: 3000
              });
        }
        else{
            axiosSecure.patch(`/details/${_id}`,ans)
            .then(()=>{
                Swal.fire({
                    title: `your answer ${value}`,
                    text: "Successfully submitted",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 5000
                  });
                  location.reload();
            })
            .catch()

            const submitted_email= users?.email 
            const submitted_name= users?.displayName 
            const totalvalue = {
               submitted_email,submitted_name,countyes,countno,email,title,description,serialNo
            }
    
    
           axiosSecure.post('/surveyresponse',totalvalue)
           .then()
           .catch()
    
        }
      }
    return (
        <div className="mt-5 space-y-2">
      <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
        {title}
      </h2>
      <p className="font-extralight text-center">{description}</p>
      <div className="card lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl lg:ml-[400px] ml-4 ">
        <div className="card-body mt-5">
          <h2 className="card-title mt-9">
            <span className="flex mb-7 lg:mb-7 md:mb-7"></span>{" "}
            <span className="font-extralight">prepared by</span> {name}
          </h2>{" "}
          <h2 className="font-bold flex items-center gap-2"> totalVotes: </h2>{" "}
          <span className="">{totalVotes}</span>{" "}
          <h2 className="font-bold flex items-center gap-2">
            {" "}
            <span className="flex items-center gap-2">
              {" "}
              <span className="">Yes votes:</span>{" "}
            </span>{" "}
            {countyes}
          </h2>

          <h2 className="font-bold flex items-center gap-2">
            {" "}
            <span className="flex items-center gap-2">
              {" "}
              <span className="">No votes:</span>{" "}
            </span>{" "}
            {countno}
          </h2>

          <h2 className="font-bold flex items-center gap-2">
            {" "}
            <span className="flex items-center gap-2">
              {" "}
              <span className="">Timestamps:</span>{" "}
            </span>{" "}
            {Timestamp}
          </h2>

          <form onSubmit={handleSubmit} action="">
          <h2 className="font-bold flex items-center gap-2">
            {" "}
            <span className="flex items-center gap-2">
              {" "}
              <span className="">Options:</span>{" "}
            </span>{" "}
             <input type="radio" name="options" value="yes"/>Yes
             <input type="radio" name="options" value="no" />No
          </h2>
           <input className="btn mt-2 w-full btn-primary" type="submit" value="Submit" />
          </form>
           
        </div>
      </div>
     
    </div>
    );
};

export default Usersurveydetail;