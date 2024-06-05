

const Mostcard = ({data}) => {
    const { title, description, totalVotes,_id } = data;
    return (
        <div>
            <div>
      <div className="card lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl ml-7">
        <div className="card-body">
        
            <h2 className="card-title mt-9">
              <span className="flex mb-7 lg:mb-7 md:mb-7"></span>{" "}
              <span className="font-extralight">Title:</span> {title}
            </h2>{" "}
       
         
            <h2 className="font-bold flex items-center gap-2">
              {" "}
              discription:{" "}
            </h2>{" "}
            <span className="">{description}</span>{" "}
        
            <h2 className="font-bold flex items-center gap-2">
              {" "}
              <span className="flex items-center gap-2">
                {" "}
                <span className="text-orange-400">Votes</span>{" "}
              </span>{" "}
              {totalVotes}
            </h2>
    
         
        </div>
      </div>
    </div>
        </div>
    );
};

export default Mostcard;