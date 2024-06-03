import {  useState } from "react";
// import useSurvey from "../hooks/useSurvey";
// import Surveycard from "./Surveycard";
import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiospublic";
import Surveycard from "./Surveycard";


const Surveyspage = () => {
//   const [survey,refetch] = useSurvey();
//   useEffect(()=>{
//      fetch('http://localhost:5000/surveyor')
//      .then(res=>res.json())
//      .then(data=> setItems(data))
//   },[])
const axiosSecure = useAxiospublic()

let dynamically = "all"

const {data: survey=[],refetch} = useQuery({
    queryKey:['survey',],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/surveyor/${dynamically}`)
        return res.data
    }
})

const handleChange = ()=>{
    dynamically = "Cybersecurity Awareness"
    refetch()
}

const handleChange1 = ()=>{
  dynamically = "User Experience (UX) Design"
  refetch()
}

  return (
  <div>
           <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
         {
               survey.map(data=> <Surveycard key={data._id} data={data}></Surveycard> )
         }
      </div>

      

  </div>
  )
};

export default Surveyspage;
