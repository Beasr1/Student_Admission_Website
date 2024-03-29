import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./StudentList.css"
import { useAppContext } from "../../context/AppContext";
import StudentItem from "./StudentItem";

const StudentList = () => {
  const { students, getStudents } = useAppContext();

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const studentList = () => {
    return students.map((curStudent) => {
      return <StudentItem student={curStudent} key={curStudent._id} />;
    });
  };
  return (
    <div style={{ marginTop: "3rem" }}>
      <h3 style={{ margin: "2rem", color: "black" }}>List of Students</h3>
      <Link
        to="/fillform"
        className="submit"
        style={{ margin: "2rem",textDecoration:"none" }}
      >
        Create a New Student
      </Link>

      <table className="table  table-hover table-style">
        <thead className="thead-dark">
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Percentile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{studentList()}</tbody>
      </table>
    </div>
  );
};

export default StudentList;
