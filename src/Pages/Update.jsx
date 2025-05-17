import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const { _id, name, photo, email, gender } = useLoaderData();

  useEffect(() => {
    if (gender) {
      setRadio(gender);
    }
  }, [gender]);

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
    fetch(`http://localhost:3000/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update success",
            showConfirmButton: false,
            timer: 1500,
          });
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
            defaultValue={name}
            name="name"
            placeholder="Name"
            className="input w-full"
          />
          <input
            type="email"
            defaultValue={email}
            name="email"
            placeholder="Email"
            className="input w-full"
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            defaultValue={photo}
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
            defaultChecked={radio === "male"}
            onChange={() => setRadio("male")}
            checked={radio === "male"}
            name="Gender"
            id="male"
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            defaultChecked={radio === "female"}
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

export default Update;
