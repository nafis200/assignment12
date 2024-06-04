import { useLoaderData, useParams } from "react-router";

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

  return (
    <div className="mt-5 space-y-2">
      <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center">
        {title}
      </h2>
      <p className="font-extralight text-center">{description}</p>
      <div className="card lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl ml-7">
        <div className="card-body">
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
              <span className="text-orange-400">Yes votes:</span>{" "}
            </span>{" "}
            {countyes}
          </h2>

          <h2 className="font-bold flex items-center gap-2">
            {" "}
            <span className="flex items-center gap-2">
              {" "}
              <span className="text-orange-400">No votes:</span>{" "}
            </span>{" "}
            {countno}
          </h2>

          <h2 className="font-bold flex items-center gap-2">
            {" "}
            <span className="flex items-center gap-2">
              {" "}
              <span className="text-orange-400">Timestamps:</span>{" "}
            </span>{" "}
            {Timestamp}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Surveydetials;
