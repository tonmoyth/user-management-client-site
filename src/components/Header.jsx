import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="navbar flex justify-between bg-base-100 shadow-sm w-11/12 mx-auto">
      <div >
        <a className="btn btn-ghost text-xl uppercase">Users Management</a>
      </div>
      <div >
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/users'>Users</NavLink>
          </li>
          <li>
            <NavLink to='/addUser'>Add User</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Header;
