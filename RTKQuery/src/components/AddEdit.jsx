import React, { useEffect, useState } from "react";
import {
  useAddStudentsMutation,
  useGetStudentQuery,
  useUpdateStudentMutation,
} from "../features/studentSlice";
import { useNavigate, useParams } from "react-router-dom";

function AddEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [students, setStudents] = useState();
  const [editMode, setEditMode] = useState(false);

  // const { refetch } = useGetStudentsQuery();

  const [addStudent] = useAddStudentsMutation();
  const [updateStudent] = useUpdateStudentMutation();

  const { data } = useGetStudentQuery(id);

  console.log("data...", data);

  useEffect(() => {
    if (id && data) {
      setEditMode(true);
      setStudents({ ...data });
    } else {
      setEditMode(false);
    }
  }, [id, data]);

  const handleChange = (e) => {
    setStudents({ ...students, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      await updateStudent(students);
    } else {
      await addStudent(students);
    }
    // refetch();
    navigate("/read");
    setEditMode(false);
  };
  return (
    <div>
      <h2 className="text-center">
        {editMode ? "Update Form" : "Create Form"}
      </h2>
      <form className=" w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            name="studentName"
            className="form-control"
            onChange={handleChange}
            value={students?.studentName || ""}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Student Email</label>
          <input
            type="email"
            name="studentEmail"
            className="form-control"
            onChange={handleChange}
            value={students?.studentEmail || ""}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {editMode ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default AddEdit;
