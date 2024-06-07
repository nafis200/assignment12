
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSexure from "./hooks/useAxiosSexure";
import { IoIosArrowDropdown } from "react-icons/io";

const Allusers = () => {
    const axiosSecure = useAxiosSexure()
    let dynamically = 'all'
    const {data: users = [], refetch} = useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/adminuser/${dynamically}`
          )
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

      const Sortfunction = (check) => {
        dynamically = check
        refetch();
      };

    return(
        <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>

      <section className="container mx-auto flex justify-center">
        <div className="dropdown dropdown-bottom ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-blue-400 text-center lg:w-[100px] p-2 text-white mt-5"
          >
            <span className=" flex items-center gap-2">
              Filter by category{" "}
              <IoIosArrowDropdown className="lg:text-2xl"></IoIosArrowDropdown>{" "}
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => Sortfunction("all")}>All</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("admin")}>Admin</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("pro-user")}>Pro user</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("surveyor")}>Surveyor</a>
            </li>
          </ul>
        </div>
      </section>


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
            {users.map((user, index) => (
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