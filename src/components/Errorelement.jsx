

import { FaSadCry } from "react-icons/fa";

const Errorelement = () => {
    return (
        <div>
             <h2 className="text-3xl text-center mt-20 flex items-center justify-center">  <FaSadCry className='text-7xl'></FaSadCry> opps page 404 not found sorry!!!!! <span className="text-green-400">Please go to valid route</span></h2>
        </div>
    );
};

export default Errorelement;