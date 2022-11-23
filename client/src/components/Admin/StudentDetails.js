import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";

const StudentDetails = () => {
  const { getStudent, student, loading } = useAppContext();

  const { id } = useParams();

  useEffect(() => {
    getStudent(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    _id,
    AdmissionYear,
    fullname,
    gender,
    BirthPlace,
    State,
    City,
    ContactAddress,
    Dob,
    ContactNo,
    email,
    percentile,
    prefBranch,
    uploadFiles,
  } = student;

  if (!student || loading) return <h2>Loading</h2>;

  return (
    <div className="container" style={{ marginTop: "3rem", maxWidth: "40rem" }}>
      <h3 style={{ marginTop: "3rem", color: "green" }}>Student Details</h3>
      <div className="card" style={{ width: "30rem", marginTop: "2rem" }}>
        <div className="card-body">
          <h4
            className="card-title"
            style={{ color: "brown", textTransform: "uppercase" }}
          >
            {fullname}
          </h4>
          <hr />
          <p className="card-text">
            <strong>Dob:</strong> {Dob}
          </p>
          <p className="card-text">
            <strong>Gender:</strong> {gender}
          </p>
          <p className="card-text">
            <strong>Birth Place:</strong> {BirthPlace}
          </p>
          <p className="card-text">
            <strong>State:</strong> {State}
          </p>
          <p className="card-text">
            <strong>City:</strong> {City}
          </p>
          <p className="card-text">
            <strong>Address:</strong> {ContactAddress}
          </p>
          <p className="card-text">
            <strong>Contact:</strong> {ContactNo}
          </p>
          <p className="card-text">
            <strong>Email:</strong> {email}
          </p>
          <p className="card-text">
            <strong>Percentile:</strong> {percentile}
          </p>
          <p className="card-text">
            <strong>PrefBranch:</strong>
            {prefBranch.map((element) => ( element ))}
          </p>
          <p className="card-text">
            <strong>File Link:</strong> {uploadFiles}
          </p>
          <hr />
          <Link
            to={`/students/edit/${_id}`}
            style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
            className="btn btn-success"
          >
            Edit
          </Link>{" "}
          <Link
            to="/"
            style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
            className="btn btn-secondary"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
