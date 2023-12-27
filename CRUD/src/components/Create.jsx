import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

function Create() {
  const [users, setUsers] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    dispatch(createUser(users));
    navigate("/read");
  };
  return (
    <div className="w-50 mx-auto ">
      <h1 className="text-center my-3">Fill the data</h1>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={getUserData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={getUserData}
          />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary mt-2 ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
