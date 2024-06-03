import { IoIosArrowDropdown } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiospublic";
import Surveycard from "./Surveycard";

const Surveyspage = () => {
  const axiosSecure = useAxiospublic();

  let dynamically = "all";

  const { data: survey = [], refetch } = useQuery({
    queryKey: ["survey"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/surveyor/${dynamically}`);
      return res.data;
    }
  });

  const Sortfunction = (check) => {
    dynamically = check
    refetch();
  };

  const Sortdatabase = (check)=>{
      dynamically = check 
      refetch()
      survey.sort((b,a)=>{
         b.totalVotes - a.totalVotes
      })
  };

 

  return (
    <div>

<section className="container mx-auto flex justify-center">
        <div className="dropdown dropdown-bottom ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-blue-400 text-center lg:w-[100px] p-2 text-white mt-5"
          >
            <span className=" flex items-center gap-2">
              Filter by category{" "}
              <IoIosArrowDropdown className="lg:text-2xl"></IoIosArrowDropdown>{" "}
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => Sortfunction("all")}>All</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("Cybersecurity Awareness")}>Cybersecurity Awareness</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("Software Development Practices")}>Software Development Practices</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("Cloud Computing Adoption")}>Cloud Computing Adoption</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("User Experience (UX) Design")}>UX Design</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("IT Infrastructure Management")}>IT Infrastructure Management</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("Data Privacy and Protection")}>Data Privacy and Protection</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("Artificial Intelligence (AI) and Machine Learning (ML)")}>Artificial Intelligence (AI) and Machine Learning (ML)</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("IT Training and Development Needs")}>IT Training and Development Needs</a>
            </li>
          </ul>
        </div>
        <span className=" flex items-center gap-2">
          
               <button onClick={()=>Sortdatabase("all")} className="btn mt-3">Sort</button>
            </span>
      </section>

      <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
        {survey.map((data) => (
          <Surveycard key={data._id} data={data}></Surveycard>
        ))}
      </div>
    </div>
  );
};

export default Surveyspage;
