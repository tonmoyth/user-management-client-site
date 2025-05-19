import React, { useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const InitialUsersData = useLoaderData();
  const [users,setUsers] = useState(InitialUsersData)


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const reminingUsers = users.filter(user => user._id !== id);
              setUsers(reminingUsers)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>NO</label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.email}
                  <br />
                </td>
                <td>{user.gender}</td>
                <th>
                  <div className="join space-x-4">
                    <Link to={`/update/${user._id}`}>
                      <button className="btn p-0 border-none bg-base-100">
                        <MdEdit size={20} />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn p-0 border-none bg-base-100"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
