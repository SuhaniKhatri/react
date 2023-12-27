import React from "react";
import "./CustomModal.css";
import { useSelector } from "react-redux";

function CustomModal({ id, showPopup, setShowPopup }) {
  const allUsers = useSelector((state) => state.user.users);

  const singleUser = allUsers.filter((prev) => prev.id === id);
  console.log("single User...", singleUser);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => setShowPopup(false)}>Close</button>
        <div className="p-1 mt-3">
          <h3>{singleUser[0].name}</h3>
          <h4>{singleUser[0].age}</h4>
          <h5>{singleUser[0].gender}</h5>
          <h6>{singleUser[0].email}</h6>
        </div>
      </div>
    </div>
  );
}

export default CustomModal;
