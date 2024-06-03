
import useAxiosSexure from "./hooks/useAxiosSexure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const Allusers = () => {
    const [usered,setUsered] = useState([])
    const axiosSecure = useAxiosSexure()
    const {data: users = [], refetch} = useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/users'
          )
            setUsered(res.data)
            return res.data
        } 
    })
    
    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is an Admin Now!`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      };

      const handleMakeSurveyor = (user) => {
        axiosSecure.patch(`/users/surveyor/${user._id}`)
        .then(res=>{
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is an surveyor Now!`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      };
    

    const handleDeleteUser = (user) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/users/${user._id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            });
          }
        });
      };

    return(
        <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usered.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" && 
                    <p>I am Admin</p>
                  }
                </td>
                <td>
                  {user.role === "surveyor" && 
                    <p>I am surveyor</p>
                  }
                </td>
                <td>
                  {user.role === "pro-user" && 
                    <p>I am pro-user</p>
                  }
                </td>
                <td>
                   {
                     user.role == null && <div className="space-x-2 space-y-2">
                     <p className="inline">I am user</p> <button onClick={()=>handleMakeAdmin(user)} className="btn btn-primary">make admin</button><button onClick={()=>handleMakeSurveyor(user)} className="btn btn-primary">make surveyor</button>
                     </div>
            
                   }
                </td>
                <td>
                  <button
                    className="btn btn-ghost btn-lg"  onClick={() => handleDeleteUser(user)}
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
};

export default Allusers;