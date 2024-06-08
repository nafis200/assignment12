import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiospublic from "../../hooks/useAxiospublic";
import { useState } from "react";
const Updateform = () => {
  const loader = useLoaderData();
  const axiosSecure = useAxiospublic()
  const [startDate, setStartDate] = useState();
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
    medium,
    Dates
  } = loader[0];



  const handleSubmit = e=>{
    e.preventDefault();
    const form = e.target
    const medium = form.difficulty.value 
    const Dates = (form.date.value)
    const title = form.title.value 
    const description = form.description.value 
    const Dates1 = Dates 
    console.log(Dates1)
    const totalValue = {
        medium,Dates,title,description
    }
    axiosSecure.patch(`/update/${_id}`,totalValue)
    .then(res=>{
      location.reload()
      Swal.fire({
        title: `Good job!`,
        text: "Successfully Update",
        icon: "success",
        showConfirmButton: false,
        timer: 3000
      });
    })
    .catch(error=>{
       
    })
}

  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body">
        {/* 1st input */}

        <h2 className="text-2xl text-center lg:mt-20">Update Survey</h2>
        <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex ">
          <div className="">
            <label className="label">
              <span className="label-text ">title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
              name="title" defaultValue={title}
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text ">description</span>
            </label>
            <input
              type="text"
              placeholder="description"
              className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
              name="description" defaultValue={description}
              required
            />
          </div>
        </div>
        {/* 2nd input */}
        <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex">
          <div className="">
            <label className="label">
              <span className="label-text ">Select Category</span>
            </label>
            <select
              className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px] "
              name="difficulty" defaultValue={medium}
              required
            >
              <option value="Software Development Practices">
                Software Development Practices
              </option>
              <option value="Cybersecurity Awareness">
                Cybersecurity Awareness
              </option>
              <option value="Cloud Computing Adoption">
                Cloud Computing Adoption
              </option>
              <option value="User Experience (UX) Design">
                User Experience (UX) Design
              </option>
              <option value="IT Infrastructure Management">
                IT Infrastructure Management
              </option>
              <option value="Data Privacy and Protection">
                Data Privacy and Protection
              </option>
              <option value="Artificial Intelligence (AI) and Machine Learning (ML)">
                Artificial Intelligence (AI) and Machine Learning (ML)
              </option>
              <option value="IT Training and Development Needs">
                IT Training and Development Needs
              </option>
              <option value="IT Project Management">
                IT Project Management
              </option>
            </select>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">DateLine is {Dates}</span>
            </label>
            <DatePicker
              name="date"
              className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            className="lg:mt-4 md:mt-4 mt-2 btn btn-primary w-3/4 lg:ml-16"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Updateform;
