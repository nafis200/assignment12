



import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const UserReportparti = ({data}) => {
    const { title, description, totalVotes,_id } = data;
    return (
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
          <Link to={`/dashboard/userreportdetails/${_id}`}><button className="btn btn-primary">Report Survey</button></Link>
        </div>
      </div>
        </div>
    );
};

export default UserReportparti;