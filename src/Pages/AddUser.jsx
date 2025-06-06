import React, { useState } from "react";
import Swal from "sweetalert2";

const AddUser = () => {
  const [radio, setRadio] = useState("");

  const handleAddUserForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const gender = radio;
    const user = {
      name,
      email,
      photo,
      gender,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "user added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset()
        }
      });
  };
  return (
    <div>
      <h1 className="text-center text-4xl mb-5">Add User</h1>
      <form onSubmit={handleAddUserForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input w-full"
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="photo"
            placeholder="Photo"
            className="input w-full"
          />
        </div>
        <div className="space-x-2 mb-5">
          <label className="text-gray-500 mr-4" htmlFor="">
            Gender
          </label>

          <input
            type="radio"
            onChange={() => setRadio("male")}
            checked={radio === "male"}
            name="Gender"
            id="male"
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            onChange={() => setRadio("female")}
            checked={radio === "female"}
            name="Gender"
            id="female"
          />
          <label htmlFor="female">Female</label>
        </div>
        <input
          type="submit"
          value="Submit"
          className="w-full btn btn-primary"
        />
      </form>
    </div>
  );
};

export default AddUser;
