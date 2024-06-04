import { useLoaderData, useParams } from "react-router";
import useAuth from "../useAuth";
import Swal from 'sweetalert2'
const Surveydetials = () => {
  const { id } = useParams();
  const loader = useLoaderData();
  const {
    _id,
    title,
    description,
    medium,
    Dates,
    email,
    name,
    Timestamp,
    status,
    totalVotes,
    options,
    countyes,
    countno,
    serialNo
  } = loader;

  const {users} = useAuth()

  const handleSubmit = (e)=>{
    e.preventDefault();
    const form = e.target
    const value = form.options.value 
    if(!users?.email){
        Swal.fire({
            title: `please login`,
            text: "Not submitted",
            icon: "error",
            showConfirmButton: false,
            timer: 3000
          });
    }
  }

  return (
    <div className="mt-5 space-y-2">
      <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
        {title}
      </h2>
      <p className="font-extralight text-center">{description}</p>
      <div className="card lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl lg:ml-[550px] ml-4 ">
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

export default Surveydetials;
