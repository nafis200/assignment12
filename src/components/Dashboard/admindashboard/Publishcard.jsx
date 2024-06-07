

import { Slide } from "react-awesome-reveal";
import useAxiosSexure from "../../hooks/useAxiosSexure";
import useAxiospublic from "../../hooks/useAxiospublic";
import Swal from 'sweetalert2'
import useSurvey from "../../hooks/useSurvey";
const Publishcard = ({data}) => {
    const axiosSecure = useAxiosSexure()
    const axiosSecure1 = useAxiospublic()
    const [refetch] = useSurvey()
    const { title, description, totalVotes,_id,email,serialNo,status } = data;
    const handleSubmut = (e)=>{
        e.preventDefault();
        const form = e.target;
        const feed = form.feedback.value   
        const totalValue = {
            title,description,email,serialNo,feed
        }
        axiosSecure.post('/publish',totalValue)
        .then(()=>{
           
        })
        axiosSecure1.patch(`/publish/${_id}`)
        .then(()=>{
            Swal.fire({
                title: `Good job!`,
                text: "Successfully Unpublish",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
              });
        })
        e.target.reset()
    }
    const publisher = e=>{
        axiosSecure1.patch(`/publish1/${e}`)
        .then(()=>{
        refetch()
         Swal.fire({
             title: `Good job!`,
             text: "Successfully Publish",
             icon: "success",
             showConfirmButton: false,
             timer: 2000
           });
        })
    }
    return (
        <div>
            <div>
            <div className="card lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl ml-7">
        <div className="card-body">
          <Slide direction={"left"}>
            <h2 className="card-title mt-9">
              <span className="flex mb-7 lg:mb-7 md:mb-7"></span>{" "}
              <span className="font-extralight">Title:</span> {title}
            </h2>{" "}
          </Slide>
          <Slide direction={"right"}>
            <h2 className="font-bold flex items-center gap-2">
              {" "}
              discription:{" "}
            </h2>{" "}
            <span className="">{description}</span>{" "}
          </Slide>
          <Slide direction={"left"}>
            <h2 className="font-bold flex items-center gap-2">
              {" "}
              <span className="flex items-center gap-2">
                {" "}
                <span className="text-orange-400">Votes</span>{" "}
              </span>{" "}
              {totalVotes}
            </h2>
          </Slide>
          {
             status === "publish" ? <button
             className="btn btn-primary"
             onClick={() => document.getElementById(_id).showModal()}
           >
             Unpublish
           </button> : <button
             className="btn btn-primary"
             onClick={() =>publisher(_id)}
           >
             publish
           </button>
          }
          <section>
            <dialog
              id={_id}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Submission box</h3>
                <p className="py-4">
                  Press ESC key or click the button below to close
                </p>
                <form onSubmit={handleSubmut}>
                  <textarea
                    placeholder="feedback field"
                    className="textarea textarea-bordered textarea-sm w-full max-w-xs mt-5"
                    name="feedback"
                    required
                  ></textarea>
                  <input
                    type="submit"
                    className="lg:mt-4 md:mt-4 mt-2 btn btn-primary w-3/4 lg:ml-0"
                    value="Submit"
                  />
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </section>
        </div>
      </div>
        </div>
        </div>
    );
};

export default Publishcard;