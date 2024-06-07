


import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../useAuth";
import useAxiosSexure from "../hooks/useAxiosSexure";
import { RiSurveyLine } from "react-icons/ri";
import { MdOutlineReport } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
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
      const {role} = datams || {role:'user'}
      console.log(role)
    return (
        <div>
            <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-screen bg-blue-600 text-white">
            <ul className="menu p-4">
             {
                !role && <>
                
                <li><NavLink to='/dashboard/usersurvey'> <RiSurveyLine></RiSurveyLine> Participate in surveys</NavLink></li>
                <li><NavLink to='/dashboard/userreport'> <RiSurveyLine></RiSurveyLine> Report in surveys</NavLink></li>

                </>
             }
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