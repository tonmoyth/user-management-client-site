import React from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useLoaderData } from "react-router";

const Users = () => {
  const usersData = useLoaderData();

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
            {usersData.map((user, index) => (
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
                        <button className="btn p-0 border-none bg-base-100"><MdEdit size={20}/></button>
                    </Link>
                    <button className="btn p-0 border-none bg-base-100"><MdDelete size={20}/></button>
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
