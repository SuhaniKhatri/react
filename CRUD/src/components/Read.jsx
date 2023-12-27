import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";

function Read() {
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [radioData, setRadioData] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const { users, loading, searchData } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading Data...</h2>;
  }

  return (
    <div>
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h1 className="text-center">All Data</h1>
      <div className="text-center">
        <input
          className="form-check-input"
          name="gender"
          type="radio"
          value="All"
          checked={radioData === ""}
          onChange={(e) => setRadioData("")}
        />
        <label className="form-check-label"> All</label>{" "}
        <input
          className="form-check-input"
          name="gender"
          type="radio"
          value="Male"
          checked={radioData === "Male"}
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label"> Male</label>{" "}
        <input
          className="form-check-input"
          name="gender"
          type="radio"
          value="Female"
          checked={radioData === "Female"}
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label"> Female</label>{" "}
      </div>
      <div>
        {users &&
          users
            .filter((prev) => {
              if (searchData.length === "") {
                return prev;
              } else {
                return prev.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((prev) => {
              if (radioData === "Male") {
                return prev.gender === radioData;
              } else if (radioData === "Female") {
                return prev.gender === radioData;
              } else return prev;
            })
            .map((prev) => (
              <div key={prev.id} className="card text-center w-50 mx-auto my-2">
                <div className="card-body">
                  <h5 className="card-title">{prev.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {prev.email}
                  </h6>
                  <p className="card-text">{prev.gender}</p>
                  <Link
                    className="card-link"
                    onClick={() => [setId(prev.id), setShowPopup(true)]}
                  >
                    View
                  </Link>
                  <Link to={`/edit/${prev.id}`} className="card-link">
                    Edit
                  </Link>
                  <Link
                    className="card-link"
                    onClick={() => dispatch(deleteUser(prev.id))}
                  >
                    Delete
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Read;
