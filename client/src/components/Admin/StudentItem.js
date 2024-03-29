import React from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";

const StudentItem = ({ student }) => {
  const { deleteStudent } = useAppContext();

  return (
    <tr>
      <td>{student.fullname}</td>
      <td>{student.email}</td>
      <td>{student.percentile}</td>
      <td>
        <Link className="btn btn-light btn-sm" to={`/students/${student._id}`}>
          view
        </Link>{" "}
        <button
          className="btn btn-light btn-sm"
          onClick={() => deleteStudent(student._id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default StudentItem;
