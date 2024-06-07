


import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../useAuth";
import useAxiosSexure from "../hooks/useAxiosSexure";
import { RiSurveyLine } from "react-icons/ri";
import { MdOutlineReport } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { FaHome } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { MdPublish } from "react-icons/md";

const Dashboard = () => {
    const {users} = useAuth()
    const axiosSecure = useAxiosSexure()
    const {data: userx = []} = useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users`)
            return res.data
        } 
    })
      const [datams] = userx.filter(it=> it.email === users?.email)
      const {role} = datams || {role:'admin'} 
      console.log(role)
     
      
    
    return (
        <div>
            <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-screen bg-blue-600 text-white">
            <ul className="menu p-4">
            <li><NavLink to='/dashboard/wellcome'> <FaHome></FaHome>your profile</NavLink></li>
             {
                !role && <>
                
                <li><NavLink to='/dashboard/usersurvey'> <RiSurveyLine></RiSurveyLine> Participate in surveys</NavLink></li>
                <li><NavLink to='/dashboard/userreport'> <RiSurveyLine></RiSurveyLine> Report in surveys</NavLink></li>
                </>
             }
              {
                role === 'pro-user' && <>
                
                <li><NavLink to='/dashboard/usersurvey'> <RiSurveyLine></RiSurveyLine> Participate in surveys</NavLink></li>
                <li><NavLink to='/dashboard/userreport'> <RiSurveyLine></RiSurveyLine> Report in surveys</NavLink></li>
                <li> <NavLink to='/dashboard/comment'><FaComment></FaComment> Comment in survey</NavLink> </li>
                </>
             }

             {
                 role === 'admin' && <>
                  <li> <NavLink to='/dashboard/alluser'><FaHouseUser></FaHouseUser> See all user</NavLink> </li>
                  <li> <NavLink to='/dashboard/publish'> <MdPublish></MdPublish> Publish/unPublish</NavLink> </li>
                  
                 </>
             }
             {
                 role === 'surveyor' && <>
                  <li><NavLink to='/dashboard/usersurvey'> <RiSurveyLine></RiSurveyLine>  surveys</NavLink></li>
                  <li><NavLink to='/dashboard/userreport'> <RiSurveyLine></RiSurveyLine> surveys</NavLink></li>
                 </>
             }
               <div className="divider divider-neutral"></div>
              <li> <NavLink to='/'><FaHome></FaHome>Home</NavLink> </li>
            </ul>
           
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;