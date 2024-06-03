
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../useAuth";
import useSurvey from "../hooks/useSurvey";
const Createsurvey = () => {
    const [startDate, setStartDate] = useState();
    const {users} = useAuth()
    const [survey] = useSurvey()
    const handleSubmit = e=>{
        e.preventDefault();
        const form = e.target
        const medium = form.difficulty.value 
        const Dates = (form.date.value)
        const title = form.title.value 
        const description = form.description.value 
        const email = users?.email
        const now = new Date();
        const totalVotes = 0;
        const options = ''
        const countyes = 0 
        const countno = 0
        const name = users?.displayName
        const serialNo = survey.length + 1

        const Timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        const status ="publish"

        // console.log(Timestamp.split(' ')[0])
        

// function parseDate(dateStr) {
//   const [month, day, year] = dateStr.split('/').map(Number);
//   return new Date(`20${year}`, month - 1, day); // Assuming 20XX for year
// }

// // Create Date objects
// const date1 = parseDate(dateStr1);
// const date2 = parseDate(dateStr2);
// console.log(date1,date2)
// if(date1 > date2){
//   console.log('ues')
// }
// else{
//   console.log('no')
// }

        const totalValue = {
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
        }
        console.log(totalValue)
        setStartDate('')
        e.target.reset()
   }
  return (
    <form onSubmit={handleSubmit} className="card-body">
      {/* 1st input */}

      <h2 className="text-2xl text-center">Create Survey</h2>
      <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex">
        <div className="">
          <label className="label">
            <span className="label-text ">title</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name="title"
            required
          />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text ">Description</span>
          </label>
          <input
            type="text"
            placeholder="description"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name="description"
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
            name="difficulty"
            required
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">DateLine</span>
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
  );
};

export default Createsurvey;
