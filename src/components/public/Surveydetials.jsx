import { useLoaderData } from "react-router";
import useAuth from "../useAuth";
import Swal from 'sweetalert2'
import useAxiospublic from "../hooks/useAxiospublic";
import { useQuery } from "@tanstack/react-query";

const Surveydetials = () => {
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

  const {users} = useAuth()
  const axiosSecure = useAxiospublic()

 
  const {data: userx = []} = useQuery({
    queryKey:['menu'],
    queryFn:async()=>{
        const res = await axiosSecure.get(`/users`)
        return res.data
    } 
})
  const [datams] = userx.filter(it=> it.email === users?.email)
  const {role} = datams || {role:'user'}
  

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

    }
  }

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
      {
         options && <h2 className="lg:text-2xl text-xl text-center mt-5 text-blue-700 font-bold"> your votes result is: {options}</h2>
      }
      <div className="flex justify-center">
      
        <textarea className="textarea textarea-primary mt-5 mb-5" placeholder="Commnets" disabled={role !== "pro-user"} ></textarea>
      </div>
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

export default Surveydetials;
